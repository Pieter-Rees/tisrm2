'use client';

import { NAVIGATION_ROUTES } from '@/constants/app';
import { headerOffset } from '@/styles/components/layout.styles';
import { Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

/**
 * The header is `position: fixed`, so it reserves no layout space. The home
 * hero is meant to run underneath it full-bleed; every other route pays the
 * header height back here, in one place, instead of page by page.
 */
export default function MainContent({ children }: MainContentProps) {
  const isHome = usePathname() === NAVIGATION_ROUTES.home;

  return (
    <Box as="main" width="100%" mx="auto" pt={isHome ? '0' : headerOffset}>
      {children}
    </Box>
  );
}
