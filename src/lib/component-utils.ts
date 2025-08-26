import { type ReactElement, isValidElement, memo } from 'react';
import type { ResponsiveValue, Breakpoint } from '@/types/components';

/**
 * Utility functions for component development
 */

// Responsive value helpers
export const createResponsiveValue = <T>(
  base: T,
  overrides?: Partial<Record<Breakpoint, T>>
): ResponsiveValue<T> => ({
  base,
  ...overrides,
});

export const isResponsiveValue = <T>(value: unknown): value is ResponsiveValue<T> => {
  return typeof value === 'object' && value !== null && 'base' in value;
};

// Component validation helpers
export const isReactElement = (element: unknown): element is ReactElement => {
  return isValidElement(element);
};

export const hasChildren = (children: unknown): boolean => {
  if (Array.isArray(children)) {
    return children.length > 0 && children.some(child => child !== null && child !== undefined);
  }
  return children !== null && children !== undefined;
};

// Animation helpers
export const createStaggeredDelay = (index: number, baseDelay = 0.1): number => {
  return index * baseDelay;
};

export const getAnimationDuration = (type: 'fast' | 'normal' | 'slow' = 'normal'): string => {
  const durations = {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
  };
  return durations[type];
};

// Style helpers
export const combineClassNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const createVariantClasses = (
  baseClass: string,
  variant?: string,
  size?: string
): string => {
  return combineClassNames(
    baseClass,
    variant && `${baseClass}--${variant}`,
    size && `${baseClass}--${size}`
  );
};

// Theme helpers
export const createThemeScale = <T extends string | number>(
  values: readonly T[]
): Record<string, T> => {
  return values.reduce((acc, value, index) => {
    acc[index.toString()] = value;
    return acc;
  }, {} as Record<string, T>);
};

// Layout helpers
export const calculateGridColumns = (
  itemCount: number,
  maxColumns: number = 3
): ResponsiveValue<string> => {
  const columns = Math.min(itemCount, maxColumns);
  
  return {
    base: 'repeat(1, 1fr)',
    md: `repeat(${Math.min(columns, 2)}, 1fr)`,
    lg: `repeat(${columns}, 1fr)`,
  };
};

export const getOptimalImageSizes = (maxWidth?: number): string => {
  const breakpoints = [640, 750, 828, 1080, 1200, 1920];
  const defaultMax = maxWidth || 1920;
  
  return breakpoints
    .filter(bp => bp <= defaultMax)
    .map((bp, index, arr) => {
      if (index === arr.length - 1) return `${bp}px`;
      return `(max-width: ${bp}px) ${bp}px`;
    })
    .join(', ');
};

// Performance helpers
export const createMemoComponent = <T extends Record<string, unknown>>(
  component: React.ComponentType<T>,
  displayName: string,
  compareProps?: (prevProps: T, nextProps: T) => boolean
): React.MemoExoticComponent<React.ComponentType<T>> => {
  const memoized = memo(component, compareProps);
  memoized.displayName = displayName;
  return memoized;
};

// Accessibility helpers
export const createAriaLabel = (base: string, context?: string): string => {
  return context ? `${base} - ${context}` : base;
};

export const getAriaDescribedBy = (id: string, hasError?: boolean, hasHelper?: boolean): string => {
  const descriptions: string[] = [];
  
  if (hasError) descriptions.push(`${id}-error`);
  if (hasHelper) descriptions.push(`${id}-helper`);
  
  return descriptions.join(' ') || '';
};

// Form helpers
export const createFieldId = (name: string, prefix = 'field'): string => {
  return `${prefix}-${name}`;
};

export const getFieldErrorId = (fieldId: string): string => {
  return `${fieldId}-error`;
};

export const getFieldHelperId = (fieldId: string): string => {
  return `${fieldId}-helper`;
};

// Data transformation helpers
export const filterDefinedValues = <T extends Record<string, unknown>>(obj: T): Partial<T> => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null) {
      (acc as Record<string, unknown>)[key] = value;
    }
    return acc;
  }, {} as Partial<T>);
};

export const omitProps = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
};

// Constants for common patterns
export const COMMON_RESPONSIVE_VALUES = {
  spacing: {
    small: { base: '2', md: '3' },
    medium: { base: '4', md: '6' },
    large: { base: '6', md: '8' },
    xlarge: { base: '8', md: '12' },
  },
  text: {
    small: { base: 'sm', md: 'md' },
    medium: { base: 'md', md: 'lg' },
    large: { base: 'lg', md: 'xl' },
  },
  containers: {
    narrow: { base: 'full', md: '2xl' },
    medium: { base: 'full', md: '4xl' },
    wide: { base: 'full', md: '6xl' },
  },
} as const;
