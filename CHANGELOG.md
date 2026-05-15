# Changelog

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

## Earlier

- Added `conway-ctl` live tuning helper using Chrome DevTools Protocol.
- Added system hardening: watchdog, persistent journald, Chromium policy,
  logrotate, health timer, and SSH recovery config.
