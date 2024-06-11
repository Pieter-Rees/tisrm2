"use client"

import { HStack, Button, Show, Flex } from "@chakra-ui/react"
import Link from 'next/link'
import { Center, Box } from "@chakra-ui/react"
import { Divider, Hide } from "@chakra-ui/react"
import { BsList } from "react-icons/bs"
import { useState } from "react"
import Sidenav from "@/components/sidenav"

export default function Navbar() {
    const [showSideNav, setShowSideNav] = useState(false);

    const handleToggle = () => {
        setShowSideNav((showSideNav) => !showSideNav);
    };

    return (
        <Flex alignItems='center'>
            <Hide below='xl'>
                <HStack gap='8' fontSize={{ base: 'md', '2xl': 'xl' }}>
                    <Link Link href="/">Home</Link>
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
            <Hide above='xl'>
                <Box cursor='pointer' onClick={handleToggle}>
                    <BsList size='64' />
                    {showSideNav && <Sidenav />}
                </Box>

            </Hide>
        </Flex >

    )
}