'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HStack, Text } from '@chakra-ui/react'

const formatSegment = (segment, capitalizeLinks) => {
  const label = segment.replace(/-/g, ' ')
  if (!capitalizeLinks) return label
  return label.charAt(0).toUpperCase() + label.slice(1)
}

const Breadcrumb = ({ capitalizeLinks = false }) => {
  const pathname = usePathname()
  const pathNames = pathname.split('/').filter(Boolean)

  if (pathNames.length === 0) {
    return null
  }

  return (
    <HStack
      gap={{ base: 2, md: 3 }}
      fontSize={{ base: 'md', md: 'lg' }}
      flexWrap="wrap"
      justifyContent="flex-start"
    >
      <Text as={Link} href="/" mb="0" color="gray.700" fontWeight="600" _hover={{ color: 'navy.700' }}>
        Home
      </Text>
      {pathNames.map((segment, index) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`
        const isLast = index === pathNames.length - 1
        const label = formatSegment(segment, capitalizeLinks)

        return (
          <HStack key={href} gap={{ base: 2, md: 3 }} spacing="0">
            <Text mb="0" color="stone.500" aria-hidden>
              /
            </Text>
            <Text
              as={Link}
              href={href}
              mb="0"
              color={isLast ? 'navy.700' : 'gray.700'}
              fontWeight={isLast ? '700' : '600'}
              _hover={{ color: 'navy.700' }}
              aria-current={isLast ? 'page' : undefined}
            >
              {label}
            </Text>
          </HStack>
        )
      })}
    </HStack>
  )
}

export default Breadcrumb
