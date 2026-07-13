import * as React from 'react';

/**
 * Switch — from @dilatih/design-system@0.1.0 (./src/components/Switch/Switch.stories.tsx).
 */
export interface SwitchProps {
  /** Optional label rendered beside the switch. */
  label?: React.ReactNode;
  style?: CSSProperties;
  defaultChecked?: boolean;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  checked?: boolean;
  required?: boolean;
}

export declare const Switch: React.ComponentType<SwitchProps>;
