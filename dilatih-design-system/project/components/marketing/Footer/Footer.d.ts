import * as React from 'react';

/**
 * Footer — from @dilatih/design-system@0.1.0 (./src/components/Footer/Footer.stories.tsx).
 */
export interface FooterProps {
  /** Brand mark. Defaults to the Dilatih logo (white on dark, color on light). */
  logo?: React.ReactNode;
  /** Short brand tagline beneath the logo. */
  tagline?: string;
  /** Link columns. */
  columns?: FooterColumn[];
  /** Social / contact icon links. */
  socials?: FooterSocial[];
  /** Copyright line in the bottom bar. */
  copyright?: string;
  /** Visual variant. `dark` (default) uses navy-950; `light` uses the surface tone. */
  variant?: "dark" | "light";
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Footer: React.ComponentType<FooterProps>;
