import GridLayout from "@/components/gridLayout"

import { Card, Container, Grid, GridItem } from '@chakra-ui/react'
export default function Bestanden() {
    return (
        <Container>
            <GridLayout title='Bestanden'>
                <Grid width='full' templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap='8' >
                    <GridItem >
                        <Card variant='downloads' title="Verzekering afsluiten" cta='Offerte aanvragen' ctaLink='/offerte' buttonVariant='blue' />

                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' downloadLink='/test' title="Diensten wijzer" />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' downloadLink='/test' title="Algemene voorwaarden" />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' downloadLink='/test' title="Privacyregelement" />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' downloadLink='/test' title="Beloningsbeleid" />
                    </GridItem>
                </Grid>
            </GridLayout>
        </Container>
    )
}