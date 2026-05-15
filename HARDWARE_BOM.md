# Hardware BoM

**Current source status:** verified against the 2026-05-15 live system and the
V4 supply spreadsheet. Spreadsheet notes are historical where they conflict
with verified Pi behavior.

Spreadsheet source:
https://docs.google.com/spreadsheets/d/1t827FBauN-OOxP_h4DBD_ax0KM9MAw7U8CcPHHLapTA/edit?usp=sharing

## Core Electronics

| Component | Qty | Function | Replaceability / notes |
|---|---:|---|---|
| Raspberry Pi 5 | 1 | Runs controller daemon and Chromium kiosk | Replace with Pi 5 preferred. Other models may need GPIO chip changes. |
| MicroSD card, 64 GB A2 or better | 1 | System disk | Replace from gold image. Industrial/endurance card preferred. |
| Geekworm X1201 | 1 | UPS HAT and wall-power-loss PLD signal | Replace only with UPS that exposes an equivalent power-loss GPIO. |
| Samsung 30Q 3.7 V flat-top 3000 mAh cells | As required by X1201 | UPS battery pack | Must match X1201 battery requirements and safety guidance. |
| GPIO screw terminal block breakout | 1 | Stable wiring to Pi header | Replaceable with equivalent Pi 5 header breakout. |
| APIELE momentary push button | 2 in final system | START and STOP inputs | Any normally-open momentary switch can replace. |
| LCLCTC DIN rail solid-state relay | 1 | Switches display power/load path | Replace with equivalent SSR/relay rated for the load. Update `relay.active_high` if needed. |
| MEAN WELL LRS-150F | 1 | Display/LED power supply | Replace with equivalent 5 V supply with adequate current and physical fit. |
| Blue Sea Systems 5025 ST blade fuse block | 1 | Fused distribution | Replaceable with equivalent fuse block. |
| ATC-3 ATC blade fuse | As needed | Branch fuse | Replace with the same rating unless wiring/load is redesigned. |
| UL489 circuit breaker | 1 | Input/load protection | Replace with same rating/type unless power design is reviewed. |
| 22 AWG stranded wire | As needed | Low-voltage wiring | Match current capacity, insulation, and routing. |
| Lever nuts / terminal blocks | As needed | Serviceable splices and distribution | Replace with equivalent rated connectors. |
| XHF adhesive cable tie mounts | As needed | Strain relief/cable management | Replaceable. |
| Crimping tool kit | 1 | Build/service tool | Not part of artwork runtime. |
| Noctua NF-A4x10 | 2 | Quiet cooling option | Replace with equivalent 40 mm fan if cooling is needed. Verify airflow and noise. |

## Display Chain

| Component | Qty | Function | Replaceability / notes |
|---|---:|---|---|
| NovaStar MSD300-1 sender card | 1 | Receives HDMI/DVI source and sends data to LED receiver chain | Replaceable with compatible NovaStar sender, but mapping must be reverified. Export config if possible. |
| NovaStar MRV412 receiver card | 1+ | Drives LED modules/panels | Replaceable with compatible receiver card only with saved config or remapping. |
| LED panels/modules | As installed | Display surface | Replace panel/module after isolating ribbon cable, power, receiver output, and sender mapping. |
| Ribbon/data cables | As installed | Panel data path | Keep spares. Many color/stripe faults are cable/connector issues. |
| Panel power leads | As installed | Panel power path | Keep spares. Check voltage drop and terminal tightness. |

## Verified GPIO/Wiring

| Function | BCM GPIO | Header pin | Signal |
|---|---:|---:|---|
| START button | 18 | 12 | Press pulls LOW to GND |
| STOP button | 19 | 35 | Press pulls LOW to GND |
| Relay/SSR control | 20 | 38 | Active high |
| X1201 PLD | 6 | 31 | HIGH = wall power OK, LOW = wall power lost |

## Superseded Spreadsheet Notes

The spreadsheet includes older controller assumptions. These are superseded:

- UPS mains-lost GPIO is not GPIO21. The verified X1201 PLD pin is BCM GPIO6.
- Shutdown button language is outdated. STOP turns display power/service off;
  it does not halt the Pi.
- The verified safe shutdown is triggered by X1201 wall-power loss after a
  sustained 10-second confirmation window.
- Display mapping is now sender-card verified and documented in
  `DISPLAY_MAPPING.md`.

## Spares Recommended For Collector Box

- Spare flashed SD card or compressed gold image on archival storage
- Spare ATC fuses
- Spare ribbon/data cables
- Spare low-voltage power leads/connectors
- Spare button
- Spare Pi 5 power/input cable as applicable
- Printed wiring photos
- Printed quick-start and troubleshooting sheet
- USB/Ethernet adapter and Ethernet cable for direct service SSH
