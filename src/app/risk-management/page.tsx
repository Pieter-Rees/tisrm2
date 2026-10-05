'use client';

import Breadcrumb from '@/components/breadcrumb';
import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import { UnifiedLayout } from '@/components/layout';
import { FaqSection } from '@/components/seo/FaqSection';
import StarList from '@/components/star-list';
import {
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import { PAGE_FAQS } from '@/lib/seo/pageFaqs';
import {
  riskHighlightBoxStyles,
  riskSummaryBoxStyles,
  riskItalicTextStyles,
} from '@/styles/components/page.styles';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Riskmanagement() {
  const riskApproaches = [
    'Het vermijden van het risico',
    'Het verminderen/voorkomen van het risico',
    'Het verzekeren van het risico',
    'Het zelf-dragen van het risico',
  ];

  const list = [
    'Bedrijfsmiddelen',
    'Bedrijfsactiviteiten',
    'Vervoer & Logistiek',
    'Personeel',
    'Preventie',
  ];

  return (
    <UnifiedLayout title="Risk Management" breadcrumb={<Breadcrumb />}>
      <StaggerContainer>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          <Flex direction="column" gap={PROSE_STACK_GAP}>
            <FadeInUp>
              <Text {...PARAGRAPH_STYLES.lead}>
                TIS RM wil haar dienstverlening altijd verbeteren, uitbreiden en
                professionaliseren.
              </Text>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <Text {...PARAGRAPH_STYLES.body}>
                Wij kunnen voor u een risicoinventarisatie uitvoeren. Samen met u
                maken wij een rapport, waarin uw unieke bedrijfs- en risicoprofiel
                naar voren komt. Hiermee kunnen wij samen precies zien waar u en
                uw bedrijf risico&apos;s lopen, waarmee wij kunnen bepalen in
                welke mate het risico invloed op u heeft. Is het verstandig om
                hier een verzekering voor af te sluiten, of is het beter om dit
                risico zelf te dragen?
              </Text>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Text {...PARAGRAPH_STYLES.body}>
                Ieder relevant risico komt in het onderzoek naar voren, welke wij
                duidelijk voor u rubriceren in een rapport. In de vorm van een
                risicoadvies geven wij vervolgens aan op welke wijze met ieder
                risico kan worden omgegaan, dit kan op een aantal manieren:
              </Text>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <Box {...riskHighlightBoxStyles}>
                <Flex direction="column" gap={PROSE_STACK_GAP}>
                  <StarList listItems={riskApproaches} />
                  <Text {...PARAGRAPH_STYLES.body} {...riskItalicTextStyles}>
                    Per risico brengen wij dan tevens in kaart in hoeverre uw
                    huidige verzekeringspakket hiervoor al dan niet dekking biedt
                    en wat de kwaliteit daarvan is.
                  </Text>
                </Flex>
              </Box>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <Text {...PARAGRAPH_STYLES.body}>
                Het is de kunst om na een grondige risico-inventarisatie te komen
                tot een &apos;onbewust (on)verzekerde situatie tot bewust
                (on)verzekerde situatie&apos; en dat met een doorlopend karakter.
              </Text>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <Flex direction="column" gap={PROSE_STACK_GAP}>
                <Text {...PARAGRAPH_STYLES.body}>
                  In de samenvatting splitsen wij de volgende zaken:
                </Text>
                <Box {...riskSummaryBoxStyles}>
                  <StarList listItems={list} />
                </Box>
              </Flex>
            </FadeInUp>
          </Flex>

          <FadeInUp delay={0.55}>
            <FaqSection faqs={PAGE_FAQS.riskManagement} />
          </FadeInUp>
        </Flex>
      </StaggerContainer>
    </UnifiedLayout>
  );
}
