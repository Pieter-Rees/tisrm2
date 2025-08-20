// Typography constants for consistent design system

// Heading styles
export const HEADING_STYLES = {
  h1: {
    fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
    fontWeight: 'bold',
    lineHeight: 'tight',
    color: 'text.primary',
    letterSpacing: 'tight',
    mb: { base: '6', lg: '8' },
  },
  h2: {
    fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
    fontWeight: 'bold',
    lineHeight: 'tight',
    color: 'text.primary',
    letterSpacing: 'tight',
    mb: { base: '4', lg: '6' },
  },
  h3: {
    fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
    fontWeight: 'semibold',
    lineHeight: 'tight',
    color: 'text.accent',
    mb: { base: '3', lg: '4' },
  },
  h4: {
    fontSize: { base: 'md', md: 'lg', lg: 'xl' },
    fontWeight: 'semibold',
    lineHeight: 'normal',
    color: 'text.primary',
    mb: { base: '2', lg: '3' },
  },
  h5: {
    fontSize: { base: 'sm', md: 'md', lg: 'lg' },
    fontWeight: 'medium',
    lineHeight: 'normal',
    color: 'text.primary',
    mb: '2',
  },
} as const;

// Paragraph styles
export const PARAGRAPH_STYLES = {
  body: {
    fontSize: { base: 'md', lg: 'lg' },
    lineHeight: 'relaxed',
    color: 'text.secondary',
    mb: { base: '4', lg: '6' },
  },
  large: {
    fontSize: { base: 'lg', lg: 'xl' },
    lineHeight: 'relaxed',
    color: 'text.secondary',
    mb: { base: '5', lg: '6' },
  },
  small: {
    fontSize: { base: 'sm', lg: 'md' },
    lineHeight: 'normal',
    color: 'text.muted',
    mb: { base: '3', lg: '4' },
  },
  lead: {
    fontSize: { base: 'lg', lg: 'xl' },
    lineHeight: 'relaxed',
    color: 'text.primary',
    fontWeight: 'medium',
    mb: { base: '6', lg: '8' },
  },
} as const;

// List styles
export const LIST_STYLES = {
  unordered: {
    mb: { base: '4', lg: '6' },
    pl: '0',
    listStyleType: 'none',
    spacing: '3',
  },
  item: {
    fontSize: { base: 'md', lg: 'lg' },
    lineHeight: 'relaxed',
    color: 'text.secondary',
    display: 'flex',
    alignItems: 'flex-start',
    mb: '3',
  },
  itemIcon: {
    color: 'blue.700',
    mr: '3',
    mt: '1',
    flexShrink: 0,
  },
} as const;

// Section spacing
export const SECTION_SPACING = {
  small: { base: '8', lg: '4' },
  medium: { base: '12', lg: '8' },
  large: { base: '16', lg: '20' },
} as const;

// Content max widths
export const CONTENT_WIDTH = {
  narrow: '2xl', // 672px
  medium: '3xl', // 768px
  wide: '4xl', // 896px
  full: 'full',
} as const;

const typography = {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  LIST_STYLES,
  SECTION_SPACING,
  CONTENT_WIDTH,
} as const;

export default typography;
