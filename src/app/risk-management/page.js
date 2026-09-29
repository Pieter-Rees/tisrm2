'use client'

import { Text, Flex } from '@chakra-ui/react'
import StarList from '@/components/star-list'
import InnerPage from '@/components/inner-page-layout'
import { stackGap } from '@/constants/spacing'

const list = [
  'Risico inventarisatie',
  'Risico analyse',
  'Risico evaluatie',
  'Risico beheersing',
  'Risico monitoring',
  'Risico rapportage',
]

export default function RiskManagement() {
  return (
    <InnerPage
      contactBandProps={{
        title: 'Vrijblijvend gesprek?',
        description:
          "Bel ons of vraag een offerte aan. Wij denken graag met u mee over risico's en dekking.",
      }}
      hero={{
        eyebrow: 'Expertise',
        title: 'Risk Management',
        description:
          'Gediplomeerde risico managers, geregistreerd in het GRMC-register — van inventarisatie tot beheersing.',
        image: '/unieke-kenmerken.jpg',
        ctaLabel: 'Neem contact op',
        ctaHref: '/contact',
      }}
    >
      <Flex direction="column" gap={stackGap}>
        <Text variant="lead" mb="0">
          TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende
          behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd
          in het register GRMC.
        </Text>
        <Text mb="0">
          Wij bieden u een volledig risico management traject aan, waarbij wij samen met u kijken naar de risico&apos;s
          binnen uw organisatie en hoe deze het beste kunnen worden beheerd.
        </Text>
        <Text mb="0">
          Door onze jarenlange ervaring in de verzekeringsbranche kunnen wij u helpen bij het identificeren van
          risico&apos;s en het vinden van de beste oplossingen.
        </Text>
        <Text mb="0">
          Onze risico managers zijn gecertificeerd en geregistreerd in het GRMC register, wat betekent dat wij voldoen
          aan de hoogste kwaliteitsstandaarden.
        </Text>
        <StarList listItems={list} />
        <Text mb="0">
          Neem contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen bij het beheren van uw
          risico&apos;s.
        </Text>
      </Flex>
    </InnerPage>
  )
}
