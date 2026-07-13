import * as React from 'react';

/**
 * PageHeader — from @dilatih/design-system@0.1.0 (./src/components/PageHeader/PageHeader.stories.tsx).
 */
export interface PageHeaderProps {
  /** Page title. */
  title: string;
  /** Optional supporting description below the title. */
  description?: string;
  /** Breadcrumb trail rendered above the title. */
  breadcrumbs?: Breadcrumb[];
  /** Action elements (e.g. Buttons) aligned to the right. */
  actions?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const PageHeader: React.ComponentType<PageHeaderProps>;
