import * as React from 'react';

/**
 * Hero — from @dilatih/design-system@0.1.0 (./src/components/Hero/Hero.stories.tsx).
 */
export interface HeroProps {
  /** Small pill rendered above the title (E-E-A-T eyebrow). */
  eyebrow?: string;
  /** Main headline. */
  title: React.ReactNode;
  /** Supporting paragraph below the title. */
  subtitle?: React.ReactNode;
  /** Primary call-to-action element. */
  primaryAction?: React.ReactNode;
  /** Secondary call-to-action element. */
  secondaryAction?: React.ReactNode;
  /** Right-side media (image / illustration). When omitted the hero centres its content. */
  media?: React.ReactNode;
  /** Visual variant. `light` (default) uses surface; `navy` uses navy-950 with light text. */
  variant?: "navy" | "light";
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare const Hero: React.ComponentType<HeroProps>;
