'use client';

import { useState, useEffect } from 'react';
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    

    setMatches(mediaQuery.matches);
    setIsInitialized(true);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);


  return isInitialized ? matches : false;
}


export const useBreakpoints = () => ({
  isMobile: useMediaQuery('(max-width: 767px)'),
  isTablet: useMediaQuery('(min-width: 768px) and (max-width: 1023px)'),
  isDesktop: useMediaQuery('(min-width: 1024px)'),
  isLarge: useMediaQuery('(min-width: 1280px)'),
  isXLarge: useMediaQuery('(min-width: 1536px)'),
});
