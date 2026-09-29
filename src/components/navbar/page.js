'use client'

import { Button, Flex, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navCtaGap, navLinkGap } from '@/constants/spacing'

const navLinks = [
  { href: '/verzekeringen', label: 'Verzekeringen', match: (path) => path.startsWith('/verzekeringen') },
  { href: '/taxi', label: 'Taxi', match: (path) => path.startsWith('/taxi') },
  {
    href: '/risk-management',
    label: 'Risk Management',
    match: (path) => path.startsWith('/risk-management'),
  },
  { href: '/over-ons', label: 'Over ons', match: (path) => path.startsWith('/over-ons') },
  { href: '/bestanden', label: 'Bestanden', match: (path) => path.startsWith('/bestanden') },
  { href: '/contact', label: 'Contact', match: (path) => path.startsWith('/contact') },
]

export default function Navbar({ useLightChrome = true }) {
  const pathname = usePathname()

  function handleSchadeClick() {
    window.open(
      'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const linkColor = useLightChrome ? 'navy.700' : 'white'
  const mutedColor = useLightChrome ? 'stone.700' : 'white'
  const dividerColor = useLightChrome ? 'stone.300' : 'whiteAlpha.400'

  return (
    <Flex flex="1" minW={0} justifyContent="flex-end" alignItems="center">
      <Flex
        display={{ base: 'none', xl: 'flex' }}
        align="center"
        justify="flex-end"
        flex="1"
        minW={0}
        gap={4}
        ml={8}
      >
          <Flex
            as="nav"
            aria-label="Hoofdnavigatie"
            align="center"
            flexWrap="nowrap"
            gap={navLinkGap}
            minW={0}
          >
            {navLinks.map((link) => {
              const isActive = link.match(pathname)

              return (
                <Box
                  as={Link}
                  key={link.href}
                  href={link.href}
                  display="inline-flex"
                  alignItems="center"
                  flexShrink={0}
                  px={2}
                  py={2}
                  mb="0"
                  fontSize="sm"
                  color={isActive ? linkColor : mutedColor}
                  fontWeight={isActive ? '700' : '600'}
                  letterSpacing="0.01em"
                  whiteSpace="nowrap"
                  borderBottom="2px solid"
                  borderColor={isActive ? 'gold.400' : 'transparent'}
                  _hover={{ color: linkColor, borderColor: 'gold.400', textDecoration: 'none' }}
                  transition="color 0.2s ease, border-color 0.2s ease"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Box>
              )
            })}
          </Flex>

          <Flex
            align="center"
            gap={navCtaGap}
            flexShrink={0}
            pl={6}
            ml={2}
            borderLeft="1px solid"
            borderColor={dividerColor}
          >
            <Button
              as={Link}
              href="/offerte"
              variant={useLightChrome ? 'blue' : 'white'}
              size="sm"
              px={5}
            >
              Offerte
            </Button>
            <Button
              variant={useLightChrome ? 'outlineNavy' : 'outlineLight'}
              size="sm"
              onClick={handleSchadeClick}
              px={4}
              whiteSpace="nowrap"
            >
              Schade melden
            </Button>
          </Flex>
      </Flex>
    </Flex>
  )
}
