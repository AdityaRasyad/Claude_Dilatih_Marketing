StatCard from @dilatih/design-system. Use via `window.DilatihDS.StatCard` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `StatCard.html`): Default, Grid.

## Props

```ts
interface StatCardProps {
  /** Metric label. */
  label: string;
  /** Formatted metric value. */
  value: string;
  /** Optional leading icon. */
  icon?: React.ReactNode;
  /** Optional trend indicator. */
  delta?: StatCardDelta;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  accent?: "success" | "navy" | "purple" | "orange" | "pink";
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    label: 'Total Peserta',
    value: '1.248',
    icon: <Users />,
    accent: 'navy',
    delta: { value: '+12,5%', direction: 'up' },
  },
}

// Grid
export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Peserta"
        value="1.248"
        icon={<Users />}
        accent="navy"
        delta={{ value: '+12,5%', direction: 'up' }}
      />
      <StatCard
        label="Pendapatan"
        value="Rp 245jt"
        icon={<Wallet />}
        accent="success"
        delta={{ value: '+8,2%', direction: 'up' }}
      />
      <StatCard
        label="Sertifikat Terbit"
        value="980"
        icon={<Award />}
        accent="orange"
        delta={{ value: '-3,1%', direction: 'down' }}
      />
      <StatCard
        label="Kelas Aktif"
        value="32"
        icon={<GraduationCap />}
        accent="purple"
      />
    </div>
  ),
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Grid

```jsx
/* Grid */ compose(S, "Grid")
```
