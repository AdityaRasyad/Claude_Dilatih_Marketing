import * as React from 'react';

/**
 * Textarea — from @dilatih/design-system@0.1.0 (./src/components/Textarea/Textarea.stories.tsx).
 * @replaces textarea
 */
export interface TextareaProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  state?: "default" | "error";
}

export declare const Textarea: React.ComponentType<TextareaProps>;
