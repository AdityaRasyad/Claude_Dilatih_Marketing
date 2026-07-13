Tabs from @dilatih/design-system. Use via `window.DilatihDS.Tabs` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Tabs.html`): Workshop Detail.

## Props

```ts
interface TabsProps {
  /** The value for the selected tab, if controlled */
  value?: string;
  /** The value of the tab to select by default, if uncontrolled */
  defaultValue?: string;
  /** The orientation the tabs are layed out. Mainly so arrow navigation is done accordingly (left & right vs. up & down) */
  orientation?: "horizontal" | "vertical";
  /** The direction of navigation between toolbar items. */
  dir?: "ltr" | "rtl";
  /** Whether a tab is activated automatically or manually. */
  activationMode?: "automatic" | "manual";
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
}
```

## Examples

```jsx
// Workshop Detail
export const WorkshopDetail: Story = {
  render: () => (
    <div className="w-[28rem]">
      <Tabs defaultValue="ringkasan">
        <TabsList>
          <TabsTrigger value="ringkasan">Ringkasan</TabsTrigger>
          <TabsTrigger value="materi">Materi</TabsTrigger>
          <TabsTrigger value="ulasan">Ulasan</TabsTrigger>
        </TabsList>
        <TabsContent value="ringkasan">
          Workshop K3 Umum selama 12 hari yang mempersiapkan peserta untuk
          sertifikasi Ahli K3 Umum dari Kemnaker RI. Dipandu instruktur
          bersertifikat dengan studi kasus industri nyata.
        </TabsContent>
        <TabsContent value="materi">
          Materi mencakup peraturan perundangan K3, manajemen risiko,
          investigasi kecelakaan kerja, hingga audit SMK3 sesuai PP No. 50
          Tahun 2012.
        </TabsContent>
        <TabsContent value="ulasan">
          "Materinya lengkap dan instrukturnya sangat membantu. Saya lulus
          ujian Ahli K3 di percobaan pertama." — Budi Santoso, peserta angkatan
          ke-14.
        </TabsContent>
      </Tabs>
    </div>
  ),
}
```

### WorkshopDetail

```jsx
/* Workshop Detail */ compose(S, "WorkshopDetail")
```
