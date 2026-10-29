import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  globalCss: {
    // Single source of truth for the fixed header's height. `<main>`'s top
    // padding, the anchor scroll padding and the sticky sidebar all read it.
    html: {
      '--headerHeight': '6.25rem',
      '@media (min-width: 48rem)': {
        '--headerHeight': '6.75rem',
      },
      scrollPaddingTop: 'var(--headerHeight)',
    },
    'html, body': {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: 'stone.100',
      color: 'gray.800',
      fontSize: 'lg',
      lineHeight: '1.65',
    },
    '::selection': {
      bg: 'gold.400',
      color: 'navy.900',
    },
    '*, *::before, *::after': {
      _motionReduce: {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.01ms !important',
        scrollBehavior: 'auto !important',
      },
    },
  },
  theme: {
    // Chakra emits these as `@keyframes <name>` in the same global stylesheet,
    // so components reference them by name with the `animation` prop.
    keyframes: {
      heroFade: {
        from: { opacity: 0, transform: 'translateY(22px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      pageIn: {
        from: { opacity: 0, transform: 'translateY(10px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
    },
    tokens: {
      colors: {
        navy: {
          500: { value: '#14304F' },
          700: { value: '#0B1F3A' },
          800: { value: '#081628' },
          900: { value: '#050E1A' },
        },
        stone: {
          100: { value: '#F7F5F2' },
          200: { value: '#E8E4DE' },
          300: { value: '#D4CFC6' },
          500: { value: '#9A948A' },
          700: { value: '#5C574F' },
        },
        gold: {
          400: { value: '#C4A574' },
          500: { value: '#B08D5B' },
        },
        // `blue` aliases the navy ramp so every existing `blue.*` call site
        // picks up the design colour without a per-file edit.
        blue: {
          50: { value: '#EDF1F6' },
          100: { value: '#D6DFE9' },
          200: { value: '#AEC0D3' },
          300: { value: '#7E97B4' },
          400: { value: '#4A6B91' },
          500: { value: '#14304F' },
          600: { value: '#0F2744' },
          700: { value: '#0B1F3A' },
          800: { value: '#081628' },
          900: { value: '#050E1A' },
          950: { value: '#03080F' },
        },
        // `gray` aliases the warm stone ramp for the same reason.
        gray: {
          50: { value: '#FBFAF8' },
          100: { value: '#F7F5F2' },
          200: { value: '#E8E4DE' },
          300: { value: '#D4CFC6' },
          400: { value: '#B7B1A8' },
          500: { value: '#9A948A' },
          // 5.31:1 on the stone.100 page surface, so it clears the AA floor
          // as body text as well as backing `text.muted`.
          600: { value: '#6A655D' },
          700: { value: '#2C2A26' },
          800: { value: '#1A1916' },
          900: { value: '#0F0E0C' },
          // Chakra's stock 950 is a cool grey lighter than the warm 900 above,
          // which breaks the ramp wherever `gray.950` resolves.
          950: { value: '#080706' },
        },
      },
      fonts: {
        heading: { value: 'var(--font-fraunces), Georgia, serif' },
        body: { value: 'var(--font-manrope), "Helvetica Neue", sans-serif' },
      },
      fontSizes: {
        xs: { value: '0.8125rem' }, // 13px
        sm: { value: '0.9375rem' }, // 15px
        md: { value: '1.0625rem' }, // 17px
        lg: { value: '1.1875rem' }, // 19px
        xl: { value: '1.375rem' }, // 22px
        '2xl': { value: '1.75rem' }, // 28px
        '3xl': { value: '2.25rem' }, // 36px
        '4xl': { value: '2.875rem' }, // 46px
        '5xl': { value: '3.75rem' }, // 60px
        '6xl': { value: '4.75rem' }, // 76px
        '7xl': { value: '6rem' }, // 96px
      },
      fontWeights: {
        normal: { value: '400' },
        medium: { value: '500' },
        display: { value: '520' },
        heading: { value: '560' },
        semibold: { value: '600' },
        eyebrow: { value: '650' },
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
      // Square geometry: the design has no rounded corners, so every existing
      // `rounded="md"` / `borderRadius="xl"` call site flattens out. Chakra's
      // own `l1`/`l2`/`l3` semantic radii resolve to `xs`/`sm`/`md`, so
      // buttons, cards, inputs, checkboxes and badges go square too.
      radii: {
        '2xs': { value: '0' },
        xs: { value: '0' },
        sm: { value: '0' },
        md: { value: '0' },
        lg: { value: '0' },
        xl: { value: '0' },
        '2xl': { value: '0' },
        '3xl': { value: '0' },
        '4xl': { value: '0' },
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
        'chakra-body-text': { value: 'gray.800' },
        'chakra-placeholder-color': { value: 'gray.500' },
        'text.primary': { value: 'navy.700' },
        'text.secondary': { value: 'gray.700' },
        'text.muted': { value: 'gray.600' },
        'text.accent': { value: 'navy.500' },
        'text.inverse': { value: 'white' },
      },
    },
  },
});

export default system;
