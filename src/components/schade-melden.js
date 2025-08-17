'use client'

import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { BsTelephoneFill } from 'react-icons/bs'
import Link from 'next/link'

export default function SchadeMelden() {
    return (
        <Link href='https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen'>
            <Button width='full' height='full' variant='blue'>
                <Flex justifyContent='center' height='full' flexDirection='column' pt='8' pb='6' gap='8'>
                    <Box>
                        <Heading as='h2' size='md' color='white'>
                            Schade melden
                        </Heading>
                    </Box>
                </Flex>
            </Button>
        </Link>
    )
}