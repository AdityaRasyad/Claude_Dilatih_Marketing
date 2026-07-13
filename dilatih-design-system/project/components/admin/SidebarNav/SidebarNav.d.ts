import * as React from 'react';

/**
 * SidebarNav — from @dilatih/design-system@0.1.0 (./src/components/SidebarNav/SidebarNav.stories.tsx).
 */
export interface SidebarNavProps {
  /** Brand mark rendered at the top of the sidebar. */
  logo?: React.ReactNode;
  /** Flat list of items (ignored when `sections` is provided). */
  items?: SidebarNavItem[];
  /** Grouped items with optional section titles. */
  sections?: SidebarNavSection[];
  /** Footer content, e.g. a user profile block. */
  footer?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const SidebarNav: React.ComponentType<SidebarNavProps>;
