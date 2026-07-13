Textarea from @dilatih/design-system. Use via `window.DilatihDS.Textarea` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Textarea.html`): Default, With Value, Error, Disabled, Rows.

## Props

```ts
interface TextareaProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  state?: "default" | "error";
}
```

## Examples

```jsx
// Default
export const Default: Story = {}

// With Value
export const WithValue: Story = {
  args: {
    defaultValue: 'Saya tertarik mengikuti pelatihan Digital Marketing untuk tim saya.',
  },
}

// Error
export const Error: Story = {
  args: { state: 'error', placeholder: 'Pesan tidak boleh kosong' },
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithValue

```jsx
/* With Value */ compose(S, "WithValue")
```

### Error

```jsx
/* Error */ compose(S, "Error")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### Rows

```jsx
/* Rows */ compose(S, "Rows")
```
