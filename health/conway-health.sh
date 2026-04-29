#!/bin/bash
# Conway Garden — daily health snapshot.
# Writes a one-line OK/FAIL summary + detail to journal so a future
# conservator (or operator scrolling `journalctl -t conway-health`) can
# tell at a glance whether the piece has been healthy.

set -u

logger -t conway-health -p user.info -- "--- daily health snapshot ---"

fails=()

# 1. matrix-controller running?
if ! systemctl is-active --quiet matrix-controller.service; then
    fails+=("matrix-controller.service is not active")
fi

# 2. Has matrix-controller restarted excessively in the last 24 h?
nrestarts=$(systemctl show matrix-controller.service --property=NRestarts --value 2>/dev/null || echo "0")
if [ "${nrestarts:-0}" -gt 5 ]; then
    fails+=("matrix-controller has restarted ${nrestarts} times since last reset (>5)")
fi

# 3. Throttled / undervoltage?
throttled=$(vcgencmd get_throttled 2>/dev/null | sed 's/throttled=//')
if [ "${throttled:-0x0}" != "0x0" ]; then
    # Only flag CURRENTLY-active bits (low 4) — past events stay in upper bits.
    val=$((throttled & 0xF))
    if [ "$val" -ne 0 ]; then
        fails+=("vcgencmd get_throttled=${throttled} (active issues — undervoltage/throttle/freq-cap)")
    else
        logger -t conway-health -p user.info "throttled=${throttled} (historical only — currently OK)"
    fi
fi

# 4. CPU temp under 80 °C?
temp_c=$(awk '{printf "%.1f", $1/1000}' /sys/class/thermal/thermal_zone0/temp 2>/dev/null || echo "0")
temp_int=${temp_c%.*}
if [ "${temp_int:-0}" -ge 80 ]; then
    fails+=("CPU temp ${temp_c}°C >= 80°C")
fi

# 5. Disk < 85% full?
disk_pct=$(df / | awk 'NR==2 {gsub("%",""); print $5}')
if [ "${disk_pct:-0}" -ge 85 ]; then
    fails+=("/ is ${disk_pct}% full")
fi

# 6. Failed systemd units?
n_failed=$(systemctl --failed --no-legend 2>/dev/null | wc -l)
if [ "${n_failed:-0}" -gt 0 ]; then
    fails+=("${n_failed} failed systemd units")
fi

# 7. SD card I/O errors in this boot?
io_errs=$(dmesg --notime 2>/dev/null | grep -ciE "i/o error|mmc.*error|ext4-fs.*error" || true)
if [ "${io_errs:-0}" -gt 0 ]; then
    fails+=("${io_errs} disk/SD I/O errors in dmesg")
fi

if [ ${#fails[@]} -eq 0 ]; then
    logger -t conway-health -p user.info "OK — controller=$(systemctl is-active matrix-controller.service), temp=${temp_c}°C, disk=${disk_pct}%, throttled=${throttled}, restarts=${nrestarts}"
    exit 0
else
    for f in "${fails[@]}"; do
        logger -t conway-health -p user.warning -- "FAIL — $f"
    done
    logger -t conway-health -p user.warning "Summary: ${#fails[@]} health issue(s) detected"
    exit 1
fi
