'use client'

import { Box, Flex } from '@chakra-ui/react'
import Card from '@/components/card'
import InnerPage from '@/components/inner-page-layout'
import { stackGap } from '@/constants/spacing'

const insuranceOptions = [
  {
    title: 'Particulier',
    description:
      'U verwacht als particulier de beste service tegen scherpe premies, alsmede een snelle afhandeling van mogelijke schades. Bij TIS geniet u van adviseurs die op de juiste momenten bereikbaar zijn en de persoonlijke aandacht geven waar u als klant behoefte heeft.',
    href: '/verzekeringen/particulier',
    image: '/slider-2.jpg',
  },
  {
    title: 'Zakelijk',
    description:
      'Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn. Wij nemen graag samen met u uw verzekeringspakket door en houden deze up to date, zodat ook u kunt genieten van de rust die TIS biedt.',
    href: '/verzekeringen/zakelijk',
    image: '/unieke-kenmerken.jpg',
  },
  {
    title: 'Taxi',
    description:
      'TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties én de klanten zelf.',
    href: '/taxi',
    image: '/mercedes.png',
  },
]

export default function Verzekeringen() {
  return (
    <InnerPage
      sidebar={false}
      hero={{
        eyebrow: 'Diensten',
        title: 'Verzekeringen',
        description:
          'Maatwerk voor particulier, zakelijk en taxi — altijd onafhankelijk en op uw situatie afgestemd.',
        image: '/1.webp',
        ctaLabel: 'Offerte aanvragen',
        ctaHref: '/offerte',
      }}
    >
      <Flex direction="column" gap={stackGap}>
        {insuranceOptions.map((option) => (
          <Box key={option.title} width="full">
            <Card
              image={option.image}
              title={option.title}
              description={option.description}
              cta="Lees meer"
              ctaLink={option.href}
              buttonVariant="ghost"
            />
          </Box>
        ))}
      </Flex>
    </InnerPage>
  )
}
