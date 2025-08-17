'use client';

import { Heading, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface BaseLayoutProps {
  title: string;
  children: ReactNode;
}

export default function BaseLayout({ title, children }: BaseLayoutProps) {
  return (
    <Flex width="full" flexDirection="column">
      <Flex
        width="full"
        justifyContent="space-between"
        flexDirection={{ base: 'column', lg: 'row' }}
        mb="4"
      >
        <Heading as="h1" size="xl">
          {title}
        </Heading>
      </Flex>
      {children}
    </Flex>
  );
}