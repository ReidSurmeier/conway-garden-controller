# Conway Pointcloud Garden Conservation Manual

**Artist:** Clement Valla
**Engineer:** Reid Surmeier
**Last revised:** 2026-05-15
**System host:** `conway-garden-1`

This manual is the long-term operating and preservation document for Conway
Pointcloud Garden. It uses Rafael Lozano-Hemmer's McCoyspace conservation
framework as a practical guide: preserve the artwork's executable score, keep a
BoM with replaceability notes, document setup and maintenance, and provide a
clear migration path when hardware or software becomes obsolete.

Reference: https://github.com/mccoyspace/Best-practices-for-conservation-of-media-art

## 1. Artwork Description

Conway Pointcloud Garden is a browser-based point-cloud visualization running
on a Raspberry Pi 5 and displayed through a NovaStar sender/receiver LED-panel
chain. A physical START button powers the display side and launches the kiosk.
A physical STOP button turns the display side off. A Geekworm X1201 UPS HAT
keeps the Pi alive long enough to shut down safely if wall power is lost.

The work should be understood as a coupled system:

- The visual app and point-cloud assets
- The NovaStar sender/receiver mapping
- The Pi OS, Chromium, systemd units, and controller daemon
- The GPIO wiring, relay/SSR, UPS power-loss signal, PSU, fusing, and buttons
- The operating instructions and recovery material in this repository

## 2. Verified Current State

Verified on 2026-05-15:

- START button: relay ON and `matrix-led.service` starts.
- STOP button: `matrix-led.service` stops and relay OFF.
- STOP does not halt the Pi.
- X1201 PLD on BCM GPIO 6 reads HIGH with wall power connected.
- X1201 PLD falls LOW on wall-power loss.
- Sustained power loss for 10 seconds triggers systemd shutdown.
- Shutdown path was tested repeatedly and completed cleanly.
- Sender-card mapping was fixed after identifying a sender-card/mapping issue.
- Working app mapping is `312x416`, `xOffset=416`, `rotation=90`,
  `pointSize=1`.
- The earlier `384x192` mapping was a diagnostic mistake and is superseded.

## 3. Normal Operation

1. Apply wall power to the box.
2. Wait for the Pi to boot.
3. Press START.
4. Confirm the display turns on and the garden appears.
5. Press STOP to turn the display off.

If wall power is lost unexpectedly, do not panic. The UPS keeps the Pi alive
and the controller shuts the Pi down after the PLD signal remains lost for 10
seconds.

## 4. What Not To Change Casually

- Do not change the NovaStar sender/receiver mapping without saving a backup
  and updating `DISPLAY_MAPPING.md`.
- Do not change the app canvas mapping away from `312x416`, `xOffset=416`,
  `rotation=90`, `pointSize=1` unless the NovaStar mapping is intentionally
  rebuilt.
- Do not apt-upgrade the Pi during an exhibition unless there is a documented
  reason and a rollback plan.
- Do not disable the X1201 UPS GPIO shutdown path.
- Do not power the Pi in a way that bypasses the X1201 if safe shutdown is
  required.
- Do not disable the hardware watchdog, journald persistence, or health timer.

## 5. Hardware

The full BoM is in `HARDWARE_BOM.md`. Core components:

| Component | Role | Replaceability |
|---|---|---|
| Raspberry Pi 5 | Host computer | Replaceable with another Pi 5; other Pi models need GPIO changes |
| MicroSD card | System disk | Replaceable from gold image |
| Geekworm X1201 | UPS and power-loss signal | Replaceable only if new UPS exposes equivalent GPIO behavior |
| Samsung 30Q cells | UPS batteries | Replaceable with compatible protected/approved cells per X1201 requirements |
| MEAN WELL LRS-150F | Display PSU | Replaceable with equivalent 5 V supply with sufficient current and physical fit |
| LCLCTC DIN rail SSR | Switches display PSU/load path | Replaceable with equivalent rated relay/SSR |
| APIELE push buttons | START/STOP inputs | Replaceable with normally-open momentary switches |
| NovaStar MSD300-1 | Sender card | Replaceable with compatible sender; requires remapping/reverification |
| NovaStar MRV412 | Receiver card | Replaceable with compatible receiver; requires config backup/reload |
| LED panels | Display surface | Replace modules/panels only after isolating cable/power/mapping faults |

## 6. Wiring

GPIO numbers are BCM numbers.

| Function | BCM GPIO | Header pin | Notes |
|---|---:|---:|---|
| START button | 18 | 12 | Button to GND, internal pull-up |
| STOP button | 19 | 35 | Button to GND, internal pull-up |
| Relay/SSR control | 20 | 38 | Active high |
| X1201 PLD | 6 | 31 | HIGH = wall power OK, LOW = wall power lost |

The controller config is `/etc/matrix-controller/controller.yaml`; the repo
snapshot is `config/controller.yaml`.

## 7. Software Stack

| Layer | Current value |
|---|---|
| OS | Raspberry Pi OS / Debian 12 Bookworm |
| Kernel | `6.12.62+rpt-rpi-2712` at audit time |
| Python | `3.11.2` |
| Browser | Chromium `145.0.7632.116` at audit time |
| Controller | Python package installed to `/usr/local/lib/python3.11/dist-packages/controller/` |
| Service manager | systemd |
| Network manager | NetworkManager |
| Remote access | SSH, Tailscale during service; target client state is direct Ethernet SSH |

## 8. Runtime Files

| Runtime path | Meaning |
|---|---|
| `/etc/matrix-controller/controller.yaml` | Live GPIO/UPS/service config |
| `/etc/systemd/system/matrix-controller.service` | Controller daemon unit |
| `/etc/systemd/system/matrix-led.service` | Display/kiosk service unit |
| `/home/pi/Desktop/matrix-led-start.sh` | Starts HTTP server and Chromium kiosk |
| `/home/pi/Desktop/conway.pointcloud.garden/` | Static app served on port 8000 |
| `/usr/local/bin/conway-health.sh` | Daily health snapshot |
| `/boot/firmware/config.txt` | Boot HDMI/KMS config snapshot |
| `/etc/ssh/sshd_config.d/10-conservation.conf` | Recovery SSH settings |
| `/etc/chromium/policies/managed/conservation.json` | Chromium stability policy |

Snapshots of these files are committed under `system/`, `kiosk/`, `config/`,
and `health/`.

## 9. Startup Sequence

At boot:

1. systemd starts `matrix-controller.service`.
2. Controller opens GPIO, validates config, forces relay OFF, stops
   `matrix-led.service`, and enters IDLE.
3. Display stays off until START is pressed.

When START is pressed:

1. Controller transitions IDLE -> RUNNING.
2. Relay turns ON.
3. systemd starts `matrix-led.service`.
4. `matrix-led-start.sh` starts `python3 -m http.server 8000`.
5. Chromium starts in kiosk mode at `http://localhost:8000/?v=<timestamp>`.

When STOP is pressed:

1. Controller transitions RUNNING -> IDLE.
2. `matrix-led.service` stops Chromium and the HTTP server.
3. Relay turns OFF.

When wall power is lost:

1. X1201 PLD goes LOW on GPIO 6.
2. Controller confirms the signal remains lost for 10 seconds.
3. Controller stops display service, turns relay OFF, and runs systemd
   poweroff.

## 10. Display Mapping

See `DISPLAY_MAPPING.md` for detailed notes. Current app geometry:

```text
canvas = 312x416
xOffset = 416
yOffset = 0
rotation = 90
pointSize = 1
Chromium window = 1920x1080
```

The sender-card issue was resolved outside the app. If future symptoms look
like stretched pixels, first verify NovaStar sender/receiver mapping before
changing the web app.

## 11. Maintenance

| Cadence | Task |
|---|---|
| Each install | Verify START and STOP buttons |
| Each install | Verify `sudo pinctrl get 6` is HIGH on wall power |
| Each install | Unplug wall power once and confirm safe shutdown if commissioning |
| Monthly | Inspect cables, ribbons, fuses, relay terminals, and panel seating |
| Monthly | Read `journalctl -t conway-health --since "30 days ago"` |
| On change | Commit code/config, update docs, and make a gold image |
| Annually | Boot-test spare SD card or image |
| 5 years | Replace SD card proactively or migrate to SSD |

## 12. Troubleshooting

**Buttons do nothing**
Check `systemctl status matrix-controller` and
`journalctl -u matrix-controller -n 100 --no-pager`.

**Display does not start**
Check `systemctl status matrix-led` and
`journalctl -u matrix-led -n 100 --no-pager`.

**Power-loss shutdown does not happen**
Check:

```bash
sudo pinctrl get 6
sudo cat /etc/matrix-controller/controller.yaml
journalctl -u matrix-controller -b --no-pager | grep -i ups
```

**Panel has a persistent color area that follows the physical panel**
Treat as hardware: reseat ribbon cables, swap cable/power path, then mark the
panel or module defective if the fault follows the panel.

**Panel image is stretched or mapped wrong**
Treat as NovaStar sender/receiver configuration first. Use the diagnostic
pages in `kiosk-app/` and the notes in `DISPLAY_MAPPING.md`.

**SSH unavailable after Wi-Fi is disabled**
Use direct Ethernet fallback from `NETWORKING.md`.

## 13. Recovery

See `RECOVERY.md` for blank-card rebuild. The short version:

1. Flash Raspberry Pi OS Bookworm 64-bit Desktop.
2. Clone this repo.
3. Run `sudo bash scripts/bootstrap.sh`.
4. Restore or verify `kiosk-app/`.
5. Reboot.
6. Verify `matrix-controller`, `conway-health.timer`, GPIO 6, START/STOP, and
   display mapping.

## 14. Migration Notes

- Pi 5 uses `/dev/gpiochip4`; a Pi 4 or later replacement may need code
  changes.
- Chromium kiosk flags should be retested after major Chromium updates.
- NovaStar sender/receiver config should be exported and stored with this
  repository if the service laptop/software is available.
- Direct Ethernet SSH is preferred for client handoff; Wi-Fi should be disabled
  only after wired SSH is verified.
- If the X1201 is replaced, preserve the behavior "GPIO HIGH = wall power OK,
  GPIO LOW = wall power lost" or update code/config and retest shutdown.

## 15. Archive Guidance

Keep these together as the artwork package:

- This Git repository
- A gold SD-card image
- NovaStar sender/receiver config export
- Photos of wiring and panel cabling
- Photos/video of correct operation
- Spare SD card
- Spare fuses, ribbon cables, and known-good panel/module if available

The spreadsheet supply list is historical source material. Its older control
logic and GPIO notes are superseded by this verified manual.
