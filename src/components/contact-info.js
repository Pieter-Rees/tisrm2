import { Box, SimpleGrid, UnorderedList, ListItem, Divider } from '@chakra-ui/react'
import { contactInfo } from "../data/general";
import { Button } from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'
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
                    <ListItem>
                        <Button display='inline-flex' justifyContent='start' size='full' variant='link' as='a' href={'tel:' + 'pageInfo.phone'}>
                            <span >
                                {contactInfo.phone}

                            </span>
                        </Button>
                    </ListItem>
                    <ListItem >
                        <Button display='inline-flex' justifyContent='start' size='full' variant='link' as='a' href={'mailto:' + 'pageInfo.email'}>
                            {contactInfo.email}
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button marginTop='1' display='inline-flex' justifyContent='start' size='full' variant='link' as='a' target='_blank' href={contactInfo.linkedIn}>
                            <BsLinkedin size='24' />

                        </Button>
                    </ListItem>
                </UnorderedList>
            </Box>
        </>

    )
}