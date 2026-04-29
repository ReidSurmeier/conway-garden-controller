# Sketch: `conway-web` browser control panel

Status: design only — not implemented.

## Goal

Open a URL on your laptop or phone (any device on the museum LAN), get a
clean UI with sliders for every visualization parameter, watch the LED
panels update in real time as you drag.

## Architecture

```
┌──────────────────────────┐         ┌──────────────────────────┐
│  Browser on your laptop  │  HTTP   │  conway-web server (Pi)  │
│  ┌────────────────────┐  │ ──────► │  Express / Next.js API   │
│  │ Sliders, presets,  │  │         │                          │
│  │ live preview thumb │  │ ◄────── │  WebSocket bridge ◄──────┐
│  └────────────────────┘  │  WS     │                          │
└──────────────────────────┘         │     conway-ctl logic     │
                                     └──────────────┬───────────┘
                                                    │ CDP (localhost only)
                                                    ▼
                                     ┌──────────────────────────┐
                                     │ Chromium kiosk           │
                                     │   localhost:8000 page    │
                                     │   __cgBridge.set(...)    │
                                     │   --remote-debugging     │
                                     └──────────────────────────┘
```

## Implementation outline

1. **Server (Pi):** small Node/Next.js or Python aiohttp service on port
   8765. Wraps `conway-ctl` logic — opens one persistent CDP WebSocket,
   keeps `__cgBridge` installed, multiplexes commands from web clients.
2. **Web app:** React/Svelte page that on mount fetches the parameter
   list (`/api/list`) and renders a slider/checkbox per parameter. On
   slider drag, debounce → `POST /api/set` (or send via the same WS).
3. **Live preview thumbnail:** server periodically (every 2 s) grabs a
   screenshot from CDP (`Page.captureScreenshot`) and pushes a small JPEG
   over WS so the operator can see what the LED matrix is showing
   without standing in front of it.
4. **Preset management:** save/load JSON snapshots from
   `/home/pi/conway-presets/*.json`. Browser shows a dropdown.
5. **Auth:** basic HTTP-auth or a shared bearer token (the LAN should be
   trusted but defense-in-depth; the museum doesn't want a visitor with
   a phone toggling shaders).
6. **Boot wiring:** systemd unit `conway-web.service` enabled +
   matrix-led.service stays untouched.

## Recommended stack (Phase 2)

- **Server:** Next.js 14 app router on the Pi (already has Node via
  Chromium dependencies; one apt install away). Expose API routes that
  proxy to the Python `conway-ctl` for now, then port to Node if needed.
- **UI:** Tailwind + a small slider component lib (`react-slider` or
  shadcn). No state-management library needed.
- **Comms:** WebSocket (server-sent events for screenshots).

## Prereqs already in place (built in Phase 1)

- ✅ Chromium has `--remote-debugging-port=9222` (localhost-only).
- ✅ `conway-ctl` proves the bridge approach works.
- ✅ All parameters discoverable at runtime via the bridge.

## Build order when you want to ship Phase 2

1. Wrap `conway-ctl` in a Python `aiohttp` HTTP+WS server (~150 lines).
2. Scaffold a Next.js app that calls the API and renders sliders.
3. Add screenshot preview.
4. Add preset save/load + auth.
5. systemd unit + bootstrap.sh integration.
