import * as React from 'react';

/**
 * Spinner — from @dilatih/design-system@0.1.0 (./src/components/Spinner/Spinner.stories.tsx).
 */
export interface SpinnerProps {
  /** Override color via Tailwind text utilities. Defaults to text-navy-500. */
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export declare const Spinner: React.ComponentType<SpinnerProps>;
