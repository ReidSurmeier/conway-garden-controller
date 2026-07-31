# Display Mapping

**Current verified app-side state:** 2026-05-15

**Current hardware correction:** 2026-07-08
**Display chain:** Raspberry Pi 5 -> micro HDMI/DVI -> NovaStar MSD300-1
sender -> NovaStar NV3210 receiver -> six LED matrix panels

The app-side mapping evidence below is from the 2026-05-15 live verification.
The receiver-card name and panel count were corrected in the 2026-07-08 wiring
packet.

## Current Working App Mapping

The web app currently uses:

```text
canvas.width = 312
canvas.height = 416
xOffset = 416
yOffset = 0
rotation = 90
pointSize = 1
```

Live Chromium verification after deployment showed:

```text
window.innerWidth = 1920
window.innerHeight = 1080
script = assets/index-44cc2b1b.js?v=312x416-rot90-20260515
canvas backing store = 312x416
canvas client size = 312x416
visible bounding rect after transform = 416x312 at x=0, y=0
transform = rotate(90deg)
transform-origin = top left
```

This is the current canonical app-side mapping.

## What Happened During Debugging

An earlier assumption treated the wall as a 3 by 3 array of 128x64 panels,
or `384x192` logical pixels. That produced stretched/corrupt-looking output
and was later superseded.

Diagnostic pages used during service:

| Page | Purpose |
|---|---|
| `matrix-map-test.html` | Tests 384x192/480x192 scaling assumptions |
| `matrix-map-portrait.html` | Tests original 312x416 rotated geometry |
| `hdmi-region-test.html` | Full 1920x1080 coordinate pattern |
| `viewport-fill-test.html` | Forced low-resolution viewport/canvas test |

The final issue was identified as sender-card/NovaStar mapping, not a garden
script bug. After the sender-card mapping was corrected, the display worked.

## Do Not Revert To 384x192 Casually

Do not change the app defaults back to:

```text
width = 384
height = 192
pointSize = 5
rotation = 0
```

unless the NovaStar sender/receiver mapping is deliberately rebuilt and tested
against a diagnostic page.

## Boot/HDMI Notes

Current `/boot/firmware/config.txt` is snapshot in:

```text
system/boot-firmware-config.txt
```

There is also a historical file from the Pi at:

```text
system/home-pi-Documents-config.historical.txt
```

That historical file references a custom low-resolution HDMI mode around
`412x316`/`416x312`. Preserve it as evidence of earlier mapping work; do not
install it over the live boot config without a new test plan.

## Hardware Fault Distinction

Use this rule before editing software:

| Symptom | Likely cause |
|---|---|
| Fault follows the physical panel after moving panel | Panel/module/cable/power issue |
| Fault stays in same wall position | Receiver output, mapping, cable path, or power run |
| Fault appears only in Conway and not on solid tests | App/rendering issue |
| Full-screen coordinate pattern is wrong on panel but right on monitor | NovaStar mapping issue |

## Future NovaStar Preservation

If the service computer/software is available, export and commit/archive:

- Sender-card configuration
- Receiver-card configuration
- Screen/cabinet mapping
- Scan/config files
- Photos of the NovaLCT or equivalent mapping screens
- Version of the NovaStar software used

Store these alongside this repo and the gold SD-card image.
