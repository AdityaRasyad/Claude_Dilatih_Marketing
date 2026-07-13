Alert from @dilatih/design-system. Use via `window.DilatihDS.Alert` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Alert.html`): Info, Success, Danger, Warning, Dismissable, All Variants.

## Props

```ts
interface AlertProps {
  /** Optional bold heading. */
  title?: string;
  /** Override the default per-variant icon. */
  icon?: React.ReactNode;
  /** When provided, renders a dismiss button. */
  onClose?: () => void;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  variant?: "danger" | "success" | "info" | "warning";
}
```

## Examples

```jsx
// Info
export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Kelas akan segera dimulai',
    children: 'Sesi pelatihan ISO 9001 dijadwalkan pada 25 Juni 2026 pukul 09.00 WIB.',
  },
}

// Success
export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Sertifikat berhasil diterbitkan',
    children: 'Sertifikat kelulusan Anda sudah dapat diunduh dari halaman profil.',
  },
}

// Danger
export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Pembayaran gagal',
    children: 'Transaksi tidak dapat diproses. Silakan periksa metode pembayaran Anda.',
  },
}
```

### Info

```jsx
/* Info */ compose(S, "Info")
```

### Success

```jsx
/* Success */ compose(S, "Success")
```

### Danger

```jsx
/* Danger */ compose(S, "Danger")
```

### Warning

```jsx
/* Warning */ compose(S, "Warning")
```

### Dismissable

```jsx
/* Dismissable */ compose(S, "Dismissable")
```

### AllVariants

```jsx
/* All Variants */ compose(S, "AllVariants")
```
