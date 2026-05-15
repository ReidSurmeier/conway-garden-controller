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

# 5. Optional AHT20 enclosure temp/humidity sensor.
aht20_log=""
if [ -e /dev/i2c-1 ]; then
    aht20_log=$(python3 - <<'PY' 2>/dev/null || true
import sys
import time

try:
    import smbus
except Exception:
    sys.exit(0)

ADDR = 0x38
try:
    bus = smbus.SMBus(1)
    time.sleep(0.05)
    status = bus.read_byte(ADDR)
    if not (status & 0x08):
        bus.write_i2c_block_data(ADDR, 0xBE, [0x08, 0x00])
        time.sleep(0.02)
    bus.write_i2c_block_data(ADDR, 0xAC, [0x33, 0x00])
    time.sleep(0.10)
    for _ in range(10):
        data = bus.read_i2c_block_data(ADDR, 0x00, 6)
        if not (data[0] & 0x80):
            break
        time.sleep(0.02)
    else:
        sys.exit(0)
except OSError:
    sys.exit(0)

raw_h = ((data[1] << 12) | (data[2] << 4) | (data[3] >> 4))
raw_t = (((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5])
humidity = raw_h * 100.0 / 1048576.0
temp_c = raw_t * 200.0 / 1048576.0 - 50.0
print(f", enclosure_temp={temp_c:.1f}C, enclosure_humidity={humidity:.1f}%RH")
PY
)
fi

# 6. Disk < 85% full?
disk_pct=$(df / | awk 'NR==2 {gsub("%",""); print $5}')
if [ "${disk_pct:-0}" -ge 85 ]; then
    fails+=("/ is ${disk_pct}% full")
fi

# 7. Failed systemd units?
#
# Ignore conway-health.service itself so one bad snapshot does not permanently
# poison future snapshots. NetworkManager-wait-online is also non-critical for
# this appliance: direct Ethernet and Wi-Fi fallback are managed explicitly.
failed_units=$(systemctl --failed --no-legend 2>/dev/null \
    | awk '{print $1}' \
    | grep -Ev '^(conway-health\.service|NetworkManager-wait-online\.service)$' \
    || true)
n_failed=$(printf '%s\n' "$failed_units" | awk 'NF {n++} END {print n+0}')
if [ "${n_failed:-0}" -gt 0 ]; then
    failed_list=$(printf '%s\n' "$failed_units" | awk 'NF {printf "%s%s", sep, $1; sep=", "}')
    fails+=("${n_failed} failed systemd units: ${failed_list}")
fi

# 8. SD card I/O errors in this boot?
io_errs=$(dmesg --notime 2>/dev/null | grep -ciE "i/o error|mmc.*error|ext4-fs.*error" || true)
if [ "${io_errs:-0}" -gt 0 ]; then
    fails+=("${io_errs} disk/SD I/O errors in dmesg")
fi

if [ ${#fails[@]} -eq 0 ]; then
    logger -t conway-health -p user.info "OK — controller=$(systemctl is-active matrix-controller.service), temp=${temp_c}°C, disk=${disk_pct}%, throttled=${throttled}, restarts=${nrestarts}${aht20_log}"
    exit 0
else
    for f in "${fails[@]}"; do
        logger -t conway-health -p user.warning -- "FAIL — $f"
    done
    logger -t conway-health -p user.warning "Summary: ${#fails[@]} health issue(s) detected"
    exit 1
fi
