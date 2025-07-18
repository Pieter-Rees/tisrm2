import Link from 'next/link'
import { Box, Button, Center, Divider, Flex, VStack } from "@chakra-ui/react"
import Logo from "@/components/logo"

export default function Sidenav({ showSideNav, handleToggle }) {
    const handleSchadeClick = () => {
        // Open in new window without referrer
        window.open('https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen', '_blank', 'noopener,noreferrer');
        handleToggle(); // Close the mobile menu after clicking
    };

    return (
        <Flex boxShadow='lg' transition='ease-in-out .3s all' padding='8' paddingY='4' gap='4' flexDirection='column' zIndex='10' backgroundColor='white' position='fixed' left={showSideNav ? '0' : '-500px'} top='0' alignItems='center' justifyContent='center' height='full' >
            <Flex paddingY='4' justifyContent='center' width='40'>
                <Link href="/"><span onClick={() => handleToggle()}><Logo /></span></Link>
            </Flex>
            <VStack gap='8' fontSize={{ base: 'xl', '2xl': '2xl' }}>
                <Link href="/"> <span onClick={() => handleToggle()}>Home</span></Link>
                <Link href="/verzekeringen"> <span onClick={() => handleToggle()}>Verzekeringen</span></Link>
                <Link href="/taxi"><span onClick={() => handleToggle()}>Taxi</span></Link>
                <Link href="/risk-management"><span onClick={() => handleToggle()}>Risk Management</span></Link>
                <Link href="/over-ons"><span onClick={() => handleToggle()}>Over ons</span></Link>
                <Link href="/bestanden"><span onClick={() => handleToggle()}>Bestanden</span></Link>
                <Link href="/contact"><span onClick={() => handleToggle()}>Contact</span></Link>
                <Divider marginY='1' orientation='horizontal' />

                <Button as='a' href="/offerte" variant='blue'><span onClick={() => handleToggle()}>Offerte</span></Button>
                <Button variant='blue' onClick={handleSchadeClick}>Schade melden</Button>
            </VStack >
        </Flex >
    );
}