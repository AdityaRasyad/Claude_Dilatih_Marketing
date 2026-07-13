import * as React from 'react';

/**
 * StatBlock — from @dilatih/design-system@0.1.0 (./src/components/StatBlock/StatBlock.stories.tsx).
 */
export interface StatBlockProps {
  /** Stats to display. */
  stats: StatItem[];
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  variant?: "navy" | "light";
}

export declare const StatBlock: React.ComponentType<StatBlockProps>;
