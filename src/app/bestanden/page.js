import Sidebar from '@/components/sidebar';
import { Grid, GridItem } from '@chakra-ui/react';
export default function Bestanden() {
    return (

        <Grid width='full' templateRows='repeat(2, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }} gap={4} >
            <GridItem colSpan={4} >
            </GridItem>
            <GridItem colSpan={2} >
                <Sidebar />
            </GridItem>
        </Grid>
    )
}
