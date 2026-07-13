import * as React from 'react';

/**
 * Navbar — from @dilatih/design-system@0.1.0 (./src/components/Navbar/Navbar.stories.tsx).
 */
export interface NavbarProps {
  /** Brand mark rendered on the left. Defaults to a "dilatih" wordmark. */
  logo?: React.ReactNode;
  /** Primary navigation links rendered centre/right. */
  links?: NavbarLink[];
  /** Call-to-action rendered on the right. Defaults to a primary "Daftar" button. */
  cta?: React.ReactNode;
  /** When true, the bar sticks to the top of the viewport. */
  sticky?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Navbar: React.ComponentType<NavbarProps>;
