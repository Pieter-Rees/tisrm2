import { render, screen } from '@testing-library/react';
import React from 'react';

import MeldSchade from '@/components/meld-schade';
import { NAVIGATION_ROUTES } from '@/constants/app';

describe('MeldSchade', () => {
  it('renders the damage reporting heading', () => {
    render(<MeldSchade />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Schade melden' }),
    ).toBeInTheDocument();
  });

  it('links to the damage report route', () => {
    render(<MeldSchade />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.damageReport,
    );
  });
});
