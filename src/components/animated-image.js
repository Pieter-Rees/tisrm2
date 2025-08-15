'use client'

import { Box } from '@chakra-ui/react';

const AnimatedImage = ({ 
  src, 
  alt, 
  width = 800, 
  height = 600, 
  priority = false,
  className = '',
  borderRadius = 'md',
  objectFit = 'cover'
}) => {
  return (
    <Box
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundImage={`url(${src})`}
      backgroundSize={objectFit}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      alt={alt}
      role="img"
      aria-label={alt}
    />
  );
};

export default AnimatedImage;
