// Layout components barrel export
export { default as UnifiedLayout } from './unified-layout';

// Re-export legacy layouts for backwards compatibility.
// PageLayout stays out of this barrel: it pulls framer-motion into every page.
export { default as BaseLayout } from '../baseLayout';
