import base64
import json
import os
import subprocess
import textwrap
import unittest


TARGET = os.environ.get("CONWAY_TEST_TARGET", "reid@point2")
LIVE_TESTS_ENABLED = os.environ.get("CONWAY_RUN_LIVE_TESTS") == "1"


def run_remote_python(source: str) -> str:
    payload = base64.b64encode(textwrap.dedent(source).encode()).decode()
    command = f"python3 -c \"import base64;exec(base64.b64decode('{payload}'))\""
    result = subprocess.run(
        ["ssh", "-o", "BatchMode=yes", TARGET, command],
        check=True,
        capture_output=True,
        text=True,
        timeout=20,
    )
    return result.stdout.strip()


@unittest.skipUnless(
    LIVE_TESTS_ENABLED,
    "set CONWAY_RUN_LIVE_TESTS=1 to run tests against the Point2 installation",
)
class Point2InstallationTests(unittest.TestCase):
    def test_kiosk_service_renders_conway_canvas(self):
        raw = run_remote_python(
            """
            import json
            import requests
            import websocket

            targets = requests.get("http://127.0.0.1:9222/json", timeout=3).json()
            target = next(t for t in targets if t.get("type") == "page")
            try:
                ws = websocket.create_connection(target["webSocketDebuggerUrl"], timeout=5)
                ws.send(json.dumps({
                    "id": 1,
                    "method": "Runtime.evaluate",
                    "params": {
                        "expression": "({href:location.href,title:document.title,canvas:document.getElementsByTagName('canvas').length})",
                        "returnByValue": True,
                    },
                }))
                while True:
                    message = json.loads(ws.recv())
                    if message.get("id") == 1:
                        print(json.dumps(message["result"]["result"]["value"]))
                        break
            except Exception as error:
                print(json.dumps({"error": f"{type(error).__name__}: {error}"}))
            """
        )
        page = json.loads(raw)
        self.assertNotIn("error", page, page)
        self.assertTrue(page["href"].startswith("http://localhost:8000/"), page)
        self.assertEqual(page["title"], "Conway Pointcloud Garden")
        self.assertGreaterEqual(page["canvas"], 1)

    def test_kiosk_uses_verified_novastar_mapping(self):
        raw = run_remote_python(
            """
            import json
            import requests
            import websocket

            targets = requests.get("http://127.0.0.1:9222/json", timeout=3).json()
            target = next(t for t in targets if t.get("type") == "page")
            ws = websocket.create_connection(target["webSocketDebuggerUrl"], timeout=5)
            ws.send(json.dumps({
                "id": 1,
                "method": "Runtime.evaluate",
                "params": {
                    "expression": "(() => { const c=document.getElementsByTagName('canvas')[0]; const r=c.getBoundingClientRect(); return {width:c.width,height:c.height,clientWidth:c.clientWidth,clientHeight:c.clientHeight,rectWidth:r.width,rectHeight:r.height,transform:getComputedStyle(c).transform}; })()",
                    "returnByValue": True,
                },
            }))
            while True:
                message = json.loads(ws.recv())
                if message.get("id") == 1:
                    print(json.dumps(message["result"]["result"]["value"]))
                    break
            """
        )
        canvas = json.loads(raw)
        self.assertEqual((canvas["width"], canvas["height"]), (312, 416))
        self.assertEqual((canvas["clientWidth"], canvas["clientHeight"]), (312, 416))
        self.assertAlmostEqual(canvas["rectWidth"], 416, delta=1)
        self.assertAlmostEqual(canvas["rectHeight"], 312, delta=1)
        self.assertEqual(canvas["transform"], "matrix(0, 1, -1, 0, 0, 0)")

    def test_novastar_output_contains_mapped_artwork(self):
        raw = run_remote_python(
            """
            import json
            import os
            import subprocess
            import tempfile
            import time
            from PIL import Image
            import requests
            import websocket

            deadline = time.time() + 15
            while True:
                targets = requests.get("http://127.0.0.1:9222/json", timeout=3).json()
                target = next(t for t in targets if t.get("type") == "page")
                ws = websocket.create_connection(target["webSocketDebuggerUrl"], timeout=5)
                ws.send(json.dumps({
                    "id": 1,
                    "method": "Runtime.evaluate",
                    "params": {
                        "expression": "getComputedStyle(document.getElementById('loading-overlay')).display",
                        "returnByValue": True,
                    },
                }))
                display = None
                while True:
                    message = json.loads(ws.recv())
                    if message.get("id") == 1:
                        display = message["result"]["result"]["value"]
                        break
                ws.close()
                if display == "none":
                    break
                if time.time() >= deadline:
                    raise RuntimeError(f"loading overlay remained {display!r}")
                time.sleep(0.25)

            with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as handle:
                path = handle.name
            try:
                environment = os.environ | {
                    "XDG_RUNTIME_DIR": "/run/user/1000",
                    "WAYLAND_DISPLAY": "wayland-0",
                }
                subprocess.run(
                    ["grim", "-o", "HDMI-A-1", path],
                    check=True,
                    env=environment,
                    timeout=5,
                )
                image = Image.open(path).convert("RGB")
                bounds = image.getbbox()
                colors = image.getcolors(maxcolors=image.width * image.height) or []
                print(json.dumps({
                    "size": image.size,
                    "bounds": bounds,
                    "color_count": len(colors),
                }))
            finally:
                os.unlink(path)
            """
        )
        output = json.loads(raw)
        self.assertEqual(output["size"], [1920, 1080])
        self.assertGreater(output["color_count"], 100)
        left, top, right, bottom = output["bounds"]
        self.assertGreater(right - left, 100)
        self.assertGreater(bottom - top, 100)
        self.assertGreaterEqual(left, 0)
        self.assertGreaterEqual(top, 0)
        self.assertLessEqual(right, 418)
        self.assertLessEqual(bottom, 314)

    def test_installation_contract_is_durable(self):
        state = json.loads(
            run_remote_python(
                """
                import json
                import os
                import subprocess

                def systemctl(*arguments):
                    return subprocess.check_output(
                        ["systemctl", *arguments], text=True
                    ).strip()

                properties = {}
                for line in systemctl(
                    "show",
                    "matrix-led.service",
                    "--property=User",
                    "--property=Group",
                    "--property=WorkingDirectory",
                    "--property=ExecStart",
                ).splitlines():
                    key, value = line.split("=", 1)
                    properties[key] = value

                print(json.dumps({
                    "matrix_led_active": systemctl("is-active", "matrix-led.service"),
                    "matrix_controller_enabled": systemctl("is-enabled", "matrix-controller.service"),
                    "health_active": systemctl("is-active", "conway-health.timer"),
                    "health_enabled": systemctl("is-enabled", "conway-health.timer"),
                    "ssh_active": systemctl("is-active", "ssh.service"),
                    "tailscale_active": systemctl("is-active", "tailscaled.service"),
                    "properties": properties,
                    "runtime_app": os.path.isdir("/home/reid/Desktop/conway.pointcloud.garden"),
                    "runtime_launcher": os.access("/home/reid/Desktop/matrix-led-start.sh", os.X_OK),
                    "controller_config": os.path.isfile("/etc/matrix-controller/controller.yaml"),
                }))
                """
            )
        )
        self.assertEqual(state["matrix_led_active"], "active")
        self.assertEqual(state["matrix_controller_enabled"], "enabled")
        self.assertEqual(state["health_active"], "active")
        self.assertEqual(state["health_enabled"], "enabled")
        self.assertEqual(state["ssh_active"], "active")
        self.assertEqual(state["tailscale_active"], "active")
        self.assertEqual(state["properties"]["User"], "reid")
        self.assertEqual(state["properties"]["Group"], "reid")
        self.assertEqual(
            state["properties"]["WorkingDirectory"],
            "/home/reid/Desktop/conway.pointcloud.garden",
        )
        self.assertIn("/home/reid/Desktop/matrix-led-start.sh", state["properties"]["ExecStart"])
        self.assertTrue(state["runtime_app"])
        self.assertTrue(state["runtime_launcher"])
        self.assertTrue(state["controller_config"])

    def test_controller_enters_safe_idle_and_owns_gpio(self):
        state = json.loads(
            run_remote_python(
                """
                import json
                import subprocess
                import time
                import urllib.request

                def run(*arguments, check=True):
                    return subprocess.run(
                        arguments,
                        check=check,
                        capture_output=True,
                        text=True,
                        timeout=15,
                    )

                observed = {}
                try:
                    run("sudo", "systemctl", "start", "--no-block", "matrix-controller.service")
                    time.sleep(4)
                    observed["controller"] = run(
                        "systemctl", "is-active", "matrix-controller.service", check=False
                    ).stdout.strip()
                    observed["kiosk"] = run(
                        "systemctl", "is-active", "matrix-led.service", check=False
                    ).stdout.strip()
                    observed["gpio"] = {
                        str(pin): run("sudo", "pinctrl", "get", str(pin)).stdout.strip()
                        for pin in (6, 18, 19, 20)
                    }
                    observed["journal"] = run(
                        "journalctl",
                        "-u",
                        "matrix-controller.service",
                        "--since",
                        "-2 minutes",
                        "--no-pager",
                    ).stdout
                finally:
                    run("sudo", "systemctl", "stop", "matrix-controller.service", check=False)
                    run("sudo", "systemctl", "start", "matrix-led.service", check=False)
                    run("sudo", "pinctrl", "set", "20", "op", "dh", check=False)
                    deadline = time.time() + 12
                    while time.time() < deadline:
                        try:
                            targets = json.load(urllib.request.urlopen(
                                "http://127.0.0.1:9222/json", timeout=1
                            ))
                            if any(
                                target.get("title") == "Conway Pointcloud Garden"
                                for target in targets
                            ):
                                break
                        except Exception:
                            pass
                        time.sleep(0.25)
                print(json.dumps(observed))
                """
            )
        )
        self.assertEqual(state["controller"], "active", state["journal"])
        self.assertEqual(state["kiosk"], "inactive")
        self.assertIn("GPIO18 = input", state["gpio"]["18"])
        self.assertIn("GPIO19 = input", state["gpio"]["19"])
        self.assertIn("GPIO20 = output", state["gpio"]["20"])
        self.assertIn(" lo ", state["gpio"]["20"])
        self.assertNotIn("[ERROR]", state["journal"])
        self.assertNotIn("[CRITICAL]", state["journal"])


if __name__ == "__main__":
    unittest.main()
