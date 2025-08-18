import { lazy, ComponentType, LazyExoticComponent } from 'react';

export const createLazyComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
): LazyExoticComponent<T> => 
  lazy(importFn);

export const preloadComponent = (importFn: () => Promise<any>) => {
  if (typeof window !== 'undefined') {
    setTimeout(() => importFn(), 100);
  }
};

export const withPreload = <T extends ComponentType<any>>(
  LazyComponent: LazyExoticComponent<T>,
  importFn: () => Promise<{ default: T }>
) => {
  const WrappedComponent = LazyComponent;
  WrappedComponent.preload = () => preloadComponent(importFn);
  return WrappedComponent;
};
