import { render, screen } from '@testing-library/react';
import React from 'react';

import ThreeElements from '@/components/three-elements';
import { NAVIGATION_ROUTES } from '@/constants/app';

describe('ThreeElements', () => {
  it('renders the section heading', () => {
    render(<ThreeElements />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Waarom kiezen voor TIS?',
      }),
    ).toBeInTheDocument();
  });

  it('renders the three feature card titles', () => {
    render(<ThreeElements />);
    expect(
      screen.getByRole('heading', { level: 3, name: 'Risk Managers' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Maatwerk Verzekeringen',
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Eigen Schadeafdeling',
      }),
    ).toBeInTheDocument();
  });

  it('links each Lees meer card to the expected route', () => {
    render(<ThreeElements />);
    const leesMeerLinks = screen.getAllByRole('link', { name: /Lees meer/i });
    expect(leesMeerLinks).toHaveLength(3);
    expect(leesMeerLinks[0]).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.riskAdvice,
    );
    expect(leesMeerLinks[1]).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.businessInsurance,
    );
    expect(leesMeerLinks[2]).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.damageReport,
    );
  });
});
