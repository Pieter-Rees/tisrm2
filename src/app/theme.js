import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        blue: {
          500: { value: '#00a3ff' },
          700: { value: '#0077cc' },
          900: { value: '#005299' },
        },
        gray: {
          500: { value: '#abadaf' },
          600: { value: '#7d7f83' },
          700: { value: '#33373d' },
          800: { value: '#1d2025' },
          900: { value: '#171a1d' },
        },
      },
      fonts: {
        heading: { value: 'system-ui, sans-serif' },
        body: { value: 'system-ui, sans-serif' },
      },
      fontSizes: {
        xl: { value: '1.25rem' },
        '2xl': { value: '1.5rem' },
        '4xl': { value: '2.25rem' },
        '6xl': { value: '3.75rem' },
      },
      fontWeights: {
        normal: { value: '400' },
        bold: { value: '700' },
        extrabold: { value: '800' },
      },
      radii: {
        sm: { value: '0.125rem' },
        lg: { value: '0.5rem' },
      },
      shadows: {
        lg: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
      },
      sizes: {
        '56px': { value: '3.5rem' },
        '32px': { value: '2rem' },
        '1600px': { value: '100rem' },
      },
      spacing: {
        '2': { value: '0.5rem' },
        '4': { value: '1rem' },
        '8': { value: '2rem' },
      },
    },
    semanticTokens: {
      colors: {
        'chakra-body-text': { value: 'gray.700' },
        'chakra-placeholder-color': { value: 'gray.500' },
      },
    },
  },
})

export default system
