'use client'

import { Text, Flex } from '@chakra-ui/react'
import InnerPage from '@/components/inner-page-layout'
import RegistrationForm from '@/app/offerte/form'
import { stackGap } from '@/constants/spacing'

export default function Offerte() {
  return (
    <InnerPage
      sidebar={false}
      hero={{
        eyebrow: 'Offerte',
        title: 'Offerte aanvragen',
        description: 'Vraag vrijblijvend een offerte aan. Wij denken graag met u mee.',
        image: '/slider-4.jpg',
      }}
    >
      <Flex direction="column" gap={stackGap}>
        <Text variant="lead" mb="0" maxW="640px">
          Vul het formulier in en wij nemen zo snel mogelijk contact met u op. Liever persoonlijk contact? Bel ons of
          mail naar info@tisrm.nl.
        </Text>
        <RegistrationForm />
      </Flex>
    </InnerPage>
  )
}
