import ContactInfo from "@/components/contact-info";
import Logo from "@/components/logo";
import { Grid, GridItem, Box, Container, Flex, Text, Divider } from "@chakra-ui/react";
import Image from 'next/image'

export default function Contact() {
    return (
        <Container>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap='8'>
                <GridItem w='100%' >
                    <Flex width='100%' paddingY='12' justifyContent='center'>
                        <Logo />
                    </Flex>
                    <ContactInfo variant='contact' buttonVariant='linkDark' />
                </GridItem>
                <GridItem w='100%'>
                    <Flex borderRadius='lg' overflow='hidden' position='relative' width='full' alignItems='center' height='full'>
                        <Image
                            src="/bb.jpg"
                            alt="Picture of the author"
                            fill={true}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <Box paddingY='20' textAlign='center'>
                <Text>
                    Wil u uw schade inzien of een schade melden, klik op onderstaande link óf neem contact op met ons telefoonnummer, optie 1.
                </Text>
                <Text>
                    www.schadehulp.nl
                </Text>
            </Box>
        </Container>
    )
}