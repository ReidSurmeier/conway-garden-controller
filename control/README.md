# Live control: `conway-ctl`

Read/write every dat.GUI parameter in the running kiosk visualization
without touching the bundled JS. Useful for tuning without a keyboard,
saving presets, and writing scripted "scenes."

## How it works

`matrix-led-start.sh` launches Chromium with
`--remote-debugging-port=9222 --remote-debugging-address=127.0.0.1`,
which exposes the Chrome DevTools Protocol on the Pi's loopback only
(not reachable from the LAN — use SSH tunneling for remote control).

`conway-ctl` connects, finds the kiosk page tab, and injects a small
JavaScript bridge that walks the dat.GUI DOM and exposes
`window.__cgBridge.{list, get, set, click}`. The Python CLI then drives
those methods over CDP.

## Install (on the Pi)

```bash
sudo apt install -y python3-websocket python3-requests
sudo install -m 0755 control/conway-ctl.py /usr/local/bin/conway-ctl
```

## Usage

```bash
# What can I control?
conway-ctl list

# What's everything currently set to?
conway-ctl get

# Just one
conway-ctl get "Point Size"

# Set one (types are auto-coerced: 4, 1.5, true, false, "Some String")
conway-ctl set "Point Size" 4

# Set several at once
conway-ctl set "Set Width" 480 "Set Height" 192 "Point Size" 4

# Trigger a button-style control (no value)
conway-ctl click "Apply Preset"
conway-ctl click "Randomize Values"

# Save a tuned configuration
conway-ctl snapshot ~/conway-presets/wide-3x3.json

# Restore later (e.g., on next boot or after a reset)
conway-ctl restore  ~/conway-presets/wide-3x3.json
```

## Remote control from your laptop

CDP is bound to `127.0.0.1` on the Pi for safety. Use an SSH tunnel:

```bash
# On your laptop:
ssh -L 9222:127.0.0.1:9222 -fN pi@10.1.77.37
# Then run conway-ctl locally — it'll talk to the Pi via the tunnel:
python3 conway-ctl.py list
```

## Suggested tuning workflow

```bash
# 1. Save the current "known good" state as a fallback
conway-ctl snapshot ~/conway-presets/baseline.json

# 2. Experiment live
conway-ctl set "Width" 480 "Height" 192 "Point Size" 4 "Zoom" 1.2

# 3. If you like it, snapshot. If not, restore baseline.
conway-ctl snapshot ~/conway-presets/wall-3x3-tuned.json
# or
conway-ctl restore  ~/conway-presets/baseline.json

# 4. Auto-apply at boot — see scripts/conway-restore-on-boot.sh (planned)
```

## Auto-apply a saved snapshot at boot

Add to `matrix-led-start.sh` after the Chromium-launched + page-ready
check, to apply a saved snapshot every time the kiosk starts:

```bash
# wait a beat for the bridge to be installable, then restore
( sleep 4 && /usr/local/bin/conway-ctl restore /home/pi/conway-presets/wall-3x3-tuned.json ) &
```

## Future: web UI

The Python CLI is the foundation. A small Next.js / Svelte / plain-HTML
control panel can wrap the same CDP/bridge with sliders + live preview —
see `control/web/README.md` (sketched) for the planned architecture.
