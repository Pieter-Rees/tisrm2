'use client'

import { Box, Skeleton, VStack, HStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const SkeletonLoader = ({ 
  lines = 3, 
  height = '20px', 
  spacing = 3,
  width = '100%',
  showImage = false,
  imageHeight = '200px'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease-out"
      width={width}
    >
      <VStack spacing={spacing} align="stretch">
        {showImage && (
          <Skeleton
            height={imageHeight}
            borderRadius="md"
            startColor="gray.100"
            endColor="gray.300"
          />
        )}
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            height={height}
            borderRadius="md"
            startColor="gray.100"
            endColor="gray.300"
            width={index === lines - 1 ? '60%' : '100%'}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default SkeletonLoader;
