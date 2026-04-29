#!/bin/bash
#
# bootstrap.sh — restore a Conway Garden Pi 5 from a fresh Raspberry Pi OS
# Bookworm install. Run as root after `git clone` of this repo.
#
# Pre-req:
#   1. Pi 5 with fresh Raspberry Pi OS Bookworm 64-bit (Lite or Desktop).
#   2. User `pi` exists, autologin enabled (Desktop edition default).
#   3. This repo cloned somewhere accessible.
#   4. The kiosk web app (~/Desktop/conway.pointcloud.garden/) restored separately.
#
# Run with:
#   sudo bash scripts/bootstrap.sh
#
set -e

if [ "$EUID" -ne 0 ]; then
    echo "Error: must be run as root (sudo)"
    exit 1
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
echo "Bootstrap from $REPO_ROOT"
echo ""

# 1. Install the controller (apt deps + Python package + systemd unit).
echo "=== 1. Installing matrix-controller ==="
bash "$REPO_ROOT/scripts/install.sh"
echo ""

# 2. Install the kiosk start script + service.
echo "=== 2. Installing kiosk start script ==="
install -m 0755 -o pi -g pi "$REPO_ROOT/kiosk/matrix-led-start.sh" /home/pi/Desktop/matrix-led-start.sh
install -m 0644 "$REPO_ROOT/kiosk/matrix-led.service" /etc/systemd/system/matrix-led.service
systemctl daemon-reload
echo ""

# 3. System hardening configs.
echo "=== 3. Applying system hardening ==="
mkdir -p /etc/systemd/system.conf.d /etc/systemd/journald.conf.d \
         /etc/logrotate.d /etc/ssh/sshd_config.d \
         /etc/chromium/policies/managed /var/log/journal
install -m 0644 "$REPO_ROOT/system/etc-systemd-system.conf.d-10-watchdog.conf"        /etc/systemd/system.conf.d/10-watchdog.conf
install -m 0644 "$REPO_ROOT/system/etc-systemd-journald.conf.d-10-conservation.conf"  /etc/systemd/journald.conf.d/10-conservation.conf
install -m 0644 "$REPO_ROOT/system/etc-logrotate.d-conway-startup"                    /etc/logrotate.d/conway-startup
install -m 0644 "$REPO_ROOT/system/etc-ssh-sshd_config.d-10-conservation.conf"        /etc/ssh/sshd_config.d/10-conservation.conf
install -m 0644 "$REPO_ROOT/system/etc-chromium-policies-managed-conservation.json"   /etc/chromium/policies/managed/conservation.json
install -m 0644 "$REPO_ROOT/system/etc-apt-apt.conf.d-20auto-upgrades"                /etc/apt/apt.conf.d/20auto-upgrades
systemd-tmpfiles --create --prefix /var/log/journal >/dev/null 2>&1 || true
systemctl restart systemd-journald
sshd -t && systemctl reload ssh
echo ""

# 4. Health check.
echo "=== 4. Installing health check ==="
install -m 0755 "$REPO_ROOT/health/conway-health.sh"     /usr/local/bin/conway-health.sh
install -m 0644 "$REPO_ROOT/health/conway-health.service" /etc/systemd/system/conway-health.service
install -m 0644 "$REPO_ROOT/health/conway-health.timer"   /etc/systemd/system/conway-health.timer
systemctl daemon-reload
systemctl enable --now conway-health.timer
echo ""

# 5. Disable LXDE screensaver autostart (kiosk doesn't want it).
echo "=== 5. Disabling LXDE screensaver autostart ==="
LXDE_AUTOSTART=/etc/xdg/lxsession/LXDE-pi/autostart
if [ -f "$LXDE_AUTOSTART" ] && grep -q "^@xscreensaver" "$LXDE_AUTOSTART"; then
    sed -i 's|^@xscreensaver|# @xscreensaver  # disabled for kiosk conservation|' "$LXDE_AUTOSTART"
fi
echo ""

# 6. Disable unattended-upgrades if present.
echo "=== 6. Disabling auto-updates ==="
systemctl disable --now apt-daily.timer apt-daily-upgrade.timer unattended-upgrades.service 2>/dev/null || true
echo ""

# 7. Set hostname.
echo "=== 7. Setting hostname ==="
if [ "$(hostnamectl --static)" != "conway-garden-1" ]; then
    hostnamectl set-hostname conway-garden-1
    sed -i "s/$(hostname)/conway-garden-1/g" /etc/hosts || true
fi
echo ""

echo "============================================="
echo "Bootstrap complete. Required next steps:"
echo "  1. Restore the kiosk web app to /home/pi/Desktop/conway.pointcloud.garden/"
echo "  2. Add your SSH public key to /home/pi/.ssh/authorized_keys"
echo "  3. Reboot to engage the hardware watchdog."
echo "  4. Verify: systemctl status matrix-controller && journalctl -t conway-health -n 5"
echo "  5. Smoke-test: press START button, then STOP button."
echo "============================================="
