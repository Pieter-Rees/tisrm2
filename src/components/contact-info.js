'use client'
import { Box, Flex, SimpleGrid, UnorderedList, ListItem, Divider } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { Button } from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'
export default function ContactInfo({ variant, buttonVariant }) {
    return (
        <>
            <SimpleGrid minChildWidth={{ base: 'full', md: '120px' }} spacing='40px'>
                <Box>
                    <UnorderedList variant={variant}>
                        <ListItem>{contactInfo.address}</ListItem>
                        <ListItem>{contactInfo.email}</ListItem>
                        <ListItem>{contactInfo.city}</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList variant={variant}>
                        <ListItem>{contactInfo.postalBox}</ListItem>
                        <ListItem>{contactInfo.postalCode}</ListItem>
                        <ListItem>{contactInfo.city}</ListItem>
                    </UnorderedList>
                </Box>
            </SimpleGrid>

            <Flex justifyContent='start' marginTop='8'>
                <UnorderedList variant={variant}>
                    <ListItem>
                        <Button size='full' variant={buttonVariant} as='a' href='tel:+310206368191'>
                            +31 020 636 8191
                        </Button>
                    </ListItem>
                    <ListItem >
                        <Button size='full' variant={buttonVariant} as='a' href='mailto:info@tisrm.nl'>
                            info@tisrm.nl
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button marginY='2' size='full' variant={buttonVariant} as='a' target='_blank' href={contactInfo.linkedIn}>
                            <BsLinkedin size='24' />

                        </Button>
                    </ListItem>
                </UnorderedList>
            </Flex >
        </>

    )
}