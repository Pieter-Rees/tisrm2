export const HEADING_STYLES = {
  h1: {
    fontFamily: 'heading',
    fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
    fontWeight: 'bold',
    lineHeight: 'tight',
    color: 'text.primary',
    letterSpacing: 'tight',
    mb: { base: '4', md: '5' },
  },
  h2: {
    fontFamily: 'heading',
    fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
    fontWeight: 'bold',
    lineHeight: 'tight',
    color: 'text.primary',
    letterSpacing: 'tight',
    mb: { base: '3', md: '4' },
  },
  h3: {
    fontFamily: 'heading',
    fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
    fontWeight: 'semibold',
    lineHeight: 'tight',
    color: 'text.accent',
    mb: { base: '2', md: '3' },
  },
  h4: {
    fontFamily: 'heading',
    fontSize: { base: 'md', md: 'lg', lg: 'xl' },
    fontWeight: 'semibold',
    lineHeight: 'normal',
    color: 'text.primary',
    mb: { base: '2', md: '2' },
  },
  h5: {
    fontFamily: 'heading',
    fontSize: { base: 'sm', md: 'md', lg: 'lg' },
    fontWeight: 'medium',
    lineHeight: 'normal',
    color: 'text.primary',
    mb: '2',
  },
} as const;

export const PARAGRAPH_STYLES = {
  body: {
    fontFamily: 'body',
    fontSize: { base: 'md', lg: 'lg' },
    lineHeight: 'relaxed',
    color: 'text.secondary',
    mb: '0',
  },
  large: {
    fontFamily: 'body',
    fontSize: { base: 'lg', lg: 'xl' },
    lineHeight: 'relaxed',
    color: 'text.secondary',
    mb: '0',
  },
  small: {
    fontFamily: 'body',
    fontSize: { base: 'sm', lg: 'md' },
    lineHeight: 'normal',
    color: 'text.muted',
    mb: '0',
  },
  lead: {
    fontFamily: 'body',
    fontSize: { base: 'lg', lg: 'xl' },
    lineHeight: 'relaxed',
    color: 'text.primary',
    fontWeight: 'medium',
    mb: '0',
  },
} as const;

/** Gap between stacked paragraphs / prose blocks (parent Flex/VStack owns rhythm) */
export const PROSE_STACK_GAP = { base: '4', md: '5' } as const;

export const LIST_STYLES = {
  unordered: {
    mb: '0',
    pl: '0',
    listStyleType: 'none',
    spacing: '2',
  },
  item: {
    fontSize: { base: 'md', lg: 'lg' },
    lineHeight: 'relaxed',
    color: 'text.secondary',
    display: 'flex',
    alignItems: 'flex-start',
    mb: '2',
  },
  itemIcon: {
    color: 'blue.700',
    mr: '3',
    mt: '1',
    flexShrink: 0,
  },
} as const;

/** Aligns with COMPONENT_SPACING.section (xs / sm / md) — grows on larger breakpoints */
export const SECTION_SPACING = {
  small: { base: '10', md: '14' },
  medium: { base: '14', md: '20' },
  large: { base: '18', md: '24' },
} as const;

export const CONTENT_WIDTH = {
  narrow: '2xl',
  medium: '3xl',
  wide: '4xl',
  full: 'full',
} as const;

const typography = {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  LIST_STYLES,
  SECTION_SPACING,
  CONTENT_WIDTH,
} as const;

export default typography;
