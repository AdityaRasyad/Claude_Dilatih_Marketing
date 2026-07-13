Checkbox from @dilatih/design-system. Use via `window.DilatihDS.Checkbox` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Checkbox.html`): Default, Checked, Without Label, Disabled, Group.

## Props

```ts
interface CheckboxProps {
  /** Optional label rendered beside the checkbox. */
  label?: React.ReactNode;
  style?: CSSProperties;
  defaultChecked?: boolean | "indeterminate";
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  checked?: boolean | "indeterminate";
  required?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: 'Setuju dengan syarat & ketentuan' },
}

// Checked
export const Checked: Story = {
  args: { label: 'Kirimi saya info kelas terbaru', defaultChecked: true },
}

// Without Label
export const WithoutLabel: Story = {}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Checked

```jsx
/* Checked */ compose(S, "Checked")
```

### WithoutLabel

```jsx
/* Without Label */ compose(S, "WithoutLabel")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### Group

```jsx
/* Group */ compose(S, "Group")
```
