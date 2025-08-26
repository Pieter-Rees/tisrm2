'use client';

import { useEffect } from 'react';

interface PerformanceMonitorProps {
    /** Whether to enable performance monitoring in production */
    enableInProduction?: boolean;
    /** Threshold for reporting slow renders (ms) */
    slowRenderThreshold?: number;
}

/**
 * Performance monitoring component for development and optionally production
 * Logs performance metrics and slow renders to help identify optimization opportunities
 */
export default function PerformanceMonitor({
    enableInProduction = false,
    slowRenderThreshold = 16, // 60fps = 16.67ms per frame
}: PerformanceMonitorProps) {
    useEffect(() => {

        if (process.env.NODE_ENV === 'production' && !enableInProduction) {
            return;
        }

        let renderStart: number;
        let observer: PerformanceObserver | undefined;

        // Monitor render performance
        if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
            try {
                observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (entry.entryType === 'measure' && entry.duration > slowRenderThreshold) {
                            console.warn(`Slow render detected: ${entry.name} took ${entry.duration.toFixed(2)}ms`);
                        }
                    });
                });

                observer.observe({ entryTypes: ['measure'] });

                // Mark render start
                renderStart = performance.now();
                performance.mark('component-render-start');

                return () => {
                    // Mark render end and measure
                    if (renderStart) {
                        performance.mark('component-render-end');
                        performance.measure(
                            'component-render',
                            'component-render-start',
                            'component-render-end'
                        );
                    }

                    observer?.disconnect();
                };
            } catch (error) {
                console.warn('Performance monitoring not available:', error);
            }
        }

        // Fallback timing without PerformanceObserver
        if (!observer) {
            renderStart = performance.now();

            return () => {
                const renderEnd = performance.now();
                const renderTime = renderEnd - renderStart;

                if (renderTime > slowRenderThreshold) {
                    console.warn(`Slow render detected: ${renderTime.toFixed(2)}ms`);
                }
            };
        }

        // Return undefined when observer exists (cleanup handled in try block)
        return undefined;
    }, [enableInProduction, slowRenderThreshold]);

    // Monitor Core Web Vitals in production
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Report Core Web Vitals
        const reportWebVital = (metric: any) => {
            if (process.env.NODE_ENV === 'development' || enableInProduction) {
                console.warn(`${metric.name}: ${metric.value.toFixed(2)}${metric.unit || 'ms'}`);
            }

            // In production, you could send this to analytics
            if (process.env.NODE_ENV === 'production' && enableInProduction) {
                // Example: sendToAnalytics(metric);
            }
        };

        // Dynamic import to avoid SSR issues and handle optional dependency
        const loadWebVitals = async () => {
            try {
                const webVitals = await import('web-vitals');
                const { onCLS, onINP, onFCP, onLCP, onTTFB } = webVitals;

                onCLS(reportWebVital);
                onINP(reportWebVital);
                onFCP(reportWebVital);
                onLCP(reportWebVital);
                onTTFB(reportWebVital);
            } catch (error) {
                // web-vitals not available or failed to load, silently continue
                if (process.env.NODE_ENV === 'development') {
                    console.warn('Web Vitals not available:', error);
                }
            }
        };

        loadWebVitals();
    }, [enableInProduction]);

    // Component doesn't render anything
    return null;
}


export const DevPerformanceMonitor = () => {
    if (process.env.NODE_ENV !== 'development') {
        return null;
    }

    return <PerformanceMonitor enableInProduction={false} />;
};
