'use client';

import { Box, Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import { NAVIGATION_ROUTES } from '@/constants/app';
import {
  actionButtonBaseStyles,
  actionVariants,
} from '@/styles/components/action.styles';

export default function MeldSchade() {
  const { content, heading } = actionVariants.schadeMelden;

  return (
    <Button asChild {...actionButtonBaseStyles}>
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
