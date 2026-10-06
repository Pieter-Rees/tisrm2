'use client';

import { UnifiedLayout } from '@/components/layout';
import { ButtonLink } from '@/components/ui/button-link';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import { primaryButtonStyles } from '@/styles/components/button.styles';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import type { ReactNode } from 'react';

const teamMembers = [
  {
    name: 'René Enthoven',
    role: 'Directeur',
    image: '/reneEnthoven.jpg',
    alt: 'Portret van René Enthoven',
    objectPosition: 'center top',
  },
  {
    name: 'Kenny Enthoven',
    role: 'Riskmanager en manager binnen- en buitendienst',
    image: '/kennyEnthoven.jpg',
    alt: 'Portret van Kenny Enthoven',
    objectPosition: 'center top',
  },
  {
    name: 'Anthony Enthoven',
    role: 'Adviseur personenvervoer en wagenpark',
    image: '/anthonyEnthoven.jpg',
    alt: 'Portret van Anthony Enthoven',
    objectPosition: 'center 42%',
  },
] as const;

function SectionImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <Box
      width="full"
      borderRadius="xl"
      boxShadow="md"
      overflow="hidden"
      alignSelf={{ base: 'stretch', md: 'start' }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        style={{ display: 'block', width: '100%', height: 'auto' }}
      />
    </Box>
  );
}

function TextWithImageSection({
  heading,
  children,
  image,
  reverse = false,
}: {
  heading: string;
  children: ReactNode;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };
  reverse?: boolean;
}) {
  const textBlock = (
    <Flex direction="column" gap={PROSE_STACK_GAP} minW="0">
      <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
        {heading}
      </Heading>
      {children}
    </Flex>
  );

  return (
    <Grid
      as="section"
      templateColumns={{
        base: '1fr',
        md: reverse
          ? 'minmax(0, 1fr) minmax(0, 1.2fr)'
          : 'minmax(0, 1.2fr) minmax(0, 1fr)',
      }}
      gap={{ base: PROSE_STACK_GAP, md: SECTION_SPACING.small }}
      alignItems="start"
      width="full"
    >
      {reverse ? (
        <>
          <SectionImage {...image} />
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          <SectionImage {...image} />
        </>
      )}
    </Grid>
  );
}

export default function Overons() {
  return (
    <UnifiedLayout title="Over ons">
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <TextWithImageSection
          heading="Verzekeren begint met begrijpen"
          image={{
            src: '/overOnsTeam.jpg',
            alt: 'Het team van TIS Risk Managers voor het kantoor',
            width: 1600,
            height: 1200,
            priority: true,
          }}
        >
          <Text {...PARAGRAPH_STYLES.body}>
            Geen onderneming is hetzelfde. Daarom geloven wij bij TIS Risk
            Managers niet in standaardoplossingen, maar in verzekeringen en
            risicoadvies die passen bij de onderneming én de ondernemer.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Wij adviseren bedrijven over hun risico&apos;s, brengen deze
            overzichtelijk in kaart en zoeken naar passende oplossingen. Van
            zakelijke verzekeringen en preventie tot schadebegeleiding: onze
            klanten kunnen rekenen op persoonlijk contact, korte lijnen en een
            team dat hun bedrijf kent.
          </Text>
        </TextWithImageSection>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Persoonlijk, betrokken en dichtbij
          </Heading>
          <Text {...PARAGRAPH_STYLES.body}>
            TIS Risk Managers is een familiebedrijf met een lange geschiedenis
            in de verzekeringsbranche. Inmiddels werken binnen TIS meerdere
            generaties samen aan dezelfde gedachte: goed verzekeringsadvies
            draait niet alleen om een polis, maar vooral om weten wat er bij
            een klant speelt.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Daarom vinden wij persoonlijk contact belangrijk. Geen anoniem
            loket of telkens een andere medewerker, maar vaste aanspreekpunten
            die de onderneming en haar risico&apos;s kennen.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Die betrokkenheid wordt vooral belangrijk wanneer er schade
            ontstaat. Juist op dat moment willen wij naast onze klant staan en
            helpen om het traject zo goed en duidelijk mogelijk te begeleiden.
          </Text>
        </Flex>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Specialistische kennis
          </Heading>
          <Text {...PARAGRAPH_STYLES.body}>
            Door de jaren heen heeft TIS veel kennis opgebouwd binnen
            verschillende branches en risicogebieden. Wij adviseren onder
            andere ondernemers binnen de horeca, het vastgoed en
            personenvervoer, maar begeleiden ook bedrijven met uiteenlopende
            zakelijke risico&apos;s.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Voor sommige branches is specialistische kennis essentieel. Zo
            heeft TIS meer dan 30 jaar ervaring binnen het personenvervoer en
            kennen wij de specifieke risico&apos;s en verzekeringsvraagstukken
            waarmee taxi- en vervoersondernemers te maken krijgen.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Onze ervaring combineren we met een breed netwerk van
            verzekeraars en gespecialiseerde partners. Zo zoeken we niet
            simpelweg naar een verzekering, maar naar een oplossing die past
            bij het risico.
          </Text>
        </Flex>

        <TextWithImageSection
          heading="Van advies tot schade"
          image={{
            src: '/overOnsAdvies.jpg',
            alt: "Collega's van TIS Risk Managers in overleg",
            width: 1200,
            height: 900,
          }}
        >
          <Text {...PARAGRAPH_STYLES.body}>
            Onze dienstverlening stopt niet zodra een verzekering is
            afgesloten.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            We blijven betrokken bij veranderingen binnen de onderneming,
            adviseren over preventie en beoordelen periodiek of verzekeringen
            nog aansluiten op de actuele situatie. En ontstaat er schade, dan
            begeleiden we onze klanten bij de afhandeling daarvan.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Daarmee willen we voor ondernemers één aanspreekpunt zijn voor
            risico, verzekeringen en schade.
          </Text>
        </TextWithImageSection>

        <TextWithImageSection
          heading="Onze geschiedenis"
          reverse
          image={{
            src: '/overOnsGeschiedenis.jpg',
            alt: 'Historische foto uit de begintijd van TIS',
            width: 1200,
            height: 900,
          }}
        >
          <Text {...PARAGRAPH_STYLES.body}>
            De oorsprong van TIS gaat terug tot 1994, toen vanuit de ENTO Groep
            de basis werd gelegd voor de dienstverlening waaruit TIS Risk
            Managers is ontstaan.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Wat begon vanuit verzekeringen voor personenvervoer, ontwikkelde
            zich in de jaren daarna tot een breder adviesbedrijf voor zakelijke
            en particuliere risico&apos;s.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Sindsdien is er veel veranderd, maar de persoonlijke manier van
            werken is gebleven. Vandaag de dag bouwen we vanuit die ervaring
            verder aan TIS Risk Managers: met nieuwe generaties, moderne
            dienstverlening en dezelfde betrokkenheid bij onze klanten.
          </Text>
        </TextWithImageSection>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            De mensen achter TIS
          </Heading>
          <Text {...PARAGRAPH_STYLES.body}>
            Een verzekering blijft uiteindelijk mensenwerk. Maak daarom kennis
            met het team dat dagelijks klaarstaat voor onze relaties.
          </Text>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={SECTION_SPACING.small}
            width="full"
          >
            {teamMembers.map((member) => (
              <Flex
                key={member.name}
                direction="column"
                gap={PROSE_STACK_GAP}
                align="center"
                textAlign="center"
              >
                <Box
                  width="full"
                  maxW="280px"
                  aspectRatio="3 / 4"
                  position="relative"
                  borderRadius="xl"
                  boxShadow="md"
                  overflow="hidden"
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="280px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: member.objectPosition,
                    }}
                  />
                </Box>
                <Flex direction="column" gap="1">
                  <Text
                    fontFamily="heading"
                    fontWeight="semibold"
                    color="text.primary"
                    fontSize={{ base: 'md', md: 'lg' }}
                  >
                    {member.name}
                  </Text>
                  <Text {...PARAGRAPH_STYLES.body} fontSize="sm">
                    {member.role}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Grid>
        </Flex>

        <Flex
          as="section"
          direction="column"
          gap={PROSE_STACK_GAP}
          align="flex-start"
        >
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Kennismaken?
          </Heading>
          <Text {...PARAGRAPH_STYLES.body}>
            Benieuwd wat TIS Risk Managers voor uw onderneming kan betekenen?
            Neem gerust contact met ons op. We maken graag kennis en kijken
            samen naar uw risico&apos;s en verzekeringen.
          </Text>
          <ButtonLink href="/contact" {...primaryButtonStyles}>
            Contact opnemen
          </ButtonLink>
        </Flex>
      </Flex>
    </UnifiedLayout>
  );
}
