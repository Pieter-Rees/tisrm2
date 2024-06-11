import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from '@/components/sidebar'
import { Heading, Flex } from '@chakra-ui/react'

export default function GridLayout({
    children,
    title,
    sidebar = true,
    breadcrumb
}) {
    return (
        <Flex width='full' flexDirection='column'>
            <Flex width='full' justifyContent='space-between'>
                <Heading as='h1' variant='xl'>{title}</Heading>
                {breadcrumb}
            </Flex>

            <Grid width='full' templateRows='repeat(1, 1fr)' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }} gap='16' >
                <GridItem colSpan={{ base: '4', lg: '4' }} >
                    {children}
                </GridItem>
                {sidebar &&
                    <GridItem colSpan={{ base: '4', lg: '2' }} >
                        <Sidebar />
                    </GridItem>
                }
            </Grid>
        </Flex >

    )

}