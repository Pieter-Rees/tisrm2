import { Suspense, lazy } from 'react';
import { Container, Text, Grid, GridItem, Box, Heading, Flex } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
import ErrorBoundary from '@/components/error-boundary';

const Sidebar = lazy(() => import('@/components/sidebar'));

export default function Zakelijk() {
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
                                Zakelijk
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
                                TIS is al meer dan 25 jaar een landelijk werkend assurantiekantoor, welke altijd gespecialiseerd is geweest in verzekeren van het personenvervoer. Door onze jarenlange expertise in de personenvervoerbranche genieten wij veel vertrouwen bij de verzekeringsmaatschappijen. Als klant bent u degene die daar direct van profiteert. Doordat voorwaarden, mogelijkheden en premies per maatschappij verschillen en wij onafhankelijk zijn, kunnen wij voor de meest passende mogelijkheden combineren voor uw bedrijf. Dit resulteert in een zeer goede Prijs-Kwaliteit verhouding, waarmee u geniet van de meest uitgebreide voorwaarden tegen aantrekkelijke premies.
                            </Text>
                            <Text>
                                Om u hierbij te helpen en beschermen tegen de mogelijke financiële gevolgen van schade in welke situatie dan ook, bieden wij u altijd de beste verzekering op maat. Omdat wij 100 % onafhankelijk zijn bekijken wij per onderneming en per verzekering waar deze het beste kan worden ondergebracht. Hierdoor zijn wij instaat voor u het beste uit de markt te kiezen, tegen de aantrekkelijkste premies.
                            </Text>
                            <Text>
                                Wilt u uw verzekeringspakket een grondig met ons doorlopen? Neem dan gerust contact met ons op!
                            </Text>
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