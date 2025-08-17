'use client'
import { Box, Flex, SimpleGrid, List, ListItem, Button } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

export default function ContactInfo({ variant, buttonVariant }) {
    return (
        <>
            <SimpleGrid minChildWidth={{ base: 'full', md: '120px' }} gap='40px'>
                <Box>
                    <List variant={variant}>
                        <ListItem>{contactInfo.address}</ListItem>
                        <ListItem>{contactInfo.email}</ListItem>
                        <ListItem>{contactInfo.city}</ListItem>
                    </List>
                </Box>
                <Box>
                    <List variant={variant}>
                        <ListItem>{contactInfo.postalBox}</ListItem>
                        <ListItem>{contactInfo.postalCode}</ListItem>
                        <ListItem>{contactInfo.city}</ListItem>
                    </List>
                </Box>
            </SimpleGrid>

            <Flex justifyContent='start' mt='8'>
                <List variant={variant}>
                    <ListItem>
                        <Link href='tel:+310206368191'>
                            <Button width='full' height='full' variant={buttonVariant}>
                                +31 020 636 8191
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem >
                        <Link href='mailto:info@tisrm.nl'>
                            <Button width='full' height='full' variant={buttonVariant}>
                                info@tisrm.nl
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' rel='noopener noreferrer' href={contactInfo.linkedIn}>
                            <Button my='2' width='full' height='full' variant={buttonVariant}>
                                <BsLinkedin size='24' />
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Flex >
        </>
    )
}