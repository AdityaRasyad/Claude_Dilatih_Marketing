Footer from @dilatih/design-system. Use via `window.DilatihDS.Footer` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Footer.html`): Dark, Light.

## Props

```ts
interface FooterProps {
  /** Brand mark. Defaults to the Dilatih logo (white on dark, color on light). */
  logo?: React.ReactNode;
  /** Short brand tagline beneath the logo. */
  tagline?: string;
  /** Link columns. */
  columns?: FooterColumn[];
  /** Social / contact icon links. */
  socials?: FooterSocial[];
  /** Copyright line in the bottom bar. */
  copyright?: string;
  /** Visual variant. `dark` (default) uses navy-950; `light` uses the surface tone. */
  variant?: "dark" | "light";
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

```jsx
// Dark
export const Dark: Story = {
  args: { columns },
}

// Light
export const Light: Story = {
  args: { columns, variant: 'light' },
}
```

### Dark

```jsx
/* Dark */ compose(S, "Dark")
```

### Light

```jsx
/* Light */ compose(S, "Light")
```
