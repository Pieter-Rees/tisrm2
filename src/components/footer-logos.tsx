'use client';

import { SPACING_PATTERNS } from '@/constants/layout';
import type { FooterLogosProps } from '@/types/components';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
// import {
//   footerLogosContainerStyles,
//   footerLogoItemStyles,
// } from '@/styles/components/utility.styles';

const logos = [
  { src: '/logos/sbb.png', alt: 'SBB Logo' },
  { src: '/logos/grmc.png', alt: 'GRMC Logo' },
  { src: '/logos/kifid.png', alt: 'Kifid Logo' },
] as const;

export default function FooterLogos({ height = 'auto' }: FooterLogosProps) {
  return (
    <Flex
      backgroundColor="gray.100"
      flexDirection={{ base: 'column', md: 'row' }}
      py={SPACING_PATTERNS.page.section}
      gap={SPACING_PATTERNS.page.section}
      width="full"
      justifyContent="center"
      alignItems="center"
      mt={SPACING_PATTERNS.page.section}
    >
      {logos.map(({ src, alt }) => (
        <Box key={src} height={height} width="200px">
          <Image src={src} alt={alt} width={1000} height={1000} />
        </Box>
      ))}
    </Flex>
  );
}
