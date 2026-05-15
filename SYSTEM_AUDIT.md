# System Audit

**Audit date:** 2026-05-15  
**Host:** `conway-garden-1`

This audit records the live Pi state used to update the repository snapshots.

## Versions

```text
OS: Debian GNU/Linux 12 Bookworm / Raspberry Pi OS
Kernel: 6.12.62+rpt-rpi-2712
Architecture: arm64
Python: 3.11.2
Chromium: 145.0.7632.116
Tailscale: 1.98.1
```

## Services

| Service | State at audit | Notes |
|---|---|---|
| `matrix-controller` | active, enabled | Main daemon |
| `matrix-led` | active when display is started, disabled at boot | Started/stopped by controller |
| `ssh` | active, enabled | Remote service |
| `tailscaled` | active, enabled | Remote service during development |
| `NetworkManager` | active | Manages Wi-Fi/Ethernet |
| `avahi-daemon` | active | mDNS |
| `conway-health.timer` | active, enabled | Daily health snapshot |

## Disk

At audit time `/` was about 15 percent used on a 59 GB filesystem.

## Live Runtime Paths

| Path | Repo snapshot |
|---|---|
| `/etc/matrix-controller/controller.yaml` | `config/controller.yaml` |
| `/etc/systemd/system/matrix-controller.service` | `systemd/matrix-controller.service` |
| `/etc/systemd/system/matrix-led.service` | `kiosk/matrix-led.service` |
| `/home/pi/Desktop/matrix-led-start.sh` | `kiosk/matrix-led-start.sh` |
| `/home/pi/Desktop/conway.pointcloud.garden/` | `kiosk-app/` |
| `/usr/local/bin/conway-health.sh` | `health/conway-health.sh` |
| `/boot/firmware/config.txt` | `system/boot-firmware-config.txt` |
| `/etc/ssh/sshd_config.d/10-conservation.conf` | `system/etc-ssh-sshd_config.d-10-conservation.conf` |
| `/etc/chromium/policies/managed/conservation.json` | `system/etc-chromium-policies-managed-conservation.json` |

## Positive Findings

- Controller source and installed package matched by SHA-256.
- UPS GPIO shutdown path is enabled in live config.
- GPIO6 reads HIGH on wall power.
- Journald persistence and disk cap are installed.
- Hardware watchdog config is installed.
- Chromium policy disables update/prompt noise.
- Kiosk launch uses cache-busted URL and fixed kiosk window flags.
- Health timer logs recent OK snapshots.

## Issues To Clean Up Later

The following were found on the live Pi and should be cleaned up only after the
repo and gold image are updated:

- `~/Desktop/Pointcloud-Garden-On-Off-V1-main` on the Pi is not a Git repo.
- Live kiosk root contains `.bak` files from service work.
- Live kiosk root contains diagnostic pages mixed with production app files.
- Mac resource-fork files exist in the app tree: `.DS_Store` and `._*`.
- Named pipes `.lgd-nfy0` exist under Desktop/source folders.
- `~/Desktop/Pointcloud-Garden-On-Off-V1-main.zip` is stale.
- `/home/pi/Documents/config.txt` is historical display config, not live boot
  config, and should be moved into an archive folder or documented.

## Recommended Cleanup Order

1. Confirm GitHub has the verified repo state.
2. Make a gold image or backup of the current SD card.
3. Move live `.bak` files into an archive folder. The tracked repository backup
   `kiosk-app/assets/index-44cc2b1b.js.original.bak` has been removed from the
   source tree so the repo carries one canonical app bundle.
4. Remove `.DS_Store`, `._*`, and `.lgd-nfy0` files from runtime folders.
5. Clone the GitHub repo onto the Pi as the authoritative source tree.
6. Leave runtime paths stable: `/home/pi/Desktop/conway.pointcloud.garden` and
   `/home/pi/Desktop/matrix-led-start.sh`.
7. Re-test START, STOP, display mapping, and UPS shutdown.

## Recent Log Notes

During sender-card/display debugging, `matrix-led.service` showed a few
start/stop timeouts around 12:37-12:38 on 2026-05-15, then recovered and ran.
Network logs showed Ethernet link at 1 Gbps but no DHCP lease. This supports
using a static direct-Ethernet profile for client handoff.
