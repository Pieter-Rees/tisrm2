'use client'

import { List, ListItem } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react';

const StarList = ({ listItems }) => {
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const timers = listItems.map((_, index) => 
            setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
            }, index * 100)
        );

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [listItems]);

    return (
        <List spacing={3} marginBottom='4'>
            {listItems.map((item, index) => (
                <ListItem 
                    key={index} 
                    display='flex' 
                    alignItems='center'
                    opacity={visibleItems.includes(index) ? 1 : 0}
                    transform={`translateX(${visibleItems.includes(index) ? 0 : -20}px)`}
                    transition="all 0.4s ease-out"
                    _hover={{
                        transform: "translateX(5px)",
                        transition: "transform 0.2s ease-out"
                    }}
                >
                    <StarIcon color='blue.800' boxSize='16px' marginRight='2' marginTop='-1' />
                    {item}
                </ListItem>
            ))}
        </List>
    )
}

export default StarList;