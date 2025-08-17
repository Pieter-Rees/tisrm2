'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HStack, Box } from '@chakra-ui/react';
import type { BreadcrumbProps } from '@/types/components';

export default function Breadcrumb({
  separator = '>',
  listClasses = '',
  activeClasses = '',
  capitalizeLinks = false,
}: BreadcrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  return (
    <HStack gap="8" fontSize={{ base: 'md', xl: 'lg' }} color="gray.700">
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isCurrentPage = paths === href;
        const itemClasses = isCurrentPage
          ? `${listClasses} ${activeClasses}`
          : listClasses;
        const itemLink = capitalizeLinks && link[0]
          ? link[0].toUpperCase() + link.slice(1, link.length)
          : link;

        return (
          <React.Fragment key={index}>
            <Box
              fontSize="xl"
              className={itemClasses}
              fontWeight={isCurrentPage ? 'bold' : 'normal'}
              color={isCurrentPage ? 'blue.600' : 'gray.700'}
            >
              {isCurrentPage ? (
                <span>{itemLink}</span>
              ) : (
                <Link href={href as any}>{itemLink}</Link>
              )}
            </Box>
            {pathNames.length !== index + 1 && (
              <Box color="gray.400">{separator}</Box>
            )}
          </React.Fragment>
        );
      })}
    </HStack>
  );
}
