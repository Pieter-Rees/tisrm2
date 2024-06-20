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

            <Flex justifyContent='center' marginTop='8'>
                <UnorderedList variant={variant}>
                    <ListItem>
                        <Button size='full' variant={buttonVariant} as='a' href={'tel:' + 'pageInfo.phone'}>
                            {contactInfo.phone}
                        </Button>
                    </ListItem>
                    <ListItem >
                        <Button size='full' variant={buttonVariant} as='a' href={'mailto:' + 'pageInfo.email'}>
                            {contactInfo.email}
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button marginY='2' size='full' variant={buttonVariant} as='a' target='_blank' href={contactInfo.linkedIn}>
                            <BsLinkedin size='24' />

                        </Button>
                    </ListItem>
                </UnorderedList>
            </Flex>
        </>

    )
}