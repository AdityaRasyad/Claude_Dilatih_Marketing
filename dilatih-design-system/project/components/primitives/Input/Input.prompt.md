Input from @dilatih/design-system. Use via `window.DilatihDS.Input` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Input.html`): Default, With Value, Error, Disabled, Sizes, With Icons.

## Props

```ts
interface InputProps {
  /** Icon element rendered inside the input on the leading edge. */
  leadingIcon?: React.ReactNode;
  /** Icon element rendered inside the input on the trailing edge. */
  trailingIcon?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  inputSize?: "sm" | "md" | "lg";
  state?: "default" | "error";
}
```

## Examples

```jsx
// Default
export const Default: Story = {}

// With Value
export const WithValue: Story = { args: { defaultValue: 'budi@dilatih.co' } }

// Error
export const Error: Story = {
  args: { state: 'error', defaultValue: 'email-tidak-valid', placeholder: 'Masukkan email' },
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

### Sizes

```jsx
/* Sizes */ compose(S, "Sizes")
```

### WithIcons

```jsx
/* With Icons */ compose(S, "WithIcons")
```
