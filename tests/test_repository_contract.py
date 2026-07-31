import subprocess
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class RepositoryContractTests(unittest.TestCase):
    def test_current_display_chain_is_distinct_from_historical_firmware(self) -> None:
        context = (ROOT / "CONTEXT.md").read_text(encoding="utf-8")
        decision = (
            ROOT / "docs" / "adr" / "0001-preserve-receiver-firmware-as-history.md"
        ).read_text(encoding="utf-8")
        firmware_readme_path = ROOT / "screen_config" / "README.md"
        decision = " ".join(decision.split())

        self.assertIn("Display chain", context)
        self.assertIn("NovaStar NV3210", context)
        self.assertIn("Historical Receiver Firmware", context)
        self.assertIn("screen_config/", decision)
        self.assertIn("does not identify the installed receiver", decision)
        self.assertIn("must not be deployed", decision)
        self.assertTrue(firmware_readme_path.is_file())
        firmware_readme = firmware_readme_path.read_text(encoding="utf-8")
        self.assertIn("Historical Receiver Firmware", firmware_readme)
        self.assertIn("NovaStar NV3210", firmware_readme)
        self.assertIn("must not be flashed", firmware_readme)

    def test_project_documentation_contract_is_resumable(self) -> None:
        for relative_path in ["README.md", "PROJECT.md", "AGENTS.md", "CONTEXT.md"]:
            with self.subTest(path=relative_path):
                self.assertGreater(
                    (ROOT / relative_path).stat().st_size,
                    100,
                )

        project = (ROOT / "PROJECT.md").read_text(encoding="utf-8")
        for heading in [
            "## Goal",
            "## Current objective",
            "## Confirmed working",
            "## Failed approaches",
            "## Decisions",
            "## Blockers",
            "## Next action",
            "## Last verified",
        ]:
            with self.subTest(heading=heading):
                self.assertIn(heading, project)

        agents = (ROOT / "AGENTS.md").read_text(encoding="utf-8")
        self.assertIn("docs/agents/issue-tracker.md", agents)
        self.assertIn("docs/agents/triage-labels.md", agents)
        self.assertIn("docs/agents/domain.md", agents)

    def test_readme_distinguishes_original_and_point2_installations(self) -> None:
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        profile_decision_path = (
            ROOT / "docs" / "adr" / "0002-explicit-installation-profiles.md"
        )

        self.assertIn("Original Installation", readme)
        self.assertIn("Point2 Replacement Installation", readme)
        self.assertIn("last live-verified on 2026-07-21", readme)
        self.assertIn("Point2 is currently offline", readme)
        self.assertIn("[PROJECT.md](PROJECT.md)", readme)
        self.assertIn(
            "CONWAY_USER=reid CONWAY_HOSTNAME=point2",
            readme,
        )
        self.assertTrue(profile_decision_path.is_file())
        profile_decision = profile_decision_path.read_text(encoding="utf-8")
        self.assertIn("defaults remain `pi` and `conway-garden-1`", profile_decision)
        self.assertIn("does not prove a live deployment", profile_decision)

    def test_kiosk_launcher_supports_point2_chromium(self) -> None:
        launcher = (ROOT / "kiosk" / "matrix-led-start.sh").read_text(
            encoding="utf-8"
        )

        self.assertIn("--password-store=basic", launcher)
        self.assertIn("command -v chromium-browser", launcher)
        self.assertIn("command -v chromium", launcher)
        self.assertNotIn("\nchromium-browser \\\n", launcher)

    def test_kiosk_service_profile_preserves_pi_and_supports_point2(self) -> None:
        renderer = ROOT / "scripts" / "render_kiosk_service.py"
        template = ROOT / "kiosk" / "matrix-led.service.in"
        checked_in_pi_service = (ROOT / "kiosk" / "matrix-led.service").read_text(
            encoding="utf-8"
        )

        self.assertTrue(renderer.is_file())
        self.assertTrue(template.is_file())

        default_result = subprocess.run(
            [sys.executable, str(renderer)],
            check=True,
            capture_output=True,
            text=True,
        )
        self.assertEqual(default_result.stdout, checked_in_pi_service)

        point2_result = subprocess.run(
            [
                sys.executable,
                str(renderer),
                "--user",
                "reid",
                "--group",
                "reid",
                "--home",
                "/home/reid",
            ],
            check=True,
            capture_output=True,
            text=True,
        )
        point2_service = point2_result.stdout
        self.assertIn("User=reid", point2_service)
        self.assertIn("Group=reid", point2_service)
        self.assertIn("WorkingDirectory=/home/reid/Desktop/", point2_service)
        self.assertNotIn("/home/pi", point2_service)

        bootstrap = (ROOT / "scripts" / "bootstrap.sh").read_text(encoding="utf-8")
        self.assertIn('CONWAY_USER="${CONWAY_USER:-pi}"', bootstrap)
        self.assertIn("render_kiosk_service.py", bootstrap)

    def test_ci_validates_local_contracts_without_contacting_point2(self) -> None:
        workflow_path = ROOT / ".github" / "workflows" / "validate.yml"
        self.assertTrue(workflow_path.is_file())
        workflow = workflow_path.read_text(encoding="utf-8")

        self.assertIn("python-version: \"3.12\"", workflow)
        self.assertIn("python3 -m unittest discover -s tests -v", workflow)
        self.assertIn(
            "python3 -m unittest discover -s docs/wiring -p 'test_*.py' -v",
            workflow,
        )
        self.assertIn("python3 -m compileall -q", workflow)
        self.assertIn("bash -n kiosk/matrix-led-start.sh", workflow)
        self.assertIn("bash -n scripts/bootstrap.sh", workflow)
        self.assertIn("scripts/render_kiosk_service.py", workflow)
        self.assertNotIn("CONWAY_RUN_LIVE_TESTS", workflow)
        self.assertNotIn("ssh ", workflow)

    def test_generated_bom_preserves_its_empty_final_tsv_field(self) -> None:
        attributes_path = ROOT / ".gitattributes"
        self.assertTrue(attributes_path.is_file())
        attributes = attributes_path.read_text(encoding="utf-8")
        self.assertIn(
            "docs/wiring/out/*.bom.tsv -whitespace",
            attributes,
        )


if __name__ == "__main__":
    unittest.main()
