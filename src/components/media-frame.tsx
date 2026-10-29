import { isProductImage } from '@/constants/images';
import { Box, Image } from '@chakra-ui/react';
import type { ResponsiveValue } from '@/types/components';

/** Navy wash that keeps hero copy legible over a photograph. */
export function PhotoVeil() {
  return (
    <>
      <Box
        position="absolute"
        inset="0"
        bgImage="linear-gradient(to right, rgba(11,31,58,0.58) 0%, rgba(11,31,58,0.24) 52%, rgba(11,31,58,0.1) 100%)"
      />
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        bgImage="linear-gradient(to top, rgba(11,31,58,0.88) 0%, rgba(11,31,58,0.6) 65%, rgba(11,31,58,0.15) 100%)"
      />
    </>
  );
}

interface MediaFrameProps {
  src: string;
  alt?: string;
  height?: ResponsiveValue<string>;
  minHeight?: ResponsiveValue<string>;
  objectPosition?: string;
  /** Set on an above-the-fold hero so the image is not lazy-loaded. */
  priority?: boolean;
}

const MediaFrame = ({
  src,
  alt = '',
  height = '100%',
  minHeight,
  objectPosition = 'center',
  priority = false,
}: MediaFrameProps) => {
  const loadingProps =
    priority ?
      ({ loading: 'eager', fetchPriority: 'high' } as const)
    : ({ loading: 'lazy' } as const);

  if (isProductImage(src)) {
    return (
      <Box
        width="100%"
        height={height}
        minHeight={minHeight}
        bg="navy.800"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: 8, md: 14 }}
        py={{ base: 8, md: 12 }}
        overflow="hidden"
      >
        <Image
          src={src}
          alt={alt}
          maxW="100%"
          maxH={{ base: '220px', md: '380px' }}
          width="auto"
          height="auto"
          objectFit="contain"
          {...loadingProps}
        />
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      width="100%"
      height={height}
      minHeight={minHeight}
      overflow="hidden"
    >
      <Image
        src={src}
        alt={alt}
        position="absolute"
        inset="0"
        width="100%"
        height="100%"
        objectFit="cover"
        objectPosition={objectPosition}
        {...loadingProps}
      />
    </Box>
  );
};

export default MediaFrame;
