'use client'

import { Suspense, lazy } from 'react';
import ContactInfo from "@/components/contact-info";
import Logo from "@/components/logo";
import ErrorBoundary from '@/components/error-boundary';
import { Grid, GridItem, Box, Container, Flex, Text, Button, Heading } from "@chakra-ui/react";
import Image from 'next/image'

const Sidebar = lazy(() => import('@/components/sidebar'));

export default function Contact() {
    const handleSchadeClick = () => {
        // Open in new window without referrer
        window.open('https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen', '_blank', 'noopener,noreferrer');
    };

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
                            Contact
                        </Heading>

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
                                <Flex width='100%' py='12' justifyContent='center'>
                                    <Logo />
                                </Flex>
                                <ContactInfo buttonVariant='outline' />
                            </GridItem>
                            <GridItem display="flex" minW="0">
                                <Flex borderRadius='lg' boxShadow='lg' overflow='hidden' position='relative' width='full' alignItems='center' height='full'>
                                    <Image
                                        src="/bb.jpg"
                                        alt="Picture of the author"
                                        fill={true}
                                    />
                                </Flex>
                            </GridItem>
                        </Grid>
                        
                        <Box pt='20' textAlign='center'>
                            <Text color='gray.800' mb='4'>
                                Wil u uw schade inzien of een schade melden, klik op onderstaande knop.
                            </Text>
                            <Button bg='blue.500' color='white' onClick={handleSchadeClick}>Schade melden</Button>
                        </Box>
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