import * as React from 'react';

/**
 * Input — from @dilatih/design-system@0.1.0 (./src/components/Input/Input.stories.tsx).
 * @replaces input
 */
export interface InputProps {
  /** Icon element rendered inside the input on the leading edge. */
  leadingIcon?: React.ReactNode;
  /** Icon element rendered inside the input on the trailing edge. */
  trailingIcon?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  inputSize?: "sm" | "md" | "lg";
  state?: "default" | "error";
}

export declare const Input: React.ComponentType<InputProps>;
