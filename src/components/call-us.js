import { Box, Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { BsTelephoneFill } from 'react-icons/bs'


export default function CallUs() {
    return (
        <Flex justifyContent='center' height='full' flexDirection='column' padding='4' gap='4'>
            <Box color='white'>
                <BsTelephoneFill size='32px' />
            </Box>
            <Box>
                <Heading as='h1' size='xl' color='white'>
                    Bel ons!
                </Heading>
            </Box>
            <Box>
                <Text color='white'>
                    Direct antwoord op uw vragen?
                </Text>
                <Text color='white'>
                    {contactInfo.phone}
                </Text>
            </Box>
        </Flex>
    )
}