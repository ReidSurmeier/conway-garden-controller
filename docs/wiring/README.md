# Conway Pointcloud Garden Wiring Diagram

This directory contains a WireViz source file and rendered client-facing wiring outputs for the Conway Pointcloud Garden control box.

## Files

- `conway-garden-control-box.yml` - editable WireViz source.
- `out/conway-garden-control-box.svg` - vector wiring diagram.
- `out/conway-garden-control-box.png` - raster preview.
- `out/conway-garden-control-box.preview.png` - scaled quick-review preview.
- `out/conway-garden-control-box.gv` - generated GraphViz source.
- `out/conway-garden-control-box.html` - diagram plus BOM.
- `out/conway-garden-control-box.bom.tsv` - generated bill of materials.
- `readable.html` - cropped, full-resolution review view for Tailnet/browser inspection.
- `client-overview.html` - simplified client-facing overview with component photos.
- `conway-garden-client-overview.yml` - simplified WireViz source with internal split points omitted.
- `out/conway-garden-client-overview.html` - rendered simplified WireViz diagram and BOM.
- `out/conway-garden-client-overview.svg` - rendered simplified WireViz vector diagram.
- `out/conway-garden-client-overview.png` - rendered simplified WireViz raster diagram.
- `out/conway-garden-client-overview.bom.tsv` - rendered simplified WireViz BOM.

## Basis

The drawing follows the verified controller repo wiring contract:

- START button: BCM GPIO18 / physical pin 12, press pulls LOW.
- STOP button: BCM GPIO19 / physical pin 35, press pulls LOW.
- Relay or SSR control: BCM GPIO20 / physical pin 38, active high.
- Geekworm X1201 PLD: BCM GPIO6 / physical pin 31, HIGH on wall power, LOW on wall-power loss.
- Wall power loss triggers shutdown only after the configured 10 second confirmation delay.

The AC path follows the supplied build note:

- 120 V AC three-prong input enters the fused inlet and line breaker.
- Line lands on the line terminal block, then splits to the SSR display-power leg and the always-on LRS-50-5 supply.
- Neutral lands on the neutral terminal block and feeds both Mean Well supplies.
- Ground lands on the green case-bonded PE terminal block and bonds the case plus both PSU FG terminals.

## Safety Notes

This is documentation for layout and client review. Before energizing the assembly, verify fuse ratings, wire gauge, SSR load/heat-sink requirements, terminal torque, strain relief, protective earth continuity, enclosure bonding, and applicable electrical code/listing requirements.

## Source References

- WireViz upstream: https://github.com/wireviz/WireViz
- Geekworm X1201 wiki: https://wiki.geekworm.com/X1201
- MEAN WELL LRS-50 datasheet: https://www.meanwell.com/Upload/PDF/LRS-50/LRS-50-SPEC.PDF
- MEAN WELL LRS-150F datasheet: https://www.meanwell.com/Upload/PDF/LRS-150F/LRS-150F-SPEC.PDF
- Blue Sea Systems 5025 product page: https://www.bluesea.com/products/5025/ST_Blade_Fuse_Block_-_6_Circuits_with_Negative_Bus_and_Cover
