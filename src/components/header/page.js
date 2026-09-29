'use client'

import Logo from '@/components/logo'
import Navbar from '@/components/navbar/page'
import Link from 'next/link'
import { Flex, Box, Container, IconButton } from '@chakra-ui/react'
import Sidenav from '@/components/sidenav'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { BsList } from 'react-icons/bs'
import { containerPx } from '@/constants/spacing'

export default function Header() {
  const pathname = usePathname()
  const [showSideNav, setShowSideNav] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isHome = pathname === '/'
  const useLightChrome = !isHome || isScrolled

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  function handleToggle() {
    setShowSideNav((current) => !current)
  }

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="20"
      bg={useLightChrome ? 'rgba(247, 245, 242, 0.96)' : 'rgba(8, 22, 40, 0.92)'}
      borderBottom="1px solid"
      borderColor={useLightChrome ? 'stone.300' : 'rgba(196, 165, 116, 0.45)'}
      backdropFilter="blur(16px)"
      boxShadow={useLightChrome ? 'none' : '0 10px 30px rgba(5, 14, 26, 0.28)'}
      transition="background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease"
    >
      <Container px={containerPx}>
        <Flex alignItems="center" justifyContent="space-between" py={{ base: 3, md: 4 }} gap={{ base: 4, md: 6 }}>
          <Box
            flexShrink={0}
            width={{ base: '132px', md: '148px', xl: '156px' }}
          >
            <Link href="/" aria-label="TIS Risk Managers homepage">
              <Logo width="100%" />
            </Link>
          </Box>

          <Navbar useLightChrome={useLightChrome} />

          <IconButton
            aria-label="Open menu"
            icon={<BsList size={28} />}
            variant="ghost"
            display={{ base: 'inline-flex', xl: 'none' }}
            flexShrink={0}
            color={useLightChrome ? 'navy.700' : 'white'}
            border="none"
            borderRadius="0"
            onClick={handleToggle}
            _hover={{
              bg: useLightChrome ? 'stone.200' : 'whiteAlpha.200',
              borderColor: 'transparent',
              transform: 'none',
            }}
          />
        </Flex>
      </Container>
      <Sidenav showSideNav={showSideNav} handleToggle={handleToggle} />
    </Box>
  )
}
