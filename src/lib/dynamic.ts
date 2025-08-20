import type { ComponentType, LazyExoticComponent } from 'react';
import { lazy } from 'react';

export const createLazyComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
): LazyExoticComponent<T> => lazy(importFn);

export const preloadComponent = (importFn: () => Promise<any>) => {
  if (typeof window !== 'undefined') {
    setTimeout(() => importFn(), 100);
  }
};

export const withPreload = <T extends ComponentType<any>>(
  LazyComponent: LazyExoticComponent<T>,
  importFn: () => Promise<{ default: T }>,
) => {
  const WrappedComponent = LazyComponent as LazyExoticComponent<T> & {
    preload?: () => void;
  };
  WrappedComponent.preload = () => preloadComponent(importFn);
  return WrappedComponent;
};
