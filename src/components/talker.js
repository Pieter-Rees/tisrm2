'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { BsQuote } from 'react-icons/bs'

export default function Talker() {
    return (
        <Flex py='16' gap={{ base: '4', lg: '16' }} flexDirection={{
            base: 'column', lg: 'row'
        }} justifyContent='center' alignItems='center' >
            <Flex position='relative' justifyContent='center' width='250px' height='250px' overflow='hidden' borderRadius='50%' boxShadow='lg'>
                <Image
                    src="/rene.jpg"
                    alt="Picture of the author"
                    width={250}
                    height={250}
                />
            </Flex>
            <Flex textAlign='center' alignItems='center' flexDirection='column' justifyContent='center'>
                <BsQuote color='#4A5568' size='64px' />
                <Text color='gray.800'>
                    De weldaden van een verzekering komen samen met het onheil aan het licht.
                </Text>
                <Text fontWeight='bold' color='gray.900'>
                    Rene Enthoven <br />
                    Directeur TIS Risk Managers
                </Text>
            </Flex>
        </Flex >
    )
}