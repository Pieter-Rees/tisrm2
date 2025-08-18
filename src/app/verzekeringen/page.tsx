import { Suspense, lazy } from 'react';
import { Container, Grid, GridItem, Flex, Heading, Box } from '@chakra-ui/react'
import Card from '@/components/card'
import Breadcrumb from "@/components/breadcrumb"
import ErrorBoundary from '@/components/error-boundary';

const Sidebar = lazy(() => import('@/components/sidebar'));

export default function Verzekeringen() {
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
                                Verzekeringen
                            </Heading>
                            
                            <Box
                                as="nav"
                                aria-label="Breadcrumb navigation"
                                flexShrink={0}
                            >
                                <Breadcrumb capitalizeLinks />
                            </Box>
                        </Flex>

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
                                <Card title='Particulier' description="U verwacht als particulier de beste service tegen scherpe premies, alsmede een snelle afhandeling van mogelijke schades. Bij TIS geniet u van adviseurs die op de juiste momenten bereikbaar zijn en de persoonlijke aandacht geven waar u als klant behoefte heeft." cta='Lees meer' ctaLink='/verzekeringen/particulier' buttonVariant='ghost' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Card title='Zakelijk' description='Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn, zijn alle risico&apos;s wel goed afgedekt en dan wel tegen de juiste premies? Wij nemen graag samen met u uw verzekeringspakket door en houden deze up to date, zodat ook u kunt genieten van de rust die TIS biedt.' cta='Lees meer' ctaLink='/verzekeringen/zakelijk' buttonVariant='ghost' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Card title='Taxi' description='TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties én de klanten zelf.' cta='Lees meer' ctaLink='/taxi' buttonVariant='ghost' />
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