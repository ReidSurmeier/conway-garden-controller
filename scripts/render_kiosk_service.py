#!/usr/bin/env python3
"""Render the kiosk systemd unit for an installation account."""

from __future__ import annotations

import argparse
import re
from pathlib import Path, PurePosixPath


ROOT = Path(__file__).resolve().parents[1]
TEMPLATE_PATH = ROOT / "kiosk" / "matrix-led.service.in"
ACCOUNT_PATTERN = re.compile(r"[a-z_][a-z0-9_-]*[$]?")


def account_name(value: str) -> str:
    if not ACCOUNT_PATTERN.fullmatch(value):
        raise argparse.ArgumentTypeError(f"invalid account name: {value!r}")
    return value


def absolute_home(value: str) -> str:
    path = PurePosixPath(value)
    if not path.is_absolute() or any(character.isspace() for character in value):
        raise argparse.ArgumentTypeError(
            "home must be an absolute POSIX path without whitespace"
        )
    return str(path)


def render(*, user: str, group: str, home: str) -> str:
    service = TEMPLATE_PATH.read_text(encoding="utf-8")
    replacements = {
        "{{CONWAY_USER}}": user,
        "{{CONWAY_GROUP}}": group,
        "{{CONWAY_HOME}}": home,
    }
    for placeholder, value in replacements.items():
        if placeholder not in service:
            raise ValueError(f"missing template placeholder: {placeholder}")
        service = service.replace(placeholder, value)
    if "{{CONWAY_" in service:
        raise ValueError("unresolved Conway service placeholder")
    return service


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--user", type=account_name, default="pi")
    parser.add_argument("--group", type=account_name, default="pi")
    parser.add_argument("--home", type=absolute_home, default="/home/pi")
    parser.add_argument("--output", type=Path)
    arguments = parser.parse_args()

    service = render(
        user=arguments.user,
        group=arguments.group,
        home=arguments.home,
    )
    if arguments.output:
        arguments.output.write_text(service, encoding="utf-8")
    else:
        print(service, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
