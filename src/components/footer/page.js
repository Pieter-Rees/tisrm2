import {
    ListItem,
    ListIcon,
    Divider,
    Button,
    UnorderedList, Box, Flex, Text, SimpleGrid, Container, Heading
} from "@chakra-ui/react";
import { contactInfo, currentYear } from "@/data/general";
import FooterLogos from "@/components/footer-logos";
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <FooterLogos />
            <Flex bg="gray.700" paddingY='16' alignItems='center' >
                <Container >
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Box>
                            <Heading as='h3' variant='footer'>
                                {contactInfo.name}
                            </Heading>
                            <Text color="white">
                                Het verdient aanbeveling dat verzekeraars een polis uitbrengen die de gevolgen dekt van een niet geheel begrepen verzekering!
                            </Text>
                            <Button as='a' href="/offerte" variant='blue'>Offerte aanvragen</Button>
                        </Box>
                        <Box>
                            <Heading as='h3' variant='footer'>
                                Navigatie
                            </Heading>
                            <Flex flexDir='column' textColor='white'>
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

                            <SimpleGrid minChildWidth='120px' spacing='40px'>
                                <Box>
                                    <UnorderedList>
                                        <ListItem>{contactInfo.address}</ListItem>
                                        <ListItem>{contactInfo.email}</ListItem>
                                        <ListItem>{contactInfo.city}</ListItem>
                                    </UnorderedList>
                                </Box>
                                <Box>
                                    <UnorderedList>
                                        <ListItem>{contactInfo.postalBox}</ListItem>
                                        <ListItem>{contactInfo.postalCode}</ListItem>
                                        <ListItem>{contactInfo.city}</ListItem>
                                    </UnorderedList>
                                </Box>
                            </SimpleGrid>
                            <Divider orientation='horizontal' />
                            <Box>
                                <UnorderedList>
                                    <ListItem>{contactInfo.phone}</ListItem>
                                    <ListItem>{contactInfo.email}</ListItem>
                                    <ListItem>{contactInfo.linkedIn}</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                    </SimpleGrid>
                    <Box marginTop='8' >
                        <Text textAlign="center" size='xl' color="gray.500">
                            Tis Risk Managers {currentYear}
                        </Text>
                    </Box>
                </Container>
            </Flex>
        </>

    )
}