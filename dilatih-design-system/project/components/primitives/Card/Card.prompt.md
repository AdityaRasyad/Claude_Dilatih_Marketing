Card from @dilatih/design-system. Use via `window.DilatihDS.Card` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Card.html`): Basic, Elevations, Interactive.

## Props

```ts
interface CardProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  elevation?: "elevated" | "flat" | "raised";
  padding?: "sm" | "md" | "lg" | "none";
  interactive?: boolean;
}
```

## Examples

```jsx
// Basic
export const Basic: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Sertifikasi BNSP K3 Umum</CardTitle>
        <CardDescription>Pelatihan tersertifikasi resmi negara</CardDescription>
      </CardHeader>
      <CardContent>
        Tingkatkan kompetensi keselamatan kerja Anda dengan program pelatihan bersertifikat BNSP.
      </CardContent>
      <CardFooter>
        <Button size="sm">Daftar</Button>
        <Button size="sm" variant="ghost">Pelajari</Button>
      </CardFooter>
    </Card>
  ),
}

// Elevations
export const Elevations: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card elevation="flat" className="w-48"><CardTitle>Flat</CardTitle></Card>
      <Card elevation="raised" className="w-48"><CardTitle>Raised</CardTitle></Card>
      <Card elevation="elevated" className="w-48"><CardTitle>Elevated</CardTitle></Card>
    </div>
  ),
}

// Interactive
export const Interactive: Story = {
  render: () => (
    <Card interactive className="max-w-sm">
      <CardTitle>Hover saya</CardTitle>
      <CardDescription>Kartu yang dapat diklik dengan elevasi pada hover.</CardDescription>
    </Card>
  ),
}
```

### Basic

```jsx
/* Basic */ compose(S, "Basic")
```

### Elevations

```jsx
/* Elevations */ compose(S, "Elevations")
```

### Interactive

```jsx
/* Interactive */ compose(S, "Interactive")
```
