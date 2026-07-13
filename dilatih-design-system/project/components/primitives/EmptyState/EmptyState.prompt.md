EmptyState from @dilatih/design-system. Use via `window.DilatihDS.EmptyState` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `EmptyState.html`): No Certificates, Default, No Search Results.

## Props

```ts
interface EmptyStateProps {
  /** Illustrative icon. Defaults to a lucide Inbox glyph. */
  icon?: React.ReactNode;
  /** Primary message describing the empty condition. */
  title: string;
  /** Optional supporting copy. */
  description?: string;
  /** Optional call-to-action (e.g. a Button). */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

```jsx
// No Certificates
export const NoCertificates: Story = {
  args: {
    icon: <Award size={28} />,
    title: 'Belum ada sertifikat',
    description:
      'Anda belum menyelesaikan pelatihan apa pun. Ikuti kelas untuk mulai mengumpulkan sertifikat.',
    action: <Button leadingIcon={<Plus size={18} />}>Jelajahi Pelatihan</Button>,
  },
}

// Default
export const Default: Story = {
  args: {
    title: 'Tidak ada data',
    description: 'Belum ada apa pun untuk ditampilkan di sini.',
  },
}

// No Search Results
export const NoSearchResults: Story = {
  args: {
    icon: <Search size={28} />,
    title: 'Pencarian tidak ditemukan',
    description: 'Coba gunakan kata kunci lain atau ubah filter pencarian Anda.',
  },
}
```

### NoCertificates

```jsx
/* No Certificates */ compose(S, "NoCertificates")
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### NoSearchResults

```jsx
/* No Search Results */ compose(S, "NoSearchResults")
```
