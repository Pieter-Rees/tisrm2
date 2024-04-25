import { Box, Text, SimpleGrid, Container } from "@chakra-ui/react";
import { contactInfo, currentYear } from "@/data/general";
export default function Footer() {
    return (
        <Box bg="gray.200" mt={8}>
            <Container maxW='2xl'>
                <SimpleGrid minChildWidth='120px' spacing='40px'>
                    <Box bg='tomato'>
                        <Text textAlign="center" color="gray.500">
                            {contactInfo.name}
                        </Text>
                    </Box>
                    <Box bg='tomato'>
                        <Text textAlign="center" color="gray.500">
                            {contactInfo.name}

                        </Text>
                    </Box>
                    <Box >
                        <Text textAlign="center" color="gray.500">
                            {contactInfo.address}
                            {contactInfo.email}
                            {contactInfo.phone}

                        </Text>
                    </Box>
                </SimpleGrid>
                <Box >
                    <Text textAlign="center" color="gray.500">
                        Tis Risk Managers {currentYear}
                    </Text>
                </Box>
            </Container>
        </Box>
    );
}