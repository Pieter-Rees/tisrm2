'use client'
import { Box, Flex, SimpleGrid, VStack, Text, Button } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

export default function ContactInfo({ variant, buttonVariant }) {
    return (
        <>
            <SimpleGrid minChildWidth={{ base: 'full', md: '120px' }} gap='40px'>
                <Box>
                    <VStack align="start" spacing={2}>
                        <Text color="gray.800">{contactInfo.address}</Text>
                        <Text color="gray.800">{contactInfo.email}</Text>
                        <Text color="gray.800">{contactInfo.city}</Text>
                    </VStack>
                </Box>
                <Box>
                    <VStack align="start" spacing={2}>
                        <Text color="gray.800">{contactInfo.postalBox}</Text>
                        <Text color="gray.800">{contactInfo.postalCode}</Text>
                        <Text color="gray.800">{contactInfo.city}</Text>
                    </VStack>
                </Box>
            </SimpleGrid>

            <Flex justifyContent='start' mt='8'>
                <VStack align="start" spacing={2}>
                    <Button as={Link} href='tel:+310206368191' width='full' height='full' variant={buttonVariant}>
                        +31 020 636 8191
                    </Button>
                    <Button as={Link} href='mailto:info@tisrm.nl' width='full' height='full' variant={buttonVariant}>
                        info@tisrm.nl
                    </Button>
                    <Button as={Link} target='_blank' rel='noopener noreferrer' href={contactInfo.linkedIn} my='2' width='full' height='full' variant={buttonVariant}>
                        <BsLinkedin size='24' />
                    </Button>
                </VStack>
            </Flex >
        </>
    )
}