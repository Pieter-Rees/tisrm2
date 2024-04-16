import { Box, Heading } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box bg="brand.100" py={4} px={8}>
            <Heading color="white" size="lg">
                Header
            </Heading>
        </Box>
    );
}