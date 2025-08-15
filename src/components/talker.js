'use client'

import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { BsQuote } from 'react-icons/bs'
import AnimatedImage from './animated-image';

const Talker = () => {
    return (
        <Box
            paddingTop="64px"
            paddingBottom="64px"
            gap="16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                position="relative"
                display="flex"
                justifyContent="center"
                width="250px"
                height="250px"
                overflow="hidden"
                borderRadius="50%"
                boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            >
                <AnimatedImage
                    src="/rene.jpg"
                    alt="Picture of the author"
                    width={250}
                    height={250}
                    borderRadius="50%"
                />
            </Box>
            <Box
                textAlign="center"
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
            >
                <Box>
                    <BsQuote color='gray' size='64px' />
                </Box>
                <Box>
                    <Text fontSize="xl">
                        De weldaden van een verzekering komen samen met het onheil aan het licht.
                    </Text>
                </Box>
                <Box>
                    <Text fontWeight='bold' fontSize="xl">
                        Rene Enthoven <br />
                        Directeur TIS Risk Managers
                    </Text>
                </Box>
                <Box marginTop="4">
                    <Button
                        as='a'
                        href='/offerte'
                        variant='white'
                        size='lg'
                        bg='white'
                        color='black'
                        _hover={{ bg: 'gray.100' }}
                        _active={{ bg: 'gray.100' }}
                        paddingX='6'
                        paddingY='3'
                        fontSize='lg'
                        fontWeight='bold'
                        borderRadius='md'
                        textDecoration='none'
                    >
                        Offerte aanvragen
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Talker;