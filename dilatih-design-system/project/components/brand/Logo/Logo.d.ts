import * as React from 'react';

/**
 * Logo — from @dilatih/design-system@0.1.0 (./src/components/Logo/Logo.stories.tsx).
 */
export interface LogoProps {
  /** `color` for light backgrounds (default), `white` for dark/navy backgrounds. */
  variant?: "color" | "white";
  /** Rendered height in pixels; width scales with the wordmark's aspect ratio. Default 32. */
  height?: number;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare const Logo: React.ComponentType<LogoProps>;
