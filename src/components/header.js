'use client'

import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import Link from 'next/link'
import { Flex, Box, Container, Button } from "@chakra-ui/react";
import Sidenav from "@/components/sidenav"
import { useState } from "react";
import { BsList } from "react-icons/bs"

export default function Header() {
    const [showSideNav, setShowSideNav] = useState(false);

    const handleToggle = () => {
        setShowSideNav((showSideNav) => !showSideNav);
    };


    return (
        <Container>
            <Flex flexDirection='row' justifyContent='space-between' alignItems='center' bg="white" py={4} gap='8'>
                <Link href="/"><Logo width='200px' /></Link>
                <Navbar />
                <Box hideFrom='xl'>
                    <Button variant='ghost' onClick={handleToggle}>
                        <BsList size='24px' />
                    </Button>
                </Box>
            </Flex>
            <Sidenav showSideNav={showSideNav} handleToggle={handleToggle} />
        </Container>
    )
}