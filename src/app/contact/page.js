'use client'

import { Box, Button, Text, VStack, HStack, Icon, Link as ChakraLink } from '@chakra-ui/react'
import InnerPage from '@/components/inner-page-layout'
import { contactInfo } from '@/data/general'
import { stackGap } from '@/constants/spacing'
import { BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Contact() {
  return (
    <InnerPage
      showContactBand={false}
      sidebar={false}
      hero={{
        eyebrow: 'Bereikbaar',
        title: 'Contact',
        description: 'Heeft u vragen of wilt u meer informatie? Wij helpen u graag verder.',
        image: '/slider-1.jpg',
        ctaLabel: 'Offerte aanvragen',
        ctaHref: '/offerte',
      }}
    >
      <VStack spacing={stackGap} align="stretch" maxW="720px">
        <Text variant="lead" mb="0">
          Neem contact met ons op voor advies, een offerte of vragen over uw polis. Ons team in Amsterdam staat voor u
          klaar.
        </Text>

        <VStack spacing={5} align="stretch">
          <HStack spacing={4}>
            <Icon as={BsTelephoneFill} color="gold.500" boxSize={5} />
            <ChakraLink href={`tel:${contactInfo.phone}`} color="navy.700" fontSize="lg" fontWeight="600">
              +31 20 636 8191
            </ChakraLink>
          </HStack>
          <HStack spacing={4}>
            <Icon as={BsEnvelopeFill} color="gold.500" boxSize={5} />
            <ChakraLink href={`mailto:${contactInfo.email}`} color="navy.700" fontSize="lg" fontWeight="600">
              {contactInfo.email}
            </ChakraLink>
          </HStack>
          <HStack spacing={4} align="flex-start">
            <Icon as={BsGeoAltFill} color="gold.500" boxSize={5} mt="1" />
            <Box>
              <Text mb="0" fontSize="lg">
                {contactInfo.address}
              </Text>
              <Text mb="0" fontSize="lg" color="stone.700">
                {contactInfo.postalCode2} {contactInfo.city}
              </Text>
            </Box>
          </HStack>
        </VStack>

        <Box>
          <Button as={Link} href="/offerte" variant="blue" size="lg">
            Offerte aanvragen
          </Button>
        </Box>
      </VStack>
    </InnerPage>
  )
}
