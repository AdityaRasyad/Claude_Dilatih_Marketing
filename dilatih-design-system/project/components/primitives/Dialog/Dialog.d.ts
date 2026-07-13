import * as React from 'react';

/**
 * Dialog — from @dilatih/design-system@0.1.0 (./src/components/Dialog/Dialog.stories.tsx).
 * @replaces dialog
 */
export interface DialogProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}

export declare const Dialog: React.ComponentType<DialogProps>;
