'use client';

import {
  HStack as ChakraHStack,
  VStack as ChakraVStack,
} from '@chakra-ui/react';
import type { ComponentProps } from 'react';

interface StackProps extends Omit<ComponentProps<typeof ChakraVStack>, 'gap'> {
  spacing?: string | number;
}

export function VStack({ spacing, children, ...props }: StackProps) {
  return (
    <ChakraVStack gap={spacing} {...props}>
      {children}
    </ChakraVStack>
  );
}

export function HStack({ spacing, children, ...props }: StackProps) {
  return (
    <ChakraHStack gap={spacing} {...props}>
      {children}
    </ChakraHStack>
  );
}
