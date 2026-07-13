Badge from @dilatih/design-system. Use via `window.DilatihDS.Badge` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Badge.html`): Soft Navy, Solid Navy, All Combos, Status Examples.

## Props

```ts
interface BadgeProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  color?: "danger" | "success" | "navy" | "purple" | "orange" | "neutral";
  tone?: "solid" | "soft";
}
```

## Examples

```jsx
// Soft Navy
export const SoftNavy: Story = { args: { tone: 'soft', color: 'navy', children: 'Populer' } }

// Solid Navy
export const SolidNavy: Story = { args: { tone: 'solid', color: 'navy', children: 'Populer' } }

// All Combos
export const AllCombos: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {colors.map((color) => (
          <Badge key={`solid-${color}`} tone="solid" color={color}>
            {color}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {colors.map((color) => (
          <Badge key={`soft-${color}`} tone="soft" color={color}>
            {color}
          </Badge>
        ))}
      </div>
    </div>
  ),
}
```

### SoftNavy

```jsx
/* Soft Navy */ compose(S, "SoftNavy")
```

### SolidNavy

```jsx
/* Solid Navy */ compose(S, "SolidNavy")
```

### AllCombos

```jsx
/* All Combos */ compose(S, "AllCombos")
```

### StatusExamples

```jsx
/* Status Examples */ compose(S, "StatusExamples")
```
