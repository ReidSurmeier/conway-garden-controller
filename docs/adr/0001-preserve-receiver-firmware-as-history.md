# ADR 0001: Preserve receiver firmware as historical evidence

- Status: Accepted
- Date: 2026-07-31

## Context

The repository's `screen_config/` directory contains a NovaStar MRV412
firmware and configuration package added on 2026-07-21. That package does not
carry installation evidence tying it to the current artwork hardware.

The current hardware identity was resolved separately. On 2026-07-08, the
receiver was explicitly corrected to a NovaStar NV3210 and the client wiring
packet was rebuilt around that correction. On 2026-07-21, the Point2
Replacement Installation rendered the documented 312 by 416 canvas through
the preserved NovaStar mapping. Nothing in that live test reclassified the
receiver as an MRV412.

Deleting the firmware would discard provenance. Calling it current would
contradict the resolved Display Chain and could cause a future maintainer to
flash incompatible firmware.

## Decision

Keep `screen_config/` byte-preserved as Historical Receiver Firmware. Its
presence does not identify the installed receiver.

The current Display Chain names the NovaStar NV3210. The MRV412 package must
not be deployed, flashed, or used to revise the current wiring record without
new physical identification and a reviewed recovery plan.

## Consequences

- The repository retains potentially useful service history without
  presenting it as an active configuration.
- Current documentation and diagrams use NV3210 terminology.
- Future receiver changes require fresh Live Installation Evidence.
- The historical package remains outside automated installation paths.
