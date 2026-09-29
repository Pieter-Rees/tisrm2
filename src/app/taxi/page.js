'use client'

import { Text, Heading, Flex } from '@chakra-ui/react'
import InnerPage from '@/components/inner-page-layout'
import EditorialBand from '@/components/editorial-band'
import { stackGap } from '@/constants/spacing'

export default function Taxi() {
  return (
    <InnerPage
      showContactBand
      hero={{
        eyebrow: 'Specialisatie',
        title: 'Taxi',
        description: 'Al meer dan 25 jaar dé specialist in verzekeringen voor het personenvervoer.',
        image: '/mercedes.png',
        ctaLabel: 'Offerte aanvragen',
        ctaHref: '/offerte',
      }}
      afterContent={
        <EditorialBand
          title="Maatwerk voor personenvervoer"
          description="Van voertuig tot aansprakelijkheid: wij stellen een pakket samen dat past bij uw vloot en werkwijze."
          image="/audi.png"
          href="/offerte"
          ctaLabel="Offerte aanvragen"
          reverse
        />
      }
    >
      <Flex direction="column" gap={stackGap}>
        <Heading as="h2" variant="lg" mb="0">
          Taxi verzekeringen
        </Heading>
        <Text variant="lead" mb="0">
          TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze
          jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties
          én de klanten zelf.
        </Text>
        <Text mb="0">
          Wij begrijpen de unieke uitdagingen van de taxibranche en bieden verzekeringsoplossingen die specifiek zijn
          afgestemd op uw behoeften.
        </Text>
        <Heading as="h2" variant="md" mb="0">
          Onze expertise
        </Heading>
        <Text mb="0">
          Als specialist in taxiverzekeringen kennen wij alle aspecten van de branche. Wij helpen u bij het vinden van de
          beste dekking voor uw voertuigen, passagiers en bedrijfsactiviteiten.
        </Text>
        <Heading as="h2" variant="md" mb="0">
          Persoonlijke service
        </Heading>
        <Text mb="0">
          Bij TIS krijgt u persoonlijke aandacht en een vaste contactpersoon die uw dossier kent. Wij zijn bereikbaar
          wanneer u ons nodig heeft en helpen u snel bij vragen of schade.
        </Text>
      </Flex>
    </InnerPage>
  )
}
