PageHeader from @dilatih/design-system. Use via `window.DilatihDS.PageHeader` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `PageHeader.html`): Default, With Multiple Actions, Title Only.

## Props

```ts
interface PageHeaderProps {
  /** Page title. */
  title: string;
  /** Optional supporting description below the title. */
  description?: string;
  /** Breadcrumb trail rendered above the title. */
  breadcrumbs?: Breadcrumb[];
  /** Action elements (e.g. Buttons) aligned to the right. */
  actions?: React.ReactNode;
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
  args: {
    title: 'Manajemen Peserta',
    description: 'Kelola data peserta pelatihan dan sertifikasi BNSP.',
    breadcrumbs: [{ label: 'Dashboard', href: '#' }, { label: 'Peserta' }],
    actions: (
      <Button leadingIcon={<Plus className="h-4 w-4" />}>Tambah Peserta</Button>
    ),
  },
}

// With Multiple Actions
export const WithMultipleActions: Story = {
  args: {
    title: 'Sertifikat Terbit',
    description: 'Daftar seluruh sertifikat kompetensi yang telah diterbitkan.',
    breadcrumbs: [
      { label: 'Dashboard', href: '#' },
      { label: 'Sertifikat', href: '#' },
      { label: 'Terbit' },
    ],
    actions: (
      <>
        <Button variant="outline" leadingIcon={<Download className="h-4 w-4" />}>
          Export
        </Button>
        <Button leadingIcon={<Plus className="h-4 w-4" />}>Terbitkan Baru</Button>
      </>
    ),
  },
}

// Title Only
export const TitleOnly: Story = {
  args: {
    title: 'Pengaturan',
  },
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithMultipleActions

```jsx
/* With Multiple Actions */ compose(S, "WithMultipleActions")
```

### TitleOnly

```jsx
/* Title Only */ compose(S, "TitleOnly")
```
