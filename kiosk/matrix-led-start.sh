#!/bin/bash
# Matrix LED start script — runs as `pi` user via matrix-led.service.
# Triggered when matrix-controller flips the relay ON.
#
# Conservation notes:
#  - Disables screen blanking + DPMS so the kiosk never goes black.
#  - Suppresses Chromium's crash-recovery bubble and "restore session" prompts
#    so a power-cut never leaves a half-broken UI on next launch.
#  - Tracks our own PIDs and only kills our own processes (no greedy pkill).
#  - Waits up to 30 s for the HTTP server to come up before launching Chromium.

set -u

PROJECT_PATH="${PROJECT_PATH:-$HOME/Desktop/conway.pointcloud.garden}"
LOG_FILE="${LOG_FILE:-$HOME/conway_startup.log}"
HTTP_PORT="${HTTP_PORT:-8000}"
PIDFILE_DIR="${PIDFILE_DIR:-$HOME/.local/run/conway}"
mkdir -p "$PIDFILE_DIR"
HTTP_PIDFILE="$PIDFILE_DIR/http.pid"
CHROME_PIDFILE="$PIDFILE_DIR/chrome.pid"

log() { printf '%s %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$1" | tee -a "$LOG_FILE"; }
err() { log "ERROR: $1"; }

cleanup() {
    log "matrix-led-start: stopping (cleanup)"
    for pf in "$CHROME_PIDFILE" "$HTTP_PIDFILE"; do
        if [ -f "$pf" ]; then
            pid="$(cat "$pf" 2>/dev/null || true)"
            if [ -n "${pid:-}" ] && kill -0 "$pid" 2>/dev/null; then
                kill -TERM "$pid" 2>/dev/null || true
                # give it 3 s, then SIGKILL
                for _ in 1 2 3; do kill -0 "$pid" 2>/dev/null || break; sleep 1; done
                kill -KILL "$pid" 2>/dev/null || true
            fi
            rm -f "$pf"
        fi
    done
}
trap cleanup EXIT INT TERM

log "matrix-led-start: starting"

cd "$PROJECT_PATH" || { err "directory not found: $PROJECT_PATH"; exit 1; }

# Reap any leftovers from a previous run (own PIDs only).
cleanup_prior() {
    for pf in "$HTTP_PIDFILE" "$CHROME_PIDFILE"; do
        [ -f "$pf" ] || continue
        pid="$(cat "$pf" 2>/dev/null || true)"
        if [ -n "${pid:-}" ] && kill -0 "$pid" 2>/dev/null; then
            log "killing stale PID $pid from $pf"
            kill -TERM "$pid" 2>/dev/null || true
        fi
        rm -f "$pf"
    done
}
cleanup_prior

# Wait briefly for X to be available (DISPLAY can be set by systemd unit).
: "${DISPLAY:=:0}"
export DISPLAY

# Disable screen blanking / DPMS for kiosk operation. Best-effort — if
# xset isn't available or X isn't ready yet, we keep going.
if command -v xset >/dev/null 2>&1; then
    xset s off       2>/dev/null || true
    xset s noblank   2>/dev/null || true
    xset -dpms       2>/dev/null || true
    log "screen-blanking disabled (xset)"
fi

# Start HTTP server
python3 -m http.server "$HTTP_PORT" >/dev/null 2>&1 &
SERVER_PID=$!
echo "$SERVER_PID" > "$HTTP_PIDFILE"
log "HTTP server started (PID: $SERVER_PID, port: $HTTP_PORT)"

# Wait for server ready (up to 30 s) — the network stack or DNS could be slow
# right after boot.
ready=0
for i in $(seq 1 30); do
    if curl -sf -m 1 "http://localhost:$HTTP_PORT/" >/dev/null 2>&1; then
        ready=1
        log "HTTP server is responding (after ${i}s)"
        break
    fi
    sleep 1
done
if [ "$ready" -ne 1 ]; then
    err "HTTP server did not respond on port $HTTP_PORT within 30s"
    exit 1
fi

# Sanitize Chromium state so a previous unclean exit (or a hostname change)
# can't block launch. Three failure modes covered:
#  1. Crash bubble / "didn't shut down correctly" prompt — patch Preferences.
#  2. Stale Singleton* lock files referencing a previous hostname — delete them.
#     Chromium embeds the hostname in SingletonLock; renaming the host makes
#     it think "another computer" still holds the profile and refuses to start.
#  3. Profile lock orphan from a previous Chromium that we kill -KILL'd.
CHROMIUM_PROFILE="$HOME/.config/chromium"
if [ -d "$CHROMIUM_PROFILE/Default" ]; then
    sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/g' \
        "$CHROMIUM_PROFILE/Default/Preferences" 2>/dev/null || true
    sed -i 's/"exited_cleanly":false/"exited_cleanly":true/g' \
        "$CHROMIUM_PROFILE/Default/Preferences" 2>/dev/null || true
fi
# Remove stale singleton locks (idempotent — they get recreated on launch).
rm -f "$CHROMIUM_PROFILE/SingletonLock" \
      "$CHROMIUM_PROFILE/SingletonCookie" \
      "$CHROMIUM_PROFILE/SingletonSocket" 2>/dev/null || true

KIOSK_URL="http://localhost:$HTTP_PORT/?v=$(date +%s)"
log "Launching Chromium kiosk -> $KIOSK_URL"

chromium-browser \
    --kiosk \
    --start-fullscreen \
    --window-position=0,0 \
    --window-size=1920,1080 \
    --force-device-scale-factor=1 \
    --high-dpi-support=1 \
    --noerrdialogs \
    --no-first-run \
    --no-default-browser-check \
    --disable-infobars \
    --disable-restore-session-state \
    --disable-session-crashed-bubble \
    --disable-translate \
    --disable-features=TranslateUI,Translate \
    --disable-component-update \
    --disable-pinch \
    --overscroll-history-navigation=0 \
    --disable-ipc-flooding-protection \
    --disable-background-timer-throttling \
    --disable-renderer-backgrounding \
    --disable-backgrounding-occluded-windows \
    --disable-field-trial-config \
    --check-for-update-interval=31536000 \
    --autoplay-policy=no-user-gesture-required \
    --remote-debugging-port=9222 \
    --remote-debugging-address=127.0.0.1 \
    --remote-allow-origins=http://127.0.0.1:9222,http://localhost:9222 \
    "$KIOSK_URL" >/dev/null 2>&1 &

CHROME_PID=$!
echo "$CHROME_PID" > "$CHROME_PIDFILE"
log "Chromium launched (PID: $CHROME_PID)"

# Wait for either child to exit. If Chromium crashes, the unit's ExecStopPost
# will run cleanup and systemd will let matrix-controller decide whether to
# restart us via the watchdog tick.
wait -n "$SERVER_PID" "$CHROME_PID"
exit_code=$?
log "matrix-led-start: a child exited (code $exit_code) — falling out for cleanup"
exit "$exit_code"
