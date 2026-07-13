import * as React from 'react';

/**
 * CourseCard — from @dilatih/design-system@0.1.0 (./src/components/CourseCard/CourseCard.stories.tsx).
 */
export interface CourseCardProps {
  /** Cover image URL. A neutral placeholder is shown when absent. */
  image?: string;
  /** Category label rendered as a soft Badge. */
  category?: string;
  /** Course title (clamped to two lines). */
  title: string;
  /** Instructor / trainer name. */
  instructor?: string;
  /** Average rating, 0–5. */
  rating?: number;
  /** Number of reviews backing the rating. */
  reviewCount?: number;
  /** Formatted price, e.g. "Rp 1.500.000". */
  price: string;
  /** Optional struck-through original price. */
  originalPrice?: string;
  /** Difficulty level, e.g. "Pemula". */
  level?: string;
  /** Course duration, e.g. "16 jam". */
  duration?: string;
  /** Enroll CTA handler. */
  onEnroll?: () => void;
  /** CTA label. */
  ctaLabel?: string;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare const CourseCard: React.ComponentType<CourseCardProps>;
