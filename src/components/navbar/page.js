
import { HStack, Button, Show, Flex } from "@chakra-ui/react"
import Link from 'next/link'

export default function Navbar() {

    return (
        <HStack>
            <Show above="lg">
                <Link href="/"><Button>Home</Button></Link>
                <Link href="/verzekeringen"><Button>Verzekeringen</Button></Link>
                <Link href="/taxi"><Button>Taxi</Button></Link>
                <Link href="/risk-management"><Button>Risk management</Button></Link>
                <Link href="/over-ons"><Button>Over ons</Button></Link>
                <Link href="/bestanden"><Button>Bestanden</Button></Link>
                <Link href="/contact"><Button>Contact</Button></Link>
            </Show>
            <Show below="lg">
                <Flex flexDir='column'>
                    <Link href="/"><Button>Home</Button></Link>
                    <Link href="/verzekeringen"><Button>Verzekeringen</Button></Link>
                    <Link href="/taxi"><Button>Taxi</Button></Link>
                    <Link href="/risk-management"><Button>Risk management</Button></Link>
                    <Link href="/over-ons"><Button>Over ons</Button></Link>
                    <Link href="/bestanden"><Button>Bestanden</Button></Link>
                    <Link href="/contact"><Button>Contact</Button></Link>
                </Flex>

            </Show>

        </HStack>
    )
}