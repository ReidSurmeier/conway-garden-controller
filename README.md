# Conway Pointcloud Garden

Artist: Clement Valla. Engineer: Reid Surmeier. Current verified state:
2026-05-15. Host name: `conway-garden-1`.

This repository is the working Read Me for Conway Pointcloud Garden. It holds
the software, media assets, hardware record, setup procedure, maintenance notes,
and preservation path needed to operate or reproduce the piece.

The conservation frame follows Rafael Lozano-Hemmer's article, *Best practices
for conservation of media art from an artist's perspective*. The important
idea for this project is that the software is the score of the artwork: the
fundamental set of instructions that makes the work perform. The Raspberry Pi,
the NovaStar chain, the wiring, the operating system, and the manual are part
of the same score because the piece depends on their timing, scale, and power
sequence.

Reference: https://github.com/mccoyspace/Best-practices-for-conservation-of-media-art

## Current State

The live system was audited on 2026-05-15. START powers the display side and
starts `matrix-led.service`. STOP turns the display side off and stops the
kiosk service. STOP does not halt the Pi.

The Geekworm X1201 UPS is wired into the controller through its PLD signal on
BCM GPIO 6. With wall power present, GPIO 6 is HIGH. When wall power is lost,
GPIO 6 falls LOW. If that loss of wall power stays present for 10 seconds, the
controller stops the display service, turns the relay off, and asks systemd to
shut the Pi down cleanly.

The display is currently working through the NovaStar sender and receiver
mapping. The verified app side mapping is recorded in [DISPLAY_MAPPING.md](DISPLAY_MAPPING.md).
The earlier `384x192` experiment was a service diagnostic and is not the
current default.

## What This Repository Is For

In the language of the conservation article, this repository is a versioned
manual, BoM, dependency record, and time capsule. It is meant for a future
technician, conservator, installer, or collector who needs to understand what
must stay fixed and what can be replaced.

| File or folder | Role in the artwork package |
|---|---|
| `src/controller/` | Python controller for GPIO, state, relay, services, and UPS shutdown |
| `config/controller.yaml` | Verified live controller configuration |
| `kiosk-app/` | Static Conway Garden web app and point cloud assets |
| `kiosk/` | Chromium kiosk service and start script |
| `systemd/` | Main controller systemd unit |
| `system/` | Snapshots of live system configuration from the Pi |
| `health/` | Daily health record used for later diagnosis |
| `control/` | `conway-ctl`, a service tool for live app tuning |
| [CONSERVATION.md](CONSERVATION.md) | Full manual: narrative, setup, maintenance, preservation, migration |
| [HARDWARE_BOM.md](HARDWARE_BOM.md) | Component list with replacement notes |
| [DISPLAY_MAPPING.md](DISPLAY_MAPPING.md) | Current NovaStar and Chromium mapping record |
| [NETWORKING.md](NETWORKING.md) | Direct Ethernet service plan |
| [SYSTEM_AUDIT.md](SYSTEM_AUDIT.md) | Live Pi audit and cleanup notes |
| [RECOVERY.md](RECOVERY.md) | Blank SD card recovery procedure |

## Operation

Normal operation is physical.

1. Apply wall power to the box.
2. Wait for the Pi to boot.
3. Press START to power the display and launch the garden.
4. Press STOP to turn off the display side.
5. If wall power is removed unexpectedly, leave the UPS shutdown path alone.
   The Pi will halt after the 10 second confirmation window.

Useful service commands:

```bash
ssh pi@conway-garden-1
systemctl status matrix-controller
systemctl status matrix-led
journalctl -u matrix-controller -n 100 --no-pager
journalctl -u matrix-led -n 100 --no-pager
```

## Installed Paths

The live Pi uses stable paths so the installation can be serviced without
guessing where the active files are.

| Live path | Source in this repository |
|---|---|
| `/etc/matrix-controller/controller.yaml` | `config/controller.yaml` |
| `/usr/local/lib/python3.11/dist-packages/controller/` | `src/controller/` |
| `/etc/systemd/system/matrix-controller.service` | `systemd/matrix-controller.service` |
| `/etc/systemd/system/matrix-led.service` | `kiosk/matrix-led.service` |
| `/home/pi/Desktop/matrix-led-start.sh` | `kiosk/matrix-led-start.sh` |
| `/home/pi/Desktop/conway.pointcloud.garden/` | `kiosk-app/` |
| `/usr/local/bin/conway-health.sh` | `health/conway-health.sh` |

## Hardware And Replacement Logic

The BoM is not just a shopping list. It records the function of each part and
whether a future replacement must be exact or only functionally equivalent.

The core runtime hardware is a Raspberry Pi 5, Geekworm X1201 UPS HAT with
Samsung 30Q cells, MEAN WELL LRS-150F display PSU, LCLCTC DIN rail solid state
relay, APIELE momentary buttons, a GPIO terminal breakout, a Blue Sea fuse
block, a NovaStar MSD300-1 sender, a NovaStar MRV412 receiver, and the LED
panel chain.

The Pi, fuse block, buttons, wiring hardware, and power supply can be replaced
with equivalent parts if their electrical role is preserved. The NovaStar
sender, receiver, and LED mapping are more sensitive. Replacing them requires
exporting or rebuilding the mapping and then updating [DISPLAY_MAPPING.md](DISPLAY_MAPPING.md).

See [HARDWARE_BOM.md](HARDWARE_BOM.md) for the full supply list and the
superseded notes from the earlier spreadsheet.

## GPIO And Power

GPIO numbers are BCM numbers.

| Function | GPIO | Header pin | Behavior |
|---|---:|---:|---|
| START button | 18 | 12 | Press pulls LOW to GND |
| STOP button | 19 | 35 | Press pulls LOW to GND |
| Relay control | 20 | 38 | Active high |
| X1201 PLD power loss detect | 6 | 31 | HIGH means wall power, LOW means wall power lost |
| AHT20 VIN/VCC | - | 1 | 3.3 V power |
| AHT20 GND | - | 6 | Ground |
| AHT20 SDA | 2 | 3 | I2C data, address `0x38` |
| AHT20 SCL | 3 | 5 | I2C clock |

Current UPS configuration:

```yaml
ups:
  mode: "gpio"
  mains_lost_pin: 6
  edge: "falling"
  shutdown_delay_s: 10
```

## Display Mapping

The working app geometry is:

```text
canvas.width = 312
canvas.height = 416
xOffset = 416
yOffset = 0
rotation = 90
pointSize = 1
```

Chromium runs as a 1920x1080 kiosk window. The app canvas is rotated into a
416x312 source rectangle that matches the corrected sender card mapping. Do
not return to the older guessed `384x192` mapping unless the NovaStar mapping
is intentionally rebuilt and tested.

## Restore From This Read Me

On a fresh Raspberry Pi OS Bookworm 64 bit Desktop install:

```bash
sudo apt update
sudo apt install -y git
git clone https://github.com/ReidSurmeier/conway-garden-controller.git
cd conway-garden-controller
sudo bash scripts/bootstrap.sh
```

After install:

```bash
systemctl status matrix-controller
systemctl status conway-health.timer
sudo pinctrl get 6
```

Expected result: the controller is active, the health timer is active, and
GPIO 6 reads HIGH while wall power is connected.

The longer blank card procedure is in [RECOVERY.md](RECOVERY.md).

## Versioning And Migration

Git is the version record for this piece. Every deliberate change to the
controller, kiosk app, wiring assumptions, display mapping, system files, or
manual should be committed with enough context that a future conservator can
understand why the work changed.

The point is not to fossilize one incidental computer setup forever. The point
is to keep the work performable while preserving the behavior that matters:
the garden image, the display scale, the power sequence, the safe shutdown
path, the physical controls, and the documented hardware relationships.

After a verified deployment, make a tag and create a gold SD card image. Store
that image with the collector box, along with wiring photos, the BoM, spare
fuses, spare cables, and any exported NovaStar configuration.

## Direct Ethernet Service Guide
Public key installed/usable for the Pi:

  ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPM95dG/Uh/ahwRhL3S+bMUGTX6PNQSn32TBYQjry66n mac-to-linux

  Fingerprint:

  SHA256:K8pHQcmDjTLl30NpamfcCzXNNs82qKyNVQWPEzvzzLE

  Verified command:

  ssh -i ~/.ssh/linux_desktop pi@10.55.0.2
  
Use the Ethernet cable as the service connection between a technician's Mac
and the Pi. This path has been verified with the Pi reachable at
`10.55.0.2`.

Service subnet:

```text
Mac USB Ethernet: 10.55.0.1/24
Pi eth0:          10.55.0.2/24
```

### Connect

1. Plug the USB Ethernet adapter into the Mac.
2. Connect an Ethernet cable from the adapter to the Pi.
3. Wait about 10 seconds for link negotiation.
4. Confirm the Mac can see the Pi:

   ```bash
   ping 10.55.0.2
   ```

Expected result: `0% packet loss`.

### SSH

```bash
ssh pi@10.55.0.2
```

If using the current service key from Reid's Mac:

```bash
ssh -i ~/.ssh/linux_desktop pi@10.55.0.2
```

To force password login only:

```bash
ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no pi@10.55.0.2
```

(password for ssh is 123)

### Push An Update From The Mac

For normal field service, the Mac should supply the release files. The Pi does
not need internet access for this workflow.

```bash
rsync -av ./release/ pi@10.55.0.2:/home/pi/conway-garden-controller/
ssh pi@10.55.0.2 'cd ~/conway-garden-controller && ./scripts/install.sh'
```

After the install command, verify the services:

```bash
ssh pi@10.55.0.2 'systemctl status matrix-controller --no-pager'
ssh pi@10.55.0.2 'systemctl status matrix-led --no-pager'
```

### Wi-Fi And Internet Sharing

The Pi does not need Wi-Fi or Mac Internet Sharing for Ethernet SSH or for a
push-from-Mac code update. Internet Sharing is only needed if the Pi itself
must download from the internet, such as `git pull`, `apt install`, or
`pip install`.

Mac Internet Sharing has not been proven for this installation. Do not make it
part of the normal service path unless a future forced-route test proves it.

To turn Pi Wi-Fi off after Ethernet SSH is confirmed:

```bash
ssh -i ~/.ssh/linux_desktop pi@10.55.0.2 'sudo nmcli radio wifi off'
```

To turn Pi Wi-Fi back on:

```bash
ssh -i ~/.ssh/linux_desktop pi@10.55.0.2 'sudo nmcli radio wifi on'
```

The detailed network procedure and test record are in [NETWORKING.md](NETWORKING.md).

## Verified Snapshot

The 2026-05-15 audit recorded Debian Bookworm on Raspberry Pi OS, kernel
`6.12.62+rpt-rpi-2712`, Python `3.11.2`, Chromium `145.0.7632.116`, Tailscale
`1.98.1`, about 15 percent disk usage on `/`, an active health timer, and a
controller package that matched the source snapshot by SHA-256.

See [SYSTEM_AUDIT.md](SYSTEM_AUDIT.md) for the complete audit and cleanup
notes.
