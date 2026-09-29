'use client';

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BsTelephoneFill } from 'react-icons/bs';

import {
  toTelHref,
  useSiteSettings,
} from '@/components/site-settings-provider';
import {
  actionButtonBaseStyles,
  actionVariants,
} from '@/styles/components/action.styles';

export default function CallUs() {
  const { content: _content } = actionVariants.callUs;
  const settings = useSiteSettings();

  return (
    <Button asChild {...actionButtonBaseStyles}>
      <Link href={toTelHref(settings.phone)}>
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
            <Text color="white">{settings.phone}</Text>
          </Box>
        </Flex>
      </Link>
    </Button>
  );
}
