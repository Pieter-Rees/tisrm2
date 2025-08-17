'use client';

import Link from 'next/link';
import { Box, Button, Center, Flex, VStack } from '@chakra-ui/react';
import Logo from '@/components/logo';
import { useCallback } from 'react';
import type { SidenavProps } from '@/types/components';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/verzekeringen', label: 'Verzekeringen' },
  { href: '/taxi', label: 'Taxi' },
  { href: '/risk-management', label: 'Risk Management' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/bestanden', label: 'Bestanden' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Sidenav({ showSideNav, handleToggle }: SidenavProps) {
  const handleSchadeClick = useCallback(() => {
    // Open in new window without referrer
    window.open(
      'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen',
      '_blank',
      'noopener,noreferrer',
    );
    handleToggle(); // Close the mobile menu after clicking
  }, [handleToggle]);

  return (
    <Flex
      boxShadow="lg"
      transition="ease-in-out .3s all"
      p="8"
      py="4"
      gap="4"
      flexDirection="column"
      zIndex="50"
      backgroundColor="white"
      position="fixed"
      left={showSideNav ? '0' : '-100%'}
      top="0"
      alignItems="center"
      justifyContent="center"
      height="full"
      width="80%"
      maxWidth="400px"
    >
      <Flex
        flexDirection="column"
        gap="4"
        alignItems="center"
        justifyContent="center"
        height="full"
      >
        <Link href="/" onClick={handleToggle}>
          <Logo width="200px" />
        </Link>
        <VStack gap="4" alignItems="center" justifyContent="center">
          {navigationLinks.map(({ href, label }) => (
            <Button
              key={href}
              asChild
              variant="plain"
              color="gray.900"
              width="full"
              textAlign="center"
              onClick={handleToggle}
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </VStack>
        <Box width="full" height="1px" bg="gray.300" my="4" />
        <VStack gap="4" alignItems="center" justifyContent="center">
          <Button bg="blue.500" color="white" onClick={handleSchadeClick} width="full">
            Schade melden
          </Button>
          <Button asChild bg="blue.500" color="white" width="full">
            <Link href="/offerte" onClick={handleToggle}>
              Offerte aanvragen
            </Link>
          </Button>
        </VStack>
        <Center>
          <Button asChild variant="plain" color="gray.900" fontSize="xl">
            <Link href="tel:+310206368191" onClick={handleToggle}>
              +31 020 636 8191
            </Link>
          </Button>
        </Center>
      </Flex>
    </Flex>
  );
}