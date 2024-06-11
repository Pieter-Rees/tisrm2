import { Flex, VStack } from "@chakra-ui/react"
import Link from 'next/link'
import { Button, Center, Divider } from "@chakra-ui/react"
import Logo from "@/components/logo"

export default function Sidenav() {
    return (
        <Flex gap='8' flexDirection='column' zIndex='10' backgroundColor='white' position='fixed' left='0' top='0' alignItems='center' justifyContent='center' width='full' height='full' >
            <Flex width='100%' paddingY='12' justifyContent='center'>
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
        </Flex>

    );
}