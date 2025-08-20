// Component barrel exports for better tree-shaking and import organization

// Layout components
export { UnifiedLayout } from './layout';
export { default as PageLayout } from './page-layout';
export { default as BaseLayout } from './baseLayout';
export { default as GridLayout } from './gridLayout';

// Common components
export { default as AnimatedGrid } from './common/animated-grid';

// UI components
export { ButtonLink } from './ui/button-link';
export { Field } from './ui/field';
export { ColorModeProvider, ColorModeButton, ColorModeIcon } from './ui/color-mode';
export { VStack, HStack } from './ui/stack';
export { Tooltip } from './ui/tooltip';
export { Toaster } from './ui/toaster';

// Content components
export { default as Card } from './card';
export { default as StarList } from './star-list';
export { default as Breadcrumb } from './breadcrumb';
export { default as Talker } from './talker';
export { default as ThreeElements } from './three-elements';

// Navigation components
export { default as Header } from './header';
export { default as Footer } from './footer';
export { default as Navbar } from './navbar';
export { default as Sidebar } from './sidebar';
export { default as Sidenav } from './sidenav';

// Utility components
export { default as ErrorBoundary } from './error-boundary';
export { default as Loading } from './loading';
export { default as Logo } from './logo';

// Action components
export { default as CallUs } from './call-us';
export { default as SchadeMelden } from './schade-melden';
export { default as ContactInfo } from './contact-info';
export { default as FooterLogos } from './footer-logos';

// Animation components
export * from './page-animation';

// Optimization components
export { default as LazyWrapper, withLazyWrapper, createOptimizedLazy } from './optimization/lazy-wrapper';
export { default as OptimizedImage } from './optimization/optimized-image';
