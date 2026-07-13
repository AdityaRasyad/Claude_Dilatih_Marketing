Spinner from @dilatih/design-system. Use via `window.DilatihDS.Spinner` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Spinner.html`): Default, Sizes, On Navy Background.

## Props

```ts
interface SpinnerProps {
  /** Override color via Tailwind text utilities. Defaults to text-navy-500. */
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}
```

## Examples

```jsx
// Default
export const Default: Story = { args: { size: 'md' } }

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}

// On Navy Background
export const OnNavyBackground: Story = {
  render: () => (
    <div className="flex items-center gap-3 rounded-card bg-navy-700 px-6 py-5">
      <Spinner size="md" className="text-white" />
      <span className="font-sans text-sm text-white">Memuat data pelatihan...</span>
    </div>
  ),
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Sizes

```jsx
/* Sizes */ compose(S, "Sizes")
```

### OnNavyBackground

```jsx
/* On Navy Background */ compose(S, "OnNavyBackground")
```
