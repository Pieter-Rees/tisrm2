import Logo from "@/components/logo";
import Navbar from "@/components/navbar/page";
import Link from 'next/link'
import { Divider } from '@chakra-ui/react'
import { Flex, Box } from "@chakra-ui/react";
export default function Header() {
    return (
        <Box>
            <Flex flexDirection='row' justifyContent='space-between' bg="white" py={4} px={8} gap='8'>
                <Link href="/"><Logo width='200px' /></Link>
                <Navbar />
            </Flex>
            <Divider />
        </Box>

    );
}