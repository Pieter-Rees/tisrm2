import GridLayout from "@/components/gridLayout"

import { Container, Grid, GridItem } from '@chakra-ui/react'
import Card from '@/components/card'

export default function Bestanden() {
    return (
        <Container>
            <GridLayout title='Downloads'>
                <Grid width='full' templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap='8' >
                    <GridItem >
                        <Card variant='downloads' title="Schadeaanrijdingsformulier" downloadLink='/documents/aanrijdingsformulier.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Dienstverleningsdocument" downloadLink='/documents/dienstverleningsdocument.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Algemene voorwaarden" downloadLink='/documents/algemene-voorwaarden.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Privacyverklaring" downloadLink='/documents/privacyverklaring.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Beloningsbeleid" downloadLink='/documents/beloningsbeleid.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Incidentenregeling" downloadLink='/documents/incidentenregeling.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="interne-klachtenprocedure" downloadLink='/documents/interne-klachtenprocedure.pdf' />
                    </GridItem>
                </Grid>
            </GridLayout>
        </Container>
    )
}