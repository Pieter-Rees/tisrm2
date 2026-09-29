'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Box, Button, Divider, Flex, VStack, IconButton, Text, Portal } from '@chakra-ui/react'
import Logo from '@/components/logo'
import { BsX } from 'react-icons/bs'

const mobileLinks = [
  { href: '/', label: 'Home' },
  { href: '/verzekeringen', label: 'Verzekeringen' },
  { href: '/taxi', label: 'Taxi' },
  { href: '/risk-management', label: 'Risk Management' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/bestanden', label: 'Bestanden' },
  { href: '/contact', label: 'Contact' },
]

export default function Sidenav({ showSideNav, handleToggle }) {
  function handleSchadeClick() {
    window.open(
      'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen',
      '_blank',
      'noopener,noreferrer'
    )
    handleToggle()
  }

  useEffect(() => {
    if (!showSideNav) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [showSideNav])

  return (
    <Portal>
      <Box
        position="fixed"
        inset="0"
        bg="blackAlpha.500"
        zIndex="30"
        opacity={showSideNav ? 1 : 0}
        pointerEvents={showSideNav ? 'auto' : 'none'}
        transition="opacity 0.25s ease"
        onClick={handleToggle}
      />
      <Flex
        boxShadow="xl"
        transition="transform 0.3s ease"
        padding="8"
        gap="6"
        flexDirection="column"
        zIndex="40"
        backgroundColor="stone.100"
        position="fixed"
        left="0"
        top="0"
        transform={showSideNav ? 'translateX(0)' : 'translateX(-105%)'}
        alignItems="stretch"
        justifyContent="flex-start"
        height="100dvh"
        overflowY="auto"
        width={{ base: '85%', sm: '360px' }}
        maxW="400px"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/" onClick={handleToggle}>
            <Logo width="140px" />
          </Link>
          <IconButton
            aria-label="Sluit menu"
            icon={<BsX size={28} />}
            variant="ghost"
            color="navy.700"
            border="none"
            borderRadius="0"
            onClick={handleToggle}
            _hover={{ bg: 'stone.200', borderColor: 'transparent', transform: 'none' }}
          />
        </Flex>
        <VStack align="stretch" spacing="1" fontSize="xl" fontWeight="600">
          {mobileLinks.map((link) => (
            <Text
              as={Link}
              key={link.href}
              href={link.href}
              onClick={handleToggle}
              py="3"
              mb="0"
              color="navy.700"
              borderBottom="1px solid"
              borderColor="stone.300"
              _hover={{ color: 'gold.500' }}
            >
              {link.label}
            </Text>
          ))}
          <Divider marginY="3" />
          <Button as={Link} href="/offerte" variant="blue" onClick={handleToggle}>
            Offerte
          </Button>
          <Button variant="ghost" onClick={handleSchadeClick}>
            Schade melden
          </Button>
        </VStack>
      </Flex>
    </Portal>
  )
}
