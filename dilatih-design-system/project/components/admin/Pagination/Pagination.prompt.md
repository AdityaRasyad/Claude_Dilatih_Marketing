Pagination from @dilatih/design-system. Use via `window.DilatihDS.Pagination` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Pagination.html`): Default, Few Pages, Many Pages.

## Props

```ts
interface PaginationProps {
  /** Current 1-based page. */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  /** Invoked with the requested page. */
  onPageChange?: (page: number) => void;
  /** Number of sibling pages shown on each side of the current page. */
  siblingCount?: number;
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
  render: () => {
    const [page, setPage] = useState(3)
    return <Pagination page={page} pageCount={10} onPageChange={setPage} />
  },
}

// Few Pages
export const FewPages: Story = {
  render: () => {
    const [page, setPage] = useState(2)
    return <Pagination page={page} pageCount={5} onPageChange={setPage} />
  },
}

// Many Pages
export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(12)
    return <Pagination page={page} pageCount={42} onPageChange={setPage} />
  },
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### FewPages

```jsx
/* Few Pages */ compose(S, "FewPages")
```

### ManyPages

```jsx
/* Many Pages */ compose(S, "ManyPages")
```
