import Link from 'next/link'
import { Box, Button, Center, Divider, Flex, VStack } from "@chakra-ui/react"
import Logo from "@/components/logo"

export default function Sidenav({ showSideNav, handleToggle }) {
    return (
        <Flex boxShadow='lg' transition='ease-in-out .3s all' padding='8' gap='8' flexDirection='column' zIndex='10' backgroundColor='white' position='fixed' left={showSideNav ? '0' : '-500px'} top='0' alignItems='center' justifyContent='center' height='full' >
            <Flex paddingY='12' justifyContent='center'>
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
                <Divider orientation='horizontal' />

                <Button as='a' href="/offerte" variant='blue'><span onClick={() => props.handleToggle()}>Offerte</span></Button>
            </VStack >
        </Flex >
    );
}