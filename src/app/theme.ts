import { createSystem, defaultConfig } from '@chakra-ui/react';

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
        heading: { value: 'Inter, system-ui, sans-serif' },
        body: { value: 'Inter, system-ui, sans-serif' },
      },
      fontSizes: {
        xs: { value: '0.75rem' }, // 12px
        sm: { value: '0.875rem' }, // 14px
        md: { value: '1rem' }, // 16px
        lg: { value: '1.125rem' }, // 18px
        xl: { value: '1.25rem' }, // 20px
        '2xl': { value: '1.5rem' }, // 24px
        '3xl': { value: '1.875rem' }, // 30px
        '4xl': { value: '2.25rem' }, // 36px
        '5xl': { value: '3rem' }, // 48px
        '6xl': { value: '3.75rem' }, // 60px
      },
      fontWeights: {
        normal: { value: '400' },
        medium: { value: '500' },
        semibold: { value: '600' },
        bold: { value: '700' },
        extrabold: { value: '800' },
      },
      lineHeights: {
        tight: { value: '1.25' },
        normal: { value: '1.5' },
        relaxed: { value: '1.625' },
        loose: { value: '1.75' },
      },
      letterSpacings: {
        tight: { value: '-0.025em' },
        normal: { value: '0' },
        wide: { value: '0.025em' },
      },
      radii: {
        sm: { value: '0.125rem' },
        lg: { value: '0.5rem' },
      },
      shadows: {
        lg: {
          value:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
      sizes: {
        '56px': { value: '3.5rem' },
        '32px': { value: '2rem' },
        '1600px': { value: '100rem' },
      },
      spacing: {
        '1': { value: '0.25rem' },
        '2': { value: '0.5rem' },
        '3': { value: '0.75rem' },
        '4': { value: '1rem' },
        '5': { value: '1.25rem' },
        '6': { value: '1.5rem' },
        '8': { value: '2rem' },
        '10': { value: '2.5rem' },
        '12': { value: '3rem' },
        '16': { value: '4rem' },
        '20': { value: '5rem' },
      },
    },
    semanticTokens: {
      colors: {
        'chakra-body-text': { value: 'gray.900' },
        'chakra-placeholder-color': { value: 'gray.600' },
        'text.primary': { value: 'gray.900' },
        'text.secondary': { value: 'gray.700' },
        'text.muted': { value: 'gray.600' },
        'text.accent': { value: 'blue.700' },
      },
    },
  },
});

export default system;
