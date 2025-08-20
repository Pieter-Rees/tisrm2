import type { ResponsiveValue } from '@/types/components';

/**
 * Consolidated layout constants to reduce duplication
 */

// Grid configurations
export const GRID_CONFIGS = {
  singleColumn: { base: 'repeat(1, 1fr)' },
  doubleColumn: { base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
  tripleColumn: { 
    base: 'repeat(1, 1fr)', 
    md: 'repeat(2, 1fr)', 
    lg: 'repeat(3, 1fr)' 
  },
  quadColumn: { 
    base: 'repeat(1, 1fr)', 
    md: 'repeat(2, 1fr)', 
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(4, 1fr)' 
  },
  adaptive: (columns: number) => ({
    base: 'repeat(1, 1fr)',
    md: `repeat(${Math.min(columns, 2)}, 1fr)`,
    lg: `repeat(${Math.min(columns, 3)}, 1fr)`,
    xl: `repeat(${columns}, 1fr)`,
  }),
} as const;

// Spacing scales
export const SPACING_SCALE = {
  none: '0',
  xs: { base: '1', md: '2' },
  sm: { base: '2', md: '3' },
  md: { base: '4', md: '6' },
  lg: { base: '6', md: '8' },
  xl: { base: '8', md: '12' },
  '2xl': { base: '12', md: '16' },
  '3xl': { base: '16', md: '20' },
} as const;

// Container widths
export const CONTAINER_WIDTHS = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
  '5xl': '5xl',
  '6xl': '6xl',
  '7xl': '7xl',
  full: 'full',
  auto: 'auto',
} as const;

// Layout patterns
export const LAYOUT_PATTERNS = {
  sidebar: {
    main: { base: '1fr', xl: '3fr 1fr' },
    reverse: { base: '1fr', xl: '1fr 3fr' },
    narrow: { base: '1fr', xl: '2fr 1fr' },
    wide: { base: '1fr', xl: '4fr 1fr' },
  },
  content: {
    centered: { base: '1fr', lg: '1fr 3fr 1fr' },
    split: { base: '1fr', md: '1fr 1fr' },
    hero: { base: '1fr', lg: '2fr 3fr' },
  },
} as const;

// Animation delays
export const ANIMATION_DELAYS = {
  none: 0,
  fast: 0.05,
  normal: 0.1,
  slow: 0.2,
  stagger: (index: number, delay = 0.1) => index * delay,
} as const;

// Common responsive values
export const RESPONSIVE_VALUES = {
  spacing: SPACING_SCALE,
  container: CONTAINER_WIDTHS,
  grid: GRID_CONFIGS,
  layout: LAYOUT_PATTERNS,
  animation: ANIMATION_DELAYS,
} as const;

// Flex patterns
export const FLEX_PATTERNS = {
  column: { direction: 'column' as const },
  row: { direction: 'row' as const },
  center: { 
    align: 'center' as const, 
    justify: 'center' as const 
  },
  spaceBetween: { 
    justify: 'space-between' as const 
  },
  spaceAround: { 
    justify: 'space-around' as const 
  },
  start: { 
    align: 'flex-start' as const, 
    justify: 'flex-start' as const 
  },
  end: { 
    align: 'flex-end' as const, 
    justify: 'flex-end' as const 
  },
} as const;

// Media query helpers
export const MEDIA_QUERIES = {
  mobile: '@media (max-width: 767px)',
  tablet: '@media (min-width: 768px) and (max-width: 1023px)',
  desktop: '@media (min-width: 1024px)',
  largeDesktop: '@media (min-width: 1280px)',
  print: '@media print',
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
  darkMode: '@media (prefers-color-scheme: dark)',
} as const;

// Z-index scale
export const Z_INDEX_SCALE = {
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Common component sizes
export const COMPONENT_SIZES = {
  xs: { width: '16px', height: '16px' },
  sm: { width: '20px', height: '20px' },
  md: { width: '24px', height: '24px' },
  lg: { width: '32px', height: '32px' },
  xl: { width: '40px', height: '40px' },
  '2xl': { width: '48px', height: '48px' },
} as const;
