"use client"

import { HStack, Button, Show, Flex, Center, Box, Divider, Hide } from "@chakra-ui/react"
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [visibleElements, setVisibleElements] = useState([]);

    useEffect(() => {
        const timers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99].map(index => 
            setTimeout(() => {
                setVisibleElements(prev => [...prev, index]);
            }, index * 20)
        );

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    const handleSchadeClick = () => {
        // Open in new window without referrer
        window.open('https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen', '_blank', 'noopener,noreferrer');
    };

    return (
        <Flex alignItems='center'>
            <Hide below='xl'>
                <HStack gap='8' fontSize={{ base: 'md', '2xl': 'xl' }}>
                    <Box
                        opacity={visibleElements.includes(0) ? 1 : 0}
                        transform={`translateY(${visibleElements.includes(0) ? 0 : -10}px)`}
                        transition="all 0.2s ease-out"
                        _hover={{
                            transform: "translateY(-2px) scale(1.05)",
                            transition: "all 0.2s ease-out"
                        }}
                    >
                        <Link href="/">Home</Link>
                    </Box>
                    <Box
                        opacity={visibleElements.includes(1) ? 1 : 0}
                        transform={`translateY(${visibleElements.includes(1) ? 0 : -10}px)`}
                        transition="all 0.2s ease-out"
                        _hover={{
                            transform: "translateY(-2px) scale(1.05)",
                            transition: "all 0.2s ease-out"
                        }}
                    >
                        <Link href="/verzekeringen">Verzekeringen</Link>
                    </Box>
                    <Box
                        opacity={visibleElements.includes(2) ? 1 : 0}
                        transform={`translateY(${visibleElements.includes(2) ? 0 : -10}px)`}
                        transition="all 0.2s ease-out"
                        _hover={{
                            transform: "translateY(-2px) scale(1.05)",
                            transition: "all 0.2s ease-out"
                        }}
                    >
                        <Link href="/taxi">Taxi</Link>
                    </Box>
                    <Box
                        opacity={visibleElements.includes(3) ? 1 : 0}
                        transform={`translateY(${visibleElements.includes(3) ? 0 : -10}px)`}
                        transition="all 0.2s ease-out"
                        _hover={{
                            transform: "translateY(-2px) scale(1.05)",
                            transition: "all 0.2s ease-out"
                        }}
                    >
                        <Link href="/risk-management">Risk Management</Link>
                    </Box>
                    <Box
                        opacity={visibleElements.includes(4) ? 1 : 0}
                        transform={`translateY(${visibleElements.includes(4) ? 0 : -10}px)`}
                        transition="all 0.2s ease-out"
                        _hover={{
                            transform: "translateY(-2px) scale(1.05)",
                            transition: "all 0.2s ease-out"
                        }}
                    >
                        <Link href="/over-ons">Over ons</Link>
                    </Box>
                    <Box
                        opacity={visibleElements.includes(5) ? 1 : 0}
                        transform={`translateY(${visibleElements.includes(5) ? 0 : -10}px)`}
                        transition="all 0.2s ease-out"
                        _hover={{
                            transform: "translateY(-2px) scale(1.05)",
                            transition: "all 0.2s ease-out"
                        }}
                    >
                        <Link href="/bestanden">Bestanden</Link>
                    </Box>
                    <Box
                        opacity={visibleElements.includes(6) ? 1 : 0}
                        transform={`translateY(${visibleElements.includes(6) ? 0 : -10}px)`}
                        transition="all 0.2s ease-out"
                        _hover={{
                            transform: "translateY(-2px) scale(1.05)",
                            transition: "all 0.2s ease-out"
                        }}
                    >
                        <Link href="/contact">Contact</Link>
                    </Box>
                    <Center height='50px'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Flex flexDir='column' gap='4'>
                        <Box
                            opacity={visibleElements.includes(7) ? 1 : 0}
                            transform={`scale(${visibleElements.includes(7) ? 1 : 0.9})`}
                            transition="all 0.2s ease-out"
                            _hover={{
                                scale: 1.05,
                                transform: "translateY(-2px)",
                                transition: "all 0.2s ease-out"
                            }}
                            _active={{
                                scale: 0.95,
                                transition: "all 0.1s ease-out"
                            }}
                        >
                            <Button
                                as='a'
                                href="/offerte"
                                variant='blue'
                                width='100%'
                                minWidth='100%'
                            >
                                Offerte aanvragen
                            </Button>
                        </Box>
                        <Box
                            opacity={visibleElements.includes(8) ? 1 : 0}
                            transform={`scale(${visibleElements.includes(8) ? 1 : 0.9})`}
                            transition="all 0.2s ease-out"
                            _hover={{
                                scale: 1.05,
                                transform: "translateY(-2px)",
                                transition: "all 0.2s ease-out"
                            }}
                            _active={{
                                scale: 0.95,
                                transition: "all 0.1s ease-out"
                            }}
                        >
                            <Button
                                variant='blue'
                                onClick={handleSchadeClick}
                                width='100%'
                                minWidth='100%'
                            >
                                Schade melden
                            </Button>
                        </Box>
                    </Flex>
                </HStack >
            </Hide >
        </Flex >
    )
}