
import { HStack, Button, Show, Flex } from "@chakra-ui/react"
import Link from 'next/link'
import { Text } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
export default function Navbar() {
    return (
        <HStack color='gray' gap='8'>
            <Show above="lg">
                <Link href="/"><Text>Home</Text></Link>
                <Link href="/verzekeringen">Verzekeringen</Link>
                <Link href="/taxi">Taxi</Link>
                <Link href="/risk-management">Risk management</Link>
                <Link href="/over-ons">Over ons</Link>
                <Link href="/bestanden">Bestanden</Link>
                <Link href="/contact">Contact</Link>
                <Center height='50px'>
                    <Divider orientation='vertical' />
                </Center>
                <Button as='a' href="/offerte" color='white'>Offerte aanvragen</Button>
            </Show>
            <Show below="lg">
                <Flex flexDir='column'>
                    <Link href="/">Home</Link>
                    <Link href="/verzekeringen">Verzekeringen</Link>
                    <Link href="/taxi">Taxi</Link>
                    <Link href="/risk-management">Risk management</Link>
                    <Link href="/over-ons">Over ons</Link>
                    <Link href="/bestanden">Bestanden</Link>
                    <Link href="/contact">Contact</Link>
                </Flex>

            </Show>

        </HStack>
    )
}