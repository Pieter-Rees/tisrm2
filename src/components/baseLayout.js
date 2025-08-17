'use client'

import { Heading, Flex } from '@chakra-ui/react'

export default function BaseLayout({
    title,
    children,
}) {
    return (
        <Flex width='full' flexDirection='column'>
            <Flex width='full' justifyContent='space-between' flexDirection={{ base: 'column', lg: 'row' }} mb='4'>
                <Heading as='h1' variant='xl'>{title}</Heading>
            </Flex>
            {children}
        </Flex >
    )
}