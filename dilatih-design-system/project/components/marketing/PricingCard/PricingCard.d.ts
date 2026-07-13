import * as React from 'react';

/**
 * PricingCard — from @dilatih/design-system@0.1.0 (./src/components/PricingCard/PricingCard.stories.tsx).
 */
export interface PricingCardProps {
  /** Name of the plan / tier. */
  planName: string;
  /** Formatted price, e.g. "Rp 2.500.000". */
  price: string;
  /** Billing period suffix, e.g. "/peserta". */
  period?: string;
  /** Short supporting description. */
  description?: string;
  /** Feature list rendered with check marks. */
  features: string[];
  /** Action node (e.g. a Button) rendered at the bottom. */
  action?: React.ReactNode;
  /** Emphasise this plan as the recommended choice. */
  highlighted?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const PricingCard: React.ComponentType<PricingCardProps>;
