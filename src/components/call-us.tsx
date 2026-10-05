'use client';

import { Box, Button, Heading, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BsTelephoneFill } from 'react-icons/bs';

import {
  actionButtonBaseStyles,
  actionStateStyles,
  actionVariants,
} from '@/styles/components/action.styles';

export default function CallUs() {
  const { content, icon, heading, text } = actionVariants.callUs;

  return (
    <Button
      asChild
      {...actionButtonBaseStyles}
      _hover={actionStateStyles.hover}
      _active={actionStateStyles.active}
    >
      <Link href="tel:+310206368191">
        <Box display="flex" {...content}>
          <Icon as={BsTelephoneFill} {...icon} />
          <Box>
            <Heading as="h2" {...heading}>
              Direct antwoord op uw vragen?
              <br />
              Bel ons!
            </Heading>
            <Text {...text}>+31 20 636 8191</Text>
          </Box>
        </Box>
      </Link>
    </Button>
  );
}
