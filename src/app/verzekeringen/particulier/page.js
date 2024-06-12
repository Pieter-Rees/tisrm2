import GridLayout from "@/components/gridLayout"
import { Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
import StarList from "@/components/star-list"

export default function Particulier() {
    const list1 = [
        'Autoverzekering',
        'Oldtimer',
        'Bromfiets',
        'Motor',
        'Aanhanger',
        'Caravan',
        'Camper'
    ];

    const list2 = [
        'Aansprakelijkheid',
        'Rechtsbijstand',
        'Ongevallen'
    ];

    const list3 = [
        'Opstal',
        'Inboedel',
        'Kostbaarheden',
        'Recreatiewoning'
    ];

    const list4 = [
        'Reis',
        'Pleziervaartuigen',
        'Recreatiegoederen'
    ];
    return (
        <Container>
            <GridLayout title='Particulier' breadcrumb={<Breadcrumb capitalizeLinks />}>
                <Text>
                    Iedereen is op zoek naar de goedkoopste verzekering, maar u verwacht van ons natuurlijk wél een goed advies als adviseur over de allerbeste dekkingen. TIS is daarbij een uitstekend partner als zijnde erkend Risico Manager en als zodanig geregistreerd in het GRMC register. Hierdoor bent u verzekerd van het beste advies.
                </Text>
                <Text>
                    Wij bieden verzekeringen tegen een concurrerend tarief, zonder daarbij de kwaliteit van het product uit het oog te verliezen.
                </Text>
                <Text>
                    Of u nu een auto-, bromfiets-, aansprakelijkheid- of woonhuisverzekering nodig heeft, wij staan voor u klaar!
                </Text>
                <Text>
                    Bovendien proberen wij al uw particuliere (schade) verzekeringen samen te voegen in één pakket, waardoor u een makkelijk overzicht heeft van uw lopende verzekeringen. Daarbij geeft een pakket aantrekkelijke kortingen over de premies.
                </Text>
                <Text>
                    Wij groeien graag met u mee.
                </Text>
                <Text>
                    Bent u geïnteresseerd of heeft u vragen, neem dan gerust contact op via de mail of bel ons!
                </Text>
                <Grid marginTop='8' width='full' templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap='8' >
                    <GridItem >
                        <Heading as='h3' size='md'>Onderweg</Heading>
                        <StarList listItems={list1} />

                    </GridItem>
                    <GridItem >
                        <Heading as='h3' size='md'>Gezinssituatie</Heading>

                        <StarList listItems={list2} />

                    </GridItem>
                    <GridItem >
                        <Heading as='h3' size='md'>Wonen</Heading>

                        <StarList listItems={list3} />

                    </GridItem>
                    <GridItem >
                        <Heading as='h3' size='md'>Vrije tijd</Heading>

                        <StarList listItems={list4} />

                    </GridItem>
                </Grid>
            </GridLayout>
        </Container>
    )
}