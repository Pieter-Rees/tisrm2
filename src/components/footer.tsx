'use client';

import FooterLogos from '@/components/footer-logos';
import Logo from '@/components/logo';
import { CURRENT_YEAR } from '@/constants/app';
import { SPACING_SCALE } from '@/constants/layout';
import { contactInfo } from '@/data/general';
import {
  footerContainerStyles,
  footerGridStyles,
} from '@/styles/components/footer.styles';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

const contactLinks = [
  { href: 'tel:+310206368191', label: '+31 20 636 8191', external: false },
  { href: 'mailto:info@tisrm.nl', label: 'info@tisrm.nl', external: false },
  { href: contactInfo.social.linkedIn, label: 'LinkedIn', external: true },
] as const;

const navigationLinks = [
  { href: '/verzekeringen', label: 'Verzekeringen' },
  { href: '/taxi', label: 'Taxi' },
  { href: '/risk-management', label: 'Risk Management' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/meld-schade', label: 'Schade melden' },
  { href: '/documents/privacyverklaring.pdf', label: 'Privacy' },
] as const;

const footerLinkStyles = {
  color: 'white',
  fontSize: 'md',
  lineHeight: 'short',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  minH: '8',
  transition: 'color 0.2s ease, transform 0.2s ease',
  _hover: {
    color: 'blue.200',
    transform: 'translateX(4px)',
  },
} as const;

export default function Footer() {
  return (
    <Box as="footer">
      <FooterLogos width="auto" height="auto" />
      <Box {...footerContainerStyles}>
        <Container>
          <Grid {...footerGridStyles}>
            <GridItem>
              <VStack alignItems="start" gap={SPACING_SCALE.sm}>
                <Heading fontFamily="body" fontSize="xl" color="white" mb="0">
                  Contact
                </Heading>
                <VStack alignItems="start" gap="2">
                  {contactLinks.map(({ href, label, external }) => (
                    <Box key={href} asChild {...footerLinkStyles}>
                      <Link
                        href={href as any}
                        {...(external && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
                        {label}
                      </Link>
                    </Box>
                  ))}
                </VStack>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack alignItems="start" gap={SPACING_SCALE.sm}>
                <Heading fontFamily="body" fontSize="xl" color="white" mb="0">
                  Links
                </Heading>
                <VStack alignItems="start" gap="2">
                  {navigationLinks.map(({ href, label }) => (
                    <Box key={href} asChild {...footerLinkStyles}>
                      <Link href={href}>{label}</Link>
                    </Box>
                  ))}
                </VStack>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack alignItems="start" gap={SPACING_SCALE.sm}>
                <Flex justifyContent="center" alignItems="center" w="100%">
                  <Link href="/" aria-label="TIS Risk Managers, ga naar home">
                    <Logo width="200px" />
                  </Link>
                </Flex>
                <Flex textAlign="center">
                  <Text color="white" fontSize="sm" m="0">
                    © {CURRENT_YEAR} {contactInfo.name}. Alle rechten
                    voorbehouden.
                  </Text>
                </Flex>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
