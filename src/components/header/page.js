import { Box, Heading } from "@chakra-ui/react";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar/page";

export default function Header() {
    return (
        <Box bg="brand.100" py={4} px={8}>
            <Heading color="white" size="lg" display='flex' justifyContent='space-between'>
                <Logo />
                <Navbar />
            </Heading>
        </Box>
    );
}