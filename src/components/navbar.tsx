'use client';

import { memo, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HStack, Button, Flex, Center, Box, VisuallyHidden } from '@chakra-ui/react';
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from '@chakra-ui/react';
import { BsTelephone, BsShield, BsChevronDown } from 'react-icons/bs';

import { NAVIGATION_ROUTES, EXTERNAL_LINKS, CONTACT_INFO } from '@/constants/app';
import type { NavigationLink } from '@/types/components';
const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { href: NAVIGATION_ROUTES.home, label: 'Home' },
  { href: NAVIGATION_ROUTES.insurance, label: 'Verzekeringen' },
  { href: NAVIGATION_ROUTES.taxi, label: 'Taxi' },
  { href: NAVIGATION_ROUTES.riskManagement, label: 'Risk Management' },
  { href: NAVIGATION_ROUTES.about, label: 'Over ons' },
  { href: NAVIGATION_ROUTES.downloads, label: 'Downloads' },
  { href: NAVIGATION_ROUTES.contact, label: 'Contact' },
] as const;
const Navbar = memo(() => {
  const pathname = usePathname();

  const handleDamageReportClick = useCallback(() => {
    window.open(
      EXTERNAL_LINKS.damageReport,
      '_blank',
      'noopener,noreferrer'
    );
  }, []);

  return (
    <Flex 
      as="nav" 
      role="navigation" 
      aria-label="Main navigation"
      align="center" 
      gap="8"
      width="full"
      justify="space-between"
    >

      <Box hideBelow="xl">
        <HStack
          as="ul"
          gap="6"
          fontSize={{ base: 'sm', '2xl': 'md' }}
          fontWeight="medium"
          listStyleType="none"
          margin="0"
          padding="0"
        >
          {NAVIGATION_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            
            return (
              <Box
                key={href}
                as="li"
                role="none"
              >
                <Link
                  href={href}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#3182ce' : '#1a202c',
                    fontWeight: isActive ? '600' : '500',
                    transition: 'color 0.2s ease-in-out',
                    borderBottom: isActive ? '2px solid #3182ce' : '2px solid transparent',
                    paddingBottom: '4px',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              </Box>
            );
          })}
        </HStack>
      </Box>


      <Box hideBelow="xl">
        <MenuRoot>
          <MenuTrigger asChild>
            <Button
              bg="blue.500"
              color="white"
              size="sm"
              _hover={{ bg: 'blue.600' }}
              _active={{ bg: 'blue.700' }}
              fontWeight="medium"
              gap="2"
            >
              Acties
              <BsChevronDown />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem
              value="damage-report"
              onClick={handleDamageReportClick}
              gap="2"
              _hover={{ bg: 'blue.50' }}
            >
              <BsShield />
              Schade melden
              <VisuallyHidden>
                - Opens external damage report form in new window
              </VisuallyHidden>
            </MenuItem>
            <MenuItem value="quote" asChild gap="2" _hover={{ bg: 'blue.50' }}>
              <Link href={NAVIGATION_ROUTES.quote}>
                Offerte aanvragen
              </Link>
            </MenuItem>
            <MenuItem value="call" asChild gap="2" _hover={{ bg: 'blue.50' }}>
              <Link href={`tel:${CONTACT_INFO.phone}`}>
                <BsTelephone />
                Bel nu
                <VisuallyHidden>
                  - Call us for immediate assistance: {CONTACT_INFO.phone}
                </VisuallyHidden>
              </Link>
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </Box>
    </Flex>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;