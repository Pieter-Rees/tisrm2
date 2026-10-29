'use client';

import { Box, Button, Flex, Separator, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useCallback, useEffect, useState } from 'react';
import { BsChevronDown, BsX } from 'react-icons/bs';

import Logo from '@/components/logo';
import { ButtonLink } from '@/components/ui/button-link';
import {
  BRANCH_ROUTES,
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

const zakelijkMobileBranchesId = 'zakelijk-mobile-branches';

const Sidenav = memo<SidenavProps>(
  ({ showSideNav, handleToggle, className, 'data-testid': testId }) => {
    const pathname = usePathname();
    const [isZakelijkExpanded, setIsZakelijkExpanded] = useState(false);

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

    useEffect(() => {
      if (!showSideNav) {
        setIsZakelijkExpanded(false);
      }
    }, [showSideNav]);

    function toggleZakelijkBranches() {
      setIsZakelijkExpanded(current => !current);
    }

    function renderPrimaryLink(href: string, label: string, isActive: boolean) {
      return (
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
      );
    }

    function renderBranchLink(route: (typeof BRANCH_ROUTES)[number]) {
      const isActive =
        pathname === route.href || pathname.startsWith(route.href);

      return (
        <Button
          key={route.href}
          asChild
          width="full"
          justifyContent="center"
          bg={isActive ? 'stone.100' : 'white'}
          color={isActive ? 'navy.900' : 'navy.700'}
          fontWeight={isActive ? 'semibold' : 'medium'}
          border="1px solid"
          borderColor={isActive ? 'navy.700' : 'stone.300'}
          borderRadius="md"
          transition="all 0.2s ease-in-out"
          py={SPACING_SCALE.sm}
          _hover={{
            bg: 'stone.100',
            color: 'navy.900',
            borderColor: 'gold.400',
          }}
          _focusVisible={{
            outline: '2px solid',
            outlineColor: 'navy.700',
            outlineOffset: '2px',
          }}
        >
          <Link
            href={route.href}
            onClick={handleLinkClick}
            aria-current={isActive ? 'page' : undefined}
          >
            {route.label}
          </Link>
        </Button>
      );
    }

    function renderZakelijkItem(label: string, isActive: boolean) {
      return (
        <>
          <Flex gap="2" width="full" alignItems="stretch">
            <Box flex="1" minW="0">
              {renderPrimaryLink(
                NAVIGATION_ROUTES.businessInsurance,
                label,
                isActive,
              )}
            </Box>
            <Button
              type="button"
              aria-expanded={isZakelijkExpanded}
              aria-controls={zakelijkMobileBranchesId}
              aria-label={
                isZakelijkExpanded ?
                  'Verberg zakelijke branches'
                : 'Toon zakelijke branches'
              }
              onClick={toggleZakelijkBranches}
              variant="ghost"
              alignSelf="stretch"
              flexShrink={0}
              minW="10"
              px="3"
              color="navy.700"
              bg="white"
              border="1px solid"
              borderColor="stone.300"
              borderRadius="md"
              _hover={{
                bg: 'stone.100',
                color: 'navy.900',
                borderColor: 'gold.400',
              }}
              _focusVisible={{
                outline: '2px solid',
                outlineColor: 'navy.700',
                outlineOffset: '2px',
              }}
            >
              <Box
                as="span"
                aria-hidden="true"
                display="inline-flex"
                transform={
                  isZakelijkExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                }
                transition="transform 0.15s ease"
              >
                <BsChevronDown size="20" />
              </Box>
            </Button>
          </Flex>
          {isZakelijkExpanded && (
            <VStack
              id={zakelijkMobileBranchesId}
              alignItems="stretch"
              gap="2"
              mt="2"
              width="full"
            >
              {BRANCH_ROUTES.map(renderBranchLink)}
            </VStack>
          )}
        </>
      );
    }

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
              const isZakelijk = href === NAVIGATION_ROUTES.businessInsurance;

              return (
                <Box key={href} width="full">
                  {isZakelijk ?
                    renderZakelijkItem(label, isActive)
                  : renderPrimaryLink(href, label, isActive)}
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
              Offerte aanvragen
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
