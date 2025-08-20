import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import PageLayout from '@/components/page-layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  SECTION_SPACING,
} from '@/constants/typography';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Taxi() {
  return (
    <PageLayout title="Personenvervoer">
      <StaggerContainer>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          <FadeInUp>
            <Box>
              <Heading as="h2" {...HEADING_STYLES.h2}>
                Taxiverzekering
              </Heading>
              <Text {...PARAGRAPH_STYLES.body}>
                Bent u op zoek naar een goede verzekering voor uw taxi, dan
                hebben wij voor u een passende oplossing. Onze taxiverzekering
                biedt een uitgebreide dekking, welke ook aan te vullen is met
                bijvoorbeeld de door het TX Keurmerk vereiste dekkingen, denk
                bijvoorbeeld aan de aansprakelijkheid voor bedrijven en de
                ongevallen inzittendenverzekering.
              </Text>
            </Box>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <Text {...PARAGRAPH_STYLES.body}>
              TIS Risk Managers biedt ook voor wagenparken oplossingen. Buiten
              het bieden van een scherpe offerte, kunnen wij een risico analyse
              van uw bedrijf maken. Waar zitten de risico&apos;s, wordt er
              misschien risico&apos;s over het hoofd gezien en hoe voorkomen e/o
              dekken wij dit af? Samen met de klant komen wij dan tot mooie
              resultaten en een langdurige samenwerking.
            </Text>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <Box>
              <Heading as="h2" {...HEADING_STYLES.h2}>
                Wagenpark
              </Heading>
              <Text {...PARAGRAPH_STYLES.body}>
                TIS Risk Managers biedt ook voor wagenparken oplossingen. Buiten
                het bieden van een scherpe offerte, kunnen wij een risico
                analyse van uw bedrijf maken. Waar zitten de risico&apos;s,
                wordt er misschien risico&apos;s over het hoofd gezien en hoe
                voorkomen e/o dekken wij dit af? Samen met de klant komen wij
                dan tot mooie resultaten en een langdurige samenwerking.
              </Text>
              <Text {...PARAGRAPH_STYLES.lead}>
                Bent u geïnteresseerd? Neem gerust contact met ons op, zodat wij
                een ontmoetingsgesprek kunnen inplannen!
              </Text>
            </Box>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <Box>
              <Heading as="h2" {...HEADING_STYLES.h2}>
                Schadeafhandeling
              </Heading>
              <Text {...PARAGRAPH_STYLES.body}>
                De schadeafdeling van TIS Risk Managers is erg uniek, door haar
                transparantie. Door middel van een online dossier kan de klant
                de complete afwikkeling volgen door in te loggen. Hierdoor ziet
                de klant wat er gebeurd en de status achterhalen. Dit dossier is
                in te zien via zowel de PC, tablet als uw mobiele telefoon! U
                kunt via de app dan ook digitaal uw schademelden en stukken, als
                het schadeformulier, direct aan het schadedossier toevoegen.
                Mede hierdoor wordt veel tijd gewonnen.
              </Text>
            </Box>
          </FadeInUp>
        </Flex>
      </StaggerContainer>
    </PageLayout>
  );
}
