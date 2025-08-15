'use client'

import { Box, VStack, HStack, Text, Skeleton } from '@chakra-ui/react';
import LoadingSpinner from './loading-spinner';
import { useState, useEffect } from 'react';

const LoadingState = ({ 
  type = 'spinner', 
  message = 'Loading...', 
  size = 'md',
  showSkeleton = false,
  skeletonLines = 3,
  skeletonHeight = '20px',
  fullScreen = false
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (fullScreen) {
    return (
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor="rgba(255, 255, 255, 0.95)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={9999}
        opacity={isVisible ? 1 : 0}
        transition="opacity 0.3s ease-out"
      >
        <VStack spacing={6}>
          <LoadingSpinner size="lg" text={message} />
        </VStack>
      </Box>
    );
  }

  if (type === 'skeleton' || showSkeleton) {
    return (
      <Box
        opacity={isVisible ? 1 : 0}
        transition="opacity 0.5s ease-out"
        width="100%"
      >
        <VStack spacing={4} align="stretch">
          <Skeleton
            height={skeletonHeight}
            borderRadius="md"
            startColor="gray.100"
            endColor="gray.300"
          />
          {Array.from({ length: skeletonLines - 1 }).map((_, index) => (
            <Skeleton
              key={index}
              height={skeletonHeight}
              borderRadius="md"
              startColor="gray.100"
              endColor="gray.300"
              width={index === skeletonLines - 2 ? '60%' : '100%'}
            />
          ))}
        </VStack>
      </Box>
    );
  }

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.3s ease-out"
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingTop="32px"
      paddingBottom="32px"
    >
      <VStack spacing={4}>
        <LoadingSpinner size={size} text={message} />
      </VStack>
    </Box>
  );
};

export default LoadingState;
