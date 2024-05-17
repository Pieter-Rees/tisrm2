import { Box, Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { contactInfo } from "@/data/general";
import { BsTelephoneFill } from 'react-icons/bs'


export default function CallUs() {
    return (
        <Flex justifyContent='center' height='full' flexDirection='column' color='white' paddingX='4' gap='4'>
            <Box>
                <BsTelephoneFill size='32px' />

            </Box>
            <Box>
                <Heading as='h1' size='xl'>
                    Bel ons!
                </Heading>
            </Box>
            <Box>
                <Text>
                    Direct antwoord op uw vragen?
                </Text>
                <Text>
                    {contactInfo.phone}
                </Text>
            </Box>
        </Flex>
    )
}