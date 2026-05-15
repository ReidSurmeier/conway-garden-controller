# Recovery Procedure

Use this when the SD card is corrupted, the Pi is replaced, or a future
technician needs to rebuild Conway Pointcloud Garden from this repository.

## What This Repo Contains

| Path | Contents |
|---|---|
| `src/controller/` | Python controller daemon |
| `config/controller.yaml` | Verified GPIO, relay, UPS, and service config |
| `kiosk-app/` | Static Conway Garden web app and point-cloud assets |
| `kiosk/` | Chromium kiosk start script and `matrix-led.service` |
| `systemd/` | `matrix-controller.service` |
| `system/` | Snapshots of live `/etc` and `/boot/firmware` config |
| `health/` | Daily health check script and timer |
| `scripts/` | Install and bootstrap scripts |
| `CONSERVATION.md` | Long-term operating manual |
| `DISPLAY_MAPPING.md` | Verified sender/app mapping |
| `NETWORKING.md` | Direct Ethernet SSH setup |
| `HARDWARE_BOM.md` | BoM and replacement notes |

## What This Repo Does Not Contain

- SSH private keys.
- Client passwords.
- Wi-Fi credentials.
- NovaStar sender/receiver config export. Add this later if available.
- Gold SD-card image. Store that separately.

## Blank SD Card Recovery

1. Flash Raspberry Pi OS Bookworm 64-bit Desktop to a fresh A2 or
   industrial-grade SD card.
2. In Raspberry Pi Imager, preconfigure:
   - hostname: `conway-garden-1`
   - user: `pi`
   - SSH enabled
   - your public SSH key
3. Boot the Pi.
4. SSH in.
5. Install Git and clone this repo:

```bash
sudo apt update
sudo apt install -y git
git clone https://github.com/ReidSurmeier/conway-garden-controller.git
cd conway-garden-controller
```

6. Bootstrap the controller, kiosk, hardening, and health timer:

```bash
sudo bash scripts/bootstrap.sh
```

7. Compare `/boot/firmware/config.txt` against
   `system/boot-firmware-config.txt`. Apply the snapshot if the display does
   not come up correctly and the hardware is the same as the verified install.

8. Reboot:

```bash
sudo reboot
```

## Verification After Recovery

After reboot:

```bash
systemctl status matrix-controller --no-pager
systemctl status conway-health.timer --no-pager
sudo pinctrl get 6
```

Expected:

- `matrix-controller` active.
- Controller status says idle/waiting.
- `conway-health.timer` active.
- GPIO6 reads HIGH when wall power is connected.

Then press START:

```bash
systemctl status matrix-led --no-pager
journalctl -u matrix-led -n 80 --no-pager
```

Expected:

- Relay/display power turns on.
- `matrix-led.service` active.
- Chromium launches to `http://localhost:8000`.
- Garden appears with the mapping documented in `DISPLAY_MAPPING.md`.

Press STOP:

- `matrix-led.service` stops.
- Relay/display power turns off.
- Pi remains powered/running.

## UPS Shutdown Verification

Only test this when the X1201 batteries are charged enough to keep the Pi alive
while it halts.

1. Confirm wall power state:

```bash
sudo pinctrl get 6
```

Expected on wall power: HIGH.

2. Remove wall power.
3. Wait at least 10 seconds.
4. The Pi should halt cleanly.
5. Restore wall power.
6. Check previous boot logs:

```bash
journalctl -u matrix-controller -b -1 --no-pager | grep -i ups
```

## Direct Ethernet Recovery Access

If Wi-Fi is disabled or unavailable, use the static direct-Ethernet plan in
`NETWORKING.md`:

```text
Mac USB Ethernet: 10.55.0.1/24
Pi eth0:          10.55.0.2/24
```

Then:

```bash
ssh pi@10.55.0.2
```

## Known-Good Release Tagging

After a verified deployment:

```bash
git tag -a vYYYY.MM.DD-deployed -m "Verified deployment YYYY-MM-DD"
git push origin vYYYY.MM.DD-deployed
```

## Gold Image

After any deliberate change, make a new SD-card image and store it outside
this repo:

```bash
sudo dd if=/dev/diskN of=conway-garden-gold-YYYY-MM-DD.img bs=4M status=progress
xz -9 conway-garden-gold-YYYY-MM-DD.img
```

Verify the image by booting a spare card before relying on it.
