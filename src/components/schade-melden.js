import { Box, Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { BsTelephoneFill } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'

export default function SchadeMelden() {
    return (
        <Button width='full' size='full' variant='blue' as='a' href='https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen'>
            <Flex justifyContent='center' height='full' flexDirection='column' paddingTop='8' paddingBottom='6' gap='8'>
                <Box>
                    <Heading as='h2' size='md' color='white'>
                        Schade melden
                    </Heading>
                </Box>
            </Flex>
        </Button >
    )
}