import * as React from 'react';

/**
 * Alert — from @dilatih/design-system@0.1.0 (./src/components/Alert/Alert.stories.tsx).
 */
export interface AlertProps {
  /** Optional bold heading. */
  title?: string;
  /** Override the default per-variant icon. */
  icon?: React.ReactNode;
  /** When provided, renders a dismiss button. */
  onClose?: () => void;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  variant?: "danger" | "success" | "info" | "warning";
}

export declare const Alert: React.ComponentType<AlertProps>;
