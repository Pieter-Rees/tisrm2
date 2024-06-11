import { Flex, VStack } from "@chakra-ui/react"
import Link from 'next/link'
import { Button, Center, Divider } from "@chakra-ui/react"
import Logo from "@/components/logo"
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'

export default function Sidenav({ showSideNav }) {
    return (
        <Slide direction='bottom' in={showSideNav} style={{ zIndex: 10 }}>
            <Flex padding='8' gap='8' flexDirection='column' zIndex='10' backgroundColor='white' position='fixed' left={showSideNav ? '0' : '-500px'} top='0' alignItems='center' justifyContent='center' height='full' >
                <Flex paddingY='12' justifyContent='center'>
                    <Link href="/"><Logo /></Link>
                </Flex>
                <VStack gap='8' fontSize={{ base: 'xl', '2xl': '2xl' }}>
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
                </VStack >
            </Flex >
        </Slide>
    );
}