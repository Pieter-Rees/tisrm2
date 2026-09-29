'use client'

import { Text, Flex, SimpleGrid } from '@chakra-ui/react'
import StarList from '@/components/star-list'
import InnerPage from '@/components/inner-page-layout'
import { stackGap } from '@/constants/spacing'

const list1 = [
  'Meer dan 25 jaar ervaring',
  'Gediplomeerd Risico Manager',
  'Geregistreerd in het GRMC register',
  'Onafhankelijk adviseur',
  'Landelijk werkend',
  'Persoonlijke aandacht',
]

const list2 = [
  'Snelle schadeafhandeling',
  'Digitale schadeafhandeling',
  'Unieke inlogcode per schadedossier',
  'Volg de voortgang zelf',
  'PC, tablet of smartphone',
  'Vakkundige afwikkeling',
]

export default function OverOns() {
  return (
    <InnerPage
      hero={{
        eyebrow: 'TIS Risk Managers',
        title: 'Over ons',
        description:
          'Meer dan 25 jaar landelijk assurantiekantoor, gespecialiseerd in personenvervoer en maatwerk verzekeringen.',
        image: '/team.jpg',
        imageAlt: 'Team TIS Risk Managers',
        frame: 'portrait',
      }}
    >
      <Flex direction='column' gap={stackGap}>
        <Text variant='lead' mb='0'>
          TIS is al meer dan 25 jaar een landelijk werkend assurantiekantoor,
          welke altijd gespecialiseerd is geweest in verzekeren van het
          personenvervoer. Door onze jarenlange expertise in de
          personenvervoerbranche genieten wij veel vertrouwen bij de
          verzekeringsmaatschappijen. Als klant bent u degene die daar direct
          van profiteert.
        </Text>
        <Text mb='0'>
          Doordat voorwaarden, mogelijkheden en premies per maatschappij
          verschillen en wij onafhankelijk zijn, kunnen wij voor de meest
          passende mogelijkheden combineren voor uw bedrijf. Dit resulteert in
          een zeer goede prijs-kwaliteit verhouding.
        </Text>
        <Text mb='0'>
          Om u te beschermen tegen de mogelijke financiële gevolgen van schade,
          bieden wij altijd de beste verzekering op maat. Omdat wij 100%
          onafhankelijk zijn bekijken wij per onderneming en per verzekering
          waar deze het beste kan worden ondergebracht.
        </Text>
        <Text mb='0'>
          Wilt u uw verzekeringspakket grondig met ons doorlopen? Neem dan
          gerust contact met ons op.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='8'>
          <StarList listItems={list1} />
          <StarList listItems={list2} />
        </SimpleGrid>
      </Flex>
    </InnerPage>
  )
}
