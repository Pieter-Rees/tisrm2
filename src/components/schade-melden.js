'use client'

import { Box, Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { BsTelephoneFill } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';

const SchadeMelden = () => {
    const [visibleElements, setVisibleElements] = useState([]);

    useEffect(() => {
        const timers = [0, 1].map(index => 
            setTimeout(() => {
                setVisibleElements(prev => [...prev, index]);
            }, index * 200)
        );

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <Box
            opacity={visibleElements.includes(0) ? 1 : 0}
            transform={`translateY(${visibleElements.includes(0) ? 0 : 20}px)`}
            transition="all 0.6s ease-out"
            _hover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease-out"
            }}
            _active={{
                scale: 0.98,
                transition: "all 0.1s ease-out"
            }}
        >
            <Button 
                width='full' 
                size='full' 
                variant='blue' 
                as='a' 
                href='https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen'
            >
                <Flex justifyContent='center' height='full' flexDirection='column' paddingTop='8' paddingBottom='6' gap='8'>
                    <Box
                        opacity={visibleElements.includes(1) ? 1 : 0}
                        transform={`scale(${visibleElements.includes(1) ? 1 : 0.9})`}
                        transition="all 0.5s ease-out"
                    >
                        <Heading as='h2' size='md' color='white'>
                            Schade melden
                        </Heading>
                    </Box>
                </Flex>
            </Button>
        </Box>
    )
}

export default SchadeMelden;