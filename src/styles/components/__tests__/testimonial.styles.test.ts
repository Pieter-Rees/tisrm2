import { COMPONENT_SPACING } from '@/constants/layout';
import {
  testimonialContainerStyles,
  testimonialContentStyles,
  testimonialLayoutStyles,
} from '@/styles/components/testimonial.styles';

const themeSpacing = new Set([
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '8',
  '10',
  '12',
  '16',
  '20',
]);

const spacingTokens = (value: unknown): string[] => {
  if (typeof value === 'string') {
    return [value];
  }

  if (value && typeof value === 'object') {
    return Object.values(value).filter(
      (token): token is string => typeof token === 'string',
    );
  }

  return [];
};

describe('testimonial spacing', () => {
  it('uses theme spacing tokens', () => {
    const tokens = [
      ...spacingTokens(testimonialContainerStyles.px),
      ...spacingTokens(testimonialContainerStyles.py),
      ...spacingTokens(testimonialLayoutStyles.gap),
      ...spacingTokens(testimonialContentStyles.gap),
    ];

    tokens.forEach(token => {
      expect(themeSpacing.has(token)).toBe(true);
    });
  });

  it('pads the quote in from the card edges on mobile', () => {
    const px = testimonialContainerStyles.px as { base: string };
    const py = testimonialContainerStyles.py as { base: string };

    expect(px).toEqual(COMPONENT_SPACING.card.xl);
    expect(Number(px.base)).toBeGreaterThan(Number(py.base));
  });

  it('keeps one mobile gap from the avatar through the attribution', () => {
    const rowGap = testimonialLayoutStyles.gap as { base: string };
    const stackGap = testimonialContentStyles.gap as { base: string };

    expect(rowGap.base).toBe(stackGap.base);
    expect(rowGap.base).toBe(COMPONENT_SPACING.form.group.base);
  });
});
