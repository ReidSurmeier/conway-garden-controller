# Author:  Reid Surmeier
# Client:  Clement Valla
# Date:    2026 Feb 16th
#
# UPS monitoring module for power-loss detection.
import logging
from typing import Optional, Callable
from .gpio import UPSMonitor

logger = logging.getLogger(__name__)


class UPSController:
    """Manages UPS power-loss monitoring."""
    
    def __init__(self, mode: str = "disabled", pin: Optional[int] = None,
                 edge: str = "rising", callback: Optional[Callable[[], None]] = None,
                 shutdown_delay_s: float = 10.0, dry_run: bool = False):
        """
        Initialize UPS controller.
        
        Args:
            mode: "disabled" or "gpio"
            pin: GPIO pin number (required if mode="gpio")
            edge: "rising" or "falling" edge to trigger shutdown
            callback: Function to call when power loss detected
            shutdown_delay_s: Seconds power loss must remain asserted before shutdown
            dry_run: If True, log actions instead of executing
        """
        self.mode = mode
        self.dry_run = dry_run
        self.monitor: Optional[UPSMonitor] = None
        
        if mode == "gpio":
            if pin is None:
                raise ValueError("UPS pin must be specified when mode='gpio'")
            
            self.monitor = UPSMonitor(pin, edge, callback, shutdown_delay_s)
            logger.info(
                "UPS monitoring enabled: pin=%s, edge=%s, shutdown_delay_s=%.1f",
                pin, edge, shutdown_delay_s
            )
        elif mode == "disabled":
            logger.info("UPS monitoring disabled")
        else:
            raise ValueError(f"Invalid UPS mode: {mode}. Must be 'disabled' or 'gpio'")
    
    def close(self) -> None:
        """Clean up UPS monitoring resources."""
        if self.monitor:
            self.monitor.close()
        logger.debug("UPS controller closed")
