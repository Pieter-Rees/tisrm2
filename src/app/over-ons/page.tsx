'use client';

import { UnifiedLayout } from '@/components/layout';
import StarList from '@/components/star-list';
import {
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import { COMPANY_ENTITIES } from '@/data/content';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Overons() {
  return (
    <UnifiedLayout title="Over ons">
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Flex direction="column" gap={PROSE_STACK_GAP}>
          <Text {...PARAGRAPH_STYLES.body}>
            De ENTO Groep is opgericht in 1994 en is begonnen als zelfstandige
            auto lease maatschappij voor het MKB. In 1998 is daar de
            discipline verzekeringen aan toegevoegd. In 2002 werd middels een
            overname van een grote assurantie portefeuille uit het oosten van
            Nederland de basis voor het huidige concern gelegd. Inmiddels is
            de tweede generatie in het bedrijf gekomen. Door nieuwe impulsen
            zijn wij reeds ook gecertificeerd Risico Managers en als zodanig
            geregistreerd in het GRMC register.
          </Text>

          <Text {...PARAGRAPH_STYLES.body}>
            Thans bestaat de ENTO groep uit de ondernemingen:
          </Text>

          <StarList listItems={COMPANY_ENTITIES} />

          <Text {...PARAGRAPH_STYLES.body}>
            Uit een zeer modern en inspirerend kantoor wordt de onderneming
            gedreven met geavanceerde software en bedrijfsmodel. Door gebruik
            te maken van diverse gespecialiseerde diensten zoals een call
            center en een uitbesteedde schade afdeling zijn wij in staat met
            een relatief klein team een mooie omzet te genereren. Focus ligt
            op advisering in Risico management en financiële vraagstukken.
          </Text>
        </Flex>

        <Flex width="full" justifyContent="center">
          <Box
            transform={{ base: '', lg: 'rotate(2deg)' }}
            width="fit-content"
            borderRadius="xl"
            boxShadow="md"
            overflow="hidden"
          >
            <Image
              src="/team.jpg"
              alt="Team photo of ENTO Group members"
              width={750}
              height={250}
              style={{ display: 'block' }}
            />
          </Box>
        </Flex>
      </Flex>
    </UnifiedLayout>
  );
}
