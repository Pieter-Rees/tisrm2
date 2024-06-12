"use client"

import { HStack, Button, Show, Flex } from "@chakra-ui/react"
import Link from 'next/link'
import { Center, Box } from "@chakra-ui/react"
import { Divider, Hide } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Flex alignItems='center'>
            <Hide below='xl'>
                <HStack gap='8' fontSize={{ base: 'md', '2xl': 'xl' }}>
                    <Link href="/">Home</Link>
                    <Link href="/verzekeringen">Verzekeringen</Link>
                    <Link href="/taxi">Taxi</Link>
                    <Link href="/risk-management">Risk management</Link>
                    <Link href="/over-ons">Over ons</Link>
                    <Link href="/bestanden">Bestanden</Link>
                    <Link href="/contact">Contact</Link>
                    <Center height='50px'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Button as='a' href="/offerte" variant='blue'>Offerte aanvragen</Button>
                </HStack >
            </Hide>
        </Flex >

    )
}