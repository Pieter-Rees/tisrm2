import { Suspense, lazy } from 'react';
import { Container, Grid, GridItem, Flex, Heading, Box } from '@chakra-ui/react'
import Card from '@/components/card'
import ErrorBoundary from '@/components/error-boundary';

const Sidebar = lazy(() => import('@/components/sidebar'));

export default function Bestanden() {
    return (
        <Container py="8">
            <Grid
                templateColumns={{ base: '1fr', xl: '3fr 1fr' }}
                gap="12"
                alignItems="start"
            >
                <GridItem>
                    <Flex direction="column" gap="12">
                        <Heading
                            as="h1"
                            size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                            color="gray.900"
                            fontWeight="bold"
                            lineHeight="tight"
                            mb={{ base: '6', lg: '8' }}
                        >
                            Downloads
                        </Heading>

                        <Grid 
                            templateColumns={{
                                base: 'repeat(1, 1fr)',
                                md: 'repeat(2, 1fr)',
                                lg: 'repeat(3, 1fr)',
                            }}
                            gap={{ base: '6', lg: '8' }}
                            alignItems="stretch"
                            width="100%"
                        >
                            <GridItem display="flex" minW="0">
                                <Card variant='downloads' title="Schadeaanrijdingsformulier" downloadLink='/documents/aanrijdingsformulier.pdf' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Card variant='downloads' title="Dienstverleningsdocument" downloadLink='/documents/dienstverleningsdocument.pdf' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Card variant='downloads' title="Algemene voorwaarden" downloadLink='/documents/algemene-voorwaarden.pdf' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Card variant='downloads' title="Privacyverklaring" downloadLink='/documents/privacyverklaring.pdf' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Card variant='downloads' title="Beloningsbeleid" downloadLink='/documents/beloningsbeleid.pdf' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Card variant='downloads' title="Incidentenregeling" downloadLink='/documents/incidentenregeling.pdf' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Card variant='downloads' title="interne-klachtenprocedure" downloadLink='/documents/interne-klachtenprocedure.pdf' />
                            </GridItem>
                        </Grid>
                    </Flex>
                </GridItem>

                <GridItem hideBelow="xl">
                    <Box position="sticky" top="100px">
                        <ErrorBoundary>
                            <Suspense fallback={<div>Loading sidebar...</div>}>
                                <Sidebar />
                            </Suspense>
                        </ErrorBoundary>
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    )
}