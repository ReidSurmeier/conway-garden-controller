# Conway Pointcloud Garden — Kiosk Web App

Static HTML/JS pointcloud visualization. Deployed to
`/home/pi/Desktop/conway.pointcloud.garden/` on the museum Pi and
served by a tiny Python `http.server` on port 8000, displayed by
Chromium in kiosk mode.

This bundle is preset-driven. Most parameters that used to be
randomized at runtime now come from `presets/screen_001.json`, and
the kiosk auto-loads that preset on every launch.

## Files

- `index.html` — entry point (loaded by Chromium at `http://localhost:8000`).
  Contains an inline `<script>` that sets `location.hash = '#preset=screen_001'`
  if no hash is present, so the launch URL never has to mention the preset.
- `assets/index-*.js` — bundled Vite build of the visualization.
- `assets/index-*.css` — bundled styles.
- `loading.gif` — splash shown while the point cloud loads. The bundle
  also renders its own loading overlay with a percent counter.
- `presets/screen_001.json` — the live screen calibration: 312x416
  canvas, `xOffset=416`, `rotation=90`, `pointSize=1`, vermont_radial
  model, Conway preset cycling on a 240 s event timer.
- `presets/README.md` — preset format notes from the source repo.
- `models/vermont_radial/vermont_radial_0.ply` … `vermont_radial_17.ply`
  — 18 radial point-cloud chunks. The app's `ChunkManager` keeps a small
  view-cone window of these resident at any moment rather than loading
  all 18, so memory stays low on the Pi.
- `matrix-map-test.html` — 384x192 / 480x192 diagnostic used during
  NovaStar mapping work. Reach it at
  `http://localhost:8000/matrix-map-test.html?mode=cycle`.
- `matrix-map-portrait.html` — 312x416 rotated diagnostic.
- `hdmi-region-test.html` — full 1920x1080 coordinate diagnostic.
- `viewport-fill-test.html` — forced viewport/canvas diagnostic.

## How it's launched

The `matrix-controller` daemon flips a relay ON when the START button
is pressed, then triggers `matrix-led.service`, which runs
`~/Desktop/matrix-led-start.sh`. That script:

1. cleans up Chromium singleton locks and stale PID files,
2. starts `python3 -m http.server 8000` in this directory,
3. waits up to 30 s for the server to respond,
4. launches Chromium kiosk against `http://localhost:8000/?v=<timestamp>`.

The launch URL has no `#preset=...` fragment. `index.html` sets the
preset hash itself on load, so `matrix-led-start.sh` needs no
modification when the preset name changes — only the file under
`presets/` does.

## What changed from the 2026-05-15 bundle

- Point cloud model is now `vermont_radial` (18 radial chunks) instead
  of `vt` (20 randomly-chunked frames). Chunks are loaded dynamically
  by `ChunkManager` based on camera angle, with a configurable view
  cone and left-bias for smooth directional loading.
- Conway effect cycles curated MNCA rule presets on a 240 s event
  timer (`autoRandomize: true`, `usePresetRandomization: true`),
  instead of rolling random birth/death parameters every cycle.
- `axonScaleFactor` dropped to 20 from the gradient default of 100,
  to tighten framing on the sparser radial cloud.
- All of the above are set in `presets/screen_001.json` rather than
  hard-coded into the bundle.

The display calibration is unchanged: 312x416 canvas, `xOffset=416`,
`rotation=90`, `pointSize=1`. That mapping still matches the working
NovaStar MRV412 receiver configuration recorded in
`../DISPLAY_MAPPING.md`. Do not return to the older guessed
`384x192` mapping unless the NovaStar mapping is intentionally
rebuilt and tested.

## Restoring this on a fresh Pi

`scripts/bootstrap.sh` in the parent repo handles the install and
copies this folder to `/home/pi/Desktop/conway.pointcloud.garden/`,
stripping this `README.md` from the deployed copy (it is repo doc,
not part of the running app).

To restore manually after a `git pull` on an existing Pi:

```bash
sudo systemctl stop matrix-led
rsync -av --delete --exclude README.md \
    kiosk-app/ /home/pi/Desktop/conway.pointcloud.garden/
sudo chown -R pi:pi /home/pi/Desktop/conway.pointcloud.garden
sudo systemctl start matrix-led
```

No build step, no dependencies. Pure static assets.

## Conservation notes

If a future maintainer rebuilds this app:

- Output must remain plain static HTML/JS. No backend, no build-time
  server, no CDN dependencies. The Pi is offline most of the time.
- Keep `index.html` directly under the served root. Chromium loads
  the bare `localhost:8000`, not `/path/to/index.html`.
- The bundled JS file size is fine. Do not split into many small
  network-fetched chunks (the kiosk runs over `localhost`, but adding
  fetch dependencies adds startup latency and failure modes).
- The preset file is the calibration record for this screen. If you
  change the canvas, offset, rotation, or model name, change them in
  `presets/screen_001.json` and update `../DISPLAY_MAPPING.md`.
- The four diagnostic HTML pages are service tools for NovaStar
  mapping work. They are small and worth keeping in the live
  kiosk-app even if the production page does not link to them.
