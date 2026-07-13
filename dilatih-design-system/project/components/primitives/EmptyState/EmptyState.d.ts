import * as React from 'react';

/**
 * EmptyState — from @dilatih/design-system@0.1.0 (./src/components/EmptyState/EmptyState.stories.tsx).
 */
export interface EmptyStateProps {
  /** Illustrative icon. Defaults to a lucide Inbox glyph. */
  icon?: React.ReactNode;
  /** Primary message describing the empty condition. */
  title: string;
  /** Optional supporting copy. */
  description?: string;
  /** Optional call-to-action (e.g. a Button). */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const EmptyState: React.ComponentType<EmptyStateProps>;
