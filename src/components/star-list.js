'use client'

import { List, ListItem } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const StarList = ({ listItems }) => {
  return (
    <List spacing={3} marginBottom="0">
      {listItems.map((item) => (
        <ListItem key={item} display="flex" alignItems="flex-start">
          <StarIcon color="gold.500" boxSize="14px" marginRight="3" marginTop="1" flexShrink={0} />
          {item}
        </ListItem>
      ))}
    </List>
  )
}

export default StarList
