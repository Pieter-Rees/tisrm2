'use client'

import { Box } from "@chakra-ui/react"
import { BsStarFill } from 'react-icons/bs'

export default function StarList({ listItems }) {
    return (
        <Box as="ul" mb="4" pl="0" listStyleType="none">
            {listItems.map((item, index) => (
                <Box as="li" key={index} display="flex" alignItems="center" mb="3">
                    <BsStarFill color='#2C5282' size='16px' style={{ marginRight: '8px', marginTop: '-4px' }} />
                    <Box as="span" color="gray.800">{item}</Box>
                </Box>
            ))}
        </Box>
    )
}