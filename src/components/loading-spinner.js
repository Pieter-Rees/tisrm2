'use client'

import { Box, Spinner, Text, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  text = 'Loading...', 
  color = 'blue.500',
  showText = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transform={`scale(${isVisible ? 1 : 0.8})`}
      transition="all 0.3s ease-out"
    >
      <VStack spacing={3}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color={color}
          size={size}
        />
        {showText && (
          <Text color="gray.600" fontSize="sm">
            {text}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default LoadingSpinner;
