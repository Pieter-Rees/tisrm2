import GridLayout from "@/components/gridLayout"
import { Container, Grid, GridItem } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
import { Heading, Text } from '@chakra-ui/react'
export default function Vastgoed() {
    return (
        <Container>
            <GridLayout title='Vastgoed' breadcrumb={<Breadcrumb capitalizeLinks />}>


                <Heading as='h3' variant='lg'>
                    Onze diensten:
                </Heading>
                <Text>
                    TIS Risk Managers biedt ook voor wagenparken oplossingen. Buiten het bieden van een scherpe offerte, kunnen wij een risico analyse van uw bedrijf maken. Waar zitten de risico’s, wordt er misschien risico’s over het hoofd gezien en hoe voorkomen e/o dekken wij dit af? Samen met de klant komen wij dan tot mooie resultaten en een langdurige samenwerking.
                </Text>
                <Heading as='h3' variant='lg'>
                    Alle panden in één polis
                </Heading>
                <Text>
                    Beheer al uw vastgoed met één overzichtelijke polis, ongeacht de bestemming of risicograad van het pand. Of u nu twee, tien of vijftig panden heeft, wij bieden een efficiënte oplossing.

                </Text>
                <Heading as='h3' variant='lg'>
                    Óók leegstaand vastgoed
                </Heading>
                <Text>
                    Leegstand is niet altijd te voorkomen. Gebruikelijk geldt bij leegstand alleen brand- en stormdekking, maar wij bieden desgewenst een uitgebreide gevarendekking.
                </Text>
                <Heading as='h3' variant='lg'>
                    Aansprakelijkheidsverzekering onroerend goed
                </Heading>
                <Text>
                    Hoe goed u uw pand ook onderhoudt, er kan altijd iets gebeuren. Onze aansprakelijkheidsverzekering dekt schade, bijvoorbeeld als een dakpan tijdens een storm op een auto of voetganger terechtkomt.
                </Text>
                <Heading as='h3' variant='lg'>
                    Taxeren tegen scherpe prijzen
                </Heading>
                <Text>
                    Een taxatie van uw pand voorkomt onderverzekering. Wij hebben scherpe prijsafspraken met gerenommeerde taxatiebureaus, zodat u profiteert van betrouwbare taxaties tegen aantrekkelijke tarieven.
                </Text>
            </GridLayout >
        </Container >
    )
}