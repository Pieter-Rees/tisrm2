'use client';

import type { BreadcrumbProps } from '@/types/components';
import { buildBreadcrumbItems } from '@/lib/seo/breadcrumbs';
import { SPACING_SCALE } from '@/constants/layout';
import { Box, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb({
  separator = '>',
  listClasses = '',
  activeClasses = '',
}: BreadcrumbProps) {
  const pathname = usePathname();
  const items = buildBreadcrumbItems(pathname);

  return (
    <HStack
      as="ol"
      gap={SPACING_SCALE.sm}
      fontSize={{ base: 'md', xl: 'lg' }}
      color="gray.700"
      listStyleType="none"
      m="0"
      p="0"
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
            fontSize="xl"
            fontWeight={isCurrentPage ? 'bold' : 'normal'}
            color={isCurrentPage ? 'blue.600' : 'gray.700'}
            display="inline-flex"
            alignItems="center"
            gap={SPACING_SCALE.sm}
          >
            {isCurrentPage ?
              <span aria-current="page">{item.name}</span>
            : <Link href={item.path as any}>{item.name}</Link>}
            {!isLast && (
              <Box as="span" aria-hidden="true" color="gray.400">
                {separator}
              </Box>
            )}
          </Box>
        );
      })}
    </HStack>
  );
}
