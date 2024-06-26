import {
    ListItem,
    Divider,
    Button,
    UnorderedList, Box, Flex, Text, SimpleGrid, Container, Heading
} from "@chakra-ui/react";
import { contactInfo, currentYear } from "../../data/general";
import FooterLogos from "@/components/footer-logos";
import Link from 'next/link'
import ContactInfo from "@/components/contact-info";
import Logo from "@/components/logo";

export default function Footer() {
    return (
        <>
            <FooterLogos />
            <Flex bg="gray.700" paddingY='16' alignItems='center' >
                <Container >
                    <SimpleGrid minChildWidth={{ base: '100%', lg: '100px' }} spacing='16'>
                        <Flex flexDirection='column' gap='4'>

                            <Box>
                                <Link href="/"><Logo width='200px' /></Link>
                            </Box>
                            <Box>
                                <Text color="white">
                                    Het verdient aanbeveling dat verzekeraars een polis uitbrengen die de gevolgen dekt van een niet geheel begrepen verzekering!
                                </Text>
                            </Box>
                            <Box>
                                <Button as='a' href="/offerte" variant='white'>Offerte aanvragen</Button>
                            </Box>
                        </Flex>

                        <Box>
                            <Heading as='h3' variant='footer'>
                                Navigatie
                            </Heading>
                            <Flex flexDir='column' textColor='white' fontSize='xl'>
                                <Link href="/">Home</Link>
                                <Link href="/verzekeringen">Verzekeringen</Link>
                                <Link href="/taxi">Taxi</Link>
                                <Link href="/risk-management">Risk management</Link>
                                <Link href="/over-ons">Over ons</Link>
                                <Link href="/bestanden">Bestanden</Link>
                                <Link href="/contact">Contact</Link>
                            </Flex>
                        </Box>
                        <Box>
                            <Heading as='h3' variant='footer'>
                                Contact informatie
                            </Heading>
                            <ContactInfo variant='footer' buttonVariant='link' />
                        </Box>
                    </SimpleGrid>
                </Container>
            </Flex>
            <Box marginY='8' bg="white">
                <Text textAlign="center" size='xl' color="gray.700" fontWeight='bold'>
                    Tis Risk Managers {currentYear}
                </Text>
            </Box>
        </>

    )
}