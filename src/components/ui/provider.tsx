'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
import type { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
  value?: typeof defaultSystem;
}

export function Provider({ value = defaultSystem, children, ...props }: ProviderProps) {
  return (
    <ChakraProvider value={value}>
      <ColorModeProvider {...props}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}
