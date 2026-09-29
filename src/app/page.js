'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'
import Link from 'next/link'
import PageTransition from '@/components/page-transition'
import EditorialBand from '@/components/editorial-band'
import ContactBand from '@/components/contact-band'
import MediaFrame, { PhotoVeil } from '@/components/media-frame'
import { contentPy, copyGap, sectionPy, splitGap, stackGap } from '@/constants/spacing'
import { lightSurfaceGradient } from '@/constants/surfaces'

const practiceItems = [
  {
    indexLabel: '01 — Verzekeringen',
    title: 'Verzekeringen',
    description:
      'Maatwerk voor particulier en zakelijk. Wij combineren de beste voorwaarden uit de markt tot een pakket dat bij u past.',
    image: '/slider-2.jpg',
    href: '/verzekeringen',
  },
  {
    indexLabel: '02 — Risk Management',
    title: 'Risk Management',
    description:
      'Gediplomeerde risico managers, geregistreerd in het GRMC-register. Van inventarisatie tot beheersing.',
    image: '/unieke-kenmerken.jpg',
    href: '/risk-management',
    reverse: true,
  },
  {
    indexLabel: '03 — Taxi',
    title: 'Taxi',
    description:
      'Meer dan 25 jaar specialist in personenvervoer. Oplossingen die écht horen bij de taxibranche.',
    image: '/mercedes.png',
    href: '/taxi',
  },
]

const trustItems = [
  { value: '25+ jaar', label: 'Ervaring in verzekeringen en personenvervoer' },
  { value: 'Amsterdam', label: 'Landelijk werkend assurantiekantoor' },
  { value: 'GRMC', label: 'Gediplomeerde risico managers' },
]

export default function Homepage() {
  return (
    <PageTransition>
      <Box
        as='section'
        position='relative'
        width='100%'
        minHeight={{ base: '100svh', md: '100vh' }}
        overflow='hidden'
      >
        <Box position='absolute' inset='0'>
          <MediaFrame
            src='/1.webp'
            alt=''
            height='100%'
            objectPosition='center 40%'
          />
          <PhotoVeil />
        </Box>
        <Container
          position='relative'
          minHeight={{ base: '100svh', md: '100vh' }}
          display='flex'
          alignItems='flex-end'
          pb={{ base: 16, md: 24 }}
          pt={{ base: 32, md: 40 }}
        >
          <Flex
            direction='column'
            maxW={{ base: '100%', md: '880px' }}
            gap={copyGap}
            opacity='0'
            animation='heroFade 1.05s ease-out 0.1s forwards'
            sx={{
              '@keyframes heroFade': {
                from: { opacity: 0, transform: 'translateY(28px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Text variant='eyebrow' color='gold.400'>
              TIS Risk Managers
            </Text>
            <Box width='56px' height='1px' bg='gold.400' />
            <Heading as='h1' variant='display' color='white' mb='0'>
              Verzekeren met overzicht en klasse
            </Heading>
            <Text
              color='white'
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight='500'
              mb='0'
              maxW='640px'
              lineHeight='1.45'
            >
              Onafhankelijk advies, maatwerk polissen en snelle
              schadeafhandeling — vanuit Amsterdam, landelijk bereikbaar.
            </Text>
            <Flex gap={copyGap} direction={{ base: 'column', sm: 'row' }}>
              <Button as={Link} href='/offerte' variant='white' size='lg'>
                Offerte aanvragen
              </Button>
              <Button
                as={Link}
                href='/contact'
                variant='outlineLight'
                size='lg'
              >
                Contact
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box as='section' bg='navy.700' color='white'>
        <Container py={contentPy}>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={splitGap}
          >
            {trustItems.map((item, index) => (
              <Box
                key={item.value}
                borderLeft={{ md: index > 0 ? '1px solid' : 'none' }}
                borderColor='whiteAlpha.300'
                pl={{ md: index > 0 ? 10 : 0 }}
              >
                <Text
                  mb='2'
                  fontFamily='heading'
                  fontSize={{ base: '4xl', md: '5xl' }}
                  fontWeight='520'
                  color='white'
                  letterSpacing='-0.03em'
                  lineHeight='1'
                >
                  {item.value}
                </Text>
                <Text
                  mb='0'
                  color='white'
                  fontSize='lg'
                  fontWeight='500'
                  maxW='280px'
                  lineHeight='1.45'
                >
                  {item.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {practiceItems.map(item => (
        <EditorialBand
          key={item.title}
          indexLabel={item.indexLabel}
          title={item.title}
          description={item.description}
          image={item.image}
          href={item.href}
          reverse={Boolean(item.reverse)}
        />
      ))}

      <Box as='section' bgGradient={lightSurfaceGradient}>
        <Container py={sectionPy}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={splitGap}
            align={{ base: 'flex-start', lg: 'center' }}
          >
            <Box flexShrink='0' width={{ base: '220px', md: '248px' }}>
              <Box
                as='img'
                src='/rene.jpg'
                alt='René Enthoven, directeur TIS Risk Managers'
                width='100%'
                height='auto'
                display='block'
              />
            </Box>
            <Flex flex='1.15' direction='column' gap={stackGap} maxW='640px'>
              <Text variant='eyebrow' color='gold.500'>
                Woord van de directeur
              </Text>
              <Box width='56px' height='1px' bg='gold.400' />
              <Heading as='h2' variant='quote' color='navy.700' mb='0'>
                De weldaden van een verzekering komen samen met het onheil aan
                het licht.
              </Heading>
              <Text color='navy.700' fontSize='xl' fontWeight='650' mb='0'>
                René Enthoven
              </Text>
              <Text
                color='navy.700'
                fontSize='md'
                fontWeight='600'
                mb='0'
                letterSpacing='0.08em'
                textTransform='uppercase'
              >
                Directeur TIS Risk Managers
              </Text>
              <Text variant='lead' mb='0'>
                Wij geloven in heldere polissen, persoonlijke aandacht en
                digitale schadeafhandeling die u de regie geeft.
              </Text>
              <Box>
                <Button as={Link} href='/over-ons' variant='ghost'>
                  Over ons
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box as='section' bgGradient={lightSurfaceGradient}>
        <Container py={sectionPy}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={splitGap}
            align='center'
          >
            <Box
              flex='1.1'
              width='100%'
              position='relative'
              overflow='hidden'
              sx={{ aspectRatio: '3 / 2' }}
            >
              <Box position='absolute' inset='0'>
                <MediaFrame
                  src='/bb.jpg'
                  alt='Kantoor van TIS Risk Managers'
                  height='100%'
                />
              </Box>
            </Box>
            <Flex flex='1' direction='column' gap={copyGap} maxW='520px'>
              <Text variant='eyebrow' color='gold.500'>
                Onze aanpak
              </Text>
              <Box width='56px' height='1px' bg='gold.400' />
              <Heading as='h2' variant='lg' mb='0'>
                Polissen die u begrijpt — en die werken wanneer het erop aankomt
              </Heading>
              <Text variant='lead' mb='0'>
                Geen standaardpakketten, maar advies op maat. Wij combineren
                onafhankelijkheid, vakkennis en digitale schadeafhandeling in
                één heldere lijn.
              </Text>
              <Box>
                <Button as={Link} href='/verzekeringen' variant='ghost'>
                  Bekijk onze diensten
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <ContactBand />
    </PageTransition>
  )
}
