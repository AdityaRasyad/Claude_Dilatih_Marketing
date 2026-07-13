Select from @dilatih/design-system. Use via `window.DilatihDS.Select` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Select.html`): Category Selector, With Groups, With Default Value.

## Props

```ts
interface SelectProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  dir?: "ltr" | "rtl";
  name?: string;
  autoComplete?: string;
  disabled?: boolean;
  required?: boolean;
  form?: string;
  value?: string;
  defaultValue?: string;
}
```

## Examples

```jsx
// Category Selector
export const CategorySelector: Story = {
  render: () => (
    <div className="w-72">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pilih kategori" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="k3-umum">K3 Umum</SelectItem>
          <SelectItem value="ahli-k3">Ahli K3</SelectItem>
          <SelectItem value="komunikasi">Komunikasi</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

// With Groups
export const WithGroups: Story = {
  render: () => (
    <div className="w-72">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pilih kategori" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Keselamatan Kerja</SelectLabel>
            <SelectItem value="k3-umum">K3 Umum</SelectItem>
            <SelectItem value="ahli-k3">Ahli K3</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Soft Skill</SelectLabel>
            <SelectItem value="komunikasi">Komunikasi</SelectItem>
            <SelectItem value="kepemimpinan">Kepemimpinan</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

// With Default Value
export const WithDefaultValue: Story = {
  render: () => (
    <div className="w-72">
      <Select defaultValue="ahli-k3">
        <SelectTrigger>
          <SelectValue placeholder="Pilih kategori" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="k3-umum">K3 Umum</SelectItem>
          <SelectItem value="ahli-k3">Ahli K3</SelectItem>
          <SelectItem value="komunikasi">Komunikasi</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}
```

### CategorySelector

```jsx
/* Category Selector */ compose(S, "CategorySelector")
```

### WithGroups

```jsx
/* With Groups */ compose(S, "WithGroups")
```

### WithDefaultValue

```jsx
/* With Default Value */ compose(S, "WithDefaultValue")
```
