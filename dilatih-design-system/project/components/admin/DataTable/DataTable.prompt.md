DataTable from @dilatih/design-system. Use via `window.DilatihDS.DataTable` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `DataTable.html`): Default, Clickable, Empty.

## Props

```ts
interface DataTableProps {
  /** Column definitions. */
  columns: DataTableColumn<T>[];
  /** Row data. */
  data: T[];
  /** Invoked when a row is clicked. */
  onRowClick?: (row: T, rowIndex: number) => void;
  /** Function returning a stable React key for a row. */
  rowKey?: (row: T, rowIndex: number) => React.Key;
  /** Message shown when `data` is empty. */
  emptyMessage?: React.ReactNode;
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
  args: { columns, data },
}

// Clickable
export const Clickable: Story = {
  args: {
    columns,
    data,
    onRowClick: (row) => alert(`Membuka detail peserta: ${row.nama}`),
  },
}

// Empty
export const Empty: Story = {
  args: { columns, data: [] },
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Clickable

```jsx
/* Clickable */ compose(S, "Clickable")
```

### Empty

```jsx
/* Empty */ compose(S, "Empty")
```
