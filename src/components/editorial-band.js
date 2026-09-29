'use client'

import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import MediaFrame from '@/components/media-frame'
import { copyGap, sectionPy } from '@/constants/spacing'
import { lightSurfaceGradient } from '@/constants/surfaces'

const EditorialBand = ({
  title,
  description,
  image,
  href,
  ctaLabel = 'Ontdek meer',
  reverse = false,
  imageAlt,
  indexLabel,
}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      as='section'
      width='100%'
      bgGradient={lightSurfaceGradient}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(36px)'}
      transition='opacity 0.85s ease-out, transform 0.85s ease-out'
    >
      <Flex
        direction={{ base: 'column', lg: reverse ? 'row-reverse' : 'row' }}
        align='stretch'
        minHeight={{ lg: '72vh' }}
      >
        <Box
          flex={{ base: 'none', lg: '1.2' }}
          position='relative'
          overflow='hidden'
          minHeight={{ base: '46vh', lg: '72vh' }}
        >
          <Box position='absolute' inset='0'>
            <MediaFrame src={image} alt={imageAlt || title} height='100%' />
          </Box>
        </Box>

        <Flex
          flex='1'
          direction='column'
          justify='center'
          gap={copyGap}
          px={{ base: 6, md: 10, lg: 12, xl: 16, '2xl': 20 }}
          py={sectionPy}
          maxW={{ lg: '560px', xl: '640px' }}
          w='100%'
          alignSelf='center'
        >
          {indexLabel && (
            <Text variant='eyebrow' color='gold.500'>
              {indexLabel}
            </Text>
          )}
          <Box width='56px' height='1px' bg='gold.400' />
          <Heading as='h2' variant='lg' mb='0'>
            {title}
          </Heading>
          <Text variant='lead' mb='0' maxW='440px'>
            {description}
          </Text>
          {href && (
            <Box>
              <Button as={Link} href={href} variant='ghost'>
                {ctaLabel}
              </Button>
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default EditorialBand
