'use client';

import {
  HStack as ChakraHStack,
  VStack as ChakraVStack,
} from '@chakra-ui/react';
import type { ComponentProps } from 'react';

interface StackProps extends Omit<ComponentProps<typeof ChakraVStack>, 'gap'> {
  spacing?: string | number;
}

/**
 * Modern VStack component that converts spacing prop to gap for Chakra UI v3
 */
export function VStack({ spacing, children, ...props }: StackProps) {
  return (
    <ChakraVStack gap={spacing} {...props}>
      {children}
    </ChakraVStack>
  );
}

/**
 * Modern HStack component that converts spacing prop to gap for Chakra UI v3
 */
export function HStack({ spacing, children, ...props }: StackProps) {
  return (
    <ChakraHStack gap={spacing} {...props}>
      {children}
    </ChakraHStack>
  );
}
