/**
 * Color mode hooks
 * @fileoverview Theme management hooks for dark/light mode
 */

'use client';

import { useTheme } from 'next-themes';

/**
 * Custom hook for managing color mode state
 * @returns Color mode state and controls
 */
export function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme || resolvedTheme;
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

/**
 * Hook for conditional values based on color mode
 * @param light - Value for light mode
 * @param dark - Value for dark mode
 * @returns Value based on current color mode
 */
export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}
