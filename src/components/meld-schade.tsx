'use client';

import { Box, Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import { NAVIGATION_ROUTES } from '@/constants/app';
import {
  actionButtonSecondaryStyles,
  actionStateStyles,
  actionVariants,
} from '@/styles/components/action.styles';

export default function MeldSchade() {
  const { content, heading } = actionVariants.schadeMelden;

  return (
    <Button
      asChild
      variant="outline"
      colorPalette="blue"
      {...actionButtonSecondaryStyles}
      _hover={actionStateStyles.hoverSecondary}
      _active={{ bg: 'blue.100', transform: 'translateY(0)' }}
    >
      <Link href={NAVIGATION_ROUTES.damageReport}>
        <Box display="flex" {...content}>
          <Heading as="h2" {...heading}>
            Schade melden
          </Heading>
        </Box>
      </Link>
    </Button>
  );
}
