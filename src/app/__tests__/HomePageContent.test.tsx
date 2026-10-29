import { render, screen } from '@/__mocks__/test-utils';
import React from 'react';

import HomePageContent from '../HomePageContent';

jest.mock('@/components/layout', () => ({
  UnifiedLayout: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('@/components/call-to-action', () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock('@/components/talker', () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock('@/components/meld-schade', () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock('@/components/seo/HomeFaq', () => ({
  HomeFaq: () => null,
}));

const HERO_TAGLINE = 'Onafhankelijk verzekeringsadvies in Amsterdam';

describe('HomePageContent', () => {
  it('exposes the brand in the sole h1 without the hero tagline', () => {
    render(<HomePageContent />);

    const heroHeading = screen.getByRole('heading', {
      level: 1,
      name: 'TIS Risk Managers',
    });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(heroHeading).toHaveAccessibleName('TIS Risk Managers');
    expect(heroHeading.textContent).not.toContain(HERO_TAGLINE);
    expect(screen.getByText(HERO_TAGLINE)).toBeInTheDocument();
  });
});
