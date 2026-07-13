Button from @dilatih/design-system. Use via `window.DilatihDS.Button` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Button.html`): Primary, Secondary, Outline, Ghost, Pink, Danger, Sizes, With Icons, Pill, All Variants.

## Props

```ts
interface ButtonProps {
  /** Icon element rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon element rendered after the label. */
  trailingIcon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  variant?: "danger" | "pink" | "primary" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
  block?: boolean;
}
```

## Examples

```jsx
// Primary
export const Primary: Story = { args: { variant: 'primary' } }

// Secondary
export const Secondary: Story = { args: { variant: 'secondary' } }

// Outline
export const Outline: Story = { args: { variant: 'outline' } }
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

### Pink

```jsx
/* Pink */ compose(S, "Pink")
```

### Danger

```jsx
/* Danger */ compose(S, "Danger")
```

### Sizes

```jsx
/* Sizes */ compose(S, "Sizes")
```

### WithIcons

```jsx
/* With Icons */ compose(S, "WithIcons")
```

### Pill

```jsx
/* Pill */ compose(S, "Pill")
```

### AllVariants

```jsx
/* All Variants */ compose(S, "AllVariants")
```
