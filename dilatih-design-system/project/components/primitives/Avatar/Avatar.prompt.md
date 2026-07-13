Avatar from @dilatih/design-system. Use via `window.DilatihDS.Avatar` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Avatar.html`): Initials, Image, With Images, Initials Fallback, Sizes.

## Props

```ts
interface AvatarProps {
  /** Image source. When omitted, initials from `name` are shown. */
  src?: string;
  /** Alternative text for the image. */
  alt?: string;
  /** Full name used to derive the initials fallback. */
  name?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}
```

## Examples

```jsx
// Initials
export const Initials: Story = { args: { name: 'Siti Rahmawati' } }

// Image
export const Image: Story = {
  args: {
    name: 'Budi Santoso',
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'Foto profil Budi Santoso',
  },
}

// With Images
export const WithImages: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar name="Budi Santoso" src="https://i.pravatar.cc/150?img=12" alt="Budi Santoso" />
      <Avatar name="Dewi Lestari" src="https://i.pravatar.cc/150?img=45" alt="Dewi Lestari" />
      <Avatar name="Agus Pratama" src="https://i.pravatar.cc/150?img=33" alt="Agus Pratama" />
    </div>
  ),
}
```

### Initials

```jsx
/* Initials */ compose(S, "Initials")
```

### Image

```jsx
/* Image */ compose(S, "Image")
```

### WithImages

```jsx
/* With Images */ compose(S, "WithImages")
```

### InitialsFallback

```jsx
/* Initials Fallback */ compose(S, "InitialsFallback")
```

### Sizes

```jsx
/* Sizes */ compose(S, "Sizes")
```
