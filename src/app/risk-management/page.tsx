import { Suspense, lazy } from 'react';
import { Container, Text, Grid, GridItem, Box, Heading, Flex } from '@chakra-ui/react'
import StarList from "@/components/star-list"
import ErrorBoundary from '@/components/error-boundary';

const Sidebar = lazy(() => import('@/components/sidebar'));

export default function Riskmanagement() {
    const list = ['Bedrijfsmiddelen', 'Bedrijfsactiviteiten', 'Vervoer & Logistiek', 'Personeel', 'Preventie']

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
                            Risk Management
                        </Heading>

                        <Flex direction="column" gap="6">
                            <Text color='gray.800'>
                                TIS RM wil haar dienstverlening altijd verbeteren, uitbreiden en professionaliseren.
                            </Text>
                            <Text color='gray.800'>
                                Wij kunnen voor u een risicoinventarisatie uitvoeren. Samen met u maken wij een rapport, waarin uw unieke bedrijfs- en risicoprofiel naar voren komt. Hiermee kunnen wij samen precies zien waar u en uw bedrijf risico&apos;s lopen, waarmee wij kunnen bepalen in welke mate het risico invloed op u heeft. Is het verstandig om hier een verzekering voor af te sluiten, of is het beter om dit risico zelf te dragen?
                            </Text>
                            <Text color='gray.800'>
                                Ieder relevant risico komt in het onderzoek naar voren, welke wij duidelijk voor u rubriceren in een rapport. In de vorm van een risicoadvies geven wij vervolgens aan op welke wijze met ieder risico kan worden omgegaan, dit kan op een aantal manieren:
                            </Text>
                            <Text color='gray.800'>
                                Het vermijden van het risico Het verminderen/voorkomen van het risico Het verzekeren van het risico Het zelf-dragen van het risico Per risico brengen wij dan tevens in kaart in hoeverre uw huidige verzekeringspakket hiervoor al dan niet dekking biedt en wat de kwaliteit daarvan is.
                            </Text>
                            <Text color='gray.800'>
                                Het is de kunst om na een grondige risico-inventarisatie te komen tot een &apos;onbewust (on)verzekerde situatie tot bewust (on)verzekerde situatie&apos; en dat met een doorlopend karakter.
                            </Text>
                            <Text color='gray.800'>
                                In de samenvatting splitsen wij de volgende zaken:
                            </Text>
                            <StarList listItems={list} />
                        </Flex>
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