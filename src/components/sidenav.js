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
        <Flex boxShadow='lg' transition='ease-in-out .3s all' p='8' py='4' gap='4' flexDirection='column' zIndex='50' backgroundColor='white' position='fixed' left={showSideNav ? '0' : '-100%'} top='0' alignItems='center' justifyContent='center' height='full' width='80%' maxWidth='400px' >
            <Flex flexDirection='column' gap='4' alignItems='center' justifyContent='center' height='full'>
                <Box as={Link} href="/" onClick={handleToggle}>
                    <Logo width='200px' />
                </Box>
                <VStack gap='4' alignItems='center' justifyContent='center'>
                    <Button as={Link} href="/" onClick={handleToggle} variant='link' color='gray.900' width='full' textAlign='center'>
                        Home
                    </Button>
                    <Button as={Link} href="/verzekeringen" onClick={handleToggle} variant='link' color='gray.900' width='full' textAlign='center'>
                        Verzekeringen
                    </Button>
                    <Button as={Link} href="/taxi" onClick={handleToggle} variant='link' color='gray.900' width='full' textAlign='center'>
                        Taxi
                    </Button>
                    <Button as={Link} href="/risk-management" onClick={handleToggle} variant='link' color='gray.900' width='full' textAlign='center'>
                        Risk Management
                    </Button>
                    <Button as={Link} href="/over-ons" onClick={handleToggle} variant='link' color='gray.900' width='full' textAlign='center'>
                        Over ons
                    </Button>
                    <Button as={Link} href="/bestanden" onClick={handleToggle} variant='link' color='gray.900' width='full' textAlign='center'>
                        Bestanden
                    </Button>
                    <Button as={Link} href="/contact" onClick={handleToggle} variant='link' color='gray.900' width='full' textAlign='center'>
                        Contact
                    </Button>
                </VStack>
                <Box width='full' height='1px' bg='gray.300' my='4' />
                <VStack gap='4' alignItems='center' justifyContent='center'>
                    <Button bg='blue.500' color='white' onClick={handleSchadeClick} width='full'>
                        Schade melden
                    </Button>
                    <Button as={Link} href="/offerte" onClick={handleToggle} bg='blue.500' color='white' width='full'>
                        Offerte aanvragen
                    </Button>
                </VStack>
                <Center>
                    <Button as={Link} href='tel:+310206368191' onClick={handleToggle} variant='link' color='gray.900' fontSize='xl'>
                        +31 020 636 8191
                    </Button>
                </Center>
            </Flex>
        </Flex>
    )
}