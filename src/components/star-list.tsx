'use client';

import { Box } from '@chakra-ui/react';
import { BsStarFill } from 'react-icons/bs';
import type { StarListProps } from '@/types/components';
import { LIST_STYLES } from '@/constants/typography';

export default function StarList({ listItems }: StarListProps) {
  return (
    <Box as="ul" {...LIST_STYLES.unordered}>
      {listItems.map((item, index) => (
        <Box as="li" key={index} {...LIST_STYLES.item}>
          <Box {...LIST_STYLES.itemIcon}>
            <BsStarFill size="16px" />
          </Box>
          <Box as="span">
            {item}
          </Box>
        </Box>
      ))}
    </Box>
  );
}