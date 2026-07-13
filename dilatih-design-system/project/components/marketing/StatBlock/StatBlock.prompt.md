StatBlock from @dilatih/design-system. Use via `window.DilatihDS.StatBlock` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `StatBlock.html`): Light, With Icons, Navy.

## Props

```ts
interface StatBlockProps {
  /** Stats to display. */
  stats: StatItem[];
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  variant?: "navy" | "light";
}
```

## Examples

```jsx
// Light
export const Light: Story = {
  args: { stats },
  render: (args) => (
    <div className="max-w-4xl">
      <StatBlock {...args} />
    </div>
  ),
}

// With Icons
export const WithIcons: Story = {
  args: {
    stats: [
      { value: '10.000+', label: 'Alumni', icon: <Users className="h-7 w-7" /> },
      { value: '150+', label: 'Program', icon: <BookOpen className="h-7 w-7" /> },
      { value: '98%', label: 'Kelulusan', icon: <Award className="h-7 w-7" /> },
      { value: '50+', label: 'Mitra Perusahaan', icon: <Building2 className="h-7 w-7" /> },
    ],
  },
  render: (args) => (
    <div className="max-w-4xl">
      <StatBlock {...args} />
    </div>
  ),
}

// Navy
export const Navy: Story = {
  args: { variant: 'navy', stats },
  render: (args) => (
    <div className="max-w-4xl">
      <StatBlock {...args} />
    </div>
  ),
}
```

### Light

```jsx
/* Light */ compose(S, "Light")
```

### WithIcons

```jsx
/* With Icons */ compose(S, "WithIcons")
```

### Navy

```jsx
/* Navy */ compose(S, "Navy")
```
