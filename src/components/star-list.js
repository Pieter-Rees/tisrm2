'use client'

import { List, ListItem } from "@chakra-ui/react"
import { BsStarFill } from 'react-icons/bs'

export default function StarList({ listItems }) {
    return (
        <List gap={3} mb='4'>
            {listItems.map((item, index) => (
                <ListItem key={index} display='flex' alignItems='center'>
                    <BsStarFill color='blue.800' size='16px' style={{ marginRight: '8px', marginTop: '-4px' }} />
                    {item}
                </ListItem>
            ))}
        </List>
    )
}