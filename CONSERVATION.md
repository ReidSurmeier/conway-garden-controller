# Conway Pointcloud Garden — Conservation Manual

**Artist:** Clement Valla
**Engineer / Author:** Reid Surmeier
**Last revised:** 2026-04-29
**Software version:** matrix-controller v1 (hardened build, see `git log`)

This document is the long-term operating manual for the *Conway Pointcloud
Garden* media-art piece. It follows the framework in *Best Practices for
Conservation of Media Art* (McCoyspace) — the goal is that **a competent
technician with no prior contact with the artist can resurrect this piece
from a blank SD card** using only the contents of this folder.

---

## 1. What this piece is

A Raspberry Pi 5 drives a browser-based 3D point-cloud visualization
("Conway pointcloud garden") on a display. Two physical buttons —
**START** and **STOP** — let the visitor turn the piece on and off. The
START button engages a relay that powers the LED matrix / display, then
launches a kiosk-mode Chromium pointed at a local web app. The STOP
button reverses both. A controller daemon mediates the buttons, relay,
and kiosk service, so the system always returns to a known-good state
on power-cycle, crash, or hardware fault.

---

## 2. Bill of Materials

| Component | Function | Replaceable with | Notes |
|---|---|---|---|
| Raspberry Pi 5 (8 GB) | host computer | Any Pi 5 (4 GB or 8 GB); Pi 4 needs code change to `gpiochip0` (currently `gpiochip4`) | RP1 chip on Pi 5 means `/dev/gpiochip4` is the 40-pin header |
| MicroSD card, 64 GB, A2 | system disk | Any A2-rated 32 GB+ industrial-grade SD; SanDisk Industrial / Samsung PRO Endurance recommended for write endurance | Re-image from the gold image (see §6) |
| 5 V relay module / SSR | switches LED matrix PSU | Any 5 V active-HIGH relay rated ≥10 A; opto-isolated preferred | Active-LOW relay: flip `relay.active_high` in `/etc/matrix-controller/controller.yaml` |
| START momentary button | user input | Any NO momentary push-button | Wires GPIO 18 ↔ GND |
| STOP momentary button | user input | Any NO momentary push-button | Wires GPIO 19 ↔ GND |
| Display (HDMI) | shows kiosk | Any HDMI display 1080p+ at 60 Hz | EDID quirks: see `/boot/firmware/config.txt` `hdmi_force_hotplug` |
| Geekworm X1201 UPS HAT (optional) | mains-loss safe shutdown | Any UPS HAT that exposes a mains-lost GPIO pin; flip `ups.mode: gpio` and set `mains_lost_pin` | Currently `mode: disabled` in deployed config |
| Power supply | 5 V / 5 A USB-C | Any official Pi 5 PSU (27 W) | Surge-protected outlet recommended (McCoy §hardware) |

---

## 3. GPIO wiring map (`/dev/gpiochip4`)

| Function | BCM GPIO | Header pin | Wiring |
|---|---|---|---|
| START button | 18 | 12 | Button → GND (pin 14 or 6); pull-up internal |
| STOP button | 19 | 35 | Button → GND (pin 39 or 9); pull-up internal |
| Relay control | 20 | 38 | Module IN → pin 38; Module VCC → 5 V (pin 2 or 4); Module GND → GND |
| UPS mains-lost (disabled) | 21 | 40 | Reserved; not in use |

If pins are changed, update `/etc/matrix-controller/controller.yaml` —
the daemon validates pin numbers at startup and will refuse to run on
invalid config.

---

## 4. Software stack

| Layer | What | Where |
|---|---|---|
| OS | Raspberry Pi OS Bookworm (Debian 12) | system |
| Python | 3.11 | system |
| Python deps | `python3-lgpio`, `python3-yaml` (apt — no pip) | system |
| Controller daemon | `controller.main` package | `/usr/local/lib/python3.11/dist-packages/controller/` |
| Controller config | `controller.yaml` | `/etc/matrix-controller/controller.yaml` |
| Controller systemd unit | `matrix-controller.service` (Type=notify, WatchdogSec=30) | `/etc/systemd/system/matrix-controller.service` |
| Kiosk start script | `matrix-led-start.sh` | `/home/pi/Desktop/matrix-led-start.sh` |
| Kiosk systemd unit | `matrix-led.service` (Type=simple, after graphical.target) | `/etc/systemd/system/matrix-led.service` |
| Kiosk web app | static HTML/JS pointcloud viewer | `/home/pi/Desktop/conway.pointcloud.garden/` |
| Browser | Chromium (kiosk mode, screen blanking off) | `/usr/bin/chromium-browser` |
| Health check | `conway-health.sh` (daily) | `/usr/local/bin/conway-health.sh` (timer in `conway-health.timer`) |
| HW watchdog | systemd `RuntimeWatchdogSec=15` (BCM2712 hw watchdog) | `/etc/systemd/system.conf.d/10-watchdog.conf` |
| Journald | persistent, capped at 300 MB rolling | `/etc/systemd/journald.conf.d/10-conservation.conf` |
| Log rotation | `conway_startup.log` weekly, 8 weeks | `/etc/logrotate.d/conway-startup` |

Source repo: `~/Desktop/Pointcloud-Garden-On-Off-V1-main/`
Re-deploy with: `sudo bash ~/Desktop/Pointcloud-Garden-On-Off-V1-main/scripts/install.sh`

---

## 5. Boot / runtime sequence

```
power-on
  └─ systemd starts hardware watchdog (15 s — auto-reboots a hung kernel)
     ├─ multi-user.target → matrix-controller.service
     │   • validates config, opens GPIO, forces relay OFF, stops kiosk if running
     │   • notifies systemd READY=1, sends WATCHDOG=1 every 5 s
     └─ graphical.target → LightDM autologin pi → LXDE-pi-x
         (xscreensaver autostart is intentionally disabled)

START button (GPIO 18 → GND)
  → controller flips relay ON
  → systemctl start matrix-led.service
      → matrix-led-start.sh launches HTTP server + Chromium kiosk

STOP button (GPIO 19 → GND)
  → controller suppresses UPS callbacks for 3 s (transient mitigation)
  → transitions state to IDLE
  → systemctl stop matrix-led.service (Chromium + HTTP server killed)
  → relay OFF
```

**Self-healing behaviors built in:**
- Daemon watchdog tick (every 5 s) reconciles physical relay state with
  logical state machine. Drift → corrected automatically.
- systemd `WatchdogSec=30`: if daemon hangs (no heartbeat), systemd
  kills + restarts it.
- `Restart=always`, `RestartSec=10`: crashes auto-recover.
- `StartLimitBurst=10` / `StartLimitIntervalSec=300`: restart-loop
  protection — if the daemon is fundamentally broken, systemd marks it
  failed instead of looping forever, surfacing the problem to operators.
- `atexit` hook + last-resort relay-OFF on any normal exit path.
- Hardware watchdog: kernel hang → automatic reboot in 15 s.
- Daily health check (`conway-health`) writes one line of
  OK/FAIL summary to journal — `journalctl -t conway-health` for history.

---

## 6. Disaster recovery

### Total SD-card failure
1. Buy a fresh A2 SD card (≥ 32 GB).
2. Flash Raspberry Pi OS Bookworm 64-bit (Lite or Desktop).
3. Boot the Pi, complete first-run setup, set timezone + Wi-Fi.
4. Copy the entire `Pointcloud-Garden-On-Off-V1-main/` source folder to
   `~/Desktop/`.
5. Copy `conway.pointcloud.garden/` (the web app) to `~/Desktop/`.
6. `sudo bash ~/Desktop/Pointcloud-Garden-On-Off-V1-main/scripts/install.sh`
7. Re-apply the system hardening from §10 of this document
   (or run `bootstrap.sh` if a future maintainer has packaged it).
8. Reboot. The piece should be running.

### Faster recovery: gold-image clone
Recommended: keep **two cloned SD cards** stored separately (artist studio
+ collector) as drop-in replacements. To make a clone:

```bash
# On a Mac/Linux machine with the working SD card inserted:
sudo dd if=/dev/diskN of=conway-garden-gold-YYYY-MM-DD.img bs=4M status=progress
# Then shrink + compress for storage:
xz -9 conway-garden-gold-YYYY-MM-DD.img
```

Verify the clone by booting a spare Pi from it before storing.

---

## 7. Maintenance

| Task | Cadence | How |
|---|---|---|
| Visual inspection (dust, cable seating) | monthly | physical |
| Read `journalctl -t conway-health --since "30d ago"` | monthly | check for `FAIL` lines |
| Verify spare SD card still boots | annually | swap and run for an hour |
| Update gold image after deliberate code changes | on change | re-image and re-distribute |
| Replace SD card preemptively (write wear) | 5 years | re-flash from gold image |
| Check relay clicks audibly on START/STOP | each install | physical |
| Confirm Chromium loads kiosk URL | each install | press START |

**Do not** apt-upgrade casually. The system has unattended-upgrades
disabled by design. Every change to the system must be documented and
re-baked into the gold image.

---

## 8. Troubleshooting (95 % rule — McCoy)

**The Pi is on but the buttons do nothing.**
→ Check `systemctl status matrix-controller`. If "failed", check
  `journalctl -u matrix-controller -n 100`. Most likely: GPIO chip
  busy; reboot to clear.

**Chromium shows a blank page or "this site can't be reached".**
→ The HTTP server didn't come up. `journalctl -u matrix-led -n 100`.
  Check `~/Desktop/conway.pointcloud.garden/` exists and `index.html`
  is present.

**Kiosk shows a "Chromium didn't shut down correctly" bubble.**
→ Already mitigated by `--disable-session-crashed-bubble` and the
  `Preferences` patch in `matrix-led-start.sh`. If it still appears,
  delete `~/.config/chromium` and re-run.

**Relay clicks but nothing turns on.**
→ Hardware. Inspect relay module wiring; replace relay if it doesn't
  click; replace power supply on the load side if it does click.

**Pi reboots itself spontaneously.**
→ The hardware watchdog tripped. Look for thermal/undervoltage in
  `journalctl -p err -b -1` (previous boot). Check PSU and cooling.

**Buttons "stutter" or fire repeatedly on one press.**
→ Increase `buttons.debounce_ms` in `/etc/matrix-controller/controller.yaml`
  from 80 → 120, restart the service.

---

## 9. Escalation

1. Read this document (95 % of issues).
2. Contact the operating institution's IT / facilities technician.
3. Contact Reid Surmeier (engineer) — see studio contact card.
4. Remote troubleshooting via SSH (key-only, see §12).
5. On-site visit (last resort).

---

## 10. System hardening checklist (re-apply after re-image)

Run as root on a fresh install, after the controller is deployed:

- `/etc/systemd/system.conf.d/10-watchdog.conf` — `RuntimeWatchdogSec=15s`
- `/etc/systemd/journald.conf.d/10-conservation.conf` — persistent + 300 MB cap
- `/etc/logrotate.d/conway-startup` — weekly rotation
- `/etc/ssh/sshd_config.d/10-conservation.conf` — `PasswordAuthentication no`
- `/etc/chromium/policies/managed/conservation.json` — disable component updater
- `/etc/xdg/lxsession/LXDE-pi/autostart` — `@xscreensaver` line commented out
- `hostnamectl set-hostname conway-garden-1`
- `/usr/local/bin/conway-health.sh` + `conway-health.timer` (enabled)
- `unattended-upgrades` disabled (or never installed)

A copy of every config file above lives in `~/conservation-snapshots/` on
each Pi after first hardening.

---

## 11. Migration notes (when Pi 5 is obsolete)

- The controller daemon has one platform-specific constant:
  `CHIP = 4` in `src/controller/gpio.py` (Pi 5 RP1 chip number).
- gpiozero callbacks were unreliable on Pi 5 + lgpio 0.2.2 — that's why
  the controller polls directly via `lgpio.gpio_read` in 10 ms threads.
  Future hardware may not need the workaround.
- Chromium kiosk-mode behavior has changed across versions; verify the
  flag list in `matrix-led-start.sh` after any Chromium major-version
  bump.
- Replace SD with proper SSD (USB-boot) once the SD becomes the weakest
  link.
- The web app (`conway.pointcloud.garden`) is plain static HTML/JS —
  any modern browser should display it indefinitely. No backend.

---

## 12. Contacts & access

- **Artist:** Clement Valla
- **Engineer:** Reid Surmeier — `rsurmeie@risd.edu`
- **SSH:** `ssh pi@<host>` — **key-only authentication**. Authorised keys
  in `/home/pi/.ssh/authorized_keys`. Add a new conservator key by
  appending to that file from a privileged shell.
- **Web app source:** in `~/Desktop/conway.pointcloud.garden/` and
  upstream repo (link TBD).
- **Controller source:** `~/Desktop/Pointcloud-Garden-On-Off-V1-main/`
  and upstream repo on GitHub (link TBD — McCoyspace recommends
  open-source publication so the work survives the studio).
