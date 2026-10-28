'use client';

import { Box } from '@chakra-ui/react';
import Image from 'next/image';

type SectionImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Skips lazy loading for images that are visible above the fold. */
  eager?: boolean;
  /** Overrides the default two-column `sizes` hint. */
  sizes?: string;
};

export default function SectionImage({
  src,
  alt,
  width,
  height,
  eager = false,
  sizes = '(min-width: 48em) 50vw, 100vw',
}: SectionImageProps) {
  return (
    <Box width="full" borderRadius="xl" boxShadow="md" overflow="hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={eager ? 'eager' : 'lazy'}
        style={{ display: 'block', width: '100%', height: 'auto' }}
      />
    </Box>
  );
}
