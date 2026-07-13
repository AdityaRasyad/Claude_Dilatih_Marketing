CTASection from @dilatih/design-system. Use via `window.DilatihDS.CTASection` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `CTASection.html`): Default, Deep, Contained.

## Props

```ts
interface CTASectionProps {
  /** Band headline. */
  title: React.ReactNode;
  /** Supporting line below the title. */
  subtitle?: React.ReactNode;
  /** Call-to-action element. Defaults to a primary "Daftar Sekarang" button. */
  action?: React.ReactNode;
  /** Background tone. `navy` (default, navy-500) or `deep` (navy-950). */
  tone?: "navy" | "deep";
  /** When true, the band is wrapped in a rounded-card container with side padding. */
  contained?: boolean;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    title: 'Siap mengembangkan karier Anda?',
    subtitle:
      'Bergabung dengan ribuan profesional yang telah meningkatkan kompetensi bersama dilatih.',
    action: (
      <Button size="lg" variant="secondary" trailingIcon={<ArrowRight className="h-4 w-4" />}>
        Daftar Sekarang
      </Button>
    ),
  },
}

// Deep
export const Deep: Story = {
  args: {
    tone: 'deep',
    title: 'Siap mengembangkan karier Anda?',
    subtitle: 'Mulai perjalanan sertifikasi resmi BNSP hari ini.',
  },
}

// Contained
export const Contained: Story = {
  args: {
    contained: true,
    title: 'Siap mengembangkan karier Anda?',
    subtitle: 'Daftar sekarang dan dapatkan harga spesial untuk batch terdekat.',
  },
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Deep

```jsx
/* Deep */ compose(S, "Deep")
```

### Contained

```jsx
/* Contained */ compose(S, "Contained")
```
