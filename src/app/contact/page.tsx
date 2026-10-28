'use client';

import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import ContactInfo from '@/components/contact-info';
import { ContentBlocks, PageCta, SectionImage } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import Logo from '@/components/logo';
import { CONTACT_INFO } from '@/constants/app';
import { COMPONENT_SPACING } from '@/constants/layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import { PAGE_META } from '@/lib/seo/pageMeta';
import type { ContentBlock } from '@/types/content';

const openingHoursBlocks: readonly ContentBlock[] = [
  { kind: 'heading', level: 2, text: 'Openingstijden' },
  {
    kind: 'table',
    columns: ['Bereikbaarheid', CONTACT_INFO.openingHours.phone.days],
    rows: [
      [
        'Telefonisch bereikbaar',
        `${CONTACT_INFO.openingHours.phone.from} – ${CONTACT_INFO.openingHours.phone.until} uur`,
      ],
      [
        'Kantoor geopend',
        `${CONTACT_INFO.openingHours.office.from} – ${CONTACT_INFO.openingHours.office.until} uur`,
      ],
    ],
  },
  {
    kind: 'paragraph',
    text: 'Een bezoek aan ons kantoor is uitsluitend mogelijk op afspraak. Wilt u langskomen? Neem dan vooraf telefonisch of per e-mail contact met ons op om een afspraak te maken.',
  },
];

const registrationBlocks: readonly ContentBlock[] = [
  { kind: 'heading', level: 2, text: 'Vergunning en registraties' },
  {
    kind: 'paragraph',
    text: `${CONTACT_INFO.name} is een handelsnaam van ${CONTACT_INFO.legalName} en beschikt over een vergunning van de Autoriteit Financiële Markten (AFM). Daarnaast zijn wij aangesloten bij het Klachteninstituut Financiële Dienstverlening (Kifid).`,
  },
  {
    kind: 'definitions',
    items: [
      {
        term: 'Kamer van Koophandel (KVK)',
        description: CONTACT_INFO.registrations.kvk,
      },
      {
        term: 'AFM vergunningsnummer',
        description: CONTACT_INFO.registrations.afm,
      },
      {
        term: 'Kifid-aansluitnummer',
        description: CONTACT_INFO.registrations.kifid,
      },
    ],
  },
];

export default function Contact() {
  return (
    <UnifiedLayout
      title={PAGE_META.contact.heading}
      breadcrumb={<Breadcrumb />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Text {...PARAGRAPH_STYLES.lead}>
            Heeft u vragen over uw verzekeringen, wilt u een offerte aanvragen
            of persoonlijk advies ontvangen? Neem gerust contact op met TIS Risk
            Managers. Wij helpen u graag verder.
          </Text>
        </Flex>

        <Grid
          as="section"
          gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={COMPONENT_SPACING.grid.md}
          alignItems="stretch"
          width="100%"
        >
          <GridItem
            display="flex"
            flexDirection="column"
            gap={PROSE_STACK_GAP}
            minW="0"
          >
            <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
              Contactgegevens
            </Heading>
            <Flex width="100%" justifyContent="center">
              <Logo />
            </Flex>
            <ContactInfo buttonVariant="outline" />
          </GridItem>
          <GridItem display="flex" flexDirection="column" minW="0">
            <SectionImage
              src="/bb.jpg"
              alt="Kantoor van TIS Risk Managers aan de Muiderstraat in Amsterdam"
              width={1800}
              height={1201}
              eager
            />
          </GridItem>
        </Grid>

        <Box as="section">
          <ContentBlocks blocks={openingHoursBlocks} />
        </Box>

        <Box as="section">
          <ContentBlocks blocks={registrationBlocks} />
        </Box>

        <PageCta
          title="Liever direct contact?"
          text="Onze adviseurs staan op werkdagen voor u klaar en denken graag met u mee over uw verzekeringen en risico’s."
          actionLabel="Vraag een offerte aan"
        />
      </Flex>
    </UnifiedLayout>
  );
}
