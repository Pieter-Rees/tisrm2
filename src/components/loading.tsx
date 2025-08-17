'use client';

import { Box, Spinner, VStack, Text } from '@chakra-ui/react';
import type { ComponentProps } from 'react';

interface LoadingProps {
  size?: ComponentProps<typeof Spinner>['size'];
  text?: string;
  fullScreen?: boolean;
}

export default function Loading({
  size = 'lg',
  text = 'Laden...',
  fullScreen = false,
}: LoadingProps) {
  const content = (
    <VStack gap="4">
      <Spinner size={size} color="blue.500" />
      {text && (
        <Text fontSize="sm" color="gray.600">
          {text}
        </Text>
      )}
    </VStack>
  );

  if (fullScreen) {
    return (
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
        zIndex="9999"
      >
        {content}
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="200px"
      p="8"
    >
      {content}
    </Box>
  );
}
