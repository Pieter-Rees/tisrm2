'use client'

import { Box, Text, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const ProgressBar = ({ 
  progress = 0, 
  total = 100, 
  showPercentage = true, 
  color = 'blue.500',
  height = '8px',
  borderRadius = 'full',
  animate = true,
  duration = 0.8
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const percentage = Math.min((progress / total) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animate) {
      setDisplayProgress(percentage);
    } else {
      setDisplayProgress(percentage);
    }
  }, [percentage, animate]);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transform={`translateY(${isVisible ? 0 : 10}px)`}
      transition="all 0.5s ease-out"
      width="100%"
    >
      <VStack spacing={2} align="stretch">
        <Box
          bg="gray.200"
          height={height}
          borderRadius={borderRadius}
          overflow="hidden"
          position="relative"
        >
          <Box
            style={{
              backgroundColor: color,
              height: "100%",
              borderRadius: borderRadius,
              position: "relative",
              width: `${displayProgress}%`
            }}
            transition={`width ${animate ? duration : 0}s ease-out`}
          >
            {showPercentage && (
              <Text
                position="absolute"
                right="8px"
                top="50%"
                transform="translateY(-50%)"
                fontSize="xs"
                color="white"
                fontWeight="bold"
                textShadow="0 1px 2px rgba(0,0,0,0.5)"
              >
                {Math.round(percentage)}%
              </Text>
            )}
          </Box>
        </Box>
        
        {showPercentage && (
          <Text fontSize="sm" color="gray.600" textAlign="center">
            {progress} van {total} voltooid
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default ProgressBar;
