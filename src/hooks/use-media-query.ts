/**
 * Modern media query hook with SSR support
 * @fileoverview Responsive design hook for Next.js applications
 */

'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design with media queries
 * @param query - Media query string
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);
    setIsInitialized(true);

    // Create event listener
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    mediaQuery.addEventListener('change', handler);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  // Return false during SSR/hydration to prevent mismatch
  return isInitialized ? matches : false;
}

/**
 * Predefined media query hooks for common breakpoints
 */
export const useBreakpoints = () => ({
  isMobile: useMediaQuery('(max-width: 767px)'),
  isTablet: useMediaQuery('(min-width: 768px) and (max-width: 1023px)'),
  isDesktop: useMediaQuery('(min-width: 1024px)'),
  isLarge: useMediaQuery('(min-width: 1280px)'),
  isXLarge: useMediaQuery('(min-width: 1536px)'),
});
