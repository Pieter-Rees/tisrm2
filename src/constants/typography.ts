/** Fraunces variation axes the design pins for display type */
const HEADING_VARIATION = '"SOFT" 20, "WONK" 0';

export const HEADING_STYLES = {
  h1: {
    fontFamily: 'heading',
    fontSize: { base: '4xl', md: '5xl' },
    fontWeight: 'display',
    lineHeight: '1.02',
    color: 'text.primary',
    letterSpacing: 'tight',
    fontVariationSettings: HEADING_VARIATION,
    mb: '4',
  },
  h2: {
    fontFamily: 'heading',
    fontSize: { base: '3xl', md: '4xl' },
    fontWeight: 'heading',
    lineHeight: '1.08',
    color: 'text.primary',
    letterSpacing: 'tight',
    fontVariationSettings: HEADING_VARIATION,
    mb: '2',
  },
  h3: {
    fontFamily: 'heading',
    fontSize: { base: '2xl', md: '3xl' },
    fontWeight: 'heading',
    lineHeight: '1.12',
    color: 'text.primary',
    letterSpacing: 'tight',
    fontVariationSettings: HEADING_VARIATION,
    mb: '2',
  },
  h4: {
    fontFamily: 'heading',
    fontSize: '2xl',
    fontWeight: 'heading',
    lineHeight: '1.15',
    color: 'text.primary',
    letterSpacing: 'tight',
    fontVariationSettings: HEADING_VARIATION,
    mb: '2',
  },
  h5: {
    fontFamily: 'heading',
    fontSize: 'xl',
    fontWeight: 'heading',
    lineHeight: '1.2',
    color: 'text.primary',
    letterSpacing: 'tight',
    fontVariationSettings: HEADING_VARIATION,
    mb: '2',
  },
  /** Hero-only editorial display type */
  display: {
    fontFamily: 'heading',
    fontSize: { base: 'clamp(2.6rem, 12.5vw, 3.05rem)', md: '5.25rem', lg: '6.35rem' },
    fontWeight: 'display',
    lineHeight: '1.02',
    letterSpacing: '-0.035em',
    color: 'text.primary',
    fontVariationSettings: HEADING_VARIATION,
    mb: '4',
  },
  quote: {
    fontFamily: 'heading',
    fontSize: { base: '2xl', md: '4xl' },
    fontWeight: 'medium',
    fontStyle: 'italic',
    lineHeight: '1.18',
    letterSpacing: '-0.03em',
    color: 'text.primary',
    fontVariationSettings: HEADING_VARIATION,
    mb: '2',
  },
  /** Small uppercase label above a heading */
  eyebrow: {
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'eyebrow',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    lineHeight: '1.4',
    mb: '0',
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
    fontSize: { base: 'xl', md: '2xl' },
    lineHeight: '1.45',
    color: 'text.primary',
    fontWeight: 'medium',
    mb: '0',
  },
  bodySmall: {
    fontFamily: 'body',
    fontSize: { base: 'sm', lg: 'md' },
    lineHeight: 'relaxed',
    color: 'text.secondary',
    mb: '0',
  },
  link: {
    fontFamily: 'body',
    fontSize: { base: 'md', lg: 'lg' },
    fontWeight: 'medium',
    lineHeight: 'relaxed',
    color: 'text.accent',
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
    color: 'text.accent',
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
