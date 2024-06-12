import GridLayout from "@/components/gridLayout"

import { Container, Grid, GridItem } from '@chakra-ui/react'
import Card from '@/components/card'

export default function Bestanden() {
    return (
        <Container>
            <GridLayout title='Bestanden'>
                <Grid width='full' templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap='8' >
                    <GridItem >
                        <Card variant='downloads' title="Schadeaanrijdingsformulier" downloadLink='/documents/aanrijdingsformulier.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Diensten wijzer" downloadLink='/documents/dienstenwijzer.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Algemene voorwaarden" downloadLink='/documents/algemene-voorwaarden.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Privacyregelement" downloadLink='/documents/privecyregelement.pdf' />
                    </GridItem>
                    <GridItem >
                        <Card variant='downloads' title="Beloningsbeleid" downloadLink='/documents/beloningsbeleid.pdf' />
                    </GridItem>
                </Grid>
            </GridLayout>
        </Container>
    )
}