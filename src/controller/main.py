#!/usr/bin/env python3
# Author:  Reid Surmeier
# Client:  Clement Valla
# Date:    2026 Feb 16th
#
# Matrix Controller Daemon
# Controls LED matrix PSU via relay and manages matrix-led.service
import argparse
import atexit
import logging
import os
import signal
import socket
import sys
import threading
import time
import yaml
from pathlib import Path
from typing import Optional

from .state_machine import StateMachine, State
from .gpio import GPIOController
from .led_service import LEDService
from .ups import UPSController


def _sd_notify(msg: str) -> None:
    """Send a message to the systemd notify socket. No-op if not under systemd."""
    addr = os.environ.get("NOTIFY_SOCKET")
    if not addr:
        return
    if addr.startswith("@"):
        addr = "\0" + addr[1:]
    try:
        with socket.socket(socket.AF_UNIX, socket.SOCK_DGRAM) as s:
            s.sendto(msg.encode("utf-8"), addr)
    except Exception:
        pass


def _validate_pin(name: str, value, allow_none: bool = False) -> int:
    """BCM GPIO pin must be int in 0..53 (RP1 range on Pi 5)."""
    if value is None and allow_none:
        return None
    if not isinstance(value, int) or isinstance(value, bool):
        raise ValueError(f"Config error: {name} must be an integer, got {type(value).__name__}={value!r}")
    if not 0 <= value <= 53:
        raise ValueError(f"Config error: {name}={value} is not a valid Pi 5 GPIO (must be 0..53)")
    return value


# Pins owned by the Geekworm X1201 UPS HAT — must not be reassigned to
# the user buttons or the SSR. GPIO 2/3 = I²C bus (fuel gauge); GPIO 6 =
# PLD (power-loss-detect). The X1201's onboard pushbutton is on GPIO 3
# (Pi 5 wake pin, doubles as I²C SCL).
X1201_RESERVED_PINS = {2, 3, 6}


# Configure logging to journald (stdout)
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)


class MatrixController:
    """Main controller daemon."""
    
    def __init__(self, config_path: str, dry_run: bool = False):
        """
        Initialize matrix controller.
        
        Args:
            config_path: Path to YAML configuration file
            dry_run: If True, log actions instead of executing
        """
        self.dry_run = dry_run
        self.running = True
        self._lock = threading.Lock()  # Protects state transitions from concurrent callbacks
        self._ups_suppressed = False   # Suppresses false UPS triggers during intentional stop
        self._consecutive_errors = 0   # Main-loop error budget
        self.config = self._load_config(config_path)

        # Initialize components
        self.state_machine = StateMachine()
        self.gpio = None
        self.led_service = None
        self.ups = None

        self._initialize_components()

        # Register signal handlers
        signal.signal(signal.SIGTERM, self._signal_handler)
        signal.signal(signal.SIGINT, self._signal_handler)

        # Last-resort relay-OFF guarantee: runs on any normal interpreter exit,
        # including unhandled exceptions. SIGKILL bypasses this — for that we
        # rely on the systemd RuntimeWatchdog to power-cycle the Pi.
        atexit.register(self._atexit_safe)

        logger.info("Matrix controller initialized")
    
    def _load_config(self, config_path: str) -> dict:
        """Load and validate configuration from YAML file."""
        try:
            with open(config_path, 'r') as f:
                config = yaml.safe_load(f)
            if not isinstance(config, dict):
                raise ValueError("Top-level YAML must be a mapping")

            # Apply safe defaults
            config.setdefault('buttons', {})
            config['buttons'].setdefault('start_pin', 18)
            config['buttons'].setdefault('stop_pin', 19)
            config['buttons'].setdefault('debounce_ms', 80)

            config.setdefault('relay', {})
            config['relay'].setdefault('pin', 20)
            config['relay'].setdefault('active_high', True)

            config.setdefault('ups', {})
            config['ups'].setdefault('mode', 'disabled')
            config['ups'].setdefault('mains_lost_pin', 6)
            config['ups'].setdefault('edge', 'falling')
            config['ups'].setdefault('shutdown_delay_s', 10)

            config.setdefault('led_service', {})
            config['led_service'].setdefault('name', 'matrix-led.service')

            config.setdefault('logging', {})
            config['logging'].setdefault('level', 'INFO')

            # Strict schema validation — fail fast on bad config rather than crash deep in lgpio
            _validate_pin('buttons.start_pin', config['buttons']['start_pin'])
            _validate_pin('buttons.stop_pin',  config['buttons']['stop_pin'])
            _validate_pin('relay.pin',         config['relay']['pin'])
            if config['ups']['mode'] == 'gpio':
                _validate_pin('ups.mains_lost_pin', config['ups']['mains_lost_pin'])
            elif config['ups']['mode'] != 'disabled':
                raise ValueError(f"ups.mode must be 'disabled' or 'gpio', got {config['ups']['mode']!r}")

            debounce = config['buttons']['debounce_ms']
            if not isinstance(debounce, (int, float)) or debounce < 0 or debounce > 5000:
                raise ValueError(f"buttons.debounce_ms must be 0..5000, got {debounce!r}")

            if not isinstance(config['relay']['active_high'], bool):
                raise ValueError(f"relay.active_high must be true/false, got {config['relay']['active_high']!r}")

            if config['ups']['edge'] not in ('rising', 'falling'):
                raise ValueError(f"ups.edge must be 'rising' or 'falling', got {config['ups']['edge']!r}")

            shutdown_delay_s = config['ups']['shutdown_delay_s']
            if not isinstance(shutdown_delay_s, (int, float)) or shutdown_delay_s < 0 or shutdown_delay_s > 3600:
                raise ValueError(f"ups.shutdown_delay_s must be 0..3600 seconds, got {shutdown_delay_s!r}")

            # Pins must not collide
            pins_in_use = {
                'start': config['buttons']['start_pin'],
                'stop':  config['buttons']['stop_pin'],
                'relay': config['relay']['pin'],
            }
            if config['ups']['mode'] == 'gpio':
                pins_in_use['ups'] = config['ups']['mains_lost_pin']
            seen = {}
            for role, pin in pins_in_use.items():
                if pin in seen:
                    raise ValueError(f"GPIO {pin} assigned to both {seen[pin]} and {role}")
                seen[pin] = role

            # Buttons and relay must not collide with X1201-reserved pins.
            # The UPS itself is allowed to claim GPIO 6 for its PLD output.
            for role, pin in pins_in_use.items():
                if role == 'ups':
                    continue
                if pin in X1201_RESERVED_PINS:
                    raise ValueError(
                        f"GPIO {pin} (assigned to {role}) is reserved by the Geekworm X1201 UPS HAT "
                        f"(reserved: {sorted(X1201_RESERVED_PINS)}). Pick a different pin."
                    )

            # Set logging level
            log_level = getattr(logging, config['logging']['level'].upper(), logging.INFO)
            logging.getLogger().setLevel(log_level)

            logger.info(f"Configuration loaded and validated from {config_path}")
            return config

        except FileNotFoundError:
            logger.error(f"Configuration file not found: {config_path}")
            raise
        except yaml.YAMLError as e:
            logger.error(f"Error parsing YAML config: {e}")
            raise
        except Exception as e:
            logger.error(f"Error loading config: {e}")
            raise
    
    def _initialize_components(self) -> None:
        """Initialize GPIO, LED service, and UPS components."""
        try:
            # Initialize GPIO controller
            self.gpio = GPIOController(
                start_pin=self.config['buttons']['start_pin'],
                stop_pin=self.config['buttons']['stop_pin'],
                relay_pin=self.config['relay']['pin'],
                relay_active_high=self.config['relay']['active_high'],
                debounce_ms=self.config['buttons']['debounce_ms'] / 1000.0
            )
            
            # Initialize LED service
            self.led_service = LEDService(
                service_name=self.config['led_service']['name'],
                dry_run=self.dry_run
            )
            
            # Initialize UPS controller
            ups_mode = self.config['ups']['mode']
            ups_pin = self.config['ups'].get('mains_lost_pin') if ups_mode == 'gpio' else None
            ups_edge = self.config['ups'].get('edge', 'rising')
            ups_shutdown_delay_s = self.config['ups'].get('shutdown_delay_s', 10)
            
            self.ups = UPSController(
                mode=ups_mode,
                pin=ups_pin,
                edge=ups_edge,
                callback=self._on_ups_power_loss,
                shutdown_delay_s=ups_shutdown_delay_s,
                dry_run=self.dry_run
            )
            
            # Register button callbacks
            self.gpio.register_start_callback(self._on_start_button)
            self.gpio.register_stop_callback(self._on_stop_button)
            
            logger.info("All components initialized")
            
        except Exception as e:
            logger.error(f"Error initializing components: {e}")
            raise
    
    def startup(self) -> None:
        """
        Perform startup sequence:
        1. Force relay OFF
        2. Stop LED service
        3. Ensure state is IDLE
        """
        logger.info("Starting up matrix controller...")
        
        # Force relay OFF
        self.gpio.set_relay(False)
        logger.info("Relay forced OFF")
        
        # Stop LED service (idempotent)
        self.led_service.stop()
        logger.info("LED service stopped (if it was running)")
        
        # Ensure state is IDLE
        if not self.state_machine.is_idle():
            self.state_machine.transition_to_idle()
        
        logger.info("Startup sequence complete - controller in IDLE state")
    
    def _on_start_button(self) -> None:
        """Handle start button press."""
        logger.info("Start button pressed")

        with self._lock:
            if not self.state_machine.is_idle():
                logger.warning(f"Start button ignored - not in IDLE state (current: {self.state_machine.get_state().name})")
                return

            # Transition to RUNNING
            if not self.state_machine.transition_to_running():
                logger.error("Failed to transition to RUNNING state")
                return

            # Turn relay ON
            self.gpio.set_relay(True)

            # Start LED service
            if not self.led_service.start():
                logger.error("Failed to start LED service - reverting to IDLE")
                self.gpio.set_relay(False)
                self.state_machine.transition_to_idle()
                return

            logger.info("System started: relay ON, LED service running")

    def _on_stop_button(self) -> None:
        """Handle stop button press."""
        logger.info("Stop button pressed")

        with self._lock:
            if not self.state_machine.is_running():
                logger.info("Stop button ignored - not in RUNNING state (no-op)")
                return

            # Suppress UPS signals BEFORE any hardware changes.
            # Turning the relay off / stopping the LED service causes power-draw
            # transients that the Geekworm X1201 UPS can misread as mains loss,
            # which would trigger an unwanted emergency shutdown.
            self._ups_suppressed = True

            # Transition to IDLE first so the UPS callback (if it somehow
            # fires and acquires the lock) sees a non-RUNNING state.
            self.state_machine.transition_to_idle()

            # Now safe to power down hardware
            self.led_service.stop()
            self.gpio.set_relay(False)

            logger.info("System stopped: relay OFF, LED service stopped")

        # Release suppression after transients settle
        def _release_suppression():
            time.sleep(3.0)
            self._ups_suppressed = False
            logger.debug("UPS suppression released after cooldown")

        threading.Thread(target=_release_suppression, daemon=True).start()

    def _on_ups_power_loss(self) -> None:
        """Handle UPS power-loss event."""
        logger.critical("UPS power-loss detected!")

        # Check suppression BEFORE acquiring the lock.
        # During an intentional stop, the relay/service powering down causes
        # transients that the Geekworm X1201 misreads as mains power loss.
        if self._ups_suppressed:
            logger.warning("UPS power-loss ignored - suppressed during intentional stop")
            return

        with self._lock:
            # Power loss can drain the UPS even while the artwork is idle, so
            # halt from any state. Stop-button transients are handled by the
            # short _ups_suppressed window above.
            self.state_machine.transition_to_emergency_shutdown()

            # Stop LED service
            self.led_service.stop()

            # Ensure relay is OFF
            self.gpio.set_relay(False)

        # Execute shutdown outside lock — this doesn't return
        logger.critical("Executing system shutdown for safe halt...")
        if not self.dry_run:
            import subprocess
            try:
                subprocess.run(["shutdown", "-h", "now"], check=True, timeout=5)
            except Exception as e:
                logger.error(f"Failed to execute shutdown: {e}")
        else:
            logger.info("[DRY RUN] Would execute: shutdown -h now")
    
    def _signal_handler(self, signum, frame) -> None:
        """Handle termination signals."""
        logger.info(f"Received signal {signum}, shutting down...")
        self.running = False
    
    def run(self) -> None:
        """Main daemon loop."""
        logger.info("Matrix controller daemon started")

        # Perform startup sequence
        self.startup()

        # Notify systemd we're ready (Type=notify); harmless under Type=simple.
        _sd_notify("READY=1")
        _sd_notify("STATUS=Idle - waiting for button presses")

        # Main loop - event-driven with watchdog tick
        watchdog_interval = 5.0  # seconds
        last_watchdog = time.time()
        ERROR_BUDGET = 10  # consecutive main-loop errors before giving up

        while self.running:
            try:
                # Watchdog tick - verify state consistency
                now = time.time()
                if now - last_watchdog >= watchdog_interval:
                    self._watchdog_tick()
                    last_watchdog = now
                    # Heartbeat to systemd's WatchdogSec timer.
                    _sd_notify("WATCHDOG=1")

                # Reset error counter on any clean iteration
                self._consecutive_errors = 0

                # Small sleep to prevent CPU spinning
                time.sleep(0.1)

            except KeyboardInterrupt:
                logger.info("Keyboard interrupt received")
                break
            except Exception as e:
                self._consecutive_errors += 1
                logger.error(
                    f"Error in main loop ({self._consecutive_errors}/{ERROR_BUDGET}): {e}",
                    exc_info=True,
                )
                if self._consecutive_errors >= ERROR_BUDGET:
                    logger.critical(
                        "Main-loop error budget exhausted — exiting so systemd can restart us"
                    )
                    _sd_notify("STATUS=Crashing - error budget exhausted")
                    break
                time.sleep(1)  # Prevent tight error loop

        # Cleanup
        self.shutdown()
    
    def _watchdog_tick(self) -> None:
        """Periodic watchdog check for state consistency."""
        with self._lock:
            current_state = self.state_machine.get_state()

            # In RUNNING state, verify service is actually running
            if current_state == State.RUNNING:
                if not self.led_service.is_active():
                    logger.warning("State is RUNNING but LED service is not active - correcting state")
                    self.gpio.set_relay(False)
                    self.state_machine.transition_to_idle()

            # In IDLE state, verify service is stopped and relay is OFF
            elif current_state == State.IDLE:
                if self.led_service.is_active():
                    logger.warning("State is IDLE but LED service is active - stopping service")
                    self.led_service.stop()

                if self.gpio.get_relay():
                    logger.warning("State is IDLE but relay is ON - turning relay OFF")
                    self.gpio.set_relay(False)

            logger.debug(f"Watchdog tick: state={current_state.name}, "
                        f"relay={'ON' if self.gpio.get_relay() else 'OFF'}, "
                        f"service_active={self.led_service.is_active()}")
    
    def shutdown(self) -> None:
        """Cleanup on daemon shutdown."""
        logger.info("Shutting down matrix controller...")
        _sd_notify("STOPPING=1")

        # Stop LED service (best-effort)
        if self.led_service:
            try:
                self.led_service.stop()
            except Exception as e:
                logger.error(f"Error stopping LED service during shutdown: {e}")

        # Turn relay OFF (best-effort — atexit will catch any miss)
        if self.gpio:
            try:
                self.gpio.set_relay(False)
            except Exception as e:
                logger.error(f"Error forcing relay OFF during shutdown: {e}")

        # Close GPIO resources
        if self.gpio:
            try:
                self.gpio.close()
            except Exception as e:
                logger.error(f"Error closing GPIO during shutdown: {e}")

        # Close UPS monitor
        if self.ups:
            try:
                self.ups.close()
            except Exception as e:
                logger.error(f"Error closing UPS monitor during shutdown: {e}")

        logger.info("Matrix controller shutdown complete")

    def _atexit_safe(self) -> None:
        """Last-resort relay-OFF guarantee. Runs on any normal interpreter exit."""
        try:
            if self.gpio is not None:
                self.gpio.set_relay(False)
        except Exception:
            # We're exiting — log to stderr directly, logging may already be torn down.
            try:
                sys.stderr.write("atexit: failed to force relay OFF\n")
            except Exception:
                pass


def main():
    """Entry point."""
    parser = argparse.ArgumentParser(description="Matrix Controller Daemon")
    parser.add_argument(
        '--config',
        type=str,
        default='/etc/matrix-controller/controller.yaml',
        help='Path to configuration file (default: /etc/matrix-controller/controller.yaml)'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Dry-run mode: log actions instead of executing'
    )
    
    args = parser.parse_args()
    
    # Check if config file exists
    if not Path(args.config).exists():
        logger.error(f"Configuration file not found: {args.config}")
        logger.error("Please create the configuration file or specify a different path with --config")
        sys.exit(1)
    
    try:
        controller = MatrixController(args.config, dry_run=args.dry_run)
        controller.run()
    except KeyboardInterrupt:
        logger.info("Interrupted by user")
        sys.exit(0)
    except Exception as e:
        logger.error(f"Fatal error: {e}", exc_info=True)
        sys.exit(1)


if __name__ == '__main__':
    main()
