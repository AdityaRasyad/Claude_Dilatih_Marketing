CourseCard from @dilatih/design-system. Use via `window.DilatihDS.CourseCard` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `CourseCard.html`): Default, Grid.

## Props

```ts
interface CourseCardProps {
  /** Cover image URL. A neutral placeholder is shown when absent. */
  image?: string;
  /** Category label rendered as a soft Badge. */
  category?: string;
  /** Course title (clamped to two lines). */
  title: string;
  /** Instructor / trainer name. */
  instructor?: string;
  /** Average rating, 0–5. */
  rating?: number;
  /** Number of reviews backing the rating. */
  reviewCount?: number;
  /** Formatted price, e.g. "Rp 1.500.000". */
  price: string;
  /** Optional struck-through original price. */
  originalPrice?: string;
  /** Difficulty level, e.g. "Pemula". */
  level?: string;
  /** Course duration, e.g. "16 jam". */
  duration?: string;
  /** Enroll CTA handler. */
  onEnroll?: () => void;
  /** CTA label. */
  ctaLabel?: string;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    category: 'Keselamatan Kerja',
    title: 'Sertifikasi BNSP K3 Umum',
    instructor: 'Ir. Budi Santoso, M.K3',
    rating: 4.8,
    reviewCount: 320,
    price: 'Rp 1.500.000',
    originalPrice: 'Rp 2.000.000',
    level: 'Pemula',
    duration: '16 jam',
  },
  render: (args) => (
    <div className="max-w-sm">
      <CourseCard {...args} />
    </div>
  ),
}

// Grid
export const Grid: Story = {
  args: { title: '', price: '' },
  render: () => (
    <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CourseCard
        category="Keselamatan Kerja"
        title="Sertifikasi BNSP K3 Umum"
        instructor="Ir. Budi Santoso, M.K3"
        rating={4.8}
        reviewCount={320}
        price="Rp 1.500.000"
        originalPrice="Rp 2.000.000"
        level="Pemula"
        duration="16 jam"
      />
      <CourseCard
        category="Konstruksi"
        title="Ahli K3 Konstruksi Madya Tersertifikasi"
        instructor="Dr. Andi Wijaya, S.T."
        rating={4.9}
        reviewCount={185}
        price="Rp 4.250.000"
        level="Menengah"
        duration="40 jam"
      />
      <CourseCard
        category="Soft Skill"
        title="Komunikasi Efektif untuk Profesional"
        instructor="Sari Permata, M.Psi"
        rating={4.7}
        reviewCount={512}
        price="Rp 950.000"
        originalPrice="Rp 1.200.000"
        level="Semua Level"
        duration="8 jam"
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
