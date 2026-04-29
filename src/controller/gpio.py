# Author:  Reid Surmeier
# Client:  Clement Valla
# Date:    2026 Feb 16th
# Updated: 2026 Mar 10 — replaced gpiozero callbacks with lgpio polling threads.
#          gpiozero when_pressed callbacks silently fail on Pi 5 (RP1/gpiochip4)
#          with lgpio 0.2.2 + gpiozero 2.0.1. Direct lgpio polling is confirmed working.
#
# GPIO abstraction layer for buttons and relay control.
import lgpio
import logging
import threading
import time
from typing import Optional, Callable

logger = logging.getLogger(__name__)

CHIP = 4  # Pi 5 RP1 chip is /dev/gpiochip4

# Shared lgpio handle — one handle for the entire process
_handle: Optional[int] = None
_handle_lock = threading.Lock()


def get_handle() -> int:
    """
    Return a shared lgpio chip handle. Retries on transient EBUSY at startup
    (another process briefly holding /dev/gpiochip4). Fails loud after retries.
    """
    global _handle
    with _handle_lock:
        if _handle is not None:
            return _handle
        last_exc = None
        for attempt in range(1, 6):
            try:
                _handle = lgpio.gpiochip_open(CHIP)
                logger.info("lgpio handle opened for chip %d (attempt %d)", CHIP, attempt)
                return _handle
            except Exception as e:
                last_exc = e
                logger.warning("gpiochip_open(%d) failed (attempt %d/5): %s", CHIP, attempt, e)
                time.sleep(0.5 * attempt)  # 0.5s, 1s, 1.5s, 2s, 2.5s = 7.5s total
        logger.critical("gpiochip_open(%d) FAILED after 5 attempts: %s", CHIP, last_exc)
        raise RuntimeError(f"Cannot open /dev/gpiochip{CHIP}: {last_exc}")


class ButtonPoller:
    """
    Polls a GPIO input pin in a background thread and fires a callback on press.
    Press = pin goes LOW (pull-up enabled, button shorts to GND).
    Uses direct lgpio polling — required on Pi 5 where lgpio/gpiozero callbacks
    silently fail to fire.
    """

    def __init__(self, pin: int, debounce_s: float = 0.08,
                 callback: Optional[Callable[[], None]] = None):
        self.pin = pin
        self.debounce_s = debounce_s
        self.callback = callback
        self._stop = threading.Event()

        h = get_handle()
        lgpio.gpio_claim_input(h, pin, lgpio.SET_PULL_UP)
        logger.debug("ButtonPoller: claimed GPIO %d with pull-up", pin)

        self._thread = threading.Thread(
            target=self._poll_loop, daemon=True, name=f"btn-poll-{pin}"
        )
        self._thread.start()

    def _poll_loop(self):
        h = get_handle()
        last = 1       # idle state is HIGH
        last_press = 0.0

        while not self._stop.is_set():
            try:
                val = lgpio.gpio_read(h, self.pin)
            except Exception as e:
                logger.warning("ButtonPoller GPIO %d read error: %s", self.pin, e)
                time.sleep(0.1)
                continue

            if val == 0 and last == 1:
                now = time.monotonic()
                if now - last_press >= self.debounce_s:
                    last_press = now
                    if self.callback:
                        try:
                            self.callback()
                        except Exception as e:
                            logger.error("Button callback error on GPIO %d: %s", self.pin, e)

            last = val
            time.sleep(0.01)  # 10ms poll interval — fast enough for a button press

    def set_callback(self, callback: Callable[[], None]) -> None:
        self.callback = callback

    def close(self):
        self._stop.set()
        self._thread.join(timeout=1.0)
        try:
            lgpio.gpio_free(get_handle(), self.pin)
        except Exception:
            pass
        logger.debug("ButtonPoller GPIO %d closed", self.pin)


class GPIOController:
    """Manages GPIO pins for buttons and relay using direct lgpio."""

    def __init__(self, start_pin: int, stop_pin: int, relay_pin: int,
                 relay_active_high: bool = True, debounce_ms: float = 0.08):
        """
        Args:
            start_pin: GPIO pin for start button
            stop_pin:  GPIO pin for stop button
            relay_pin: GPIO pin for relay control
            relay_active_high: True = HIGH turns relay ON
            debounce_ms: Debounce time in seconds (confusingly named; expects seconds)
        """
        self.relay_pin = relay_pin
        self.relay_active_high = relay_active_high

        h = get_handle()

        # Relay output — start OFF
        off_val = 0 if relay_active_high else 1
        lgpio.gpio_claim_output(h, relay_pin, off_val)
        logger.debug("Relay claimed on GPIO %d (active_high=%s)", relay_pin, relay_active_high)

        # Button pollers
        self._start_poller = ButtonPoller(start_pin, debounce_s=debounce_ms)
        self._stop_poller  = ButtonPoller(stop_pin,  debounce_s=debounce_ms)

        logger.info("GPIO initialized: start=%d, stop=%d, relay=%d (active_high=%s)",
                    start_pin, stop_pin, relay_pin, relay_active_high)

    def set_relay(self, state: bool) -> None:
        """
        Turn relay ON (True) or OFF (False). Catches lgpio failures so a
        transient GPIO error never wedges the daemon — but logs CRITICAL so
        the operator/journal sees it. Re-raises after logging because callers
        (state machine) need to know if the write didn't land.
        """
        h = get_handle()
        if self.relay_active_high:
            value = 1 if state else 0
        else:
            value = 0 if state else 1
        try:
            lgpio.gpio_write(h, self.relay_pin, value)
            logger.info("Relay set to %s", "ON" if state else "OFF")
        except Exception as e:
            logger.critical(
                "RELAY WRITE FAILED on GPIO %d (state=%s): %s — physical relay state is UNKNOWN",
                self.relay_pin, "ON" if state else "OFF", e
            )
            raise

    def get_relay(self) -> bool:
        """Return current relay state (True = ON). Returns False on read failure (safe default)."""
        h = get_handle()
        try:
            val = lgpio.gpio_read(h, self.relay_pin)
        except Exception as e:
            logger.warning("Relay read failed on GPIO %d: %s — assuming OFF", self.relay_pin, e)
            return False
        return bool(val) if self.relay_active_high else not bool(val)

    def register_start_callback(self, callback: Callable[[], None]) -> None:
        self._start_poller.set_callback(callback)
        logger.debug("Start button callback registered")

    def register_stop_callback(self, callback: Callable[[], None]) -> None:
        self._stop_poller.set_callback(callback)
        logger.debug("Stop button callback registered")

    def close(self) -> None:
        self._start_poller.close()
        self._stop_poller.close()
        try:
            lgpio.gpio_free(get_handle(), self.relay_pin)
        except Exception:
            pass
        logger.debug("GPIO resources closed")


class UPSMonitor:
    """Monitors UPS power-loss signal via GPIO polling."""

    def __init__(self, pin: int, edge: str = "rising",
                 callback: Optional[Callable[[], None]] = None):
        """
        Args:
            pin:      GPIO pin for UPS mains-lost signal
            edge:     "rising" (mains lost = goes HIGH) or "falling" (mains lost = goes LOW)
            callback: Called when power loss detected
        """
        self.pin = pin
        self.edge = edge
        self.callback = callback
        self._stop = threading.Event()

        h = get_handle()
        # rising edge = mains lost is HIGH → use pull-down so idle reads LOW
        # falling edge = mains lost is LOW  → use pull-up  so idle reads HIGH
        pull = lgpio.SET_PULL_DOWN if edge == "rising" else lgpio.SET_PULL_UP
        lgpio.gpio_claim_input(h, pin, pull)

        self._thread = threading.Thread(
            target=self._poll_loop, daemon=True, name="ups-poll"
        )
        self._thread.start()
        logger.info("UPS monitor initialized: pin=%d, edge=%s", pin, edge)

    def _poll_loop(self):
        h = get_handle()
        # idle: rising→LOW(0), falling→HIGH(1)
        idle_val = 0 if self.edge == "rising" else 1
        last = idle_val
        last_trigger = 0.0
        debounce = 0.3

        while not self._stop.is_set():
            try:
                val = lgpio.gpio_read(h, self.pin)
            except Exception as e:
                logger.warning("UPS GPIO %d read error: %s", self.pin, e)
                time.sleep(0.1)
                continue

            triggered = (
                (self.edge == "rising"  and val == 1 and last == 0) or
                (self.edge == "falling" and val == 0 and last == 1)
            )
            if triggered:
                now = time.monotonic()
                if now - last_trigger >= debounce:
                    last_trigger = now
                    if self.callback:
                        try:
                            self.callback()
                        except Exception as e:
                            logger.error("UPS callback error: %s", e)

            last = val
            time.sleep(0.05)  # 50ms poll — fine for UPS power-loss detection

    def close(self) -> None:
        self._stop.set()
        self._thread.join(timeout=1.0)
        try:
            lgpio.gpio_free(get_handle(), self.pin)
        except Exception:
            pass
        logger.debug("UPS monitor closed")
