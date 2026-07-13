import * as React from 'react';

/**
 * RadioGroup — from @dilatih/design-system@0.1.0 (./src/components/RadioGroup/RadioGroup.stories.tsx).
 */
export interface RadioGroupProps {
  style?: CSSProperties;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  loop?: boolean;
  required?: boolean;
  orientation?: "horizontal" | "vertical";
}

export declare const RadioGroup: React.ComponentType<RadioGroupProps>;
