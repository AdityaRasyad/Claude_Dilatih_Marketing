import * as React from 'react';

/**
 * TestimonialCard — from @dilatih/design-system@0.1.0 (./src/components/TestimonialCard/TestimonialCard.stories.tsx).
 */
export interface TestimonialCardProps {
  /** The testimonial body. */
  quote: string;
  /** Name of the person giving the testimonial. */
  name: string;
  /** Role / company of the person. */
  role?: string;
  /** Avatar image source; initials are derived from `name` when absent. */
  avatarSrc?: string;
  /** Star rating, 0–5. */
  rating?: number;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const TestimonialCard: React.ComponentType<TestimonialCardProps>;
