import React from 'react';
import { render, screen } from '@testing-library/react';

// Debug imports
import { Box, Button, Flex, HStack } from '@chakra-ui/react';

describe('Debug Navbar Imports', () => {
  it('should show what Chakra UI components are being imported', () => {
    console.log('Box type:', typeof Box);
    console.log('Box:', Box);
    console.log('Button type:', typeof Button);
    console.log('Button:', Button);
    console.log('Flex type:', typeof Flex);
    console.log('Flex:', Flex);
    console.log('HStack type:', typeof HStack);
    console.log('HStack:', HStack);
    
    // Try to render a simple component
    try {
      render(<Box>Test Box</Box>);
      console.log('Box rendered successfully');
    } catch (error) {
      console.log('Box render error:', error);
    }
    
    expect(true).toBe(true); // Always pass for debugging
  });
});
