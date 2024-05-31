import GridLayout from "@/components/gridLayout"

import { Card, Container, Grid, GridItem } from '@chakra-ui/react'
export default function Bestanden() {
    return (
        <Container>
            <GridLayout title='Bestanden'>
                <Grid width='full' templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={4} >
                    <GridItem >
                        <Card downloadLink='/test' title="Schadeaanrijdingsformulier" />
                        <Card variant='sidebar' title="Card title" description="Card description" />
                    </GridItem>
                    <GridItem >
                        <Card downloadLink='/test' title="Diensten wijzer" />
                    </GridItem>
                    <GridItem >
                        <Card downloadLink='/test' title="Algemene voorwaarden" />
                    </GridItem>
                    <GridItem >
                        <Card downloadLink='/test' title="Privacyregelement" />

                    </GridItem>
                    <GridItem >
                        <Card downloadLink='/test' title="Beloningsbeleid" />
                    </GridItem>
                </Grid>
            </GridLayout>
        </Container>
    )
}