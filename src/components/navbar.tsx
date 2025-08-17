/**
 * Navigation bar component
 * @fileoverview Modern navbar with accessibility and performance optimizations
 */

'use client';

import { memo, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HStack, Button, Flex, Center, Box, VisuallyHidden } from '@chakra-ui/react';
import { BsTelephone, BsShield } from 'react-icons/bs';

import { NAVIGATION_ROUTES, EXTERNAL_LINKS, CONTACT_INFO } from '@/constants/app';
import type { NavigationLink } from '@/types/components';

/**
 * Navigation links configuration
 */
const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { href: NAVIGATION_ROUTES.home, label: 'Home' },
  { href: NAVIGATION_ROUTES.insurance, label: 'Verzekeringen' },
  { href: NAVIGATION_ROUTES.taxi, label: 'Taxi' },
  { href: NAVIGATION_ROUTES.riskManagement, label: 'Risk Management' },
  { href: NAVIGATION_ROUTES.about, label: 'Over ons' },
  { href: NAVIGATION_ROUTES.downloads, label: 'Bestanden' },
  { href: NAVIGATION_ROUTES.contact, label: 'Contact' },
] as const;

/**
 * Navigation bar component with responsive design and accessibility
 * Features:
 * - Active link highlighting
 * - Semantic navigation structure
 * - Keyboard navigation support
 * - Screen reader support
 * - Performance optimized with memo
 */
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
      {/* Main Navigation Links */}
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

      {/* Action Buttons */}
      <Box hideBelow="xl">
        <HStack gap="3">
          <Button
            onClick={handleDamageReportClick}
            bg="blue.500"
            color="white"
            size="sm"
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
            fontWeight="medium"
            gap="2"
          >
            <BsShield />
            Schade melden
            <VisuallyHidden>
              - Opens external damage report form in new window
            </VisuallyHidden>
          </Button>
          
          <Button
            asChild
            bg="blue.500"
            color="white"
            size="sm"
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
            fontWeight="medium"
          >
            <Link href={NAVIGATION_ROUTES.quote}>
              Offerte aanvragen
            </Link>
          </Button>
        </HStack>
      </Box>

      {/* Divider */}
      <Box hideBelow="xl">
        <Center>
          <Box 
            width="1px" 
            height="40px" 
            bg="gray.300"
            role="separator"
            aria-orientation="vertical"
          />
        </Center>
      </Box>

      {/* Contact Information */}
      <Box hideBelow="xl">
        <Button
          asChild
          variant="plain"
          color="gray.700"
          fontSize={{ base: 'sm', '2xl': 'md' }}
          fontWeight="medium"
          _hover={{ color: 'blue.500' }}
          gap="2"
        >
          <Link href={`tel:${CONTACT_INFO.phone}`}>
            <BsTelephone />
            {CONTACT_INFO.phone}
            <VisuallyHidden>
              - Call us for immediate assistance
            </VisuallyHidden>
          </Link>
        </Button>
      </Box>
    </Flex>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;