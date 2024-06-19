import { Heading, Flex } from '@chakra-ui/react'

export default function GridLayout({
    title,
    children,
}) {
    return (
        <Flex width='full' flexDirection='column'>
            <Flex width='full' justifyContent='space-between' flexDirection={{ base: 'column', lg: 'row' }} marginBottom='4'>
                <Heading as='h1' variant='xl'>{title}</Heading>
            </Flex>
            {children}
        </Flex >
    )
}