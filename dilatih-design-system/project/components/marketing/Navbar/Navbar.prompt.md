Navbar from @dilatih/design-system. Use via `window.DilatihDS.Navbar` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Navbar.html`): Default, Sticky, With Secondary Cta.

## Props

```ts
interface NavbarProps {
  /** Brand mark rendered on the left. Defaults to a "dilatih" wordmark. */
  logo?: React.ReactNode;
  /** Primary navigation links rendered centre/right. */
  links?: NavbarLink[];
  /** Call-to-action rendered on the right. Defaults to a primary "Daftar" button. */
  cta?: React.ReactNode;
  /** When true, the bar sticks to the top of the viewport. */
  sticky?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { links },
}

// Sticky
export const Sticky: Story = {
  args: { links, sticky: true },
  render: (args) => (
    <div>
      <Navbar {...args} />
      <div className="h-[150vh] bg-surface-sunken p-8 font-sans text-text-subtle">
        Gulir halaman untuk melihat navbar tetap menempel di atas.
      </div>
    </div>
  ),
}

// With Secondary Cta
export const WithSecondaryCta: Story = {
  args: {
    links,
    cta: (
      <>
        <Button size="sm" variant="ghost">
          Masuk
        </Button>
        <Button size="sm">Daftar</Button>
      </>
    ),
  },
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Sticky

```jsx
/* Sticky */ compose(S, "Sticky")
```

### WithSecondaryCta

```jsx
/* With Secondary Cta */ compose(S, "WithSecondaryCta")
```
