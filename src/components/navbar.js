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
                <HStack gap='8' fontSize={{ base: 'md', '2xl': 'xl' }} color='gray.900'>
                    <Link href="/" color='gray.900'>Home</Link>
                    <Link href="/verzekeringen" color='gray.900'>Verzekeringen</Link>
                    <Link href="/taxi" color='gray.900'>Taxi</Link>
                    <Link href="/risk-management" color='gray.900'>Risk Management</Link>
                    <Link href="/over-ons" color='gray.900'>Over ons</Link>
                    <Link href="/bestanden" color='gray.900'>Bestanden</Link>
                    <Link href="/contact" color='gray.900'>Contact</Link>
                </HStack>
            </Box>
            <Box hideBelow='xl'>
                <HStack gap='4'>
                    <Button bg='blue.500' color='white' onClick={handleSchadeClick}>
                        Schade melden
                    </Button>
                    <Button as={Link} href="/offerte" bg='blue.500' color='white'>Offerte aanvragen</Button>
                </HStack>
            </Box>
            <Box hideBelow='xl'>
                <Center>
                    <Box width='1px' height='40px' bg='gray.300' />
                </Center>
            </Box>
            <Box hideBelow='xl'>
                <Center>
                    <Button as={Link} href='tel:+310206368191' variant='link' color='gray.900' fontSize={{ base: 'md', '2xl': 'xl' }}>
                        +31 020 636 8191
                    </Button>
                </Center>
            </Box>
        </Flex>
    )
}