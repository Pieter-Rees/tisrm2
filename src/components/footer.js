'use client'

import { contactInfo, currentYear } from "../data/general";
import FooterLogos from "@/components/footer-logos";
import Link from 'next/link'
import Logo from "@/components/logo";
import { Box, Container, Grid, GridItem, VStack, Heading, Text, Button } from "@chakra-ui/react";

export default function Footer() {
    return (
        <>
            <FooterLogos />
            <Box bg="gray.700" py="16">
                <Container maxW="6xl">
                    <Grid 
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
                        gap="16"
                    >
                        <GridItem>
                            <VStack align="start" gap="4">
                                <Box as={Link} href="/">
                                    <Logo width='200px' />
                                </Box>
                                <Text color="white" fontSize="sm">
                                    © {currentYear} {contactInfo.name}. Alle rechten voorbehouden.
                                </Text>
                            </VStack>
                        </GridItem>
                        
                        <GridItem>
                            <VStack align="start" gap="4">
                                <Heading as="h3" size="md" color="white">
                                    Contact
                                </Heading>
                                <VStack align="start" gap="2">
                                    <Button 
                                        as={Link}
                                        href='tel:+310206368191'
                                        variant="link" 
                                        color="white" 
                                        textDecoration="underline"
                                        fontSize="sm"
                                        p="0"
                                    >
                                        +31 020 636 8191
                                    </Button>
                                    <Button 
                                        as={Link}
                                        href='mailto:info@tisrm.nl'
                                        variant="link" 
                                        color="white" 
                                        textDecoration="underline"
                                        fontSize="sm"
                                        p="0"
                                    >
                                        info@tisrm.nl
                                    </Button>
                                    <Button 
                                        as={Link}
                                        target='_blank' 
                                        rel='noopener noreferrer' 
                                        href={contactInfo.linkedIn}
                                        variant="link" 
                                        color="white" 
                                        textDecoration="underline"
                                        fontSize="sm"
                                        p="0"
                                    >
                                        LinkedIn
                                    </Button>
                                </VStack>
                            </VStack>
                        </GridItem>
                        
                        <GridItem>
                            <VStack align="start" gap="4">
                                <Heading as="h3" size="md" color="white">
                                    Links
                                </Heading>
                                <VStack align="start" gap="2">
                                    <Button 
                                        as={Link}
                                        href="/verzekeringen"
                                        variant="link" 
                                        color="white" 
                                        textDecoration="underline"
                                        fontSize="sm"
                                        p="0"
                                    >
                                        Verzekeringen
                                    </Button>
                                    <Button 
                                        as={Link}
                                        href="/taxi"
                                        variant="link" 
                                        color="white" 
                                        textDecoration="underline"
                                        fontSize="sm"
                                        p="0"
                                    >
                                        Taxi
                                    </Button>
                                    <Button 
                                        as={Link}
                                        href="/risk-management"
                                        variant="link" 
                                        color="white" 
                                        textDecoration="underline"
                                        fontSize="sm"
                                        p="0"
                                    >
                                        Risk Management
                                    </Button>
                                    <Button 
                                        as={Link}
                                        href="/over-ons"
                                        variant="link" 
                                        color="white" 
                                        textDecoration="underline"
                                        fontSize="sm"
                                        p="0"
                                    >
                                        Over ons
                                    </Button>
                                    <Button 
                                        as={Link}
                                        href="/contact"
                                        variant="link" 
                                        color="white" 
                                        textDecoration="underline"
                                        fontSize="sm"
                                        p="0"
                                    >
                                        Contact
                                    </Button>
                                </VStack>
                            </VStack>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}