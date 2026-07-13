TestimonialCard from @dilatih/design-system. Use via `window.DilatihDS.TestimonialCard` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `TestimonialCard.html`): Default, Grid.

## Props

```ts
interface TestimonialCardProps {
  /** The testimonial body. */
  quote: string;
  /** Name of the person giving the testimonial. */
  name: string;
  /** Role / company of the person. */
  role?: string;
  /** Avatar image source; initials are derived from `name` when absent. */
  avatarSrc?: string;
  /** Star rating, 0–5. */
  rating?: number;
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
    quote:
      'Materinya sangat aplikatif dan instrukturnya berpengalaman di lapangan. Sertifikat BNSP-nya langsung saya pakai untuk naik jabatan.',
    name: 'Rahmat Hidayat',
    role: 'Safety Officer, PT Wijaya Karya',
    rating: 5,
  },
  render: (args) => (
    <div className="max-w-sm">
      <TestimonialCard {...args} />
    </div>
  ),
}

// Grid
export const Grid: Story = {
  args: { quote: '', name: '' },
  render: () => (
    <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <TestimonialCard
        quote="Materinya sangat aplikatif dan instrukturnya berpengalaman di lapangan. Sertifikat BNSP-nya langsung saya pakai untuk naik jabatan."
        name="Rahmat Hidayat"
        role="Safety Officer, PT Wijaya Karya"
        rating={5}
      />
      <TestimonialCard
        quote="Proses pendaftaran mudah dan kelasnya fleksibel. Saya bisa belajar sambil tetap bekerja. Sangat direkomendasikan untuk profesional sibuk."
        name="Dewi Anggraini"
        role="HR Manager, PT Astra Internasional"
        rating={5}
      />
      <TestimonialCard
        quote="Awalnya ragu belajar online, tapi ternyata supportnya luar biasa. Mentor selalu siap membantu sampai saya benar-benar paham."
        name="Bayu Pratama"
        role="Teknisi Senior, PT Pertamina"
        rating={4}
      />
    </div>
  ),
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Grid

```jsx
/* Grid */ compose(S, "Grid")
```
