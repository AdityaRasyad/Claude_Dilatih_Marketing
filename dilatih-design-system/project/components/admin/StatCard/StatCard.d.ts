import * as React from 'react';

/**
 * StatCard — from @dilatih/design-system@0.1.0 (./src/components/StatCard/StatCard.stories.tsx).
 */
export interface StatCardProps {
  /** Metric label. */
  label: string;
  /** Formatted metric value. */
  value: string;
  /** Optional leading icon. */
  icon?: React.ReactNode;
  /** Optional trend indicator. */
  delta?: StatCardDelta;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  accent?: "success" | "navy" | "purple" | "orange" | "pink";
}

export declare const StatCard: React.ComponentType<StatCardProps>;
