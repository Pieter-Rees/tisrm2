'use client';

import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { BsTelephoneFill } from 'react-icons/bs';
import Link from 'next/link';

export default function CallUs() {
  return (
    <Button asChild width="full" height="full" bg="blue.500" color="white">
      <Link href="tel:+310206368191">
        <Flex justifyContent="center" height="full" flexDirection="column" p="8" gap="8">
          <Box color="white">
            <BsTelephoneFill size="32px" />
          </Box>
          <Box>
            <Heading as="h2" size="md" color="white">
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