'use client';

import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import {
  actionButtonBaseStyles,
  actionVariants,
} from '@/styles/components/action.styles';

export default function SchadeMelden() {
  const { content: _content } = actionVariants.schadeMelden;

  return (
    <Button asChild {...actionButtonBaseStyles}>
      <Link
        href="https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex
          justifyContent="center"
          height="full"
          flexDirection="column"
          pt="8"
          pb="6"
          gap="8"
        >
          <Box>
            <Heading as="h2" fontSize="md" color="white">
              Schade melden
            </Heading>
          </Box>
        </Flex>
      </Link>
    </Button>
  );
}
