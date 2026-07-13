# Dilatih Design System — usage conventions

The Dilatih design system is the component library for **dilatih.co**, an Indonesian
professional-training and BNSP-certification platform. UI copy is typically Indonesian.

## Setup & wrapping
No provider or theme wrapper is required — components are self-contained and styled by
`styles.css` (which `@import`s the compiled component CSS). The brand fonts **Barlow**
(body) and **Righteous** (display) load via a font-host `@import` inside that stylesheet,
so just render components; no font setup needed. Import everything from
`@dilatih/design-system`. Compose with the real components below rather than reinventing them.

## Styling idiom — Tailwind with the dilatih brand preset
Style layout/spacing with Tailwind utilities backed by the brand token preset. Use these
**named brand tokens** (do not invent hex values — these resolve to the brand palette):

| Family | Class names |
|---|---|
| Brand primary (indigo) | `bg-navy-500` (DEFAULT), `bg-navy-700`, `text-navy-600`, `border-navy-300`, `bg-navy-50`, `bg-navy-950` |
| Accent pink | `bg-pink-500`, `text-pink-500`, `bg-pink-50` |
| Accent orange | `bg-orange-500`, `text-orange-400` |
| Semantic | `bg-success-500`, `text-success-500`, `bg-danger-600`, `text-danger` |
| Neutrals / surfaces | `bg-surface`, `bg-surface-sunken`, `border-border`, `text-text`, `text-text-subtle`, `bg-neutral-100`, `text-ink-900` |
| Fonts | `font-display` (Righteous — headings/logo), `font-sans` / `font-body` (Barlow) |
| Type scale | `text-display-1`, `text-display-2`, `text-h1`…`text-h4` |
| Radius | `rounded-sm` (3px), `rounded` (5px), `rounded-card` (10px), `rounded-pill` (30px) |
| Elevation | `shadow-card`, `shadow-elevated`, `shadow-focus` |

## Where the truth lives
- `styles.css` and the component CSS it imports — the real, authoritative styling.
- Each component's `_ds/components/<group>/<Name>/<Name>.prompt.md` (usage) and `.d.ts` (props).

## Components (import from `@dilatih/design-system`)
- **Brand:** `Logo` (`variant="color"|"white"`, `height`).
- **Primitives:** `Button` (variants `primary|secondary|outline|ghost|pink|danger`, sizes `sm|md|lg`, `pill`), `IconButton`, `Card` (+`CardHeader/CardTitle/CardDescription/CardContent/CardFooter`), `Input`, `Textarea`, `FormField`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Badge`, `Avatar`, `Spinner`, `Alert`, `Tooltip`, `Dialog`, `Tabs`, `EmptyState`.
- **Marketing:** `Navbar`, `Footer`, `Hero`, `CTASection`, `CourseCard`, `TestimonialCard`, `PricingCard`, `StatBlock`.
- **Admin / dashboard:** `SidebarNav`, `PageHeader`, `StatCard`, `DataTable`, `Pagination`, `Toolbar`.

The `Navbar`/`Footer`/`SidebarNav` default to the real Dilatih `Logo` automatically.

## Idiomatic example
```tsx
import { Hero, Button } from '@dilatih/design-system'

<Hero
  eyebrow="Tersertifikasi BNSP"
  title="Tingkatkan Kompetensi, Raih Sertifikasi Resmi"
  subtitle="Belajar dari praktisi dan dapatkan sertifikat yang diakui nasional."
  primaryAction={<Button>Mulai Belajar</Button>}
  secondaryAction={<Button variant="outline">Lihat Program</Button>}
/>

// Brand accent: the pink variant for promos
<Button variant="pink">Ikuti Promo</Button>
```

# DilatihDS (@dilatih/design-system@0.1.0)

This design system is the published @dilatih/design-system React library, bundled as a single
browser global. All 33 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.DilatihDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (2 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.DilatihDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Alert } = window.DilatihDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Alert />);
```

## Tokens

57 CSS custom properties from @dilatih/design-system. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (8): `--tw-border-spacing-x`, `--tw-border-spacing-y`, `--tw-ring-offset-color`, …
- **spacing** (2): `--tw-ring-inset`, `--tw-space-y-reverse`
- **shadow** (4): `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow`, …
- **other** (43): `--tw-translate-x`, `--tw-translate-y`, `--tw-rotate`, …

## Components

### primitives
- `Alert` — Inline banner for contextual feedback in the dilatih brand.
- `Avatar` — Circular user avatar with image or initials fallback.
- `Badge` — Small status/label pill in the dilatih brand.
- `Button` — Primary call-to-action button in the dilatih brand.
- `Card` — Surface container with dilatih elevation and radius.
- `Checkbox` — Radix-backed checkbox in the dilatih brand.
- `Dialog` — Radix Dialog root  passthrough.
- `EmptyState` — Centered placeholder shown when there is no content to display.
- `FormField` — Layout wrapper pairing a label, control, and helper/error text.
- `IconButton` — Square, icon-only button in the dilatih brand.
- `Input` — Single-line text input in the dilatih brand.
- `RadioGroup` — Radix-backed radio group container in the dilatih brand.
- `Select` — Radix Select root  passthrough.
- `Spinner` — Indeterminate loading spinner in the dilatih brand.
- `Switch` — Radix-backed toggle switch in the dilatih brand.
- `Tabs` — Radix Tabs root  passthrough.
- `Textarea` — Multi-line text input in the dilatih brand.
- `Tooltip` — Radix Tooltip root  passthrough.

### marketing
- `CourseCard` — Catalog card for a course or workshop in the dilatih brand.
- `CTASection` — Full-width call-to-action band in the dilatih brand.
- `Footer` — Site footer in the dilatih brand.
- `Hero` — Marketing hero section in the dilatih brand.
- `Navbar` — Top navigation bar in the dilatih brand.
- `PricingCard` — Pricing tier card in the dilatih brand.
- `StatBlock` — Responsive row of headline statistics in the dilatih brand.
- `TestimonialCard` — Participant testimonial card in the dilatih brand.

### admin
- `DataTable` — Generic, styled admin data table in the dilatih brand.
- `PageHeader` — Admin page header with breadcrumbs, title and actions.
- `Pagination` — Page navigation control in the dilatih brand.
- `SidebarNav` — Vertical admin sidebar navigation in the dilatih brand.
- `StatCard` — Compact dashboard metric card in the dilatih brand.
- `Toolbar` — Admin list toolbar: search, filters and actions in the dilatih brand.

### brand
- `Logo` — The Dilatih brand wordmark. Embedded in the bundle  no external asset needed.
