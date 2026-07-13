import * as React from 'react';

/**
 * Card — from @dilatih/design-system@0.1.0 (./src/components/Card/Card.stories.tsx).
 */
export interface CardProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  elevation?: "elevated" | "flat" | "raised";
  padding?: "sm" | "md" | "lg" | "none";
  interactive?: boolean;
}

export declare const Card: React.ComponentType<CardProps>;
