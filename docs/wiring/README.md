# Conway Pointcloud Garden Wiring Diagram

This directory contains the WireViz source, rendered WireViz client outputs,
and legacy review helpers for the Conway Pointcloud Garden control box.

## Files

- `conway-garden-client-overview.yml` - primary WireViz source and BOM model.
- `out/conway-garden-client-overview.html` - rendered WireViz diagram and BOM.
- `out/conway-garden-client-overview.pdf` - generated PDF from the WireViz SVG.
- `out/conway-garden-client-overview.svg` - rendered simplified WireViz vector diagram.
- `out/conway-garden-client-overview.png` - rendered simplified WireViz raster diagram.
- `out/conway-garden-client-overview.bom.tsv` - rendered simplified WireViz BOM.
- `client-print.html` - legacy compact review page, not the primary client diagram.
- `out/conway-garden-client-print.pdf` - legacy compact review PDF.
- `client-overview.html` - compatibility handoff page.
- `conway-garden-control-box.yml` - older detailed fabrication draft, retained as legacy reference only.
- `readable.html` - cropped review view for the older detailed draft.

## Basis

The drawing follows the verified controller repo wiring contract:

- START button: BCM GPIO18 / physical pin 12, press pulls LOW.
- STOP button: BCM GPIO19 / physical pin 35, press pulls LOW.
- Relay or SSR control: BCM GPIO20 / physical pin 38, active high.
- Geekworm X1201 PLD: BCM GPIO6 / physical pin 31, HIGH on wall power, LOW on wall-power loss.
- Wall power loss triggers shutdown only after the configured 10 second confirmation delay.

The client wiring packet follows the supplied build note and the current
hardware correction:

- 120 V AC three-prong input enters the fused inlet and line breaker.
- Ground lands on the green case-bonded terminal block and connects ground to both power supplies.
- The controller 5 V PSU stays on and feeds the fuse box for the X1201/Pi, MSD300-1, NV3210, and three enclosure fans.
- The relay switches the separate LED-panel 5 V PSU only, so STOP/display-off does not cut Pi power.
- The LED-panel PSU feeds six LED matrix panels directly.
- The Adafruit AHT20 sensor attaches to the Pi I2C bus and provides the enclosure temperature used for fan control.
- The three fans use protected 5 V fan power branches; the Pi GPIO fan-control harness is the control path.
- The display path is Raspberry Pi micro HDMI to DVI, NovaStar MSD300-1 sender, one Ethernet cable, NovaStar NV3210 receiver, then ribbon cables to the panels.

## Safety Notes

This is documentation for layout and client review. Before energizing the assembly, verify fuse ratings, wire gauge, SSR load/heat-sink requirements, terminal torque, strain relief, protective earth continuity, enclosure bonding, and applicable electrical code/listing requirements.

## Source References

- WireViz upstream: https://github.com/wireviz/WireViz
- WireViz image syntax: https://github.com/wireviz/WireViz/blob/master/docs/syntax.md#images
- Geekworm X1201 wiki: https://wiki.geekworm.com/X1201
- Adafruit AHT20 product page: https://www.adafruit.com/product/4566
- MEAN WELL LRS-50 datasheet: https://www.meanwell.com/Upload/PDF/LRS-50/LRS-50-SPEC.PDF
- MEAN WELL LRS-150F datasheet: https://www.meanwell.com/Upload/PDF/LRS-150F/LRS-150F-SPEC.PDF
- Blue Sea Systems 5025 product page: https://www.bluesea.com/products/5025/ST_Blade_Fuse_Block_-_6_Circuits_with_Negative_Bus_and_Cover
- NovaStar NV3210 product page: https://www.novastar.tech/products/receiving-card-nv3210/
- LED matrix panel photo source: https://seengreat.com/product/191/matrix-panel-3mm
- Ground terminal block photo source: https://www.didacticaselectronicas.com/shop/bor-brig-din-6p-ve-bornera-terminal-a-tierra-en-puente-6-posiciones-para-riel-din-verde-23676
