'use client'

import { Text, Flex } from '@chakra-ui/react'
import InnerPage from '@/components/inner-page-layout'
import { stackGap } from '@/constants/spacing'

export default function Zakelijk() {
  return (
    <InnerPage
      hero={{
        eyebrow: 'Zakelijk',
        title: 'Zakelijk',
        description:
          'Rust voor de ondernemer: verzekeringen die meegroeien met uw bedrijf, tegen de juiste premies.',
        image: '/bb.jpg',
        ctaLabel: 'Offerte aanvragen',
        ctaHref: '/offerte',
      }}
    >
      <Flex direction="column" gap={stackGap}>
        <Text variant="lead" mb="0">
          Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn. Zijn alle risico&apos;s goed
          afgedekt, tegen de juiste premies? Wij nemen graag samen met u uw verzekeringspakket door en houden deze up
          to date.
        </Text>
        <Text mb="0">
          Wij bieden verzekeringen tegen een concurrerend tarief, zonder de kwaliteit van het product uit het oog te
          verliezen. Uw zakelijke schadeverzekeringen brengen wij graag samen in één pakket — voor overzicht en
          aantrekkelijke pakketkortingen.
        </Text>
        <Text mb="0">
          Wij groeien graag met u mee. Bent u geïnteresseerd of heeft u vragen? Neem dan gerust contact op via de mail
          of bel ons.
        </Text>
      </Flex>
    </InnerPage>
  )
}
