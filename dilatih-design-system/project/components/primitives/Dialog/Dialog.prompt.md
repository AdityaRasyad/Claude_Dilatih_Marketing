Dialog from @dilatih/design-system. Use via `window.DilatihDS.Dialog` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Dialog.html`): Payment Confirmation.

## Props

```ts
interface DialogProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}
```

## Examples

```jsx
// Payment Confirmation
export const PaymentConfirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Bayar Sekarang</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Konfirmasi Pembayaran</DialogTitle>
          <DialogDescription>
            Anda akan mendaftar Workshop Ahli K3 Umum senilai Rp 4.500.000.
            Pastikan data Anda sudah benar sebelum melanjutkan.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Konfirmasi &amp; Bayar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
```

### PaymentConfirmation

```jsx
/* Payment Confirmation */ compose(S, "PaymentConfirmation")
```
