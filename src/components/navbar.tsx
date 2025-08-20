'use client';

import {
  Box,
  Button,
  Flex,
  HStack,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  VisuallyHidden,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useCallback } from 'react';
import { BsChevronDown, BsShield, BsTelephone } from 'react-icons/bs';

import {
  CONTACT_INFO,
  EXTERNAL_LINKS,
  NAVIGATION_ROUTES,
} from '@/constants/app';
import {
  navbarContainerStyles,
  navbarLinksContainerStyles,
  navbarLinksListStyles,
  navbarLinkItemStyles,
  navbarLinkWrapperStyles,
  getNavbarLinkStyles,
  navbarActionsContainerStyles,
  navbarActionsButtonStyles,
  navbarMenuContentStyles,
  navbarMenuItemStyles,
} from '@/styles/components/navigation.styles';
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
    window.open(EXTERNAL_LINKS.damageReport, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <Flex alignItems="center" gap="8" width="full" justifyContent="space-between">
      <Box hideBelow="xl">
        <HStack gap="6" fontSize={{ base: 'sm', '2xl': 'md' }} fontWeight="medium" listStyleType="none" margin="0" padding="0">
          {NAVIGATION_LINKS.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== '/' && pathname.startsWith(href));

            return (
              <Box key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Box
                    textDecoration="none"
                    display="block"
                    paddingBottom="4px"
                    position="relative"
                    color={isActive ? 'blue.500' : 'gray.700'}
                    fontWeight={isActive ? '600' : '500'}
                    borderBottom="2px solid"
                    borderBottomColor={isActive ? 'blue.500' : 'transparent'}
                    transition="all 0.2s ease-in-out"
                    _hover={!isActive ? {
                      color: 'blue.500',
                      borderBottomColor: 'blue.200',
                      transform: 'translateY(-1px)',
                    } : {}}
                  >
                    {label}
                  </Box>
                </Link>
              </Box>
            );
          })}
        </HStack>
      </Box>

      <Box hideBelow="xl" position="relative">
        <MenuRoot>
          <MenuTrigger asChild>
            <Button
              bg="blue.500"
              color="white"
              transition="all 0.2s ease-in-out"
              _hover={{
                bg: 'blue.600',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              _active={{
                bg: 'blue.700',
                transform: 'translateY(0)',
              }}
              fontWeight="medium"
              gap="2"
            >
              Acties
              <BsChevronDown />
            </Button>
          </MenuTrigger>
          <MenuContent
            position="absolute"
            top="100%"
            right="0"
            mt="1"
            minW="200px"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            boxShadow="lg"
            zIndex="dropdown"
          >
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
              <Link href={NAVIGATION_ROUTES.quote}>Offerte aanvragen</Link>
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
