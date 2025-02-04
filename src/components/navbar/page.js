"use client"

import { HStack, Button, Show, Flex } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import { Center, Box } from "@chakra-ui/react"
import { Divider, Hide } from "@chakra-ui/react"
import NextLink from 'next/link'

export default function Navbar() {
    return (
        <Flex alignItems='center'>
            <Hide below='xl'>
                <HStack gap='8' fontSize={{ base: 'md', '2xl': 'xl' }}>
                    <Link as={NextLink} href="/">Home</Link>
                    <Link as={NextLink} href="/verzekeringen">Verzekeringen</Link>
                    <Link as={NextLink} href="/taxi">Taxi</Link>
                    <Link as={NextLink} href="/risk-management">Risk management</Link>
                    <Link as={NextLink} href="/over-ons">Over ons</Link>
                    <Link as={NextLink} href="/bestanden">Bestanden</Link>
                    <Link as={NextLink} href="/contact">Contact</Link>
                    <Center height='50px'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Button as={NextLink} href="/offerte" variant='blue'>Offerte aanvragen</Button>
                </HStack >
            </Hide>
        </Flex >

    )
}