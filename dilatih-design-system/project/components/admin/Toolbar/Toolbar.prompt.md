Toolbar from @dilatih/design-system. Use via `window.DilatihDS.Toolbar` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Toolbar.html`): Default, Search Only, Actions Only.

## Props

```ts
interface ToolbarProps {
  /** Search control. `true` renders a default search Input with an icon; pass a ReactNode to supply a custom control, or omit */
  search?: React.ReactNode;
  /** Placeholder for the default search input (when `search` is `true`). */
  searchPlaceholder?: string;
  /** Filter controls rendered in the middle of the bar. */
  filters?: React.ReactNode;
  /** Action controls aligned to the right. */
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
    search: true,
    searchPlaceholder: 'Cari peserta...',
    filters: (
      <Button variant="outline" leadingIcon={<SlidersHorizontal className="h-4 w-4" />}>
        Filter
      </Button>
    ),
    actions: (
      <Button leadingIcon={<Download className="h-4 w-4" />}>Export</Button>
    ),
  },
}

// Search Only
export const SearchOnly: Story = {
  args: {
    search: true,
    searchPlaceholder: 'Cari sertifikat...',
  },
}

// Actions Only
export const ActionsOnly: Story = {
  args: {
    actions: (
      <>
        <Button variant="outline">Batal</Button>
        <Button>Simpan</Button>
      </>
    ),
  },
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### SearchOnly

```jsx
/* Search Only */ compose(S, "SearchOnly")
```

### ActionsOnly

```jsx
/* Actions Only */ compose(S, "ActionsOnly")
```
