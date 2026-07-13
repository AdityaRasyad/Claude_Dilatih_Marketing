Hero from @dilatih/design-system. Use via `window.DilatihDS.Hero` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Hero.html`): Light, Navy, With Media.

## Props

```ts
interface HeroProps {
  /** Small pill rendered above the title (E-E-A-T eyebrow). */
  eyebrow?: string;
  /** Main headline. */
  title: React.ReactNode;
  /** Supporting paragraph below the title. */
  subtitle?: React.ReactNode;
  /** Primary call-to-action element. */
  primaryAction?: React.ReactNode;
  /** Secondary call-to-action element. */
  secondaryAction?: React.ReactNode;
  /** Right-side media (image / illustration). When omitted the hero centres its content. */
  media?: React.ReactNode;
  /** Visual variant. `light` (default) uses surface; `navy` uses navy-950 with light text. */
  variant?: "navy" | "light";
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
```

## Examples

```jsx
// Light
export const Light: Story = {
  args: {
    eyebrow: 'Tersertifikasi BNSP',
    title,
    subtitle,
    primaryAction: (
      <Button size="lg" trailingIcon={<ArrowRight className="h-4 w-4" />}>
        Mulai Belajar
      </Button>
    ),
    secondaryAction: (
      <Button size="lg" variant="outline">
        Lihat Program
      </Button>
    ),
  },
}

// Navy
export const Navy: Story = {
  args: {
    variant: 'navy',
    eyebrow: 'Tersertifikasi BNSP',
    title,
    subtitle,
    primaryAction: (
      <Button size="lg" trailingIcon={<ArrowRight className="h-4 w-4" />}>
        Mulai Belajar
      </Button>
    ),
    secondaryAction: (
      <Button size="lg" variant="secondary">
        Lihat Program
      </Button>
    ),
  },
}

// With Media
export const WithMedia: Story = {
  args: {
    eyebrow: 'Tersertifikasi BNSP',
    title,
    subtitle,
    primaryAction: (
      <Button size="lg" trailingIcon={<ArrowRight className="h-4 w-4" />}>
        Mulai Belajar
      </Button>
    ),
    secondaryAction: (
      <Button size="lg" variant="outline">
        Lihat Program
      </Button>
    ),
    media: (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-card bg-navy-50 font-sans text-text-subtle shadow-elevated">
        Ilustrasi / Foto
      </div>
    ),
  },
}
```

### Light

```jsx
/* Light */ compose(S, "Light")
```

### Navy

```jsx
/* Navy */ compose(S, "Navy")
```

### WithMedia

```jsx
/* With Media */ compose(S, "WithMedia")
```
