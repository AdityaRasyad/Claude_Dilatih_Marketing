import * as React from 'react';

/**
 * IconButton — from @dilatih/design-system@0.1.0 (./src/components/IconButton/IconButton.stories.tsx).
 */
export interface IconButtonProps {
  /** The icon element rendered inside the button. */
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  variant?: "danger" | "pink" | "primary" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export declare const IconButton: React.ComponentType<IconButtonProps>;
