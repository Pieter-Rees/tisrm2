'use client'

import { Grid, GridItem, Heading, Text, Flex } from '@chakra-ui/react'
import StarList from '@/components/star-list'
import InnerPage from '@/components/inner-page-layout'
import { stackGap } from '@/constants/spacing'

const list1 = ['Autoverzekering', 'Oldtimer', 'Bromfiets', 'Motor', 'Aanhanger', 'Caravan', 'Camper']
const list2 = ['Aansprakelijkheid', 'Rechtsbijstand', 'Ongevallen']
const list3 = ['Opstal', 'Inboedel', 'Kostbaarheden', 'Recreatiewoning']
const list4 = ['Reis', 'Pleziervaartuigen', 'Recreatiegoederen']

export default function Particulier() {
  return (
    <InnerPage
      hero={{
        eyebrow: 'Particulier',
        title: 'Particulier',
        description:
          'Scherpe premies, sterk advies en overzichtelijke pakketten voor uw privéverzekeringen.',
        image: '/slider-2.jpg',
        ctaLabel: 'Offerte aanvragen',
        ctaHref: '/offerte',
      }}
    >
      <Flex direction="column" gap={stackGap}>
        <Text variant="lead" mb="0">
          Iedereen is op zoek naar de goedkoopste verzekering, maar u verwacht van ons natuurlijk wél een goed advies
          over de allerbeste dekkingen. TIS is daarbij een uitstekend partner als erkend Risico Manager, geregistreerd
          in het GRMC register.
        </Text>
        <Text mb="0">
          Wij bieden verzekeringen tegen een concurrerend tarief, zonder de kwaliteit van het product uit het oog te
          verliezen. Bovendien voegen wij uw particuliere schadeverzekeringen graag samen in één pakket voor overzicht
          én pakketkorting.
        </Text>
        <Text mb="0">Wij groeien graag met u mee. Heeft u vragen? Neem gerust contact op.</Text>

        <Grid width="full" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap="8">
          <GridItem>
            <Heading as="h2" variant="md" mb="4">
              Onderweg
            </Heading>
            <StarList listItems={list1} />
          </GridItem>
          <GridItem>
            <Heading as="h2" variant="md" mb="4">
              Gezinssituatie
            </Heading>
            <StarList listItems={list2} />
          </GridItem>
          <GridItem>
            <Heading as="h2" variant="md" mb="4">
              Wonen
            </Heading>
            <StarList listItems={list3} />
          </GridItem>
          <GridItem>
            <Heading as="h2" variant="md" mb="4">
              Vrije tijd
            </Heading>
            <StarList listItems={list4} />
          </GridItem>
        </Grid>
      </Flex>
    </InnerPage>
  )
}
