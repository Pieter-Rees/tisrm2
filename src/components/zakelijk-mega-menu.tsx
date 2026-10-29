'use client';

import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

import { BRANCH_ROUTES, NAVIGATION_ROUTES } from '@/constants/app';
import { SPACING_PATTERNS } from '@/constants/layout';

export const zakelijkMegaMenuId = 'zakelijk-mega-menu';

/** Long enough for the pointer to cross from the Zakelijk trigger into the panel. */
export const zakelijkMenuCloseDelayMs = 120;

const hubLabel = 'Alle zakelijke verzekeringen';

const linkFocusStyles = {
  outline: '2px solid',
  outlineColor: 'navy.700',
  outlineOffset: '2px',
};

type BranchRoute = (typeof BRANCH_ROUTES)[number];

type ZakelijkMegaMenuProps = {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: () => void;
};

export function useZakelijkMegaMenu(pathname: string) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousPathnameRef = useRef(pathname);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current === null) {
      return;
    }

    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }, []);

  const closeZakelijkMenu = useCallback(() => {
    clearCloseTimer();
    setIsOpen(false);
  }, [clearCloseTimer]);

  const openZakelijkMenu = useCallback(() => {
    clearCloseTimer();
    setIsOpen(true);
  }, [clearCloseTimer]);

  const scheduleCloseZakelijkMenu = useCallback(() => {
    clearCloseTimer();

    function closeAfterDelay() {
      closeTimerRef.current = null;
      setIsOpen(false);
    }

    closeTimerRef.current = setTimeout(
      closeAfterDelay,
      zakelijkMenuCloseDelayMs,
    );
  }, [clearCloseTimer]);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;
    closeZakelijkMenu();
  }, [pathname, closeZakelijkMenu]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return;
      }

      closeZakelijkMenu();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeZakelijkMenu]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  return {
    isZakelijkMenuOpen: isOpen,
    openZakelijkMenu,
    closeZakelijkMenu,
    scheduleCloseZakelijkMenu,
  };
}

export default function ZakelijkMegaMenu({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: ZakelijkMegaMenuProps) {
  function renderHubLink() {
    return (
      <Box
        asChild
        display="inline-flex"
        color="navy.900"
        fontWeight="semibold"
        fontSize={{ base: 'sm', '2xl': 'md' }}
        textDecoration="none"
        borderBottom="2px solid"
        borderBottomColor="gold.400"
        _hover={{ color: 'navy.700' }}
        _focusVisible={linkFocusStyles}
      >
        <Link href={NAVIGATION_ROUTES.businessInsurance} onClick={onNavigate}>
          {hubLabel}
        </Link>
      </Box>
    );
  }

  function renderBranchLink(route: BranchRoute) {
    return (
      <Box
        key={route.href}
        asChild
        display="block"
        width="full"
        px="3"
        py="2"
        color="navy.700"
        fontWeight="medium"
        fontSize={{ base: 'sm', '2xl': 'md' }}
        textDecoration="none"
        borderRadius="md"
        borderLeft="2px solid"
        borderLeftColor="transparent"
        transition="background 0.15s ease, color 0.15s ease, border-color 0.15s ease"
        _hover={{
          bg: 'stone.100',
          color: 'navy.900',
          borderLeftColor: 'gold.400',
        }}
        _focusVisible={linkFocusStyles}
      >
        <Link href={route.href} onClick={onNavigate}>
          {route.label}
        </Link>
      </Box>
    );
  }

  return (
    <Box
      as="nav"
      id={zakelijkMegaMenuId}
      aria-label="Zakelijke verzekeringen"
      aria-hidden={isOpen ? undefined : true}
      data-state={isOpen ? 'open' : 'closed'}
      inert={!isOpen}
      hideBelow="xl"
      position="absolute"
      top="100%"
      left="0"
      right="0"
      width="100%"
      zIndex="1"
      bg="white"
      color="navy.700"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="stone.300"
      boxShadow="md"
      py={SPACING_PATTERNS.navigation.group}
      visibility={isOpen ? 'visible' : 'hidden'}
      pointerEvents={isOpen ? 'auto' : 'none'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseEnter}
    >
      <Container>
        <Flex
          direction="column"
          alignItems="flex-start"
          gap={SPACING_PATTERNS.navigation.item}
        >
          {renderHubLink()}
          <SimpleGrid
            columns={3}
            gap={SPACING_PATTERNS.navigation.group}
            width="full"
          >
            {BRANCH_ROUTES.map(renderBranchLink)}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
