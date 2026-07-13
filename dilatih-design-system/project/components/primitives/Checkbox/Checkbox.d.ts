import * as React from 'react';

/**
 * Checkbox — from @dilatih/design-system@0.1.0 (./src/components/Checkbox/Checkbox.stories.tsx).
 * @replaces input[type=checkbox]
 */
export interface CheckboxProps {
  /** Optional label rendered beside the checkbox. */
  label?: React.ReactNode;
  style?: CSSProperties;
  defaultChecked?: boolean | "indeterminate";
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  checked?: boolean | "indeterminate";
  required?: boolean;
}

export declare const Checkbox: React.ComponentType<CheckboxProps>;
