import { render, screen } from '@testing-library/react';

// Debug: Let's see what we're actually importing
console.log('Testing Field import...');
try {
  const { Field } = require('../field');
  console.log('Field imported successfully:', Field);
  console.log('Field type:', typeof Field);
  console.log('Field constructor:', Field?.constructor?.name);
} catch (error) {
  console.error('Error importing Field:', error);
}

describe('Field Component Debug', () => {
  it('should import Field component', () => {
    const { Field } = require('../field');
    expect(Field).toBeDefined();
    expect(typeof Field).toBe('function');
  });
});
