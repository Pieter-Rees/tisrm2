import { Heading } from '@chakra-ui/react'
export default function ContainerLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            <Heading as={'h1'}>Container r</Heading>
            {children}
        </section>
    )
}