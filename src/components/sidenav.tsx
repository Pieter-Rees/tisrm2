'use client';

import { Box, Button, Flex, Separator, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useCallback, useEffect } from 'react';
import { BsX } from 'react-icons/bs';

import Logo from '@/components/logo';
import { ButtonLink } from '@/components/ui/button-link';
import {
  NAVIGATION_ROUTES,
  PRIMARY_NAVIGATION,
  UI_CONSTANTS,
} from '@/constants/app';
import { SPACING_PATTERNS, SPACING_SCALE } from '@/constants/layout';
import { cn } from '@/lib/utils';
import { DESIGN_BUTTON_STYLES } from '@/styles/components/button.styles';
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
import type { SidenavProps } from '@/types/components';

const Sidenav = memo<SidenavProps>(
  ({ showSideNav, handleToggle, className, 'data-testid': testId }) => {
    const pathname = usePathname();

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
        id="mobile-navigation"
        aria-hidden={!showSideNav}
        inert={!showSideNav}
      >
        <Box
          position="absolute"
          top={SPACING_PATTERNS.navigation.item}
          right={SPACING_PATTERNS.navigation.item}
          zIndex="1"
        >
          <Button
            type="button"
            aria-label="Close navigation menu"
            variant="ghost"
            color="gray.700"
            minW="10"
            minH="10"
            transition="all 0.2s ease-in-out"
            _hover={{ bg: 'gray.100', color: 'blue.700' }}
            _active={{ bg: 'gray.200' }}
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
          p={SPACING_PATTERNS.page.section}
          pt={SPACING_PATTERNS.page.section}
          gap={SPACING_PATTERNS.page.section}
        >
          <Box mb={SPACING_PATTERNS.navigation.item}>
            <Link
              href={NAVIGATION_ROUTES.home}
              onClick={handleLinkClick}
              aria-label="Go to homepage"
            >
              <Logo width="180px" height="auto" />
            </Link>
          </Box>

          <VStack
            gap={SPACING_PATTERNS.navigation.group}
            alignItems="center"
            width="full"
            listStyleType="none"
            margin="0"
            padding="0"
          >
            {PRIMARY_NAVIGATION.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href !== '/' && pathname.startsWith(href));

              return (
                <Box key={href} width="full">
                  <Button
                    asChild
                    width="full"
                    bg={isActive ? 'blue.50' : 'white'}
                    color={isActive ? 'blue.900' : 'gray.700'}
                    fontWeight={isActive ? 'semibold' : 'medium'}
                    border="1px solid"
                    borderColor={isActive ? 'blue.700' : 'gray.200'}
                    borderRadius="md"
                    transition="all 0.2s ease-in-out"
                    _hover={{
                      bg: isActive ? 'blue.100' : 'gray.50',
                      color: 'blue.900',
                      transform: 'translateX(4px)',
                      borderColor: 'blue.700',
                    }}
                    _active={{ bg: isActive ? 'blue.200' : 'gray.100' }}
                    justifyContent="center"
                    py={SPACING_SCALE.sm}
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

          <VStack
            width="full"
            px={SPACING_SCALE.md}
            mt={SPACING_SCALE.md}
            gap={SPACING_SCALE.sm}
          >
            <ButtonLink
              href={NAVIGATION_ROUTES.quote}
              width="full"
              onClick={handleLinkClick}
              {...DESIGN_BUTTON_STYLES.onLight}
            >
              Offerte
            </ButtonLink>
            <ButtonLink
              href={NAVIGATION_ROUTES.damageReport}
              width="full"
              onClick={handleLinkClick}
              {...DESIGN_BUTTON_STYLES.outlineOnLight}
            >
              Schade melden
            </ButtonLink>
          </VStack>
        </Flex>
      </Flex>
    );
  },
);

Sidenav.displayName = 'Sidenav';

export default Sidenav;
