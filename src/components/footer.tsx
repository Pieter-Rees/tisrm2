'use client';

import { contactInfo, currentYear } from '../data/general';
import FooterLogos from '@/components/footer-logos';
import Link from 'next/link';
import Logo from '@/components/logo';
import { Box, Container, Grid, GridItem, VStack, Heading, Text, Button } from '@chakra-ui/react';

const contactLinks = [
  { href: 'tel:+310206368191', label: '+31 020 636 8191', external: false },
  { href: 'mailto:info@tisrm.nl', label: 'info@tisrm.nl', external: false },
  { href: contactInfo.linkedIn, label: 'LinkedIn', external: true },
] as const;

const navigationLinks = [
  { href: '/verzekeringen', label: 'Verzekeringen' },
  { href: '/taxi', label: 'Taxi' },
  { href: '/risk-management', label: 'Risk Management' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Footer() {
  return (
    <>
      <FooterLogos width="auto" height="auto" />
      <Box bg="gray.700" py="16">
        <Container maxW="6xl">
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="16">
            <GridItem>
              <VStack align="start" gap="4">
                <Link href="/">
                  <Logo width="200px" />
                </Link>
                <Text color="white" fontSize="sm">
                  © {currentYear} {contactInfo.name}. Alle rechten voorbehouden.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="start" gap="4">
                <Heading as="h3" size="md" color="white">
                  Contact
                </Heading>
                <VStack align="start" gap="2">
                  {contactLinks.map(({ href, label, external }) => (
                    <Button
                      key={href}
                      asChild
                      variant="plain"
                      color="white"
                      textDecoration="underline"
                      fontSize="sm"
                      p="0"
                      justifyContent="flex-start"
                    >
                      <Link
                        href={href as any}
                        {...(external && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
                        {label}
                      </Link>
                    </Button>
                  ))}
                </VStack>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack align="start" gap="4">
                <Heading as="h3" size="md" color="white">
                  Links
                </Heading>
                <VStack align="start" gap="2">
                  {navigationLinks.map(({ href, label }) => (
                    <Button
                      key={href}
                      asChild
                      variant="plain"
                      color="white"
                      textDecoration="underline"
                      fontSize="sm"
                      p="0"
                      justifyContent="flex-start"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </VStack>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}