Tooltip from @dilatih/design-system. Use via `window.DilatihDS.Tooltip` (bundle loaded from the root `_ds_bundle.js`).

Variants (see `Tooltip.html`): On Button, On Icon.

## Props

```ts
interface TooltipProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  /** The duration from when the pointer enters the trigger until the tooltip gets opened. This will override the prop with th */
  delayDuration?: number;
  /** When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger. */
  disableHoverableContent?: boolean;
}
```

## Examples

```jsx
// On Button
export const OnButton: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex justify-center p-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Unduh Sertifikat</Button>
          </TooltipTrigger>
          <TooltipContent>
            Sertifikat tersedia setelah Anda menyelesaikan seluruh modul.
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}

// On Icon
export const OnIcon: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex justify-center p-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="text-text-subtle hover:text-navy-600"
              aria-label="Informasi"
            >
              <Info size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">
            Workshop ini diakui oleh Kemnaker RI.
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}
```

### OnButton

```jsx
/* On Button */ compose(S, "OnButton")
```

### OnIcon

```jsx
/* On Icon */ compose(S, "OnIcon")
```
