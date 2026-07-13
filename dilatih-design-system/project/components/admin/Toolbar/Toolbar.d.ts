import * as React from 'react';

/**
 * Toolbar — from @dilatih/design-system@0.1.0 (./src/components/Toolbar/Toolbar.stories.tsx).
 */
export interface ToolbarProps {
  /** Search control. `true` renders a default search Input with an icon; pass a ReactNode to supply a custom control, or omit */
  search?: React.ReactNode;
  /** Placeholder for the default search input (when `search` is `true`). */
  searchPlaceholder?: string;
  /** Filter controls rendered in the middle of the bar. */
  filters?: React.ReactNode;
  /** Action controls aligned to the right. */
  actions?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Toolbar: React.ComponentType<ToolbarProps>;
