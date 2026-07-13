PricingCard from @dilatih/design-system. Use via `window.DilatihDS.PricingCard` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `PricingCard.html`): Default, Tiers.

## Props

```ts
interface PricingCardProps {
  /** Name of the plan / tier. */
  planName: string;
  /** Formatted price, e.g. "Rp 2.500.000". */
  price: string;
  /** Billing period suffix, e.g. "/peserta". */
  period?: string;
  /** Short supporting description. */
  description?: string;
  /** Feature list rendered with check marks. */
  features: string[];
  /** Action node (e.g. a Button) rendered at the bottom. */
  action?: React.ReactNode;
  /** Emphasise this plan as the recommended choice. */
  highlighted?: boolean;
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
    planName: 'Reguler',
    price: 'Rp 1.500.000',
    period: '/peserta',
    description: 'Untuk individu yang ingin tersertifikasi.',
    features: [
      'Akses materi pelatihan penuh',
      'Sertifikat BNSP resmi',
      'Modul digital seumur hidup',
      'Grup diskusi alumni',
    ],
    action: <Button block>Pilih Paket</Button>,
  },
  render: (args) => (
    <div className="max-w-xs pt-4">
      <PricingCard {...args} />
    </div>
  ),
}

// Tiers
export const Tiers: Story = {
  args: { planName: '', price: '', features: [] },
  render: () => (
    <div className="grid max-w-5xl grid-cols-1 items-start gap-6 pt-4 md:grid-cols-3">
      <PricingCard
        planName="Reguler"
        price="Rp 1.500.000"
        period="/peserta"
        description="Untuk individu yang ingin tersertifikasi."
        features={[
          'Akses materi pelatihan penuh',
          'Sertifikat BNSP resmi',
          'Modul digital seumur hidup',
          'Grup diskusi alumni',
        ]}
        action={
          <Button variant="outline" block>
            Pilih Paket
          </Button>
        }
      />
      <PricingCard
        highlighted
        planName="Korporat"
        price="Rp 12.500.000"
        period="/10 peserta"
        description="Pelatihan in-house untuk tim perusahaan."
        features={[
          'Semua benefit paket Reguler',
          'Jadwal fleksibel sesuai tim',
          'Trainer datang ke lokasi',
          'Laporan asesmen per peserta',
          'Diskon volume hingga 20%',
        ]}
        action={<Button block>Pilih Paket</Button>}
      />
      <PricingCard
        planName="Enterprise"
        price="Custom"
        description="Solusi pelatihan skala besar lintas divisi."
// …
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Tiers

```jsx
/* Tiers */ compose(S, "Tiers")
```
