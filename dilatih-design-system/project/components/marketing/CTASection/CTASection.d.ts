import * as React from 'react';

/**
 * CTASection — from @dilatih/design-system@0.1.0 (./src/components/CTASection/CTASection.stories.tsx).
 */
export interface CTASectionProps {
  /** Band headline. */
  title: React.ReactNode;
  /** Supporting line below the title. */
  subtitle?: React.ReactNode;
  /** Call-to-action element. Defaults to a primary "Daftar Sekarang" button. */
  action?: React.ReactNode;
  /** Background tone. `navy` (default, navy-500) or `deep` (navy-950). */
  tone?: "navy" | "deep";
  /** When true, the band is wrapped in a rounded-card container with side padding. */
  contained?: boolean;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare const CTASection: React.ComponentType<CTASectionProps>;
