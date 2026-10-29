'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <Box opacity={1} animation="pageIn 0.55s ease-out">
      {children}
    </Box>
  );
};

export default PageTransition;
