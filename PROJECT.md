# Conway Pointcloud Garden status

## Goal

Keep Conway Pointcloud Garden performable as a media artwork by preserving its
Artwork Score, hardware relationships, installation evidence, and recovery
path without confusing historical artifacts with the current installation.

## Current objective

Reconcile the public GitHub repository, the preserved dirty home checkout, the
Point2 Replacement Installation, and the current documentation standard in a
clean Orca worktree. Preserve the resolved NV3210 Display Chain, retain MRV412
firmware as history, and make local validation independent of live hardware.

## Confirmed working

- GitHub `main` is available at commit `173934c` with the complete prior
  Artwork Score and the later MRV412 firmware package.
- The Original Installation was audited as `conway-garden-1` in May 2026.
- On 2026-07-21, the Point2 Replacement Installation passed five live
  integration checks: Conway document and canvas, the 312 by 416 mapping
  rotated into a 416 by 312 region, nontrivial framebuffer output, durable
  service/runtime identity, and controller safe-idle/GPIO ownership.
- The Point2 keyring interruption was reproduced and repaired by launching
  kiosk Chromium with `--password-store=basic`.
- The kiosk launcher now selects either `chromium-browser` or `chromium`, and
  the bootstrap can render explicit Original or Point2 account profiles while
  preserving the Original Installation defaults.
- The preserved home checkout contains the July wiring packet, its generated
  artifacts, domain and agent documentation, and the Point2 integration tests.
- GitHub has no Pages site or deployment record for this repository.
- A fresh 2026-07-31 Droplet snapshot contains no Conway, Point2, or Matrix
  Controller runtime.

## Failed approaches

- The original Bookworm installation procedure assumed the `pi` user and
  could not be applied unchanged to Point2's Debian 13 `reid` environment.
- A healthy systemd service and HTTP listener did not prove that Chromium had
  reached the artwork; a first-run keyring dialog left the browser blank.
- Treating the newest repository artifact as the current receiver identity
  would contradict the user's resolved NV3210 hardware correction.
- Live integration tests cannot distinguish a product failure from an offline
  Point2 host when they run unconditionally.

## Decisions

- The Display Chain uses the NV3210 identity. See
  `docs/adr/0001-preserve-receiver-firmware-as-history.md`.
- `screen_config/` is Historical Receiver Firmware and is not an installation
  input.
- The clean Canonical Checkout is `/home/reidsurmeier/src/conway-garden-controller`.
  The dirty home checkout remains untouched until its intended changes are
  reviewed and merged through the clean worktree.
- Point2 is an external hardware deployment, not a Droplet or GitHub Pages
  deployment.
- Local validation must be hermetic. Tests that inspect Point2 are explicit
  live checks and must report offline state separately from source failures.
- Do not change relay, service, or deployed files while Point2 is offline.

## Blockers

- Point2 is offline on 2026-07-31 and was last seen by Tailscale on
  2026-07-22. Current services, framebuffer, relay, power, and physical display
  state are unverified.
- The July home-checkout package must be reviewed and transferred without
  losing the later GitHub `screen_config/` commit.
- The new Point2 installation profile has only local rendering evidence; it
  has not been applied to or live-verified on the offline host.
- A gold SD-card image and tested backup/restore record are not verified.
- Physical receiver labeling, NovaStar export custody, electrical inspection,
  and publication rights for artwork media require human evidence.

## Next action

Validate the complete repository locally, review firmware and media custody,
and record all hardware-only follow-ups as GitHub issues. When Point2 returns
online, rerun the five live contracts before changing its deployment.

## Last verified

2026-07-31 from the authenticated GitHub API, a clean `origin/main` clone,
the preserved dirty home checkout, recovered July 8 and July 21 session
evidence, the current Tailscale peer record, and a fresh Droplet snapshot.
Point2 was offline, so no current runtime or physical-state claim is made.
