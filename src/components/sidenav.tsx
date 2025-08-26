'use client';

import {
  Box,
  Button,
  Flex,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Separator,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useCallback, useEffect } from 'react';
import { BsChevronDown, BsShield, BsTelephone, BsX, BsFileText } from 'react-icons/bs';

import Logo from '@/components/logo';
import {
  CONTACT_INFO,
  EXTERNAL_LINKS,
  NAVIGATION_ROUTES,
  UI_CONSTANTS,
} from '@/constants/app';
import { cn } from '@/lib/utils';
// import {
//   sidenavContainerStyles,
//   getSidenavPositionStyles,
//   sidenavCloseButtonContainerStyles,
//   sidenavCloseButtonStyles,
//   sidenavContentContainerStyles,
//   sidenavLogoContainerStyles,
//   sidenavLinksContainerStyles,
//   sidenavLinkItemStyles,
//   getSidenavLinkButtonStyles,
//   sidenavSeparatorStyles,
//   sidenavActionsContainerStyles,
//   sidenavActionsButtonStyles,
//   navbarMenuItemStyles,
// } from '@/styles/components/navigation.styles';
import type { NavigationLink, SidenavProps } from '@/types/components';
const MOBILE_NAVIGATION_LINKS: readonly NavigationLink[] = [
  { href: NAVIGATION_ROUTES.home, label: 'Home' },
  { href: NAVIGATION_ROUTES.insurance, label: 'Verzekeringen' },
  { href: NAVIGATION_ROUTES.taxi, label: 'Taxi' },
  { href: NAVIGATION_ROUTES.riskManagement, label: 'Risk Management' },
  { href: NAVIGATION_ROUTES.about, label: 'Over ons' },
  { href: NAVIGATION_ROUTES.downloads, label: 'Downloads' },
  { href: NAVIGATION_ROUTES.contact, label: 'Contact' },
] as const;
const Sidenav = memo<SidenavProps>(
  ({ showSideNav, handleToggle, className, 'data-testid': testId }) => {
    const pathname = usePathname();

    const handleDamageReportClick = useCallback(() => {
      window.open(EXTERNAL_LINKS.damageReport, '_blank', 'noopener,noreferrer');
      handleToggle();
    }, [handleToggle]);

    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && showSideNav) {
          handleToggle();
        }
      };

      if (showSideNav) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [showSideNav, handleToggle]);

    const handleLinkClick = useCallback(() => {
      handleToggle();
    }, [handleToggle]);

    return (
      <Flex
        className={cn('sidenav', className)}
        data-testid={testId}
        position="fixed"
        top="0"
        height="100vh"
        width={{ base: '85%', sm: '400px' }}
        maxW="400px"
        bg="white"
        boxShadow="2xl"
        zIndex={UI_CONSTANTS.zIndexes.modal}
        flexDirection="column"
        transition="left 0.3s ease-in-out"
        overflowY="auto"
        borderRight="1px solid"
        borderColor="gray.200"
        left={showSideNav ? '0' : '-100%'}
      >
        <Box position="absolute" top="4" right="4" zIndex="1">
          <Button
            transition="all 0.2s ease-in-out"
            _hover={{ bg: 'gray.100' }}
            onClick={handleToggle}
          >
            <BsX size="20" />
          </Button>
        </Box>

        <Flex
          flexDirection="column"
          height="full"
          justifyContent="center"
          alignItems="center"
          p="8"
          pt="16"
          gap="8"
        >
          <Box mb="4">
            <Link
              href={NAVIGATION_ROUTES.home}
              onClick={handleLinkClick}
              aria-label="Go to homepage"
            >
              <Logo width="180px" height="auto" />
            </Link>
          </Box>

          <VStack
            gap="3"
            alignItems="center"
            width="full"
            listStyleType="none"
            margin="0"
            padding="0"
          >
            {MOBILE_NAVIGATION_LINKS.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href !== '/' && pathname.startsWith(href));

              return (
                <Box key={href} width="full">
                  <Button
                    asChild
                    width="full"
                    bg={isActive ? 'blue.50' : 'white'}
                    color={isActive ? 'blue.600' : 'gray.700'}
                    fontWeight={isActive ? 'semibold' : 'medium'}
                    border="1px solid"
                    borderColor={isActive ? 'blue.200' : 'gray.200'}
                    borderRadius="md"
                    transition="all 0.2s ease-in-out"
                    _hover={{
                      bg: isActive ? 'blue.100' : 'gray.50',
                      color: 'blue.600',
                      transform: 'translateX(4px)',
                      borderColor: 'blue.300',
                    }}
                    _active={{ bg: isActive ? 'blue.200' : 'gray.100' }}
                    justifyContent="center"
                    py="3"
                  >
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </Button>
                </Box>
              );
            })}
          </VStack>

          <Separator borderColor="gray.300" width="80%" />

          <Box width="full" px="4" mt="4">
            <MenuRoot>
              <MenuTrigger asChild>
                <Button
                  bg="blue.500"
                  color="white"
                  width="full"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    bg: 'blue.600',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
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
                  cursor="pointer"
                >
                  <BsShield />
                  Schade melden
                </MenuItem>
                <MenuItem
                  value="quote"
                  asChild
                  gap="2"
                  _hover={{ bg: 'blue.50' }}
                  cursor="pointer"
                >
                  <Link
                    href={NAVIGATION_ROUTES.quote}
                    onClick={handleLinkClick}
                  >
                    <BsFileText />
                    Offerte aanvragen
                  </Link>
                </MenuItem>
                <MenuItem
                  value="call"
                  asChild
                  gap="2"
                  _hover={{ bg: 'blue.50' }}
                  cursor="pointer"
                >
                  <Link
                    href={`tel:${CONTACT_INFO.phone}`}
                    onClick={handleLinkClick}
                  >
                    <BsTelephone />
                    Bel nu
                  </Link>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </Box>
        </Flex>
      </Flex>
    );
  },
);

Sidenav.displayName = 'Sidenav';

export default Sidenav;
