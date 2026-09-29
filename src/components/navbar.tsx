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
  toTelHref,
  useSiteSettings,
} from '@/components/site-settings-provider';
import { NAVIGATION_ROUTES } from '@/constants/app';
import { SPACING_PATTERNS } from '@/constants/layout';
const Navbar = memo(() => {
  const pathname = usePathname();
  const settings = useSiteSettings();
  const navigationLinks = settings.navItems;

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
          {navigationLinks.map(({ href, label }) => {
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
                    color={isActive ? 'blue.500' : 'gray.700'}
                    fontWeight={isActive ? '600' : '500'}
                    borderBottom="2px solid"
                    borderBottomColor={isActive ? 'blue.500' : 'transparent'}
                    transition="all 0.2s ease-in-out"
                    _hover={
                      !isActive ?
                        {
                          color: 'blue.500',
                          borderBottomColor: 'blue.200',
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
              asChild
              gap="2"
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
              gap="2"
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
              gap="2"
              _hover={{ bg: 'blue.50' }}
              cursor="pointer"
            >
              <Link href={toTelHref(settings.phone)}>
                <BsTelephone />
                Bel nu
                <VisuallyHidden>
                  - Call us for immediate assistance: {settings.phone}
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
