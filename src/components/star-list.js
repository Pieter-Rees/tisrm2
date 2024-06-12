'use client'

import { List, ListItem } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

export default function StarList({ listItems }) {
    return (
        <List spacing={3} marginBottom='4'>
            {listItems.map((item, index) => (
                <ListItem key={index} display='flex' alignItems='center'>
                    <StarIcon color='blue.700' boxSize='16px' marginRight='2' marginTop='-1' />
                    {item}
                </ListItem>
            ))}
        </List>
    )
}