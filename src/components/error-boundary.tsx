'use client';

import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import {
  errorBoundaryContainerStyles,
  errorBoundaryContentStyles,
  errorBoundaryHeadingStyles,
  errorBoundaryTextStyles,
  errorBoundaryButtonStyles,
} from '@/styles/components/utility.styles';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minH="200px"
          p="8"
        >
          <VStack gap="4" textAlign="center">
            <Heading fontSize="lg" color="red.500">
              Er is iets misgegaan
            </Heading>
            <Text color="gray.600">
              Er is een onverwachte fout opgetreden. Probeer de pagina te
              herladen.
            </Text>
            <Button
              onClick={() => window.location.reload()}
              colorScheme="blue"
              size="sm"
            >
              Pagina herladen
            </Button>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}
