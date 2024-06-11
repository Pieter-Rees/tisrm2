import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from '@/components/sidebar'
import { Heading, Flex } from '@chakra-ui/react'

export default function GridLayout({
    children,
    title,
    sidebar = true
}) {
    return (
        <Flex width='full' flexDirection='column'>
            <Heading as='h1' variant='xl'>{title}</Heading>
            <Grid width='full' templateRows='repeat(1, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }} gap='16' >
                <GridItem colSpan={{ base: '1', lg: '4' }} >
                    {children}
                </GridItem>
                {sidebar &&
                    <GridItem colSpan={2} >
                        <Sidebar />
                    </GridItem>
                }
            </Grid>
        </Flex >

    )

}