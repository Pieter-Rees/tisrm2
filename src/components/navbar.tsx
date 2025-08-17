'use client';

import { HStack, Button, Flex, Center, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useCallback } from 'react';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/verzekeringen', label: 'Verzekeringen' },
  { href: '/taxi', label: 'Taxi' },
  { href: '/risk-management', label: 'Risk Management' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/bestanden', label: 'Bestanden' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Navbar() {
  const handleSchadeClick = useCallback(() => {
    // Open in new window without referrer
    window.open(
      'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen',
      '_blank',
      'noopener,noreferrer'
    );
  }, []);

  return (
    <Flex alignItems="center">
      <Box hideBelow="xl">
        <HStack
          gap="8"
          fontSize={{ base: 'md', '2xl': 'xl' }}
          color="gray.900"
        >
          {navigationLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={{ color: 'inherit' }}>
              {label}
            </Link>
          ))}
        </HStack>
      </Box>
      <Box hideBelow="xl">
        <HStack gap="4">
          <Button bg="blue.500" color="white" onClick={handleSchadeClick}>
            Schade melden
          </Button>
          <Button asChild bg="blue.500" color="white">
            <Link href="/offerte">Offerte aanvragen</Link>
          </Button>
        </HStack>
      </Box>
      <Box hideBelow="xl">
        <Center>
          <Box width="1px" height="40px" bg="gray.300" />
        </Center>
      </Box>
      <Box hideBelow="xl">
        <Center>
          <Button asChild variant="plain" color="gray.900" fontSize={{ base: 'md', '2xl': 'xl' }}>
            <Link href="tel:+310206368191">+31 020 636 8191</Link>
          </Button>
        </Center>
      </Box>
    </Flex>
  );
}