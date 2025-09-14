/**
 * Styles barrel export - centralized styling system
 */

// Component styles
export * from './components/card.styles';
export * from './components/layout.styles';
export * from './components/action.styles';
export * from './components/testimonial.styles';
export * from './components/feature.styles';
export * from './components/footer.styles';
export * from './components/navigation.styles';
export * from './components/page.styles';
export * from './components/ui.styles';
export * from './components/utility.styles';

// Animation styles
export * from './animations';

// Re-export constants for convenience
export { HEADING_STYLES, PARAGRAPH_STYLES, LIST_STYLES, SECTION_SPACING, CONTENT_WIDTH } from '@/constants/typography';
export { SPACING_SCALE, COMPONENT_SPACING, SPACING_PATTERNS, GRID_CONFIGS, RESPONSIVE_VALUES, Z_INDEX_SCALE } from '@/constants/layout';
export { UI_CONSTANTS } from '@/constants/app';
