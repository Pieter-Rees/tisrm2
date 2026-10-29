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
import { memo } from 'react';
import {
  BsChevronDown,
  BsFileText,
  BsShield,
  BsTelephone,
} from 'react-icons/bs';

import {
  CONTACT_INFO,
  NAVIGATION_ROUTES,
  PRIMARY_NAVIGATION,
} from '@/constants/app';
import { SPACING_PATTERNS, SPACING_SCALE } from '@/constants/layout';
import { primaryButtonStyles } from '@/styles/components/button.styles';
import {
  navbarActionsButtonFocusStyles,
  navbarActionsButtonOnDarkStyles,
} from '@/styles/components/navigation.styles';

export interface NavbarProps {
  /** Mirrors the header chrome so the links stay legible over the dark hero. */
  useLightChrome?: boolean;
}

const Navbar = memo<NavbarProps>(({ useLightChrome = true }) => {
  const pathname = usePathname();

  const linkColor = useLightChrome ? 'navy.700' : 'white';
  const mutedColor = useLightChrome ? 'stone.700' : 'white';
  // Gold clears 3:1 on the dark chrome but not on the light one, so the light
  // state keeps the navy underline it already had.
  const underlineColor = useLightChrome ? 'navy.700' : 'gold.400';

  return (
    <Flex
      alignItems="center"
      gap={SPACING_PATTERNS.navigation.container}
      width="full"
      justifyContent="space-between"
    >
      <Box hideBelow="xl">
        <HStack
          gap={SPACING_PATTERNS.navigation.group}
          alignItems="center"
          fontSize={{ base: 'sm', '2xl': 'md' }}
          fontWeight="medium"
          listStyleType="none"
          margin="0"
          padding="0"
        >
          {PRIMARY_NAVIGATION.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== '/' && pathname.startsWith(href));

            return (
              <Box key={href}>
                <Link href={href} aria-current={isActive ? 'page' : undefined}>
                  <Box
                    textDecoration="none"
                    display="flex"
                    alignItems="center"
                    py={SPACING_PATTERNS.navigation.item}
                    position="relative"
                    color={isActive ? linkColor : mutedColor}
                    fontWeight={isActive ? 'semibold' : 'medium'}
                    borderBottom="2px solid"
                    borderBottomColor={isActive ? underlineColor : 'transparent'}
                    transition="all 0.2s ease-in-out"
                    minH="6"
                    _hover={
                      !isActive ?
                        {
                          color: linkColor,
                          borderBottomColor: underlineColor,
                          transform: 'translateY(-1px)',
                        }
                      : {}
                    }
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
              {...primaryButtonStyles}
              {...(useLightChrome ?
                navbarActionsButtonFocusStyles
              : navbarActionsButtonOnDarkStyles)}
              fontWeight="medium"
              gap={SPACING_SCALE.xs}
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
              asChild
              gap={SPACING_SCALE.xs}
              _hover={{ bg: 'blue.50' }}
              cursor="pointer"
            >
              <Link href={NAVIGATION_ROUTES.damageReport}>
                <BsShield />
                Schade melden
              </Link>
            </MenuItem>
            <MenuItem
              value="quote"
              asChild
              gap={SPACING_SCALE.xs}
              _hover={{ bg: 'blue.50' }}
              cursor="pointer"
            >
              <Link href={NAVIGATION_ROUTES.quote}>
                <BsFileText />
                Offerte aanvragen
              </Link>
            </MenuItem>
            <MenuItem
              value="call"
              asChild
              gap={SPACING_SCALE.xs}
              _hover={{ bg: 'blue.50' }}
              cursor="pointer"
            >
              <Link href={CONTACT_INFO.phoneHref}>
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
