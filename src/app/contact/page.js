import ContactInfo from "@/components/contact-info";
import Logo from "@/components/logo";
import { Grid, GridItem, Box, Container, Flex, Text, Divider } from "@chakra-ui/react";
import Image from 'next/image'
import { Button } from '@chakra-ui/react'

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
                    <Flex borderRadius='lg' boxShadow='lg' overflow='hidden' position='relative' width='full' alignItems='center' height='full'>
                        <Image
                            src="/bb.jpg"
                            alt="Picture of the author"
                            fill={true}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <Box paddingTop='20' textAlign='center'>
                <Text>
                    Wil u uw schade inzien of een schade melden, klik op onderstaande link óf neem contact op met ons telefoonnummer, optie 1.
                </Text>
                <Button as='a' href='https://schadehulp.schadehulp.nl/extranet/' variant='ghost'>www.schadehulp.nl</Button>

            </Box>
        </Container>
    )
}