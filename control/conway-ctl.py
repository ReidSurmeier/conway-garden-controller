#!/usr/bin/env python3
"""
conway-ctl — live-control the Conway Pointcloud Garden visualization.

The kiosk Chromium runs with --remote-debugging-port=9222 (localhost only).
This tool connects to Chrome DevTools Protocol, injects a "control bridge"
that walks the page's dat.GUI panel, and lets you read/write every exposed
parameter (Width, Height, Point Size, Zoom, Camera Far, Inner Radius, etc).

USAGE
  Run on the Pi:
      conway-ctl list                    # list all parameter names
      conway-ctl get                     # dump all current values as JSON
      conway-ctl get "Point Size"        # read one value
      conway-ctl set "Point Size" 4      # write one value
      conway-ctl set "Width" 480 "Height" 192    # write multiple
      conway-ctl snapshot ~/garden.json  # save current state to file
      conway-ctl restore  ~/garden.json  # apply a saved state

  Run from your laptop (via SSH tunnel — keeps CDP local-only):
      ssh -L 9222:localhost:9222 pi@10.1.77.37 -fN
      python3 conway-ctl.py list

DEPENDENCIES (apt on Debian / brew on macOS):
      python3-websocket  (pip: websocket-client)
      python3-requests   (pip: requests)

Exit codes: 0 ok, 2 usage, 3 cdp-connect, 4 bridge-install, 5 not-found.
"""

import argparse
import json
import os
import sys
import time
from typing import Any, Optional

try:
    import requests
except ImportError:
    sys.exit("conway-ctl: missing dependency 'requests' (apt install python3-requests)")
try:
    import websocket  # websocket-client
except ImportError:
    sys.exit("conway-ctl: missing dependency 'websocket-client' (apt install python3-websocket)")


CDP_HOST = os.environ.get("CONWAY_CDP_HOST", "127.0.0.1")
CDP_PORT = int(os.environ.get("CONWAY_CDP_PORT", "9222"))
CDP_HTTP = f"http://{CDP_HOST}:{CDP_PORT}"


# --------------------------- bridge JS ---------------------------------

# Injected once into the page; exposes window.__cgBridge with simple methods.
# Walks every dat.GUI / lil-gui controller in the DOM and gives string-name
# access. Works without a reference to the artist's app object.
BRIDGE_JS = r"""
(() => {
  if (window.__cgBridge && window.__cgBridge.__v === 2) return 'already-installed';

  function findControllers() {
    const out = {};
    // dat.GUI markup: ul.dg > li.cr.<type> > .property-name + .c > input/select
    document.querySelectorAll('.dg li.cr').forEach(li => {
      const nameEl = li.querySelector('.property-name');
      if (!nameEl) return;
      const name = nameEl.textContent.trim();
      const input = li.querySelector('input, select');
      if (!input) return;
      const isSlider = li.classList.contains('number') && li.querySelector('.slider');
      const sliderTrack = li.querySelector('.slider-fg');
      out[name] = { input, type: input.type || input.tagName.toLowerCase(), isSlider, sliderTrack };
    });
    return out;
  }

  function readValue(c) {
    const i = c.input;
    if (i.type === 'checkbox') return i.checked;
    if (i.type === 'number' || c.type === 'number') {
      const n = parseFloat(i.value);
      return Number.isFinite(n) ? n : i.value;
    }
    if (i.tagName === 'SELECT') return i.value;
    return i.value;
  }

  function writeValue(c, v) {
    const i = c.input;
    if (i.type === 'checkbox') {
      i.checked = !!v;
      i.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }
    if (i.tagName === 'SELECT') {
      i.value = String(v);
      i.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }
    // numeric/text input — assign + dispatch input/change/blur
    i.value = String(v);
    i.dispatchEvent(new Event('input',  { bubbles: true }));
    i.dispatchEvent(new Event('change', { bubbles: true }));
    i.dispatchEvent(new Event('blur',   { bubbles: true }));
    return true;
  }

  function clickButton(name) {
    const cs = findControllers();
    // Buttons in dat.GUI are .function rows (no input element); fall back to li click
    const li = Array.from(document.querySelectorAll('.dg li.cr')).find(li =>
      (li.querySelector('.property-name')?.textContent || '').trim() === name
    );
    if (!li) return false;
    li.click();
    return true;
  }

  window.__cgBridge = {
    __v: 2,
    list() { return Object.keys(findControllers()); },
    getAll() {
      const out = {};
      const cs = findControllers();
      for (const [k, c] of Object.entries(cs)) out[k] = readValue(c);
      return out;
    },
    get(name) {
      const c = findControllers()[name];
      return c ? readValue(c) : null;
    },
    set(name, value) {
      const c = findControllers()[name];
      if (!c) return false;
      return writeValue(c, value);
    },
    click(name) { return clickButton(name); }
  };
  return 'installed';
})()
"""


# ------------------------- CDP plumbing --------------------------------

def find_kiosk_target() -> str:
    """Return the WebSocket debug URL for the kiosk page (localhost:8000)."""
    try:
        r = requests.get(f"{CDP_HTTP}/json", timeout=3)
        r.raise_for_status()
    except Exception as e:
        sys.exit(f"conway-ctl: can't reach Chrome DevTools at {CDP_HTTP}: {e}\n"
                 f"  Is the kiosk running? On the Pi: systemctl status matrix-led")
    targets = [t for t in r.json() if t.get("type") == "page"
               and "localhost:8000" in t.get("url", "")]
    if not targets:
        sys.exit("conway-ctl: no kiosk page found at localhost:8000 in CDP targets.")
    return targets[0]["webSocketDebuggerUrl"]


_msg_id = 0
def _next_id() -> int:
    global _msg_id
    _msg_id += 1
    return _msg_id


def cdp_eval(ws, expression: str, await_promise: bool = False) -> Any:
    """Run a JS expression in the page context, return the JS-decoded value."""
    msg_id = _next_id()
    ws.send(json.dumps({
        "id": msg_id,
        "method": "Runtime.evaluate",
        "params": {
            "expression": expression,
            "returnByValue": True,
            "awaitPromise": await_promise,
        },
    }))
    while True:
        raw = ws.recv()
        msg = json.loads(raw)
        if msg.get("id") != msg_id:
            continue  # ignore unrelated events
        if "error" in msg:
            sys.exit(f"conway-ctl: CDP error: {msg['error']}")
        result = msg.get("result", {}).get("result", {})
        if result.get("subtype") == "error":
            sys.exit(f"conway-ctl: page exception: {result.get('description')}")
        return result.get("value")


def connect_and_install_bridge():
    ws_url = find_kiosk_target()
    try:
        ws = websocket.create_connection(ws_url, timeout=5)
    except Exception as e:
        sys.exit(f"conway-ctl: can't open CDP websocket: {e}")
    state = cdp_eval(ws, BRIDGE_JS)
    if state not in ("installed", "already-installed"):
        sys.exit(f"conway-ctl: bridge install returned unexpected: {state!r}")
    return ws


# ----------------------------- CLI -------------------------------------

def cmd_list(ws, _args):
    names = cdp_eval(ws, "window.__cgBridge.list()")
    for n in names:
        print(n)


def cmd_get(ws, args):
    if not args.names:
        out = cdp_eval(ws, "window.__cgBridge.getAll()")
        print(json.dumps(out, indent=2, sort_keys=True))
        return
    for name in args.names:
        v = cdp_eval(ws, f"window.__cgBridge.get({json.dumps(name)})")
        print(f"{name} = {json.dumps(v)}")


def _coerce(v: str):
    # strings like "true", "false", "12", "1.5" -> proper JSON value
    s = v.strip()
    low = s.lower()
    if low in ("true", "false"): return low == "true"
    try:
        if "." in s or "e" in low: return float(s)
        return int(s)
    except ValueError:
        return s


def cmd_set(ws, args):
    if not args.pairs or len(args.pairs) % 2 != 0:
        sys.exit("conway-ctl: 'set' takes pairs of <name> <value>")
    for i in range(0, len(args.pairs), 2):
        name, raw = args.pairs[i], args.pairs[i + 1]
        value = _coerce(raw)
        ok = cdp_eval(ws, f"window.__cgBridge.set({json.dumps(name)}, {json.dumps(value)})")
        if not ok:
            sys.exit(f"conway-ctl: parameter not found: {name!r}")
        print(f"set {name} = {json.dumps(value)}")


def cmd_click(ws, args):
    for name in args.names:
        ok = cdp_eval(ws, f"window.__cgBridge.click({json.dumps(name)})")
        if not ok:
            sys.exit(f"conway-ctl: button not found: {name!r}")
        print(f"clicked {name!r}")


def cmd_snapshot(ws, args):
    out = cdp_eval(ws, "window.__cgBridge.getAll()")
    payload = {"saved_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "values": out}
    text = json.dumps(payload, indent=2, sort_keys=True)
    if args.path == "-":
        print(text)
    else:
        with open(args.path, "w") as f:
            f.write(text + "\n")
        print(f"snapshot -> {args.path} ({len(out)} params)")


def cmd_restore(ws, args):
    with open(args.path) as f:
        payload = json.load(f)
    values = payload.get("values", payload)  # accept raw {name:value} too
    failures = []
    for name, value in values.items():
        ok = cdp_eval(ws, f"window.__cgBridge.set({json.dumps(name)}, {json.dumps(value)})")
        if not ok:
            failures.append(name)
    print(f"restored {len(values) - len(failures)}/{len(values)} params")
    if failures:
        print("  failed:", ", ".join(failures))


def main():
    p = argparse.ArgumentParser(prog="conway-ctl",
                                description="Live-control the kiosk visualization.")
    sub = p.add_subparsers(dest="cmd", required=True)

    sub.add_parser("list", help="list every controllable parameter")

    g = sub.add_parser("get", help="read parameter value(s); no args = all")
    g.add_argument("names", nargs="*")

    s = sub.add_parser("set", help="set one or more parameters: name value [name value ...]")
    s.add_argument("pairs", nargs="+")

    c = sub.add_parser("click", help="click a button-style control by name")
    c.add_argument("names", nargs="+")

    snap = sub.add_parser("snapshot", help="save current state to a JSON file ('-' for stdout)")
    snap.add_argument("path")

    rest = sub.add_parser("restore", help="apply a saved snapshot file")
    rest.add_argument("path")

    args = p.parse_args()
    ws = connect_and_install_bridge()
    {
        "list": cmd_list, "get": cmd_get, "set": cmd_set,
        "click": cmd_click, "snapshot": cmd_snapshot, "restore": cmd_restore,
    }[args.cmd](ws, args)


if __name__ == "__main__":
    main()
