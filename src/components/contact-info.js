import { Box, SimpleGrid, UnorderedList, ListItem, Divider } from '@chakra-ui/react'
import { contactInfo } from "../data/general";

export default function ContactInfo({ variant }) {
    return (
        <>
            <SimpleGrid minChildWidth='120px' spacing='40px'>
                <Box>
                    <UnorderedList variant={variant}>
                        <ListItem>{contactInfo.address}</ListItem>
                        <ListItem>{contactInfo.email}</ListItem>
                        <ListItem>{contactInfo.city}</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList variant={variant}>
                        <ListItem>{contactInfo.postalBox}</ListItem>
                        <ListItem>{contactInfo.postalCode}</ListItem>
                        <ListItem>{contactInfo.city}</ListItem>
                    </UnorderedList>
                </Box>
            </SimpleGrid>
            <Divider orientation='horizontal' />
            <Box>
                <UnorderedList variant={variant}>
                    <ListItem>{contactInfo.phone}</ListItem>
                    <ListItem>{contactInfo.email}</ListItem>
                    <ListItem>{contactInfo.linkedIn}</ListItem>
                </UnorderedList>
            </Box>
        </>

    )
}