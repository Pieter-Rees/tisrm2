'use client';

import { Box, Button, Container, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';

import Logo from '@/components/logo';
import Navbar from '@/components/navbar';
import Sidenav from '@/components/sidenav';
import { NAVIGATION_ROUTES } from '@/constants/app';
import { useDisclosure } from '@/hooks/use-disclosure';
import {
  getHeaderMenuButtonStyles,
  getHeaderStyles,
  headerContainerStyles,
  headerLogoStyles,
  mobileMenuOverlayStyles,
} from '@/styles/components/layout.styles';

const SCROLL_THRESHOLD = 40;

const Header = memo(() => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isOpen: showSideNav,
    onToggle: handleToggle,
    onClose: closeSideNav,
  } = useDisclosure();

  // The home hero is dark and full-bleed, so the header floats transparently
  // over it until the first scroll. Every other route gets light chrome.
  const isHome = pathname === NAVIGATION_ROUTES.home;
  const useLightChrome = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <Box as="header" role="banner" {...getHeaderStyles(useLightChrome)}>
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
              <Navbar useLightChrome={useLightChrome} />
            </Box>

            <Box hideFrom="xl">
              <Button
                variant="ghost"
                size="lg"
                {...getHeaderMenuButtonStyles(useLightChrome)}
                _icon={{ width: '7', height: '7' }}
                hideFrom="xl"
                onClick={handleToggle}
                aria-label={
                  showSideNav ? 'Close navigation menu' : 'Open navigation menu'
                }
                aria-expanded={showSideNav}
                aria-controls="mobile-navigation"
              >
                {showSideNav ?
                  <BsX size="28" />
                : <BsList size="28" />}
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* The header's `backdrop-filter` makes it a containing block for fixed
          descendants, so the overlay and drawer sit outside it. */}
      {showSideNav && (
        <Box
          {...mobileMenuOverlayStyles}
          onClick={closeSideNav}
          aria-hidden="true"
          data-testid="mobile-menu-overlay"
        />
      )}

      <Sidenav showSideNav={showSideNav} handleToggle={handleToggle} />
    </>
  );
});

Header.displayName = 'Header';

export default Header;
