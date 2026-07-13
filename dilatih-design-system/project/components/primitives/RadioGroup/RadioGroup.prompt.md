RadioGroup from @dilatih/design-system. Use via `window.DilatihDS.RadioGroup` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `RadioGroup.html`): Default, With Disabled Item, Horizontal.

## Props

```ts
interface RadioGroupProps {
  style?: CSSProperties;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  loop?: boolean;
  required?: boolean;
  orientation?: "horizontal" | "vertical";
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="online">
      <RadioGroupItem value="online" label="Kelas Online" />
      <RadioGroupItem value="offline" label="Kelas Tatap Muka" />
      <RadioGroupItem value="hybrid" label="Hybrid" />
    </RadioGroup>
  ),
}

// With Disabled Item
export const WithDisabledItem: Story = {
  render: () => (
    <RadioGroup defaultValue="bulanan">
      <RadioGroupItem value="bulanan" label="Pembayaran Bulanan" />
      <RadioGroupItem value="tahunan" label="Pembayaran Tahunan (hemat 20%)" />
      <RadioGroupItem value="korporat" label="Paket Korporat (segera hadir)" disabled />
    </RadioGroup>
  ),
}

// Horizontal
export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="ya" className="flex-row gap-6">
      <RadioGroupItem value="ya" label="Ya" />
      <RadioGroupItem value="tidak" label="Tidak" />
    </RadioGroup>
  ),
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithDisabledItem

```jsx
/* With Disabled Item */ compose(S, "WithDisabledItem")
```

### Horizontal

```jsx
/* Horizontal */ compose(S, "Horizontal")
```
