'use client';

import { ColorModeProvider } from '@/components/ui/color-mode';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
  value?: typeof defaultSystem;
}

export function Provider({
  value = defaultSystem,
  children,
  ...props
}: ProviderProps) {
  return (
    <ColorModeProvider {...props}>
      <ChakraProvider value={value}>{children}</ChakraProvider>
    </ColorModeProvider>
  );
}
