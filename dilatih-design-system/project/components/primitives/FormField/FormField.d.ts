import * as React from 'react';

/**
 * FormField — from @dilatih/design-system@0.1.0 (./src/components/FormField/FormField.stories.tsx).
 */
export interface FormFieldProps {
  /** Label text rendered above the control. */
  label?: string;
  /** id of the control the label is associated with. */
  htmlFor?: string;
  /** Marks the field as required, rendering a red asterisk. */
  required?: boolean;
  /** Helper text rendered below the control when there is no error. */
  helperText?: string;
  /** Error message rendered below the control; takes precedence over helperText. */
  error?: string;
  /** The form control (Input, Textarea, etc.). */
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const FormField: React.ComponentType<FormFieldProps>;
