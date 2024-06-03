import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'

export default function FooterLogos({ width, height }) {
    return (
        <Flex paddingY='8' gap='4' width='full' justifyContent='center' alignItems='center'>
            <Box height='auto' width='200px'>
                <Image
                    src="/logos/sbb.png"
                    alt="Picture of the author"
                    width='1000' height='1000'

                />
            </Box>
            <Box height='auto' width='200px' >
                <Image
                    src="/logos/grmc.png"
                    alt="Picture of the author"
                    width='1000' height='1000'
                />
            </Box>
            <Box height='auto' width='200px' >
                <Image
                    src="/logos/kifid.png"
                    alt="Picture of the author"
                    width='1000' height='1000'
                />
            </Box>

        </Flex >
    )
}