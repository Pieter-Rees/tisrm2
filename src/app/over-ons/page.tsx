import { Suspense, lazy } from 'react';
import {
    Container,
    Text,
    Flex,
    Grid,
    GridItem,
    Box,
    Heading,
} from '@chakra-ui/react'
import StarList from "@/components/star-list"
import Image from 'next/image'
import ErrorBoundary from '@/components/error-boundary';

const Sidebar = lazy(() => import('@/components/sidebar'));

export default function Overons() {
    const list = [
        'Enthoven Beheer BV – Financial Holding',
        'ENTO lease BV – Lease en financiering',
        'ENTO Holding – bedrijfs adviezen',
        'Alan Jacktar BV – Risico Management',
        'TIS RM – Assurantiën (Schade) voor particulier en MKB'
    ]

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
                            Over ons
                        </Heading>

                        <Flex direction="column" gap="6">
                            <Text color='gray.800'>
                                De ENTO Groep is opgericht in 1994 en is begonnen als zelfstandige auto lease maatschappij voor het MKB. In 1998 is daar de discipline verzekeringen aan toegevoegd. In 2002 werd middels een overname van een grote assurantie portefeuille uit het oosten van Nederland de basis voor het huidige concern gelegd. Inmiddels is de tweede generatie in het bedrijf gekomen. Door nieuwe impulsen zijn wij reeds ook gecertificeerd Risico Managers en als zodanig geregistreerd in het GRMC register.
                            </Text>
                            <Text color='gray.800'>
                                Thans bestaat de ENTO groep uit de ondernemingen:
                            </Text>
                            <StarList listItems={list} />
                            <Text color='gray.800'>
                                Uit een zeer modern en inspirerend kantoor wordt de onderneming gedreven met geavanceerde software en bedrijfsmodel. Door gebruik te maken van diverse gespecialiseerde diensten zoals een call center en een uitbesteedde schade afdeling zijn wij in staat met een relatief klein team een mooie omzet te genereren. Focus ligt op advisering in Risico management en financiële vraagstukken.
                            </Text>
                            <Flex width='full' justifyContent='center'>
                                <Flex 
                                    transform={{ base: '', lg: 'rotate(2deg)' }} 
                                    transition="all .25s ease" 
                                    mt='8' 
                                    width='fit-content' 
                                    borderRadius='lg' 
                                    boxShadow='lg' 
                                    overflow='hidden'
                                >
                                    <Image
                                        src="/team.jpg"
                                        alt="Picture of the author"
                                        width={750}
                                        height={250}
                                    />
                                </Flex>
                            </Flex>
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