'use client'

import { Box, Container, Heading, Text, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import MediaFrame, { PhotoVeil } from '@/components/media-frame'
import { isProductImage } from '@/constants/images'
import { copyGap, splitGap } from '@/constants/spacing'

function resolveFrame(image, frame) {
  if (isProductImage(image)) return 'product'
  if (frame === 'portrait') return 'portrait'
  return 'cover'
}

const PageHero = ({
  title,
  description,
  image,
  imageAlt,
  frame = 'cover',
  ctaLabel,
  ctaHref,
  eyebrow,
  minHeight = { base: '58vh', md: '72vh' },
}) => {
  const resolvedFrame = resolveFrame(image, frame)
  const isCover = resolvedFrame === 'cover'
  const alt = imageAlt || title

  return (
    <Box
      position='relative'
      width='100%'
      minHeight={isCover ? minHeight : 'auto'}
      overflow='hidden'
      mb='0'
      bg={isCover ? undefined : 'navy.800'}
    >
      {isCover && (
        <Box position='absolute' inset='0'>
          <MediaFrame src={image} alt='' height='100%' />
          <PhotoVeil />
        </Box>
      )}
      <Container
        position='relative'
        height='100%'
        minHeight={isCover ? minHeight : 'auto'}
        display='flex'
        alignItems={isCover ? 'flex-end' : 'center'}
        pb={{ base: 12, md: 20 }}
        pt={{ base: 28, md: 36 }}
      >
        <Flex
          direction={isCover ? 'column' : { base: 'column', lg: 'row' }}
          align={isCover ? 'flex-start' : 'center'}
          justify='space-between'
          width='100%'
          gap={splitGap}
        >
          <Flex
            direction='column'
            maxW={{ base: '100%', md: '860px' }}
            gap={copyGap}
            flex={isCover ? undefined : '1.15'}
            opacity='0'
            animation='heroFade 0.95s ease-out forwards'
            sx={{
              '@keyframes heroFade': {
                from: { opacity: 0, transform: 'translateY(22px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            {eyebrow && (
              <Text variant='eyebrow' color='gold.400'>
                {eyebrow}
              </Text>
            )}
            <Box width='56px' height='1px' bg='gold.400' />
            <Heading as='h1' variant='display' color='white' mb='0'>
              {title}
            </Heading>
            {description && (
              <Text
                color='white'
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight='500'
                mb='0'
                maxW='640px'
                lineHeight='1.45'
              >
                {description}
              </Text>
            )}
            {ctaLabel && ctaHref && (
              <Box>
                <Button as={Link} href={ctaHref} variant='white' size='lg'>
                  {ctaLabel}
                </Button>
              </Box>
            )}
          </Flex>
          {resolvedFrame === 'product' && (
            <Flex
              flex='1'
              align='center'
              justify='center'
              minW={{ lg: '380px' }}
              w='100%'
            >
              <Box
                as='img'
                src={image}
                alt={alt}
                maxW='100%'
                maxH={{ base: '200px', md: '340px' }}
                width='auto'
                height='auto'
                objectFit='contain'
              />
            </Flex>
          )}
          {resolvedFrame === 'portrait' && (
            <Box flex='1' maxW='560px' w='100%'>
              <Box
                as='img'
                src={image}
                alt={alt}
                width='100%'
                height='auto'
                display='block'
              />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default PageHero
