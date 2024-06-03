import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { BsQuote } from 'react-icons/bs'

export default function Talker() {
    return (
        <Flex paddingY='16' gap='16' justifyContent='center' alignItems='center'>
            <Flex justifyContent='center' width='140px' height='140px' borderRadius='50%' overflow='hidden'>
                <Image
                    borderRadius='lg'
                    src="/shrek.jpg"
                    alt="Picture of the author"
                    width='140'
                    height='140'
                />
            </Flex>

            <Flex textAlign='center' alignItems='center' flexDirection='column' justifyContent='center'>
                <BsQuote color='gray' size='64px' />

                <Text>
                    De weldaden van een verzekering komen samen met het onheil aan het licht.
                </Text>

                <Text fontWeight='bold'>
                    Rene Enthoven <br />
                    Directeur TIS Risk Managers
                </Text>
            </Flex>

        </Flex >
    )
}