# Recovering from a corrupted SD card

This repo is the conservation backup for *Conway Pointcloud Garden* — if
the deployed Pi's SD card fails, follow this procedure to rebuild from
scratch on a fresh card. See `CONSERVATION.md` for the full operating
manual.

## What this repo contains

| Folder | What |
|---|---|
| `src/controller/` | The matrix-controller Python daemon (hardened build) |
| `config/controller.yaml` | Default GPIO + behavior config |
| `systemd/matrix-controller.service` | systemd unit (Type=notify, WatchdogSec=30) |
| `kiosk/matrix-led-start.sh` | Kiosk launcher (HTTP server + Chromium) |
| `kiosk/matrix-led.service` | Kiosk systemd unit |
| `system/` | All `/etc/` config files (watchdog, journald, ssh, chromium, apt) |
| `health/` | Daily health-check script + systemd timer |
| `scripts/install.sh` | Original installer (apt deps + copy + enable) |
| `scripts/bootstrap.sh` | Full re-install (calls install.sh + applies all hardening) |
| `CONSERVATION.md` | Long-term operating manual (BoM, GPIO map, recovery, etc.) |

## What this repo does NOT contain

- Authorized SSH keys. Add your conservator key to
  `/home/pi/.ssh/authorized_keys` after restore.
- Wi-Fi credentials. Configure via `raspi-config` or
  `/etc/NetworkManager/system-connections/` after first boot.
- Saved gold-image dd backups. See §6 of `CONSERVATION.md` for the
  recommended dd workflow — clones should be stored separately, not in
  this repo.

## Restore procedure (≈ 25 minutes)

1. Flash **Raspberry Pi OS Bookworm 64-bit (Desktop)** to a fresh
   A2-rated SD card (≥ 32 GB, industrial-grade preferred). Use the
   Raspberry Pi Imager and pre-configure:
   - hostname: `conway-garden-1`
   - username: `pi`
   - SSH: enabled, with your public key
   - Wi-Fi: museum network
2. Boot the Pi. Wait for it to finish first-run setup.
3. SSH in and:
   ```bash
   sudo apt update
   sudo apt install -y git
   git clone <this-repo-url> ~/conway-garden-controller
   cd ~/conway-garden-controller
   sudo bash scripts/bootstrap.sh
   ```
4. Restore the kiosk web app from your separate backup to
   `/home/pi/Desktop/conway.pointcloud.garden/`.
5. Reboot.
6. Verify:
   ```bash
   systemctl status matrix-controller     # active, "Idle - waiting..."
   journalctl -t conway-health -n 5       # should print one OK line
   journalctl -k -b | grep -i watchdog    # should show bcm2835-wdt
   ```
7. Press the START button — Chromium should go full-screen on the kiosk
   URL. Press STOP — Chromium and the relay should both go off.

## On any future code change

1. Edit on a development machine.
2. Push to `main`.
3. On the Pi: `cd ~/conway-garden-controller && git pull && sudo bash scripts/install.sh && sudo systemctl restart matrix-controller`.
4. Verify with the smoke test above.
5. Update the gold dd image (see `CONSERVATION.md` §6).

## Pinning a known-good version

After deploying a verified release, tag it:
```bash
git tag -a v1.0-deployed-2026-04-29 -m "Deployed to museum"
git push origin v1.0-deployed-2026-04-29
```
A future conservator can then `git checkout v1.0-deployed-2026-04-29`
to get exactly the bits the artist last verified, regardless of any
later changes on `main`.
