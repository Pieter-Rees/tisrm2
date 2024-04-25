import { Box, Heading } from "@chakra-ui/react";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar/page";
import Link from 'next/link'

export default function Header() {
    return (
        <Box bg="brand.100" py={4} px={8}>
            <Heading color="white" size="lg" display='flex' justifyContent='space-between'>
                <Link href="/"><Logo /></Link>


                <Navbar />
            </Heading>
        </Box>
    );
}