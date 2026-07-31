# ADR 0002: Use explicit installation profiles

- Status: Accepted
- Date: 2026-07-31

## Context

The Original Installation used the `pi` account, `/home/pi`, and the hostname
`conway-garden-1`. The Point2 Replacement Installation uses the `reid`
account, `/home/reid`, and the hostname `point2`.

Hard-coding either host's identity into every runtime path makes the other
installation irreproducible. Inferring identity from whichever user happens to
invoke a root installer is also unsafe because it can silently select the
wrong installation contract.

## Decision

Keep the profile explicit at the bootstrap boundary. The defaults remain `pi` and `conway-garden-1`
for recovery of the Original Installation.
`CONWAY_USER`, `CONWAY_GROUP`, `CONWAY_HOME`, and `CONWAY_HOSTNAME` may select a
replacement profile. The bootstrap validates the account and renders the kiosk
systemd unit from a checked-in template.

Rendering a profile does not prove a live deployment. Hardware state remains
verified only by the opt-in Point2 integration tests and physical evidence.

## Consequences

- The checked-in `kiosk/matrix-led.service` remains the default `pi` rendering.
- Point2 paths can be produced without an untracked edit to the service unit.
- The installer still changes a real host and therefore is never exercised by
  local or GitHub CI.
- Installation-specific values are reviewable at the command boundary.
