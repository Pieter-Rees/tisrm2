import { Box, Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { BsTelephoneFill } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'

export default function CallUs() {
    return (
        <Button width='full' size='full' variant='blue' as='a' href={'tel:' + 'contactInfo.phone'}>
            <Flex justifyContent='center' height='full' flexDirection='column' padding='8' gap='8'>
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
        </Button >
    )
}