import * as React from 'react';

/**
 * Avatar — from @dilatih/design-system@0.1.0 (./src/components/Avatar/Avatar.stories.tsx).
 */
export interface AvatarProps {
  /** Image source. When omitted, initials from `name` are shown. */
  src?: string;
  /** Alternative text for the image. */
  alt?: string;
  /** Full name used to derive the initials fallback. */
  name?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export declare const Avatar: React.ComponentType<AvatarProps>;
