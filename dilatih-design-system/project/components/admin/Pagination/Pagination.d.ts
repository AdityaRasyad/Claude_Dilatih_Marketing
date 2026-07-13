import * as React from 'react';

/**
 * Pagination — from @dilatih/design-system@0.1.0 (./src/components/Pagination/Pagination.stories.tsx).
 */
export interface PaginationProps {
  /** Current 1-based page. */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  /** Invoked with the requested page. */
  onPageChange?: (page: number) => void;
  /** Number of sibling pages shown on each side of the current page. */
  siblingCount?: number;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Pagination: React.ComponentType<PaginationProps>;
