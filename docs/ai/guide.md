# AI Development Guide

This repository includes AI-ready docs for faster, more accurate assistance.

## Sources of truth
- Products and pricing: `docs/data/products.yaml`
- Project status: `docs/status/progress.yaml`

## How to use in development
- Use `docs/data/products.yaml` to generate product constants, seed data, or UI cards.
- Keep `docs/products.md` synchronized with the YAML. It is a human-readable view, not the data source.
- Update `docs/status/progress.yaml` whenever priorities or phases change. This powers assistants to propose the correct next step.

## Conventions
- Prefer structured data (YAML/JSON) over prose for anything used by code.
- Keep Spanish for customer-facing docs; technical/AI docs can be in English.
- Commit message prefix for docs: `docs:`

## Next steps for assistants
- Build the product gallery using the YAML catalog.
- Surface box sizes and flavors directly from the YAML.
- Keep this guide updated when workflows change.
