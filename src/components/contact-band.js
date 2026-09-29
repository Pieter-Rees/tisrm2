'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { contactInfo } from '@/data/general'
import { copyGap, sectionPy, splitGap } from '@/constants/spacing'
import MediaFrame from '@/components/media-frame'

const displayPhone = '+31 20 636 8191'

const ContactBand = ({
  title = 'Direct antwoord op uw vragen?',
  description = 'Bel ons of vraag vrijblijvend een offerte aan. Wij denken graag met u mee.',
}) => {
  return (
    <Box
      as='section'
      width='100%'
      position='relative'
      overflow='hidden'
      color='white'
      bg='navy.700'
    >
      <Box position='absolute' inset='0' opacity='0.22'>
        <MediaFrame
          src='/1.webp'
          alt=''
          height='100%'
          objectPosition='center 40%'
        />
      </Box>
      <Box
        position='absolute'
        inset='0'
        bgGradient='linear(to-r, rgba(11,31,58,0.94) 0%, rgba(11,31,58,0.88) 55%, rgba(11,31,58,0.82) 100%)'
      />
      <Container position='relative' py={sectionPy}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'flex-start', lg: 'center' }}
          justify='space-between'
          gap={splitGap}
        >
          <Flex direction='column' gap={copyGap} align='flex-start' maxW='600px'>
            <Text variant='eyebrow' color='gold.400' mb='0'>
              Contact
            </Text>
            <Box width='56px' height='1px' bg='gold.400' />
            <Heading as='h2' variant='lg' color='white' mb='0'>
              {title}
            </Heading>
            <Text
              color='white'
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight='500'
              mb='0'
              lineHeight='1.45'
            >
              {description}
            </Text>
          </Flex>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing='5'
            align='stretch'
            minW={{ lg: '280px' }}
          >
            <Button
              as='a'
              href={`tel:${contactInfo.phone}`}
              variant='white'
              size='lg'
              minW={{ md: '230px' }}
            >
              {displayPhone}
            </Button>
            <Button
              as={Link}
              href='/offerte'
              variant='outlineLight'
              size='lg'
              minW={{ md: '230px' }}
            >
              Offerte aanvragen
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default ContactBand
