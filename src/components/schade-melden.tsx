'use client';

import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function SchadeMelden() {
  return (
    <Button asChild width="full" height="full" bg="blue.500" color="white">
      <Link
        href="https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex justifyContent="center" height="full" flexDirection="column" pt="8" pb="6" gap="8">
          <Box>
            <Heading as="h2" size="md" color="white">
              Schade melden
            </Heading>
          </Box>
        </Flex>
      </Link>
    </Button>
  );
}