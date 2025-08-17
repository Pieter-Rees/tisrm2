'use client';

import { Field as ChakraField } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { ReactNode } from 'react';

interface FieldProps {
  label?: string;
  helperText?: string;
  errorText?: string | undefined;
  required?: boolean;
  invalid?: boolean;
  children: ReactNode;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ label, helperText, errorText, required, invalid, children }, ref) => {
    return (
      <ChakraField.Root required={required} invalid={invalid} ref={ref}>
        {label && (
          <ChakraField.Label>
            {label}
            {required && <ChakraField.RequiredIndicator />}
          </ChakraField.Label>
        )}
        {children}
        {helperText && <ChakraField.HelperText>{helperText}</ChakraField.HelperText>}
        {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
      </ChakraField.Root>
    );
  }
);

Field.displayName = 'Field';
