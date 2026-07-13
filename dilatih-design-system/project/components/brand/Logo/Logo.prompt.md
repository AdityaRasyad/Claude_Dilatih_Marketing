Logo from @dilatih/design-system. Use via `window.DilatihDS.Logo` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Logo.html`): Color, White, Sizes.

## Props

```ts
interface LogoProps {
  /** `color` for light backgrounds (default), `white` for dark/navy backgrounds. */
  variant?: "color" | "white";
  /** Rendered height in pixels; width scales with the wordmark's aspect ratio. Default 32. */
  height?: number;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
```

## Examples

```jsx
// Color
export const Color: Story = { args: { variant: 'color', height: 40 } }

// White
export const White: Story = {
  args: { variant: 'white', height: 40 },
  parameters: { backgrounds: { default: 'navy' } },
  decorators: [
    (Story) => (
      <div style={{ background: '#241d52', padding: 24, display: 'inline-block', borderRadius: 8 }}>
        <Story />
      </div>
    ),
  ],
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <Logo height={24} />
      <Logo height={32} />
      <Logo height={48} />
    </div>
  ),
}
```

### Color

```jsx
/* Color */ compose(S, "Color")
```

### White

```jsx
/* White */ compose(S, "White")
```

### Sizes

```jsx
/* Sizes */ compose(S, "Sizes")
```
