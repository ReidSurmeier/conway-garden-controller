# Conway Pointcloud Garden — Kiosk Web App

Static HTML/JS pointcloud visualization. Deployed to
`/home/pi/Desktop/conway.pointcloud.garden/` on the museum Pi and
served by a tiny Python `http.server` on port 8000, displayed by
Chromium in kiosk mode.

## Files

- `index.html` — entry point (loaded by Chromium at `http://localhost:8000`)
- `assets/index-*.js` — bundled JS (looks like a Vite build of the visualization)
- `assets/index-*.css` — bundled styles
- `loading.gif` — splash shown while assets load
- `models/vt/vt_0.ply` … `vt_19.ply` — 20 point-cloud frames, ~3.2 MB each (~63 MB total)

## How it's launched

The `matrix-controller` daemon flips a relay ON when the START button is
pressed, then triggers `matrix-led.service`, which runs
`~/Desktop/matrix-led-start.sh`. That script:

1. cleans up Chromium singleton locks
2. starts `python3 -m http.server 8000` in this directory
3. waits up to 30 s for the server to respond
4. launches `chromium-browser --kiosk http://localhost:8000`

## Restoring this on a fresh Pi

```bash
# After running scripts/bootstrap.sh from the parent repo:
cp -r kiosk-app /home/pi/Desktop/conway.pointcloud.garden
chown -R pi:pi /home/pi/Desktop/conway.pointcloud.garden
```

That's it — no build step, no dependencies. Pure static assets.

## Conservation notes

If a future maintainer rebuilds this app:
- Output must remain plain static HTML/JS — no backend, no build-time
  server, no CDN dependencies. The Pi is offline most of the time.
- The bundled JS file size is fine; do **not** split into many small
  network-fetched chunks (the kiosk runs over `localhost`, but adding
  fetch dependencies adds startup latency and failure modes).
- Keep `index.html` directly under the served root — Chromium loads
  the bare `localhost:8000`, not `/path/to/index.html`.
