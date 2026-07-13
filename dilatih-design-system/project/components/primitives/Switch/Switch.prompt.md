Switch from @dilatih/design-system. Use via `window.DilatihDS.Switch` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Switch.html`): Default, On, Without Label, Disabled, Settings.

## Props

```ts
interface SwitchProps {
  /** Optional label rendered beside the switch. */
  label?: React.ReactNode;
  style?: CSSProperties;
  defaultChecked?: boolean;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  checked?: boolean;
  required?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: 'Aktifkan notifikasi email' },
}

// On
export const On: Story = {
  args: { label: 'Tampilkan sertifikat di profil', defaultChecked: true },
}

// Without Label
export const WithoutLabel: Story = {}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### On

```jsx
/* On */ compose(S, "On")
```

### WithoutLabel

```jsx
/* Without Label */ compose(S, "WithoutLabel")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### Settings

```jsx
/* Settings */ compose(S, "Settings")
```
