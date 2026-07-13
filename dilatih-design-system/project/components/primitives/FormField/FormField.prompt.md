FormField from @dilatih/design-system. Use via `window.DilatihDS.FormField` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `FormField.html`): Default, Required, With Helper Text, With Error, With Textarea.

## Props

```ts
interface FormFieldProps {
  /** Label text rendered above the control. */
  label?: string;
  /** id of the control the label is associated with. */
  htmlFor?: string;
  /** Marks the field as required, rendering a red asterisk. */
  required?: boolean;
  /** Helper text rendered below the control when there is no error. */
  helperText?: string;
  /** Error message rendered below the control; takes precedence over helperText. */
  error?: string;
  /** The form control (Input, Textarea, etc.). */
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  render: () => (
    <div className="w-80">
      <FormField label="Nama Lengkap" htmlFor="nama">
        <Input id="nama" placeholder="Masukkan nama lengkap" />
      </FormField>
    </div>
  ),
}

// Required
export const Required: Story = {
  render: () => (
    <div className="w-80">
      <FormField label="Email" htmlFor="email" required>
        <Input id="email" type="email" placeholder="Masukkan email" />
      </FormField>
    </div>
  ),
}

// With Helper Text
export const WithHelperText: Story = {
  render: () => (
    <div className="w-80">
      <FormField
        label="Kata Sandi"
        htmlFor="sandi"
        required
        helperText="Minimal 8 karakter, kombinasi huruf dan angka."
      >
        <Input id="sandi" type="password" placeholder="Masukkan kata sandi" />
      </FormField>
    </div>
  ),
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Required

```jsx
/* Required */ compose(S, "Required")
```

### WithHelperText

```jsx
/* With Helper Text */ compose(S, "WithHelperText")
```

### WithError

```jsx
/* With Error */ compose(S, "WithError")
```

### WithTextarea

```jsx
/* With Textarea */ compose(S, "WithTextarea")
```
