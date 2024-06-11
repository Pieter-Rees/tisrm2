import { Flex } from "@chakra-ui/react";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar/page";
import Link from 'next/link'
import { Divider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react";
export default function Header() {
    return (
        <Box>
            <Flex flexDirection={{ base: 'column', lg: 'row' }} justifyContent='space-between' bg="white" py={4} px={8} gap='4'>
                <Link href="/"><Logo width='200px' /></Link>
                <Navbar />
            </Flex>
            <Divider />
        </Box>

    );
}