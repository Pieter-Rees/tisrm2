'use client';

import { LIST_STYLES } from '@/constants/typography';
import type { StarListProps } from '@/types/components';
import { Box } from '@chakra-ui/react';
import { BsStarFill } from 'react-icons/bs';

export default function StarList({ listItems }: StarListProps) {
  return (
    <Box as="ul" {...LIST_STYLES.unordered}>
      {listItems.map((item, index) => (
        <Box as="li" key={index} {...LIST_STYLES.item}>
          <Box {...LIST_STYLES.itemIcon}>
            <BsStarFill size="16px" />
          </Box>
          <Box as="span">{item}</Box>
        </Box>
      ))}
    </Box>
  );
}
