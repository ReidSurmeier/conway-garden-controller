#!/usr/bin/env python3
"""Validation checks for the simplified client wiring package."""

from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parent
WIREVIZ_IMAGES = ROOT / "assets" / "wireviz-images"
OUT = ROOT / "out"


class ClientWiringContractTest(unittest.TestCase):
    def test_current_hardware_contract_is_visible_in_wireviz_source(self):
        source = (ROOT / "conway-garden-client-overview.yml").read_text()

        self.assertIn("pinlabels: [LINE, NEUTRAL, GROUND]", source)
        self.assertIn("GROUND_TERMINAL:", source)
        self.assertIn("Ground terminal block", source)

        self.assertIn("PSU_PI:", source)
        self.assertIn("PSU_LED:", source)
        self.assertIn("subtype: switched LED 5 V", source)

        self.assertIn("START_BTN:", source)
        self.assertIn("STOP_BTN:", source)
        self.assertNotIn("BUTTONS:", source)

        self.assertIn("NovaStar NV3210", source)
        self.assertNotIn("MRV412", source)

        for panel_number in range(1, 7):
            self.assertIn(f"PANEL_{panel_number}:", source)
            self.assertIn(f"LED_PSU_TO_PANEL_{panel_number}:", source)

        self.assertIn("qty: 6", source)
        self.assertIn("LED matrix panels", source)

        self.assertIn("AHT20_SENSOR:", source)
        self.assertIn("Adafruit AHT20", source)
        self.assertIn("I2C enclosure sensor", source)
        self.assertIn("FAN_CONTROL_HARNESS:", source)
        self.assertIn("Pi GPIO fan-control harness", source)
        self.assertIn("temperature-controlled enclosure fans", source)
        self.assertIn("qty: 3", source)
        for fan_number in range(1, 4):
            self.assertIn(f"FAN_{fan_number}:", source)
            self.assertIn(f"FUSE_BOX_TO_FAN_{fan_number}:", source)

    def test_wireviz_source_uses_native_local_images(self):
        source = (ROOT / "conway-garden-client-overview.yml").read_text()

        self.assertIn("image:", source)
        self.assertIn("src: assets/wireviz-images/", source)
        self.assertIn('ranksep: "0.85"', source)
        self.assertIn('nodesep: "0.18"', source)
        self.assertIn("height: 30", source)
        self.assertNotIn("height: 55", source)
        self.assertIn("show_name: false", source)
        self.assertIn("MSD300_TO_NV3210:", source)
        self.assertIn("src: assets/wireviz-images/ethernet.png", source)

        for image_name in [
            "fuse_inlet.png",
            "ground_terminal.png",
            "lrs50.png",
            "lrs150.png",
            "relay.png",
            "blue_sea.png",
            "x1201.png",
            "battery.png",
            "pi5.png",
            "push_buttons.png",
            "video_adapter.png",
            "msd300.png",
            "ethernet.png",
            "nv3210.png",
            "led_matrix_panel.png",
            "aht20.png",
            "fan.png",
        ]:
            with self.subTest(image=image_name):
                self.assertIn(f"assets/wireviz-images/{image_name}", source)
                self.assertGreater((WIREVIZ_IMAGES / image_name).stat().st_size, 1000)

    def test_wireviz_pdf_artifact_exists(self):
        pdf = OUT / "conway-garden-client-overview.pdf"

        self.assertGreater(pdf.stat().st_size, 1000)

    def test_wireviz_svg_is_compacted(self):
        svg = (OUT / "conway-garden-client-overview.svg").read_text()
        viewbox = re.search(r'viewBox="0\.00 0\.00 ([0-9.]+) ([0-9.]+)"', svg)

        self.assertIsNotNone(viewbox)
        self.assertLess(float(viewbox.group(1)), 10000)

    def test_supporting_docs_track_three_fans_and_wireviz_pdf(self):
        repo_root = ROOT.parent.parent
        docs = "\n".join(
            (repo_root / path).read_text()
            for path in [
                "README.md",
                "HARDWARE_BOM.md",
                "CONSERVATION.md",
                "CONTEXT.md",
                "docs/wiring/README.md",
            ]
        )

        self.assertIn("three Easycargo 30 mm enclosure fans", docs)
        self.assertIn("out/conway-garden-client-overview.pdf", docs)
        self.assertIn("primary WireViz source", docs)
        self.assertIn("Adafruit AHT20", docs)
        self.assertNotIn("and fan. Replace", docs)
        self.assertNotIn("Noctua NF-A4x10", docs)
        self.assertNotIn(
            "primary client wiring packet with a compact printable diagram",
            docs,
        )


if __name__ == "__main__":
    unittest.main()
