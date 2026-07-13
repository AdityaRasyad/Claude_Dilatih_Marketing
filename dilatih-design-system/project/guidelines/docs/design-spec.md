# Dilatih React Design System — Design Spec

**Date:** 2026-06-18
**Goal:** Extract a real React + TypeScript design system from dilatih.co's brand so that Claude's design agent (claude.ai/design, via `/design-sync`) can prototype on-brand dilatih screens. Code-shippability is secondary; brand fidelity and high-quality previews are primary.

## Why this exists
`/design-sync` requires a React design system (esbuild-bundlable `dist/`, `.d.ts` contracts, ideally Storybook previews). The repo only has a Vue 3 application (`frontend-dilatih/`) — not a reusable library. So we author a fresh React DS that captures dilatih.co's brand, then sync it.

## Stack (Approach A)
- React 18 + TypeScript, built with **Vite library mode** (esbuild-bundlable `dist/`).
- **Tailwind CSS** with a **dilatih brand preset** (token table below) — gives the design agent a clean class vocabulary.
- **Radix UI** primitives for accessible interactive components (Dialog, Select, Tabs, Tooltip, Checkbox, Switch, etc.).
- **Storybook** — one story per component → drives `/design-sync` verified screenshot previews.
- Bundle global namespace: `DilatihDS` (`window.DilatihDS.*`).
- Location: `design-system-dilatih/` — a new git-tracked sibling package in this repo, isolated from the Vue app.

## Design tokens (extracted from `frontend-dilatih/src/assets/css/main.css`)
- **Fonts:** `display` → Righteous; `sans`/`body` → Barlow.
- **Color scales** (05→9), ported verbatim:
  - `navy` (brand primary/indigo): `#eaebf4 … #5657a5 (DEFAULT) … #332a6c`
  - `purple` `#f3e5f1 … #57156a`, `pink` `#f8e5f3 … #7f2270`, `orange` `#fdf2e1 … #d4550c`
  - `neutral` full Atlassian-style scale `#0a0a0a/#fafbfc … #091e42`
  - semantic: `danger` (red `#d40c0c`/`#bf2600`), `success` (green Atlassian scale), `whatsapp` `#00b628`
  - aliases: `primary` → navy, `surface`/`border`/`text` → neutrals
- **Radius:** `sm` 3px, `card` 10px, `pill` 30px.
- **Shadow:** `card`/`elevated` from `rgba(9,30,66,0.2)` elevation values.
- **Type scale:** heading sizes (h1 64px, h2 56px, …) as Tailwind fontSize tokens.

## Component inventory (phased — incremental sync)
**Phase 1 — Core primitives (~14):** Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Badge/Tag, Avatar, Card, Spinner, Alert, Tooltip, Modal/Dialog, Tabs.

**Phase 2 — Marketing composites (~8):** Navbar (dilatih logo), Footer, Hero, CourseCard, TestimonialCard, PricingCard, StatBlock, CTASection.

**Phase 3 — Admin/dashboard composites (~8):** SidebarNav, PageHeader, StatCard, DataTable, Pagination, FormField, EmptyState, Toolbar.

~30 components total.

## Build & sync handoff
1. Vite library build → `dist/` (ESM + types) and a `_ds_bundle`-compatible compiled output.
2. Storybook story per component, visually verified for brand fidelity (referenced against live dilatih.co for shapes).
3. Run `/design-sync` (storybook shape) → creates a new Claude Design project, uploads verified components.

## Verification
- Each component has a Storybook story exercising its variants.
- Tokens validated against `main.css` source values.
- Vite build + Storybook build must succeed before sync.

## Out of scope
- Porting Vue component internals 1:1 (we author fresh React).
- Production npm publishing / SemVer (secondary goal).
- Migrating the Vue app.
