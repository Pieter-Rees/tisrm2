import ContainerLayout from "../containerLayout"

import { Grid, GridItem } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
export default function Bestanden() {
    return (
        <ContainerLayout title='Bestanden'>

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
        </ContainerLayout>
    )
}