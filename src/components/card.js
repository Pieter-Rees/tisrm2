'use client'

import { Box, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'
import MediaFrame from '@/components/media-frame'

const CardElement = ({
  title,
  description,
  image,
  altText,
  downloadLink,
  cta,
  ctaLink,
  phone,
  buttonVariant = 'solid',
  variant,
}) => {
  const hasCta = cta || phone || downloadLink
  const [isHovered, setIsHovered] = useState(false)
  const shouldShowImage = image && variant !== 'sidebar'
  const isSidebar = variant === 'sidebar'
  const resolvedVariant = buttonVariant === 'ghost' ? 'ghost' : 'blue'

  return (
    <Box
      transform={`translateY(${isHovered ? -4 : 0}px)`}
      transition='transform 0.35s ease'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      width='full'
      bg={isSidebar ? 'white' : 'transparent'}
      borderRadius='0'
      border={isSidebar ? '1px solid' : 'none'}
      borderBottom={isSidebar ? '1px solid' : '1px solid'}
      borderColor='stone.300'
      overflow='hidden'
      p={isSidebar ? 6 : 0}
    >
      {shouldShowImage && (
        <Box
          position='relative'
          width='100%'
          overflow='hidden'
          maxH={{ base: '280px', md: '420px' }}
          sx={{ aspectRatio: '16 / 9' }}
        >
          <Box position='absolute' inset='0'>
            <MediaFrame src={image} alt={altText || title} height='100%' />
          </Box>
        </Box>
      )}
      {title && (
        <Box pt={shouldShowImage ? 6 : 0}>
          <Box width='56px' height='1px' bg='gold.400' mb='3' />
          <Text
            mb='0'
            fontSize={isSidebar ? '2xl' : { base: 'clamp(1.35rem, 6.7vw, 2.25rem)', md: '4xl' }}
            fontFamily='heading'
            fontWeight='560'
            letterSpacing='-0.025em'
            lineHeight='1.1'
            color='navy.700'
          >
            {title}
          </Text>
        </Box>
      )}
      {description && (
        <Box pt='4' pb={hasCta ? 2 : 6}>
          <Text
            mb='0'
            color='gray.800'
            fontSize='xl'
            fontWeight='500'
            lineHeight='1.5'
          >
            {description}
          </Text>
        </Box>
      )}

      {hasCta && (
        <Box pb={isSidebar ? 0 : 6} pt='3'>
          {cta && ctaLink && (
            <Button
              as={Link}
              href={ctaLink}
              variant={resolvedVariant}
              width={isSidebar ? '100%' : 'auto'}
            >
              {cta}
            </Button>
          )}
          {phone && (
            <Button
              as='a'
              href={phone}
              variant={resolvedVariant}
              width={isSidebar ? '100%' : 'auto'}
            >
              Bel ons nu
            </Button>
          )}
          {downloadLink && (
            <Button as='a' href={downloadLink} variant={resolvedVariant}>
              Download
            </Button>
          )}
        </Box>
      )}
    </Box>
  )
}

export default CardElement
