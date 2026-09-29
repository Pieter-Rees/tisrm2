'use client';

import FooterLogos from '@/components/footer-logos';
import Logo from '@/components/logo';
import {
  toTelHref,
  useSiteSettings,
} from '@/components/site-settings-provider';
import { CURRENT_YEAR } from '@/constants/app';
import { contactInfo } from '@/data/general';
import {
  footerContainerStyles,
  footerGridStyles,
} from '@/styles/components/footer.styles';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

const FOOTER_NAV_HREFS = [
  '/verzekeringen',
  '/taxi',
  '/risk-management',
  '/over-ons',
  '/contact',
] as const;

export default function Footer() {
  const settings = useSiteSettings();

  const contactLinks = [
    {
      href: toTelHref(settings.phone),
      label: settings.phone,
      external: false,
    },
    {
      href: `mailto:${settings.email}`,
      label: settings.email,
      external: false,
    },
    {
      href: contactInfo.social.linkedIn,
      label: 'LinkedIn',
      external: true,
    },
  ] as const;

  const navigationLinks = FOOTER_NAV_HREFS.map((href) => {
    const fromCms = settings.navItems.find((item) => item.href === href);
    return {
      href,
      label: fromCms?.label ?? href.replace(/^\//, ''),
    };
  });

  return (
    <>
      <FooterLogos width="auto" height="auto" />
      <Box {...footerContainerStyles}>
        <Container>
          <Grid {...footerGridStyles}>
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
            <GridItem>
              <VStack alignItems="start" gap="4">
                <Flex justifyContent="center" alignItems="center" w="100%">
                  <Link href="/">
                    <Logo width="200px" />
                  </Link>
                </Flex>
                <Flex textAlign="center">
                  <Text color="white" fontSize="sm">
                    © {CURRENT_YEAR} {settings.companyName}. Alle rechten
                    voorbehouden.
                  </Text>
                </Flex>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
