'use client'

import Link from 'next/link'
import { Box, Button, Center, Flex, VStack } from "@chakra-ui/react"
import Logo from "@/components/logo"

export default function Sidenav({ showSideNav, handleToggle }) {
    const handleSchadeClick = () => {
        // Open in new window without referrer
        window.open('https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen', '_blank', 'noopener,noreferrer');
        handleToggle(); // Close the mobile menu after clicking
    };

    return (
        <Flex boxShadow='lg' transition='ease-in-out .3s all' p='8' py='4' gap='4' flexDirection='column' zIndex='10' backgroundColor='white' position='fixed' left={showSideNav ? '0' : '-500px'} top='0' alignItems='center' justifyContent='center' height='full' >
            <Flex flexDirection='column' gap='4' alignItems='center' justifyContent='center' height='full'>
                <Link href="/" onClick={handleToggle}>
                    <Logo width='200px' />
                </Link>
                <VStack gap='4' alignItems='center' justifyContent='center'>
                    <Link href="/" onClick={handleToggle}>
                        <Button variant='link' width='full' textAlign='center'>
                            Home
                        </Button>
                    </Link>
                    <Link href="/verzekeringen" onClick={handleToggle}>
                        <Button variant='link' width='full' textAlign='center'>
                            Verzekeringen
                        </Button>
                    </Link>
                    <Link href="/taxi" onClick={handleToggle}>
                        <Button variant='link' width='full' textAlign='center'>
                            Taxi
                        </Button>
                    </Link>
                    <Link href="/risk-management" onClick={handleToggle}>
                        <Button variant='link' width='full' textAlign='center'>
                            Risk Management
                        </Button>
                    </Link>
                    <Link href="/over-ons" onClick={handleToggle}>
                        <Button variant='link' width='full' textAlign='center'>
                            Over ons
                        </Button>
                    </Link>
                    <Link href="/bestanden" onClick={handleToggle}>
                        <Button variant='link' width='full' textAlign='center'>
                            Bestanden
                        </Button>
                    </Link>
                    <Link href="/contact" onClick={handleToggle}>
                        <Button variant='link' width='full' textAlign='center'>
                            Contact
                        </Button>
                    </Link>
                </VStack>
                <Box width='full' height='1px' bg='gray.300' my='4' />
                <VStack gap='4' alignItems='center' justifyContent='center'>
                    <Button variant='blue' onClick={handleSchadeClick} width='full'>
                        Schade melden
                    </Button>
                    <Link href="/offerte" onClick={handleToggle}>
                        <Button variant='blue' width='full'>
                            Offerte aanvragen
                        </Button>
                    </Link>
                </VStack>
                <Center>
                    <Link href='tel:+310206368191' onClick={handleToggle}>
                        <Button variant='link' color='gray.700' fontSize='xl'>
                            +31 020 636 8191
                        </Button>
                    </Link>
                </Center>
            </Flex>
        </Flex>
    )
}