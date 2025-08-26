'use client';

import { Suspense, lazy, memo, type ComponentType, type LazyExoticComponent } from 'react';
import ErrorBoundary from '@/components/error-boundary';
import Loading from '@/components/loading';
import type { BaseComponentProps } from '@/types/components';

interface LazyWrapperProps extends BaseComponentProps {
    /** Fallback loading text */
    loadingText?: string;
    /** Loading size */
    loadingSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Error fallback component */
    errorFallback?: React.ComponentType<any>;
    /** Whether to wrap in error boundary */
    withErrorBoundary?: boolean;
}

/**
 * Higher-order component for lazy loading with consistent error boundaries and loading states
 */
export function withLazyWrapper<P extends Record<string, unknown>>(
    loadingText = 'Loading component...',
    withErrorBoundary = true
) {
    return function createLazyWrapper(
        LazyComponent: LazyExoticComponent<ComponentType<P>>
    ) {
        const LazyWrapper = memo<P & LazyWrapperProps>((props) => {
            const {
                loadingText: customLoadingText,
                loadingSize = 'md',
                errorFallback,
                withErrorBoundary: customErrorBoundary = withErrorBoundary,
                className,
                'data-testid': testId,
                ...componentProps
            } = props;

            const content = (
                <Suspense
                    fallback={
                        <Loading
                            text={customLoadingText || loadingText}
                            size={loadingSize}
                        />
                    }
                >
                    <LazyComponent {...(componentProps as P)} />
                </Suspense>
            );

            if (customErrorBoundary) {
                return (
                    <ErrorBoundary fallback={errorFallback as React.ReactNode}>
                        {content}
                    </ErrorBoundary>
                );
            }

            return content;
        });

        LazyWrapper.displayName = `LazyWrapper(${(LazyComponent as any).displayName || 'Component'})`;
        return LazyWrapper;
    };
}

/**
 * Utility for creating optimized lazy components with predefined loading states
 */
export const createOptimizedLazy = {
    /** For sidebar components */
    sidebar: (
        importFn: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
    ) => {
        const LazyComponent = lazy(importFn);
        return withLazyWrapper('Loading sidebar...', true)(LazyComponent);
    },

    /** For page sections */
    section: (
        importFn: () => Promise<{ default: ComponentType<Record<string, unknown>> }>,
        loadingText?: string
    ) => {
        const LazyComponent = lazy(importFn);
        return withLazyWrapper(loadingText || 'Loading section...', true)(LazyComponent);
    },

    /** For modals and overlays */
    modal: (
        importFn: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
    ) => {
        const LazyComponent = lazy(importFn);
        return withLazyWrapper('Loading...', false)(LazyComponent);
    },

    /** For charts and heavy components */
    heavy: (
        importFn: () => Promise<{ default: ComponentType<Record<string, unknown>> }>,
        loadingText?: string
    ) => {
        const LazyComponent = lazy(importFn);
        return withLazyWrapper(loadingText || 'Loading data...', true)(LazyComponent);
    },
};

// Default export removed as LazyWrapper is not available at module level
export default withLazyWrapper;
