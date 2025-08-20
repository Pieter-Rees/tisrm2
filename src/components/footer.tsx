'use client';

import FooterLogos from '@/components/footer-logos';
import Logo from '@/components/logo';
import { CURRENT_YEAR } from '@/constants/app';
import { contactInfo } from '@/data/general';
import {
  footerContainerStyles,
  footerGridStyles,
  footerColumnStyles,
  footerHeadingStyles,
  footerTextStyles,
  footerLinksContainerStyles,
  footerLinkButtonStyles,
} from '@/styles/components/footer.styles';
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

const contactLinks = [
  { href: 'tel:+310206368191', label: '+31 020 636 8191', external: false },
  { href: 'mailto:info@tisrm.nl', label: 'info@tisrm.nl', external: false },
  { href: contactInfo.social.linkedIn, label: 'LinkedIn', external: true },
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
      <Box {...footerContainerStyles}>
        <Container>
          <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="16">
            <GridItem>
              <VStack alignItems="start" gap="4">
                <Link href="/">
                  <Logo width="200px" />
                </Link>
                <Text color="white" fontSize="sm">
                  © {CURRENT_YEAR} {contactInfo.name}. Alle rechten
                  voorbehouden.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack alignItems="start" gap="4">
                <Heading fontSize="md" color="white">
                  Contact
                </Heading>
                <VStack alignItems="start" gap="2">
                  {contactLinks.map(({ href, label, external }) => (
                    <Button
                      key={href}
                      asChild
                      color="white"
                      fontSize="sm"
                      p="0"
                      justifyContent="flex-start"
                      variant="plain"
                      _hover={{
                        color: 'blue.200',
                        transform: 'translateX(4px)',
                      }}
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
              <VStack alignItems="start" gap="4">
                <Heading fontSize="md" color="white">
                  Links
                </Heading>
                <VStack alignItems="start" gap="2">
                  {navigationLinks.map(({ href, label }) => (
                    <Button
                      key={href}
                      asChild
                      color="white"
                      fontSize="sm"
                      p="0"
                      justifyContent="flex-start"
                      variant="plain"
                      _hover={{
                        color: 'blue.200',
                        transform: 'translateX(4px)',
                      }}
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
