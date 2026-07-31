#!/bin/bash
#
# bootstrap.sh — restore a Conway Garden Pi 5 from a fresh Raspberry Pi OS
# Bookworm install. Run as root after `git clone` of this repo.
#
# Pre-req:
#   1. Pi 5 with fresh Raspberry Pi OS Bookworm 64-bit (Lite or Desktop).
#   2. The kiosk user exists and has graphical autologin enabled.
#   3. This repo cloned somewhere accessible.
#   4. This repo includes kiosk-app/ with the static web app.
#
# Run with:
#   sudo bash scripts/bootstrap.sh
#   sudo CONWAY_USER=reid CONWAY_HOSTNAME=point2 bash scripts/bootstrap.sh
#
set -e

if [ "$EUID" -ne 0 ]; then
    echo "Error: must be run as root (sudo)"
    exit 1
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONWAY_USER="${CONWAY_USER:-pi}"
if ! id "$CONWAY_USER" >/dev/null 2>&1; then
    echo "Error: kiosk user does not exist: $CONWAY_USER"
    exit 1
fi
CONWAY_GROUP="${CONWAY_GROUP:-$(id -gn "$CONWAY_USER")}"
CONWAY_HOME="${CONWAY_HOME:-$(getent passwd "$CONWAY_USER" | cut -d: -f6)}"
CONWAY_HOSTNAME="${CONWAY_HOSTNAME:-conway-garden-1}"
case "$CONWAY_HOME" in
    /*) ;;
    *)
        echo "Error: kiosk home must be an absolute path: $CONWAY_HOME"
        exit 1
        ;;
esac
echo "Bootstrap from $REPO_ROOT"
echo "Installation profile: user=$CONWAY_USER group=$CONWAY_GROUP home=$CONWAY_HOME hostname=$CONWAY_HOSTNAME"
echo ""

# 1. Install the controller (apt deps + Python package + systemd unit).
echo "=== 1. Installing matrix-controller ==="
bash "$REPO_ROOT/scripts/install.sh"
echo ""

# 2. Install the kiosk start script + service + web app.
echo "=== 2. Installing kiosk start script + web app ==="
install -d -m 0755 -o "$CONWAY_USER" -g "$CONWAY_GROUP" "$CONWAY_HOME/Desktop"
install -m 0755 -o "$CONWAY_USER" -g "$CONWAY_GROUP" \
    "$REPO_ROOT/kiosk/matrix-led-start.sh" "$CONWAY_HOME/Desktop/matrix-led-start.sh"
python3 "$REPO_ROOT/scripts/render_kiosk_service.py" \
    --user "$CONWAY_USER" \
    --group "$CONWAY_GROUP" \
    --home "$CONWAY_HOME" \
    --output /etc/systemd/system/matrix-led.service
chmod 0644 /etc/systemd/system/matrix-led.service
if [ -d "$REPO_ROOT/kiosk-app" ]; then
    KIOSK_DEST="$CONWAY_HOME/Desktop/conway.pointcloud.garden"
    rm -rf "$KIOSK_DEST"
    cp -r "$REPO_ROOT/kiosk-app" "$KIOSK_DEST"
    rm -f "$KIOSK_DEST/README.md"   # repo doc, not part of the running app
    chown -R "$CONWAY_USER:$CONWAY_GROUP" "$KIOSK_DEST"
    echo "  kiosk web app restored to $KIOSK_DEST"
else
    echo "  WARNING: $REPO_ROOT/kiosk-app missing — the kiosk will load a blank page"
fi
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

# 4. Enable the I2C sensor bus and preserve boot config reference.
echo "=== 4. Boot display and sensor config ==="
if [ -f /boot/firmware/config.txt ]; then
    if grep -q "^#dtparam=i2c_arm=on" /boot/firmware/config.txt; then
        sed -i 's/^#dtparam=i2c_arm=on/dtparam=i2c_arm=on/' /boot/firmware/config.txt
    elif ! grep -q "^dtparam=i2c_arm=on" /boot/firmware/config.txt; then
        printf '\n# Conway enclosure temp/humidity sensor bus\ndtparam=i2c_arm=on\n' >> /boot/firmware/config.txt
    fi
    modprobe i2c-dev 2>/dev/null || true
    dtparam i2c_arm=on 2>/dev/null || true
fi
if [ -f "$REPO_ROOT/system/boot-firmware-config.txt" ]; then
    echo "  Reference boot config is in system/boot-firmware-config.txt"
fi
echo ""

# 5. Health check.
echo "=== 5. Installing health check ==="
install -m 0755 "$REPO_ROOT/health/conway-health.sh"     /usr/local/bin/conway-health.sh
install -m 0644 "$REPO_ROOT/health/conway-health.service" /etc/systemd/system/conway-health.service
install -m 0644 "$REPO_ROOT/health/conway-health.timer"   /etc/systemd/system/conway-health.timer
systemctl daemon-reload
systemctl enable --now conway-health.timer
echo ""

# 6. Disable LXDE screensaver autostart (kiosk doesn't want it).
echo "=== 6. Disabling LXDE screensaver autostart ==="
LXDE_AUTOSTART=/etc/xdg/lxsession/LXDE-pi/autostart
if [ -f "$LXDE_AUTOSTART" ] && grep -q "^@xscreensaver" "$LXDE_AUTOSTART"; then
    sed -i 's|^@xscreensaver|# @xscreensaver  # disabled for kiosk conservation|' "$LXDE_AUTOSTART"
fi
echo ""

# 7. Disable background services that create drift or false failures.
echo "=== 7. Disabling background drift/noise services ==="
systemctl disable --now apt-daily.timer apt-daily-upgrade.timer \
    apt-daily.service apt-daily-upgrade.service unattended-upgrades.service 2>/dev/null || true
systemctl disable --now NetworkManager-wait-online.service 2>/dev/null || true
systemctl disable --now cups.service cups.socket cups.path cups-browsed.service \
    bluetooth.service ModemManager.service triggerhappy.service triggerhappy.socket \
    wayvnc-control.service 2>/dev/null || true
systemctl mask --now packagekit.service packagekit-offline-update.service \
    udisks2.service 2>/dev/null || true
ln -sf /dev/null /etc/udev/rules.d/60-triggerhappy.rules
udevadm control --reload 2>/dev/null || true
echo ""

# 8. Set hostname.
echo "=== 8. Setting hostname ==="
if [ "$(hostnamectl --static)" != "$CONWAY_HOSTNAME" ]; then
    OLD_HOSTNAME="$(hostname)"
    hostnamectl set-hostname "$CONWAY_HOSTNAME"
    sed -i "s/$OLD_HOSTNAME/$CONWAY_HOSTNAME/g" /etc/hosts || true
fi
echo ""

echo "============================================="
echo "Bootstrap complete. Required next steps:"
echo "  1. Add your SSH public key to $CONWAY_HOME/.ssh/authorized_keys"
echo "  2. Review /boot/firmware/config.txt against system/boot-firmware-config.txt"
echo "  3. Reboot to engage the hardware watchdog."
echo "  4. Verify: systemctl status matrix-controller && journalctl -t conway-health -n 5"
echo "  5. Smoke-test: press START button, then STOP button."
echo "============================================="
