IconButton from @dilatih/design-system. Use via `window.DilatihDS.IconButton` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `IconButton.html`): Primary, Secondary, Outline, Ghost, Danger, Sizes, All Variants.

## Props

```ts
interface IconButtonProps {
  /** The icon element rendered inside the button. */
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  variant?: "danger" | "pink" | "primary" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}
```

## Examples

```jsx
// Primary
export const Primary: Story = { args: { variant: 'primary' } }

// Secondary
export const Secondary: Story = { args: { variant: 'secondary', children: <Search size={18} />, 'aria-label': 'Cari pelatihan' } }

// Outline
export const Outline: Story = { args: { variant: 'outline', children: <Pencil size={18} />, 'aria-label': 'Ubah profil' } }
```

### Primary

```jsx
/* Primary */ compose(S, "Primary")
```

### Secondary

```jsx
/* Secondary */ compose(S, "Secondary")
```

### Outline

```jsx
/* Outline */ compose(S, "Outline")
```

### Ghost

```jsx
/* Ghost */ compose(S, "Ghost")
```

### Danger

```jsx
/* Danger */ compose(S, "Danger")
```

### Sizes

```jsx
/* Sizes */ compose(S, "Sizes")
```

### AllVariants

```jsx
/* All Variants */ compose(S, "AllVariants")
```
