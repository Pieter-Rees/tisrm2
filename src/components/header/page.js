'use client'

import Logo from "@/components/logo";
import Navbar from "@/components/navbar/page";
import Link from 'next/link'
import { Flex, Box, Divider, Hide } from "@chakra-ui/react";
import Sidenav from "@/components/sidenav"
import { useState } from "react";
import { BsList } from "react-icons/bs"

export default function Header() {
    const [showSideNav, setShowSideNav] = useState(false);

    const handleToggle = () => {
        setShowSideNav((showSideNav) => !showSideNav);
    };


    return (
        <Box>
            <Flex flexDirection='row' justifyContent='space-between' alignItems='center' bg="white" py={4} px={8} gap='8'>
                <Link href="/"><Logo width='200px' /></Link>
                <Navbar />
                <Hide above='xl'>
                    <Box>
                        <Box cursor='pointer' onClick={handleToggle}>
                            <BsList size='64' />
                        </Box>
                    </Box>
                </Hide>
            </Flex>
            <Sidenav showSideNav={showSideNav} handleToggle={handleToggle} />
        </Box>
    );
}