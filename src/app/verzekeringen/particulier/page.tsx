import { Suspense, lazy } from 'react';
import { Container, Grid, GridItem, Heading, Text, Flex, Box } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
import StarList from "@/components/star-list"
import ErrorBoundary from '@/components/error-boundary';

const Sidebar = lazy(() => import('@/components/sidebar'));

export default function Particulier() {
    const list1 = [
        'Autoverzekering',
        'Oldtimer',
        'Bromfiets',
        'Motor',
        'Aanhanger',
        'Caravan',
        'Camper'
    ];

    const list2 = [
        'Aansprakelijkheid',
        'Rechtsbijstand',
        'Ongevallen'
    ];

    const list3 = [
        'Opstal',
        'Inboedel',
        'Kostbaarheden',
        'Recreatiewoning'
    ];

    const list4 = [
        'Reis',
        'Pleziervaartuigen',
        'Recreatiegoederen'
    ];
    return (
        <Container py="8">
            <Grid
                templateColumns={{ base: '1fr', xl: '3fr 1fr' }}
                gap="12"
                alignItems="start"
            >
                <GridItem>
                    <Flex direction="column" gap="12">
                        <Flex
                            as="header"
                            width="full"
                            justify="space-between"
                            align={{ base: 'flex-start', lg: 'center' }}
                            direction={{ base: 'column', lg: 'row' }}
                            mb={{ base: '6', lg: '8' }}
                            gap="4"
                        >
                            <Heading
                                as="h1"
                                size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                color="gray.900"
                                fontWeight="bold"
                                lineHeight="tight"
                            >
                                Particulier
                            </Heading>
                            
                            <Box
                                as="nav"
                                aria-label="Breadcrumb navigation"
                                flexShrink={0}
                            >
                                <Breadcrumb capitalizeLinks />
                            </Box>
                        </Flex>

                        <Flex direction="column" gap="6">
                            <Text>
                                Iedereen is op zoek naar de goedkoopste verzekering, maar u verwacht van ons natuurlijk wél een goed advies als adviseur over de allerbeste dekkingen. TIS is daarbij een uitstekend partner als zijnde erkend Risico Manager en als zodanig geregistreerd in het GRMC register. Hierdoor bent u verzekerd van het beste advies.
                            </Text>
                            <Text>
                                Wij bieden verzekeringen tegen een concurrerend tarief, zonder daarbij de kwaliteit van het product uit het oog te verliezen.
                            </Text>
                            <Text>
                                Of u nu een auto-, bromfiets-, aansprakelijkheid- of woonhuisverzekering nodig heeft, wij staan voor u klaar!
                            </Text>
                            <Text>
                                Bovendien proberen wij al uw particuliere (schade) verzekeringen samen te voegen in één pakket, waardoor u een makkelijk overzicht heeft van uw lopende verzekeringen. Daarbij geeft een pakket aantrekkelijke kortingen over de premies.
                            </Text>
                            <Text>
                                Wij groeien graag met u mee.
                            </Text>
                            <Text>
                                Bent u geïnteresseerd of heeft u vragen, neem dan gerust contact op via de mail of bel ons!
                            </Text>
                        </Flex>

                        <Grid 
                            templateColumns={{
                                base: 'repeat(1, 1fr)',
                                md: 'repeat(2, 1fr)',
                            }}
                            gap={{ base: '6', lg: '8' }}
                            alignItems="stretch"
                            width="100%"
                        >
                            <GridItem display="flex" flexDirection="column" minW="0">
                                <Heading as='h3' size='md'>Onderweg</Heading>
                                <StarList listItems={list1} />
                            </GridItem>
                            <GridItem display="flex" flexDirection="column" minW="0">
                                <Heading as='h3' size='md'>Gezinssituatie</Heading>
                                <StarList listItems={list2} />
                            </GridItem>
                            <GridItem display="flex" flexDirection="column" minW="0">
                                <Heading as='h3' size='md'>Wonen</Heading>
                                <StarList listItems={list3} />
                            </GridItem>
                            <GridItem display="flex" flexDirection="column" minW="0">
                                <Heading as='h3' size='md'>Vrije tijd</Heading>
                                <StarList listItems={list4} />
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