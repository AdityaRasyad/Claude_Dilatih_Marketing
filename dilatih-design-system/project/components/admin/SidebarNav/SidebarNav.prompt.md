SidebarNav from @dilatih/design-system. Use via `window.DilatihDS.SidebarNav` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `SidebarNav.html`): Default, With Sections.

## Props

```ts
interface SidebarNavProps {
  /** Brand mark rendered at the top of the sidebar. */
  logo?: React.ReactNode;
  /** Flat list of items (ignored when `sections` is provided). */
  items?: SidebarNavItem[];
  /** Grouped items with optional section titles. */
  sections?: SidebarNavSection[];
  /** Footer content, e.g. a user profile block. */
  footer?: React.ReactNode;
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
  render: (args) => (
    <div className="h-screen">
      <SidebarNav {...args} />
    </div>
  ),
  args: {
    logo: Logo,
    footer: Footer,
    items: [
      { label: 'Dashboard', icon: <LayoutDashboard />, href: '#', active: true },
      { label: 'Kelas', icon: <GraduationCap />, href: '#' },
      { label: 'Workshop', icon: <Presentation />, href: '#' },
      { label: 'Peserta', icon: <Users />, href: '#', badge: '128' },
      { label: 'Sertifikat', icon: <Award />, href: '#' },
      { label: 'Pembayaran', icon: <CreditCard />, href: '#', badge: '4' },
      { label: 'Pengaturan', icon: <Settings />, href: '#' },
    ],
  },
}

// With Sections
export const WithSections: Story = {
  render: (args) => (
    <div className="h-screen">
      <SidebarNav {...args} />
    </div>
  ),
  args: {
    logo: Logo,
    footer: Footer,
    sections: [
      {
        title: 'Utama',
        items: [
          { label: 'Dashboard', icon: <LayoutDashboard />, href: '#', active: true },
          { label: 'Kelas', icon: <GraduationCap />, href: '#' },
          { label: 'Workshop', icon: <Presentation />, href: '#' },
        ],
      },
      {
        title: 'Manajemen',
        items: [
          { label: 'Peserta', icon: <Users />, href: '#', badge: '128' },
          { label: 'Sertifikat', icon: <Award />, href: '#' },
          { label: 'Pembayaran', icon: <CreditCard />, href: '#', badge: '4' },
        ],
      },
      {
        title: 'Sistem',
        items: [{ label: 'Pengaturan', icon: <Settings />, href: '#' }],
      },
    ],
  },
}
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithSections

```jsx
/* With Sections */ compose(S, "WithSections")
```
