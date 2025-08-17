'use client'

import { HStack, Button, Flex, Center, Box } from "@chakra-ui/react"
import Link from 'next/link'

export default function Navbar() {
    const handleSchadeClick = () => {
        // Open in new window without referrer
        window.open('https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen', '_blank', 'noopener,noreferrer');
    };

    return (
        <Flex alignItems='center'>
            <Box hideBelow='xl'>
                <HStack gap='8' fontSize={{ base: 'md', '2xl': 'xl' }}>
                    <Link href="/">Home</Link>
                    <Link href="/verzekeringen">Verzekeringen</Link>
                    <Link href="/taxi">Taxi</Link>
                    <Link href="/risk-management">Risk Management</Link>
                    <Link href="/over-ons">Over ons</Link>
                    <Link href="/bestanden">Bestanden</Link>
                    <Link href="/contact">Contact</Link>
                </HStack>
            </Box>
            <Box hideBelow='xl'>
                <HStack gap='4'>
                    <Button variant='blue' onClick={handleSchadeClick}>
                        Schade melden
                    </Button>
                    <Link href="/offerte">
                        <Button variant='blue'>Offerte aanvragen</Button>
                    </Link>
                </HStack>
            </Box>
            <Box hideBelow='xl'>
                <Center>
                    <Box width='1px' height='40px' bg='gray.300' />
                </Center>
            </Box>
            <Box hideBelow='xl'>
                <Center>
                    <Link href='tel:+310206368191'>
                        <Button variant='link' color='gray.700' fontSize={{ base: 'md', '2xl': 'xl' }}>
                            +31 020 636 8191
                        </Button>
                    </Link>
                </Center>
            </Box>
        </Flex>
    )
}