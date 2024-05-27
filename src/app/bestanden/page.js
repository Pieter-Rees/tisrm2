import Sidebar from '@/components/sidebar';
import Card from '../../components/card';

import { Grid, GridItem } from '@chakra-ui/react';
export default function Bestanden() {
    return (

        <Grid width='full' templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }} gap={4} >
            <GridItem colSpan={4} >
                <Grid width='full' templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={4} >
                    <GridItem >
                        <Card downloadLink='/test' variant='sidebar' title="Schadeaanrijdingsformulier" />

                    </GridItem>
                    <GridItem >
                        <Card downloadLink='/test' variant='sidebar' title="Diensten wijzer" />

                    </GridItem>
                    <GridItem >
                        <Card downloadLink='/test' variant='sidebar' title="Algemene voorwaarden" />

                    </GridItem>
                    <GridItem >
                        <Card downloadLink='/test' variant='sidebar' title="Privacyregelement" />

                    </GridItem>
                    <GridItem >
                        <Card downloadLink='/test' variant='sidebar' title="Beloningsbeleid" />
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem colSpan={2} >
                <Sidebar />
            </GridItem>
        </Grid>
    )
}
