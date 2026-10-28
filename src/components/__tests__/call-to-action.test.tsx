import { render, screen } from '@testing-library/react';
import React from 'react';

import CallToAction from '@/components/call-to-action';
import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';

describe('CallToAction', () => {
  it('renders the advice heading', () => {
    render(<CallToAction />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Klaar voor persoonlijk advies?',
      }),
    ).toBeInTheDocument();
  });

  it('renders the three action card titles', () => {
    render(<CallToAction />);
    expect(
      screen.getByRole('heading', { level: 3, name: 'Bel direct' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Schade melden' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Offerte aanvragen' }),
    ).toBeInTheDocument();
  });

  it('links phone and navigation cards to expected destinations', () => {
    render(<CallToAction />);
    expect(screen.getByRole('link', { name: 'Bel nu' })).toHaveAttribute(
      'href',
      CONTACT_INFO.phoneHref,
    );
    const startHierLinks = screen.getAllByRole('link', { name: /Start hier/i });
    expect(startHierLinks).toHaveLength(2);
    expect(startHierLinks[0]).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.damageReport,
    );
    expect(startHierLinks[1]).toHaveAttribute('href', NAVIGATION_ROUTES.quote);
  });
});
