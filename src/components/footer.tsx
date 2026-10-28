'use client';

import FooterLogos from '@/components/footer-logos';
import Logo from '@/components/logo';
import {
  BRANCH_ROUTES,
  CURRENT_YEAR,
  NAVIGATION_ROUTES,
} from '@/constants/app';
import { SPACING_SCALE } from '@/constants/layout';
import { HEADING_STYLES, PARAGRAPH_STYLES } from '@/constants/typography';
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
  { href: contactInfo.phoneHref, label: contactInfo.phone, external: false },
  { href: 'mailto:info@tisrm.nl', label: 'info@tisrm.nl', external: false },
  { href: contactInfo.social.linkedIn, label: 'LinkedIn', external: true },
] as const;

const navigationLinks = [
  {
    href: NAVIGATION_ROUTES.businessInsurance,
    label: 'Zakelijke verzekeringen',
  },
  {
    href: NAVIGATION_ROUTES.personalInsurance,
    label: 'Particuliere verzekeringen',
  },
  { href: NAVIGATION_ROUTES.riskAdvice, label: 'Risicoadvies' },
  { href: NAVIGATION_ROUTES.knowledgeBase, label: 'Kennisbank' },
  { href: NAVIGATION_ROUTES.about, label: 'Over ons' },
  { href: NAVIGATION_ROUTES.contact, label: 'Contact' },
  { href: NAVIGATION_ROUTES.downloads, label: 'Downloads' },
  { href: NAVIGATION_ROUTES.damageReport, label: 'Schade melden' },
  { href: '/documents/privacyverklaring.pdf', label: 'Privacy' },
] as const;

const footerLinkStyles = {
  ...PARAGRAPH_STYLES.small,
  color: 'text.inverse',
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
                <Heading {...HEADING_STYLES.h4} color="text.inverse" mb="0">
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
                <Heading {...HEADING_STYLES.h4} color="text.inverse" mb="0">
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
                <Heading {...HEADING_STYLES.h4} color="text.inverse" mb="0">
                  Branches
                </Heading>
                <VStack alignItems="start" gap="2">
                  {BRANCH_ROUTES.map(({ href, label }) => (
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
                <Text {...PARAGRAPH_STYLES.small} color="text.inverse">
                  {contactInfo.name} is een handelsnaam van{' '}
                  {contactInfo.legalName}. KVK {contactInfo.registrations.kvk} ·
                  AFM {contactInfo.registrations.afm} · Kifid{' '}
                  {contactInfo.registrations.kifid}
                </Text>
                <Text {...PARAGRAPH_STYLES.small} color="text.inverse">
                  © {CURRENT_YEAR} {contactInfo.name}. Alle rechten
                  voorbehouden.
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
