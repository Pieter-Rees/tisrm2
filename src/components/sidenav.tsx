/**
 * Modern Mobile Side Navigation Component
 * @fileoverview Responsive mobile navigation with accessibility and animations
 */

'use client';

import { memo, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Box, Button, Flex, VStack, Separator } from '@chakra-ui/react';
import { BsShield, BsTelephone, BsX } from 'react-icons/bs';

import Logo from '@/components/logo';
import { NAVIGATION_ROUTES, EXTERNAL_LINKS, CONTACT_INFO, UI_CONSTANTS } from '@/constants/app';
import { cn } from '@/lib/utils';
import type { SidenavProps, NavigationLink } from '@/types/components';

/**
 * Mobile navigation links configuration
 */
const MOBILE_NAVIGATION_LINKS: readonly NavigationLink[] = [
  { href: NAVIGATION_ROUTES.home, label: 'Home' },
  { href: NAVIGATION_ROUTES.insurance, label: 'Verzekeringen' },
  { href: NAVIGATION_ROUTES.taxi, label: 'Taxi' },
  { href: NAVIGATION_ROUTES.riskManagement, label: 'Risk Management' },
  { href: NAVIGATION_ROUTES.about, label: 'Over ons' },
  { href: NAVIGATION_ROUTES.downloads, label: 'Bestanden' },
  { href: NAVIGATION_ROUTES.contact, label: 'Contact' },
] as const;

/**
 * Modern mobile side navigation component
 * Features:
 * - Smooth slide-in animation
 * - Active link highlighting
 * - Keyboard navigation support
 * - Focus management and trapping
 * - Accessibility with ARIA labels
 * - Performance optimized with memo
 * - Modern TypeScript patterns
 */
const Sidenav = memo<SidenavProps>(({
  showSideNav,
  handleToggle,
  className,
  'data-testid': testId,
}) => {
  const pathname = usePathname();

  // Handle external damage report link
  const handleDamageReportClick = useCallback(() => {
    window.open(
      EXTERNAL_LINKS.damageReport,
      '_blank',
      'noopener,noreferrer'
    );
    handleToggle(); // Close menu after action
  }, [handleToggle]);

  // Close menu on escape key
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

  // Handle navigation link click
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
      {/* Close Button */}
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

      {/* Navigation Content */}
      <Flex
        direction="column"
        height="full"
        justify="center"
        align="center"
        p="8"
        pt="16"
        gap="8"
      >
        {/* Logo */}
        <Box mb="4">
          <Link
            href={NAVIGATION_ROUTES.home}
            onClick={handleLinkClick}
            aria-label="Go to homepage"
          >
            <Logo width="180px" height="auto" />
          </Link>
        </Box>

        {/* Navigation Links */}
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

        {/* Divider */}
        <Separator borderColor="gray.300" width="80%" />

        {/* Action Buttons */}
        <VStack gap="3" width="full" px="4">
          <Button
            onClick={handleDamageReportClick}
            bg="blue.500"
            color="white"
            size="lg"
            width="full"
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
            gap="2"
          >
            <BsShield />
            Schade melden
          </Button>
          
          <Button
            asChild
            bg="blue.500"
            color="white"
            size="lg"
            width="full"
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
          >
            <Link href={NAVIGATION_ROUTES.quote} onClick={handleLinkClick}>
              Offerte aanvragen
            </Link>
          </Button>
        </VStack>

        {/* Contact */}
        <Box mt="4">
          <Button
            asChild
            variant="plain"
            color="gray.700"
            fontSize="lg"
            fontWeight="medium"
            _hover={{ color: 'blue.500' }}
            gap="2"
          >
            <Link href={`tel:${CONTACT_INFO.phone}`} onClick={handleLinkClick}>
              <BsTelephone />
              {CONTACT_INFO.phone}
            </Link>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
});

Sidenav.displayName = 'Sidenav';

export default Sidenav;