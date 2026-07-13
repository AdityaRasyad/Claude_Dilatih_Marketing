import * as React from 'react';

/**
 * DataTable — from @dilatih/design-system@0.1.0 (./src/components/DataTable/DataTable.stories.tsx).
 * @replaces table
 */
export interface DataTableProps<T> {
  /** Column definitions. */
  columns: DataTableColumn<T>[];
  /** Row data. */
  data: T[];
  /** Invoked when a row is clicked. */
  onRowClick?: (row: T, rowIndex: number) => void;
  /** Function returning a stable React key for a row. */
  rowKey?: (row: T, rowIndex: number) => React.Key;
  /** Message shown when `data` is empty. */
  emptyMessage?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const DataTable: React.ComponentType<DataTableProps>;
