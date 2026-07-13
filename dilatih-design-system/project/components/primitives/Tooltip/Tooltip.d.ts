import * as React from 'react';

/**
 * Tooltip — from @dilatih/design-system@0.1.0 (./src/components/Tooltip/Tooltip.stories.tsx).
 */
export interface TooltipProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  /** The duration from when the pointer enters the trigger until the tooltip gets opened. This will override the prop with th */
  delayDuration?: number;
  /** When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger. */
  disableHoverableContent?: boolean;
}

export declare const Tooltip: React.ComponentType<TooltipProps>;
