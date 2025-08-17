'use client';

import Logo from '@/components/logo';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { Flex, Box, Container, Button } from '@chakra-ui/react';
import Sidenav from '@/components/sidenav';
import { useState, useCallback } from 'react';
import { BsList } from 'react-icons/bs';

export default function Header() {
  const [showSideNav, setShowSideNav] = useState(false);

  const handleToggle = useCallback(() => {
    setShowSideNav(prev => !prev);
  }, []);

  return (
    <Container>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        py={4}
        gap="8"
      >
        <Link href="/">
          <Logo width="200px" />
        </Link>
        <Navbar />
        <Box hideFrom="xl">
          <Button
            variant="ghost"
            onClick={handleToggle}
            color="gray.900"
            aria-label="Open menu"
          >
            <BsList size="24px" />
          </Button>
        </Box>
      </Flex>
      {/* Mobile menu overlay */}
      {showSideNav && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.600"
          zIndex="40"
          onClick={handleToggle}
        />
      )}
      <Sidenav showSideNav={showSideNav} handleToggle={handleToggle} />
    </Container>
  );
}