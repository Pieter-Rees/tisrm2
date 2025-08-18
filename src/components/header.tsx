'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Flex, Box, Container, Button } from '@chakra-ui/react';
import { BsList, BsX } from 'react-icons/bs';

import Logo from '@/components/logo';
import Navbar from '@/components/navbar';
import Sidenav from '@/components/sidenav';
import { useDisclosure } from '@/hooks/use-disclosure';
import { NAVIGATION_ROUTES, UI_CONSTANTS } from '@/constants/app';
const Header = memo(() => {
  const { isOpen: showSideNav, onToggle: handleToggle, onClose: closeSideNav } = useDisclosure();

  return (
    <Box
      as="header"
      role="banner"
      position="sticky"
      top="0"
      zIndex={UI_CONSTANTS.zIndexes.sticky}
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Container>
        <Flex
          align="center"
          justify="space-between"
          py="4"
          gap="8"
        >

          <Box flex="0 0 auto">
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
              onClick={handleToggle}
              aria-label={showSideNav ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={showSideNav}
              aria-controls="mobile-navigation"
              size="lg"
              color="gray.900"
              _hover={{ bg: 'gray.100' }}
              _active={{ bg: 'gray.200' }}
            >
              {showSideNav ? <BsX size="24" /> : <BsList size="24" />}
            </Button>
          </Box>
        </Flex>
      </Container>


      {showSideNav && (
        <Box
          position="fixed"
          inset="0"
          bg="blackAlpha.600"
          zIndex={UI_CONSTANTS.zIndexes.modal - 10}
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