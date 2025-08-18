'use client';

import { memo, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Box, Button, Flex, VStack, Separator } from '@chakra-ui/react';
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from '@chakra-ui/react';
import { BsShield, BsTelephone, BsX, BsChevronDown } from 'react-icons/bs';

import Logo from '@/components/logo';
import { NAVIGATION_ROUTES, EXTERNAL_LINKS, CONTACT_INFO, UI_CONSTANTS } from '@/constants/app';
import { cn } from '@/lib/utils';
import type { SidenavProps, NavigationLink } from '@/types/components';
const MOBILE_NAVIGATION_LINKS: readonly NavigationLink[] = [
  { href: NAVIGATION_ROUTES.home, label: 'Home' },
  { href: NAVIGATION_ROUTES.insurance, label: 'Verzekeringen' },
  { href: NAVIGATION_ROUTES.taxi, label: 'Taxi' },
  { href: NAVIGATION_ROUTES.riskManagement, label: 'Risk Management' },
  { href: NAVIGATION_ROUTES.about, label: 'Over ons' },
  { href: NAVIGATION_ROUTES.downloads, label: 'Downloads' },
  { href: NAVIGATION_ROUTES.contact, label: 'Contact' },
] as const;
const Sidenav = memo<SidenavProps>(({
  showSideNav,
  handleToggle,
  className,
  'data-testid': testId,
}) => {
  const pathname = usePathname();


  const handleDamageReportClick = useCallback(() => {
    window.open(
      EXTERNAL_LINKS.damageReport,
      '_blank',
      'noopener,noreferrer'
    );
    handleToggle(); // Close menu after action
  }, [handleToggle]);


  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showSideNav) {
        handleToggle();
      }
    };

    if (showSideNav) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
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
      id="mobile-navigation"
      as="nav"
      role="navigation"
      aria-label="Mobile navigation menu"
      aria-hidden={!showSideNav}
      position="fixed"
      top="0"
      left={showSideNav ? '0' : '-100%'}
      height="100vh"
      width={{ base: '85%', sm: '400px' }}
      maxW="400px"
      bg="white"
      boxShadow="2xl"
      zIndex={UI_CONSTANTS.zIndexes.modal}
      direction="column"
      transition="left 0.3s ease-in-out"
      overflowY="auto"
      borderRight="1px solid"
      borderColor="gray.200"
    >

      <Box
        position="absolute"
        top="4"
        right="4"
        zIndex="1"
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={handleToggle}
          aria-label="Close navigation menu"
          _hover={{ bg: 'gray.100' }}
        >
          <BsX size="20" />
        </Button>
      </Box>


      <Flex
        direction="column"
        height="full"
        justify="center"
        align="center"
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
          as="ul"
          gap="3"
          align="center"
          width="full"
          listStyleType="none"
          margin="0"
          padding="0"
        >
          {MOBILE_NAVIGATION_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            
            return (
              <Box key={href} as="li" width="full">
                <Button
                  asChild
                  variant="plain"
                  size="lg"
                  width="full"
                  color={isActive ? 'blue.600' : 'gray.700'}
                  fontWeight={isActive ? 'semibold' : 'medium'}
                  _hover={{ 
                    bg: 'gray.50',
                    color: 'blue.600'
                  }}
                  _active={{ bg: 'gray.100' }}
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
                size="lg"
                width="full"
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
              </MenuItem>
              <MenuItem value="quote" asChild gap="2" _hover={{ bg: 'blue.50' }}>
                <Link href={NAVIGATION_ROUTES.quote} onClick={handleLinkClick}>
                  Offerte aanvragen
                </Link>
              </MenuItem>
              <MenuItem value="call" asChild gap="2" _hover={{ bg: 'blue.50' }}>
                <Link href={`tel:${CONTACT_INFO.phone}`} onClick={handleLinkClick}>
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
});

Sidenav.displayName = 'Sidenav';

export default Sidenav;