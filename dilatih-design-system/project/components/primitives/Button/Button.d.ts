import * as React from 'react';

/**
 * Button — from @dilatih/design-system@0.1.0 (./src/components/Button/Button.stories.tsx).
 * @replaces button
 */
export interface ButtonProps {
  /** Icon element rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon element rendered after the label. */
  trailingIcon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  variant?: "danger" | "pink" | "primary" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
  block?: boolean;
}

export declare const Button: React.ComponentType<ButtonProps>;
