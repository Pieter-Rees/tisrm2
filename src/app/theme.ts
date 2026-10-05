import { createSystem, defaultConfig, defineRecipe } from '@chakra-ui/react';

// Chakra's button recipe rounds with the `l2` semantic radius (0.125rem here),
// which left menu triggers and plain buttons looking square. `md` is the radius
// the action buttons already use, so every button matches them.
const buttonRecipe = defineRecipe({
  base: {
    borderRadius: 'md',
  },
});

export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    tokens: {
      colors: {
        blue: {
          50: { value: '#e6f7ff' },
          100: { value: '#b3e0ff' },
          200: { value: '#80c9ff' },
          300: { value: '#0074c2' },
          400: { value: '#0068ad' },
          500: { value: '#005c99' },
          600: { value: '#005791' },
          700: { value: '#004e82' },
          800: { value: '#004675' },
          900: { value: '#003a66' },
          950: { value: '#002e4d' },
        },
        gray: {
          50: { value: '#f9fafb' },
          100: { value: '#f3f4f6' },
          200: { value: '#e5e7eb' },
          300: { value: '#d1d5db' },
          400: { value: '#5e656d' },
          500: { value: '#4e545b' },
          600: { value: '#454b52' },
          700: { value: '#33373d' },
          800: { value: '#1d2025' },
          900: { value: '#171a1d' },
        },
      },
      fonts: {
        heading: { value: 'var(--font-sans), system-ui, sans-serif' },
        body: { value: 'var(--font-sans), system-ui, sans-serif' },
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
        sm: { value: '0.25rem' },
        md: { value: '0.5rem' },
        lg: { value: '0.75rem' },
        xl: { value: '1rem' },
      },
      shadows: {
        sm: {
          value:
            '0 1px 2px 0 rgba(0, 78, 130, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        },
        md: {
          value:
            '0 4px 12px -2px rgba(0, 78, 130, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        },
        lg: {
          value:
            '0 10px 24px -6px rgba(0, 78, 130, 0.12), 0 4px 10px -4px rgba(0, 0, 0, 0.05)',
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
