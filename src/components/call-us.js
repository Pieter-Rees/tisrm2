'use client'

import { Box, Flex, Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

const CallUs = () => {
    return (
        <Button
            as='a'
            href='tel:+310206368191'
            width='full'
            size='full'
            variant='blue'
            bg='blue.800'
            _hover={{ bg: 'blue.700' }}
            _active={{ bg: 'blue.700' }}
            borderRadius='0'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            height='full'
            padding='8'
            gap='8'
            textDecoration='none'
        >
            <Box color='white'>
                <BsTelephoneFill size='32px' />
            </Box>
            
            <Box textAlign='center'>
                <Heading as='h2' size='md' color='white' marginBottom='2'>
                    Direct antwoord op uw vragen?
                    <br />
                    Bel ons!
                </Heading>
                <Text color='white' fontSize='xl'>
                    +31 20 636 8191
                </Text>
            </Box>
        </Button>
    )
}

export default CallUs;