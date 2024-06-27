
import { Text, Heading, Container } from '@chakra-ui/react'
import GridLayout from '@/components/gridLayout'

export default function Taxi() {
    return (
        <Container>
            <GridLayout title='Personenvervoer'>
                <Heading as='h2' variant='lg'>
                    Taxiverzekering
                </Heading>
                <Text>
                    Bent u op zoek naar een goede verzekering voor uw taxi, dan hebben wij voor u een passende oplossing. Onze taxiverzekering biedt een uitgebreide dekking, welke ook aan te vullen is met bijvoorbeeld de door het TX Keurmerk vereiste dekkingen, denk bijvoorbeeld aan de aansprakelijkheid voor bedrijven en de ongevallen inzittendenverzekering.
                </Text>
                <Text>
                    TIS Verzekeringen biedt ook voor wagenparken oplossingen. Buiten het bieden van een scherpe offerte, kunnen wij een risico analyse van uw bedrijf maken. Waar zitten de risico’s, wordt er misschien risico’s over het hoofd gezien en hoe voorkomen e/o dekken wij dit af? Samen met de klant komen wij dan tot mooie resultaten en een langdurige samenwerking.
                </Text>
                <Heading as='h2' variant='lg'>
                    Wagenpark
                </Heading>
                <Text>
                    TIS Verzekeringen biedt ook voor wagenparken oplossingen. Buiten het bieden van een scherpe offerte, kunnen wij een risico analyse van uw bedrijf maken. Waar zitten de risico’s, wordt er misschien risico’s over het hoofd gezien en hoe voorkomen e/o dekken wij dit af? Samen met de klant komen wij dan tot mooie resultaten en een langdurige samenwerking.
                </Text>
                <Text>
                    Bent u geïnteresseerd? Neem gerust contact met ons op, zodat wij een ontmoetingsgesprek kunnen inplannen!
                </Text>
                <Heading as='h2' variant='lg'>
                    Schadeafhandeling
                </Heading>
                <Text>
                    De schadeafdeling van TIS Verzekering is erg uniek, door haar transparantie. Door middel van een online dossier kan de klant de complete afwikkeling volgen door in te loggen. Hierdoor ziet de klant wat er gebeurd en de status achterhalen. Dit dossier is in te zien via zowel de PC, tablet als uw mobiele telefoon! U kunt via de app dan ook digitaal uw schademelden en stukken, als het schadeformulier, direct aan het schadedossier toevoegen. Mede hierdoor wordt veel tijd gewonnen.
                </Text>
            </GridLayout >
        </Container>

    )
}