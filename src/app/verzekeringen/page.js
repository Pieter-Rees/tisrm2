import GridLayout from "@/components/gridLayout"
import { Container, Grid, GridItem } from '@chakra-ui/react'
import Card from '@/components/card'


export default function Verzekeringen() {
    return (
        <Container>
            <GridLayout title='Verzekeringen'>
                <Grid
                    width='full'
                    templateRows='repeat(1, 1fr)'
                    templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
                    gap='4'
                >
                    <GridItem colSpan={{ base: '1', lg: '2' }}>
                        <Card title='Particulier' description="U verwacht als particulier de beste service tegen scherpe premies, alsmede een snelle afhandeling van mogelijke schades. Bij TIS geniet u van adviseurs die op de juiste momenten bereikbaar zijn en de persoonlijke aandacht geven waar u als klant behoefte heeft." />
                    </GridItem>
                    <GridItem colSpan={{ base: '1', lg: '2' }}>
                        <Card title='Zakelijk' description='Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn, zijn alle risico’s wel goed afgedekt en dan wel tegen de juiste premies? Wij nemen graag samen met u uw verzekeringspakket door en houden deze up to date, zodat ook u kunt genieten van de rust die TIS biedt.' />
                    </GridItem>
                    <GridItem colSpan={{ base: '1', lg: '2' }} >
                        <Card title='Taxi' description='TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties én de klanten zelf.' />
                    </GridItem>
                </Grid>
            </GridLayout>
        </Container>
    )
}