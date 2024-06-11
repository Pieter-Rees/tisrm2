import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { BsQuote } from 'react-icons/bs'

export default function Talker() {
    return (
        <Flex paddingY='16' gap={{ base: '4', lg: '16' }} flexDirection={{
            base: 'column', lg: 'row'
        }} justifyContent='center' alignItems='center' >
            <Flex position='relative' justifyContent='center' width='250px' height='250px' borderRadius='50%' overflow='hidden'>
                <Image
                    borderRadius='lg'
                    src="/rene.jpg"
                    alt="Picture of the author"
                    fill={true}
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