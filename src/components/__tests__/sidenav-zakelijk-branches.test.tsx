import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Sidenav from '@/components/sidenav';
import { BRANCH_ROUTES, NAVIGATION_ROUTES } from '@/constants/app';

const zakelijkMobileBranchesId = 'zakelijk-mobile-branches';

function renderSidenav(
  showSideNav = true,
  handleToggle: jest.Mock = jest.fn(),
) {
  return {
    handleToggle,
    ...render(
      <Sidenav showSideNav={showSideNav} handleToggle={handleToggle} />,
    ),
  };
}

describe('Sidenav (Zakelijk mobile branches)', () => {
  it('renders the hub link and collapsed branch toggle', () => {
    renderSidenav();

    expect(screen.getByRole('link', { name: 'Zakelijk' })).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.businessInsurance,
    );

    const toggle = screen.getByRole('button', {
      name: 'Toon zakelijke branches',
    });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAttribute('aria-controls', zakelijkMobileBranchesId);

    BRANCH_ROUTES.forEach(({ label }) => {
      expect(screen.queryByRole('link', { name: label })).toBeNull();
    });
    expect(document.getElementById(zakelijkMobileBranchesId)).toBeNull();
  });

  it('expands branch links with correct hrefs and collapses again', () => {
    renderSidenav();

    const toggle = screen.getByRole('button', {
      name: 'Toon zakelijke branches',
    });
    fireEvent.click(toggle);

    expect(
      screen.getByRole('button', { name: 'Verberg zakelijke branches' }),
    ).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById(zakelijkMobileBranchesId)).toBeInTheDocument();

    BRANCH_ROUTES.forEach(({ href, label }) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        href,
      );
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Verberg zakelijke branches' }),
    );

    BRANCH_ROUTES.forEach(({ label }) => {
      expect(screen.queryByRole('link', { name: label })).toBeNull();
    });
    expect(document.getElementById(zakelijkMobileBranchesId)).toBeNull();
  });

  it('closes the drawer when a branch link is clicked', () => {
    const handleToggle = jest.fn();
    renderSidenav(true, handleToggle);

    fireEvent.click(
      screen.getByRole('button', { name: 'Toon zakelijke branches' }),
    );
    fireEvent.click(
      screen.getByRole('link', { name: BRANCH_ROUTES[0].label }),
    );

    expect(handleToggle).toHaveBeenCalled();
  });

  it('keeps other primary nav items flat', () => {
    renderSidenav();

    expect(
      screen.getAllByRole('button', { name: /zakelijke branches/i }),
    ).toHaveLength(1);
    expect(screen.getByRole('link', { name: 'Particulier' })).not.toHaveAttribute(
      'aria-expanded',
    );
  });

  it('resets the accordion when the drawer closes', () => {
    const handleToggle = jest.fn();
    const { rerender } = render(
      <Sidenav showSideNav handleToggle={handleToggle} />,
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'Toon zakelijke branches' }),
    );
    expect(document.getElementById(zakelijkMobileBranchesId)).toBeInTheDocument();

    rerender(<Sidenav showSideNav={false} handleToggle={handleToggle} />);
    rerender(<Sidenav showSideNav handleToggle={handleToggle} />);

    expect(
      screen.getByRole('button', { name: 'Toon zakelijke branches' }),
    ).toHaveAttribute('aria-expanded', 'false');
    BRANCH_ROUTES.forEach(({ label }) => {
      expect(screen.queryByRole('link', { name: label })).toBeNull();
    });
  });

  it('marks the drawer visible when open', () => {
    const { rerender } = render(
      <Sidenav showSideNav={false} handleToggle={jest.fn()} />,
    );

    expect(document.getElementById('mobile-navigation')).toHaveAttribute(
      'aria-hidden',
      'true',
    );

    rerender(<Sidenav showSideNav handleToggle={jest.fn()} />);

    expect(document.getElementById('mobile-navigation')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
  });
});
