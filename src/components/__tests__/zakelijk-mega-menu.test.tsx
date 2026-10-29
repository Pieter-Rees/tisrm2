import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import React from 'react';

import ZakelijkMegaMenu, {
  useZakelijkMegaMenu,
  zakelijkMegaMenuId,
  zakelijkMenuCloseDelayMs,
} from '@/components/zakelijk-mega-menu';
import { BRANCH_ROUTES, NAVIGATION_ROUTES } from '@/constants/app';

describe('ZakelijkMegaMenu', () => {
  it('renders the hub and branch links when open', () => {
    render(
      <ZakelijkMegaMenu
        isOpen
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        onNavigate={jest.fn()}
      />,
    );

    expect(
      screen.getByRole('navigation', { name: 'Zakelijke verzekeringen' }),
    ).toHaveAttribute('id', zakelijkMegaMenuId);
    expect(
      screen.getByRole('link', { name: 'Alle zakelijke verzekeringen' }),
    ).toHaveAttribute('href', NAVIGATION_ROUTES.businessInsurance);

    BRANCH_ROUTES.forEach(({ href, label }) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        href,
      );
    });
  });

  it('calls onNavigate when a branch link is clicked', () => {
    const onNavigate = jest.fn();

    render(
      <ZakelijkMegaMenu
        isOpen
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        onNavigate={onNavigate}
      />,
    );

    fireEvent.click(screen.getByRole('link', { name: BRANCH_ROUTES[0].label }));

    expect(onNavigate).toHaveBeenCalledTimes(1);
  });
});

describe('useZakelijkMegaMenu', () => {
  it('opens and closes the menu, and closes on Escape', () => {
    const { result } = renderHook(() => useZakelijkMegaMenu('/'));

    expect(result.current.isZakelijkMenuOpen).toBe(false);

    act(() => {
      result.current.openZakelijkMenu();
    });
    expect(result.current.isZakelijkMenuOpen).toBe(true);

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape' }),
      );
    });
    expect(result.current.isZakelijkMenuOpen).toBe(false);
  });

  it('closes when the pathname changes', () => {
    const { result, rerender } = renderHook(
      ({ pathname }) => useZakelijkMegaMenu(pathname),
      { initialProps: { pathname: '/' } },
    );

    act(() => {
      result.current.openZakelijkMenu();
    });
    expect(result.current.isZakelijkMenuOpen).toBe(true);

    rerender({ pathname: '/zakelijke-verzekeringen' });
    expect(result.current.isZakelijkMenuOpen).toBe(false);
  });

  it('scheduleCloseZakelijkMenu closes after delay; re-enter cancels close', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useZakelijkMegaMenu('/'));

    act(() => {
      result.current.openZakelijkMenu();
    });

    act(() => {
      result.current.scheduleCloseZakelijkMenu();
    });
    act(() => {
      jest.advanceTimersByTime(zakelijkMenuCloseDelayMs - 1);
    });
    expect(result.current.isZakelijkMenuOpen).toBe(true);

    act(() => {
      result.current.openZakelijkMenu();
    });
    act(() => {
      jest.advanceTimersByTime(zakelijkMenuCloseDelayMs);
    });
    expect(result.current.isZakelijkMenuOpen).toBe(true);

    act(() => {
      result.current.scheduleCloseZakelijkMenu();
    });
    act(() => {
      jest.advanceTimersByTime(zakelijkMenuCloseDelayMs);
    });
    expect(result.current.isZakelijkMenuOpen).toBe(false);

    jest.useRealTimers();
  });
});
