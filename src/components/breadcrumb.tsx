'use client';

import { SPACING_SCALE } from '@/constants/layout';
import { buildBreadcrumbItems } from '@/lib/seo/breadcrumbs';
import type { BreadcrumbProps } from '@/types/components';
import { Box, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb({
  separator = '>',
  listClasses = '',
  activeClasses = '',
  currentLabel,
}: BreadcrumbProps) {
  const pathname = usePathname();
  const items = buildBreadcrumbItems(pathname).map((item, index, all) =>
    currentLabel && index === all.length - 1 ?
      { ...item, name: currentLabel }
    : item,
  );

  return (
    <HStack
      as="ol"
      gap={SPACING_SCALE.sm}
      fontSize={{ base: 'sm', xl: 'md' }}
      color="text.secondary"
      listStyleType="none"
      m="0"
      p="0"
      flexWrap="wrap"
      rowGap={SPACING_SCALE.xs}
    >
      {items.map((item, index) => {
        const isCurrentPage = pathname === item.path;
        const itemClasses =
          isCurrentPage ? `${listClasses} ${activeClasses}` : listClasses;
        const isLast = index === items.length - 1;

        return (
          <Box
            as="li"
            key={item.path}
            className={itemClasses}
            fontWeight={isCurrentPage ? 'bold' : 'normal'}
            color={isCurrentPage ? 'text.accent' : 'text.secondary'}
            display="inline-flex"
            alignItems="center"
            gap={SPACING_SCALE.sm}
            _hover={{ color: 'blue.900' }}
          >
            {isCurrentPage ?
              <span aria-current="page">{item.name}</span>
            : <Link href={item.path as any}>{item.name}</Link>}
            {!isLast && (
              <Box as="span" aria-hidden="true" color="text.muted">
                {separator}
              </Box>
            )}
          </Box>
        );
      })}
    </HStack>
  );
}
