# Changelog

## 2026-05-17

- New `kiosk-app/` bundle, replacing the 2026-05-15 build.
- Conway effect now cycles curated MNCA presets every 240 s
  (`autoRandomize: true`, `usePresetRandomization: true`) instead of
  rolling random birth/death parameters per cycle.
- Point cloud model is now `vermont_radial` (18 radial chunks), loaded
  dynamically by the app's `ChunkManager` (view cone, left-bias,
  small resident set). Replaces the older `vt` 20-frame bundle.
- `axonScaleFactor` dropped to 20 from 100, tightening framing on the
  sparser radial cloud.
- All screen calibration moved into `kiosk-app/presets/screen_001.json`;
  `index.html` auto-injects `#preset=screen_001` on load, so
  `kiosk/matrix-led-start.sh` needs no modification — the launch URL
  stays plain `http://localhost:8000/?v=<cachebuster>`.
- Four diagnostic HTML pages (matrix-map-test, matrix-map-portrait,
  hdmi-region-test, viewport-fill-test) preserved from the previous
  bundle for future NovaStar service work.
- Display calibration unchanged: `312x416`, `xOffset=416`,
  `rotation=90`, `pointSize=1`.
- Previous bundle archived to project `archives/` (outside this repo)
  as `screen_001_kiosk-app_2026-05-17/`.

## 2026-05-15

- Verified X1201 wall-power-loss shutdown on BCM GPIO6 with a 10-second
  sustained-loss delay.
- Confirmed STOP button stops display service and relay only; it does not halt
  the Pi.
- Disabled Tailscale SSH confusion earlier in service work; normal OpenSSH is
  the recovery path.
- Restored working Conway app display mapping:
  `312x416`, `xOffset=416`, `rotation=90`, `pointSize=1`.
- Confirmed sender-card/NovaStar mapping issue was separate from the web app.
- Added diagnostic HTML pages used during display mapping investigation.
- Snapshotted live Pi configs into the repo.
- Rewrote documentation around verified current behavior and conservation
  framework.
- Added BoM, display mapping, networking, and system audit documents.
- Verified direct Ethernet SSH from Reid's Mac at `10.55.0.1` to Pi eth0 at
  `10.55.0.2`; Wi-Fi and Tailscale remain enabled as fallbacks.

## Earlier

- Added `conway-ctl` live tuning helper using Chrome DevTools Protocol.
- Added system hardening: watchdog, persistent journald, Chromium policy,
  logrotate, health timer, and SSH recovery config.
