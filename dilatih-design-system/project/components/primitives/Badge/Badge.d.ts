import * as React from 'react';

/**
 * Badge — from @dilatih/design-system@0.1.0 (./src/components/Badge/Badge.stories.tsx).
 */
export interface BadgeProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  color?: "danger" | "success" | "navy" | "purple" | "orange" | "neutral";
  tone?: "solid" | "soft";
}

export declare const Badge: React.ComponentType<BadgeProps>;
