import { Box, Text, SimpleGrid, Container } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box bg="gray.200" mt={8}>
            <Container maxW='2xl'>
                <SimpleGrid minChildWidth='120px' spacing='40px'>
                    <Box bg='tomato'>
                        <Text textAlign="center" color="gray.500">
                            Tis Risk Managers 2024
                        </Text>
                    </Box>
                    <Box bg='tomato'>
                        <Text textAlign="center" color="gray.500">
                            Tis Risk Managers 2024
                        </Text>
                    </Box>
                    <Box bg='tomato'>
                        <Text textAlign="center" color="gray.500">
                            Tis Risk Managers 2024
                        </Text>
                    </Box>
                </SimpleGrid>
                <Box >
                    <Text textAlign="center" color="gray.500">
                        Tis Risk Managers 2024
                    </Text>
                </Box>
            </Container>
        </Box>
    );
}