'use client';

import { Box, Button, Container, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { BsList, BsX } from 'react-icons/bs';

import Logo from '@/components/logo';
import Navbar from '@/components/navbar';
import Sidenav from '@/components/sidenav';
import { NAVIGATION_ROUTES } from '@/constants/app';
import { useDisclosure } from '@/hooks/use-disclosure';
import {
  headerContainerStyles,
  headerLogoStyles,
  headerStyles,
  // headerNavStyles,
  // headerMenuButtonStyles,
  mobileMenuOverlayStyles,
} from '@/styles/components/layout.styles';
const Header = memo(() => {
  const {
    isOpen: showSideNav,
    onToggle: handleToggle,
    onClose: closeSideNav,
  } = useDisclosure();

  return (
    <Box as="header" role="banner" {...headerStyles}>
      <Container>
        <Flex {...headerContainerStyles} direction="row">
          <Box {...headerLogoStyles}>
            <Link
              href={NAVIGATION_ROUTES.home}
              aria-label="Go to homepage"
              onClick={closeSideNav}
            >
              <Logo width="150px" height="auto" />
            </Link>
          </Box>

          <Box flex="1" hideBelow="xl">
            <Navbar />
          </Box>

          <Box hideFrom="xl">
            <Button
              variant="ghost"
              color="gray.700"
              transition="all 0.2s ease-in-out"
              _hover={{ bg: 'gray.100', color: 'blue.600' }}
              _active={{ bg: 'gray.200' }}
              hideFrom="xl"
              onClick={handleToggle}
              aria-label={
                showSideNav ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={showSideNav}
              aria-controls="mobile-navigation"
            >
              {showSideNav ?
                <BsX size="24" />
              : <BsList size="24" />}
            </Button>
          </Box>
        </Flex>
      </Container>

      {showSideNav && (
        <Box
          {...mobileMenuOverlayStyles}
          onClick={closeSideNav}
          aria-hidden="true"
          data-testid="mobile-menu-overlay"
        />
      )}

      <Sidenav showSideNav={showSideNav} handleToggle={handleToggle} />
    </Box>
  );
});

Header.displayName = 'Header';

export default Header;
