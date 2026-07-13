# Dilatih React Design System Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development to implement the component-authoring tasks. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Build a React + TS + Tailwind + Storybook design system capturing dilatih.co's brand, so `/design-sync` can upload it to claude.ai/design.

**Architecture:** Vite library-mode package at `design-system-dilatih/`. Tailwind brand preset carries dilatih tokens; Radix primitives back accessible components; Storybook stories drive sync previews. Bundle global `DilatihDS`.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI, Storybook 8, class-variance-authority, tailwind-merge.

---

## File structure

```
design-system-dilatih/
  package.json, tsconfig.json, vite.config.ts
  tailwind.config.ts          # consumes preset
  src/
    tokens/preset.ts          # dilatih Tailwind preset (colors/fonts/radius/shadow/type)
    styles/global.css         # @tailwind + font-face (Barlow, Righteous)
    lib/cn.ts                 # clsx+tailwind-merge helper
    components/<Name>/<Name>.tsx + index.ts
    components/<Name>/<Name>.stories.tsx
    index.ts                  # barrel export (window.DilatihDS)
  .storybook/main.ts, preview.ts
```

## Phase 0 — Foundation

### Task 0.1: Scaffold package
- Create `design-system-dilatih/` with package.json (React 18, TS, Vite, Tailwind, Radix, Storybook 8, cva, tailwind-merge), tsconfig, vite.config.ts (library mode, global `DilatihDS`), `.gitignore`.
- [ ] npm install, verify `npx vite build` runs on an empty entry.
- [ ] Commit.

### Task 0.2: Tokens preset + global styles
- Create `src/tokens/preset.ts` porting the verbatim palette from `frontend-dilatih/src/assets/css/main.css` (navy/purple/pink/orange/neutral/danger/success/whatsapp scales; Barlow/Righteous; radius sm/card/pill; card/elevated shadows; heading type scale).
- Create `src/styles/global.css` (@tailwind layers + @font-face for Barlow & Righteous via Google Fonts import).
- Create `src/lib/cn.ts` (clsx + tailwind-merge).
- [ ] Commit.

### Task 0.3: Reference components (pattern-setters)
- Build **Button** (cva variants: primary/secondary/outline/ghost/danger; sizes sm/md/lg; pill option) and **Card** by hand to establish the file/story/prop pattern every later component copies.
- Each: `<Name>.tsx`, `index.ts`, `<Name>.stories.tsx`.
- Wire `src/index.ts` barrel.
- [ ] `npx storybook build` succeeds; visually verify Button & Card on-brand.
- [ ] Commit.

## Phase 1 — Core primitives (fan out, one subagent per component)
Build, copying the Button/Card pattern, each with a story exercising variants:
- [ ] IconButton, Input, Textarea, Select (Radix), Checkbox (Radix), Radio (Radix), Switch (Radix), Badge, Avatar, Spinner, Alert, Tooltip (Radix), Modal/Dialog (Radix), Tabs (Radix).
- [ ] Update barrel export. Storybook build succeeds. Commit per batch.

## Phase 2 — Marketing composites
- [ ] Navbar (dilatih logo), Footer, Hero, CourseCard, TestimonialCard, PricingCard, StatBlock, CTASection.
- [ ] Stories with realistic dilatih content (Indonesian copy, course themes). Commit.

## Phase 3 — Admin/dashboard composites
- [ ] SidebarNav, PageHeader, StatCard, DataTable, Pagination, FormField, EmptyState, Toolbar.
- [ ] Stories. Commit.

## Phase 4 — Build & verify
- [ ] `npx vite build` (dist) + `npx storybook build` both clean.
- [ ] Visually verify a sample of stories render on-brand.
- [ ] Commit.

## Phase 5 — Sync
- [ ] Run `/design-sync` against `design-system-dilatih/` (storybook shape) → new Claude Design project.

## Verification per component
A component is done when: it renders in Storybook with no console errors, variants are visible, it uses preset tokens (no hardcoded hex), and its props are typed/exported.
