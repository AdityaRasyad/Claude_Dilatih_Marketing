import * as React from 'react';

/**
 * Tabs — from @dilatih/design-system@0.1.0 (./src/components/Tabs/Tabs.stories.tsx).
 */
export interface TabsProps {
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

export declare const Tabs: React.ComponentType<TabsProps>;
