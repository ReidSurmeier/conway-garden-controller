# Conway Pointcloud Garden agent guide

This repository is the Artwork Score and conservation package for a live media
art installation. Start by reading `PROJECT.md`, then `CONTEXT.md`. Read
relevant decisions in `docs/adr/` before changing hardware identity,
installation behavior, or preservation boundaries.

## Boundaries

- Preserve artwork media, generated wiring artifacts, firmware packages, and
  prior installation evidence. Reclassify uncertain material; do not delete it.
- Do not infer current hardware from filenames, repository recency, or an
  unreachable machine.
- Do not run live tests, switch the relay, restart services, deploy files, or
  alter Point2 unless the task explicitly requires live hardware work.
- Keep credentials and private network material out of committed fixtures.
- Treat `screen_config/` as Historical Receiver Firmware, not an installation
  source.
- Tests must use local fixtures by default. Point2 checks are opt-in and must
  distinguish host unavailability from assertion failures.

## Commands

```bash
python3 -m unittest discover -s tests -v
python3 -m unittest discover -s docs/wiring -p 'test_*.py' -v
python3 -m compileall -q src tests docs/wiring
```

Run live Point2 contracts only when the machine is intentionally in scope and
reachable:

```bash
CONWAY_RUN_LIVE_TESTS=1 CONWAY_TEST_TARGET=reid@point2 \
  python3 -m unittest tests.test_point2_installation -v
```

Before editing a function, class, or method, use the repository's GitNexus
index to inspect upstream impact. Run GitNexus change detection before every
commit that changes source symbols.

## Agent skills

### Issue tracker

Issues and PRDs live in GitHub Issues for
`ReidSurmeier/conway-garden-controller`. See
`docs/agents/issue-tracker.md`.

### Triage labels

Use the standard `needs-triage`, `needs-info`, `ready-for-agent`,
`ready-for-human`, and `wontfix` labels. See
`docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository with terms in `CONTEXT.md` and decisions
in `docs/adr/`. See `docs/agents/domain.md`.
