# Conway Pointcloud Garden

**Artist:** Clement Valla
**Engineer:** Reid Surmeier
**Current verified state:** 2026-05-15
**Host name:** `conway-garden-1`

This repository is the software, configuration, and conservation package for
the Conway Pointcloud Garden media-art installation. A Raspberry Pi 5 runs a
browser-based point-cloud visualization, controls display power through a
relay/SSR, and shuts down safely when wall power is lost.

The documentation follows the conservation approach described in Rafael
Lozano-Hemmer's *Best practices for conservation of media art from an artist's
perspective*: the code, configuration, media assets, wiring notes, BoM, and
operating instructions are treated as the artwork's executable score.

Reference: https://github.com/mccoyspace/Best-practices-for-conservation-of-media-art

## Current Verified Behavior

- START button turns on the display power relay and starts `matrix-led.service`.
- STOP button stops `matrix-led.service` and turns the display relay off.
- STOP does not shut down the Pi.
- Geekworm X1201 PLD on BCM GPIO 6 detects wall-power loss.
- If wall power is lost for 10 sustained seconds, the Pi performs a systemd
  safe shutdown through the UPS.
- On boot, the relay is forced off and the display service is stopped.
- SSH is currently available through Wi-Fi/Tailscale; the target handoff state
  is direct Ethernet SSH with Pi Wi-Fi disabled.
- Sender-card mapping is now working. The canonical app mapping is recorded in
  `DISPLAY_MAPPING.md`.

## Operator Use

Normal operation is physical:

1. Apply wall power.
2. Wait for the Pi to boot.
3. Press START to power the display and launch Chromium.
4. Press STOP to turn the display off.
5. To remove wall power, use the normal power switch or unplug. If power is
   lost unexpectedly, the UPS shutdown path handles the Pi safely.

For diagnostics:

```bash
ssh pi@conway-garden-1
systemctl status matrix-controller
systemctl status matrix-led
journalctl -u matrix-controller -n 100 --no-pager
journalctl -u matrix-led -n 100 --no-pager
```

## Repository Layout

| Path | Purpose |
|---|---|
| `src/controller/` | Python daemon: GPIO, state machine, UPS shutdown, service control |
| `config/controller.yaml` | Verified controller config copied from `/etc/matrix-controller/controller.yaml` |
| `systemd/` | `matrix-controller.service` source |
| `kiosk/` | Kiosk systemd unit and Chromium start script |
| `kiosk-app/` | Static web app served from `/home/pi/Desktop/conway.pointcloud.garden/` |
| `health/` | Daily health snapshot script and systemd timer |
| `system/` | Live system config snapshots from `/etc`, `/boot/firmware`, Chromium, SSH, journald, logrotate |
| `scripts/` | Install/bootstrap scripts |
| `control/` | `conway-ctl` Chrome DevTools helper for live app tuning |
| `CONSERVATION.md` | Long-form conservation and maintenance manual |
| `HARDWARE_BOM.md` | Current BoM with replaceability notes |
| `DISPLAY_MAPPING.md` | Verified NovaStar / Chromium mapping notes |
| `NETWORKING.md` | Direct Ethernet SSH and Wi-Fi removal plan |
| `SYSTEM_AUDIT.md` | Current system audit and cleanup notes |
| `RECOVERY.md` | Blank-SD-card recovery procedure |

## Live Pi Paths

The runtime paths are intentionally stable:

| Live path | Source in this repo |
|---|---|
| `/etc/matrix-controller/controller.yaml` | `config/controller.yaml` |
| `/usr/local/lib/python3.11/dist-packages/controller/` | `src/controller/` |
| `/etc/systemd/system/matrix-controller.service` | `systemd/matrix-controller.service` |
| `/etc/systemd/system/matrix-led.service` | `kiosk/matrix-led.service` |
| `/home/pi/Desktop/matrix-led-start.sh` | `kiosk/matrix-led-start.sh` |
| `/home/pi/Desktop/conway.pointcloud.garden/` | `kiosk-app/` |
| `/usr/local/bin/conway-health.sh` | `health/conway-health.sh` |

## Hardware Summary

Core hardware:

- Raspberry Pi 5
- Geekworm X1201 UPS HAT with Samsung 30Q cells
- MEAN WELL LRS-150F display PSU
- LCLCTC DIN rail solid-state relay
- APIELE momentary push buttons
- GPIO screw-terminal breakout
- Blue Sea Systems 5025 fuse block and ATC blade fuse
- NovaStar MSD300-1 sender and MRV412 receiver card
- LED panels driven by the NovaStar chain

See `HARDWARE_BOM.md` for the full supply list and notes on what can be
substituted.

## GPIO Map

Pin numbers are BCM GPIO numbers.

| Function | GPIO | Header pin | Behavior |
|---|---:|---:|---|
| START button | 18 | 12 | Press pulls LOW to GND |
| STOP button | 19 | 35 | Press pulls LOW to GND |
| Relay/SSR control | 20 | 38 | Active high |
| X1201 PLD power-loss detect | 6 | 31 | HIGH = wall power OK, LOW = wall power lost |

Current controller config:

```yaml
ups:
  mode: "gpio"
  mains_lost_pin: 6
  edge: "falling"
  shutdown_delay_s: 10
```

## Display Mapping

The working app mapping is:

```text
canvas.width = 312
canvas.height = 416
xOffset = 416
yOffset = 0
rotation = 90
pointSize = 1
```

Chromium runs in a 1920x1080 kiosk window. The artist app's canvas is rotated
into a 416x312 source rectangle. Do not return to the earlier guessed
`384x192` mapping unless the NovaStar sender/receiver mapping is rebuilt and
reverified.

See `DISPLAY_MAPPING.md`.

## Install Or Restore

Fresh Pi:

```bash
sudo apt update
sudo apt install -y git
git clone https://github.com/ReidSurmeier/conway-garden-controller.git
cd conway-garden-controller
sudo bash scripts/bootstrap.sh
```

After install, verify:

```bash
systemctl status matrix-controller
systemctl status conway-health.timer
sudo pinctrl get 6
```

See `RECOVERY.md` for the full blank-card process.

## Safe Change Workflow

1. Make changes in Git on a development machine.
2. Commit and push.
3. Pull on the Pi or deploy the specific files.
4. Restart only the service that needs it.
5. Verify logs and physical behavior.
6. Update docs and make a new gold image after deliberate changes.

Do not casually run system upgrades, change `/boot/firmware/config.txt`, or
alter NovaStar mapping without documenting and testing the result.

## Direct Ethernet SSH Target

The client wants the Pi off Wi-Fi. The safe migration plan is:

1. Add a static Ethernet profile on Pi `eth0`: `10.55.0.2/24`.
2. Configure the Mac USB Ethernet adapter manually: `10.55.0.1/24`.
3. Verify `ssh pi@10.55.0.2`.
4. Disable Wi-Fi autoconnect on the Pi only after Ethernet SSH works.

See `NETWORKING.md`.

## Status Snapshot From 2026-05-15

- OS: Debian Bookworm / Raspberry Pi OS 64-bit
- Kernel: `6.12.62+rpt-rpi-2712`
- Python: `3.11.2`
- Chromium: `145.0.7632.116`
- Tailscale: `1.98.1`
- Disk usage: about 15 percent on `/`
- Health timer: active
- Controller source and installed controller package matched by SHA-256

See `SYSTEM_AUDIT.md` for details and cleanup recommendations.
