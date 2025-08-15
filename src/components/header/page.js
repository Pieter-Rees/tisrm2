'use client'

import Logo from "@/components/logo";
import Navbar from "@/components/navbar/page";
import Link from 'next/link'
import { Flex, Box, Container, Hide } from "@chakra-ui/react";
import Sidenav from "@/components/sidenav"
import { useState, useEffect } from "react";
import { BsList } from "react-icons/bs"

export default function Header() {
    const [showSideNav, setShowSideNav] = useState(false);
    const [visibleElements, setVisibleElements] = useState([]);

    useEffect(() => {
        const timers = [0, 1, 2, 3].map(index => 
            setTimeout(() => {
                setVisibleElements(prev => [...prev, index]);
            }, index * 100)
        );

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    const handleToggle = () => {
        setShowSideNav((showSideNav) => !showSideNav);
    };

    return (
        <Container>
            <Flex
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                bg="white"
                py={4}
                gap='8'
                opacity={visibleElements.includes(0) ? 1 : 0}
                transform={`translateY(${visibleElements.includes(0) ? 0 : -20}px)`}
                transition="all 0.6s ease-out"
            >
                <Box
                    opacity={visibleElements.includes(1) ? 1 : 0}
                    transform={`translateX(${visibleElements.includes(1) ? 0 : -20}px)`}
                    transition="all 0.6s ease-out"
                >
                    <Link href="/"><Logo width='200px' /></Link>
                </Box>

                <Box
                    opacity={visibleElements.includes(2) ? 1 : 0}
                    transform={`translateY(${visibleElements.includes(2) ? 0 : -10}px)`}
                    transition="all 0.6s ease-out"
                >
                    <Navbar />
                </Box>

                <Hide above='xl'>
                    <Box
                        opacity={visibleElements.includes(3) ? 1 : 0}
                        transform={`scale(${visibleElements.includes(3) ? 1 : 0.8})`}
                        transition="all 0.4s ease-out"
                        cursor='pointer'
                        onClick={handleToggle}
                        _hover={{
                            scale: 1.1,
                            transition: "all 0.3s ease-out"
                        }}
                        _active={{
                            scale: 0.95,
                            transition: "all 0.1s ease-out"
                        }}
                    >
                        <BsList size='64' />
                    </Box>
                </Hide>
            </Flex>
            <Sidenav showSideNav={showSideNav} handleToggle={handleToggle} />
        </Container>
    );
}