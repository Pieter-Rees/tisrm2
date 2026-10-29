import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Navbar from '@/components/navbar';
import { zakelijkMegaMenuId } from '@/components/zakelijk-mega-menu';
import { NAVIGATION_ROUTES } from '@/constants/app';

function renderNavbar(overrides: Partial<React.ComponentProps<typeof Navbar>> = {}) {
  const onZakelijkMenuEnter = jest.fn();
  const onZakelijkMenuLeave = jest.fn();
  const onZakelijkNavigate = jest.fn();

  const view = render(
    <Navbar
      onZakelijkMenuEnter={onZakelijkMenuEnter}
      onZakelijkMenuLeave={onZakelijkMenuLeave}
      onZakelijkNavigate={onZakelijkNavigate}
      {...overrides}
    />,
  );

  return {
    ...view,
    onZakelijkMenuEnter,
    onZakelijkMenuLeave,
    onZakelijkNavigate,
  };
}

describe('Navbar (Zakelijk mega menu trigger)', () => {
  it('exposes hub href and mega menu ARIA on the Zakelijk link', () => {
    renderNavbar();

    const zakelijkLink = screen.getByRole('link', { name: 'Zakelijk' });

    expect(zakelijkLink).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.businessInsurance,
    );
    expect(zakelijkLink).toHaveAttribute('aria-expanded', 'false');
    expect(zakelijkLink).toHaveAttribute('aria-controls', zakelijkMegaMenuId);
  });

  it('forwards hover handlers from the Zakelijk item wrapper', () => {
    const { onZakelijkMenuEnter, onZakelijkMenuLeave } = renderNavbar();
    const zakelijkLink = screen.getByRole('link', { name: 'Zakelijk' });

    fireEvent.mouseEnter(zakelijkLink);
    expect(onZakelijkMenuEnter).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(zakelijkLink);
    expect(onZakelijkMenuLeave).toHaveBeenCalledTimes(1);
  });

  it('calls onZakelijkNavigate on click and keeps the hub href', () => {
    const { onZakelijkNavigate } = renderNavbar();
    const zakelijkLink = screen.getByRole('link', { name: 'Zakelijk' });

    fireEvent.click(zakelijkLink);

    expect(onZakelijkNavigate).toHaveBeenCalledTimes(1);
    expect(zakelijkLink).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.businessInsurance,
    );
  });

  it('sets aria-expanded when the mega menu is open', () => {
    renderNavbar({ isZakelijkMenuOpen: true });

    expect(screen.getByRole('link', { name: 'Zakelijk' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('shows a single chevron on Zakelijk only', () => {
    renderNavbar();

    const nav = screen.getByRole('navigation', { name: 'Hoofdnavigatie' });
    const hiddenInNav = nav.querySelectorAll('[aria-hidden="true"]');

    expect(hiddenInNav).toHaveLength(1);
    expect(
      screen.getByRole('link', { name: 'Zakelijk' }).contains(hiddenInNav[0]),
    ).toBe(true);

    expect(screen.getByRole('link', { name: 'Particulier' })).not.toHaveAttribute(
      'aria-expanded',
    );
    expect(screen.getByRole('link', { name: 'Contact' })).not.toHaveAttribute(
      'aria-expanded',
    );
  });

  it('keeps Zakelijk ARIA when useLightChrome is false', () => {
    renderNavbar({ useLightChrome: false });

    const zakelijkLink = screen.getByRole('link', { name: 'Zakelijk' });

    expect(zakelijkLink).toHaveAttribute('aria-expanded', 'false');
    expect(zakelijkLink).toHaveAttribute('aria-controls', zakelijkMegaMenuId);
  });
});
