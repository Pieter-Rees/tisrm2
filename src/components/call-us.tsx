'use client';

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BsTelephoneFill } from 'react-icons/bs';

import {
  actionButtonBaseStyles,
  actionVariants,
} from '@/styles/components/action.styles';

export default function CallUs() {
  const { content: _content } = actionVariants.callUs;

  return (
    <Button asChild {...actionButtonBaseStyles}>
      <Link href="tel:+310206368191">
        <Flex
          justifyContent="center"
          height="full"
          flexDirection="column"
          p="8"
          gap="8"
        >
          <Box color="white">
            <BsTelephoneFill size="32px" />
          </Box>
          <Box>
            <Heading as="h2" fontSize="md" color="white">
              Direct antwoord op uw vragen?
              <br />
              Bel ons!
            </Heading>
          </Box>
          <Box>
            <Text color="white">+31 20 636 8191</Text>
          </Box>
        </Flex>
      </Link>
    </Button>
  );
}
