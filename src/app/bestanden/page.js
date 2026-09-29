'use client'

import { SimpleGrid, Box } from '@chakra-ui/react'
import Card from '@/components/card'
import InnerPage from '@/components/inner-page-layout'
import { stackGap } from '@/constants/spacing'

const documents = [
  {
    title: 'Algemene Voorwaarden',
    description: 'Algemene voorwaarden van TIS Risk Managers',
    downloadLink: '/documents/algemene-voorwaarden.pdf',
  },
  {
    title: 'Beloningsbeleid',
    description: 'Beloningsbeleid van TIS Risk Managers',
    downloadLink: '/documents/beloningsbeleid.pdf',
  },
  {
    title: 'Dienstverleningsdocument',
    description: 'Dienstverleningsdocument van TIS Risk Managers',
    downloadLink: '/documents/dienstverleningsdocument.pdf',
  },
  {
    title: 'Incidentenregeling',
    description: 'Incidentenregeling van TIS Risk Managers',
    downloadLink: '/documents/incidentenregeling.pdf',
  },
  {
    title: 'Interne Klachtenprocedure',
    description: 'Interne klachtenprocedure van TIS Risk Managers',
    downloadLink: '/documents/interne-klachtenprocedure.pdf',
  },
  {
    title: 'Privacyverklaring',
    description: 'Privacyverklaring van TIS Risk Managers',
    downloadLink: '/documents/privacyverklaring.pdf',
  },
]

export default function Bestanden() {
  return (
    <InnerPage
      sidebar={false}
      hero={{
        eyebrow: 'Documenten',
        title: 'Bestanden',
        description: 'Download belangrijke documenten, formulieren en voorwaarden.',
        image: '/tis-polis.jpg',
      }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={stackGap}>
        {documents.map((document) => (
          <Box key={document.title}>
            <Card
              title={document.title}
              description={document.description}
              downloadLink={document.downloadLink}
            />
          </Box>
        ))}
      </SimpleGrid>
    </InnerPage>
  )
}
