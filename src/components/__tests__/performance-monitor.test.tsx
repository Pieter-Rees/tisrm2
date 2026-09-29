import React from 'react';
import { render } from '@testing-library/react';
import PerformanceMonitor from '../performance-monitor';

const mockPerformance = {
    now: jest.fn(() => 1000),
    mark: jest.fn(),
    measure: jest.fn(),
};

const mockPerformanceObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
}));

Object.defineProperty(window, 'performance', {
    value: mockPerformance,
    writable: true,
    configurable: true,
});

Object.defineProperty(window, 'PerformanceObserver', {
    value: mockPerformanceObserver,
    writable: true,
    configurable: true,
});

describe('PerformanceMonitor', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'warn').mockImplementation(() => {});
        Object.defineProperty(window, 'performance', {
            value: mockPerformance,
            writable: true,
            configurable: true,
        });
        Object.defineProperty(window, 'PerformanceObserver', {
            value: mockPerformanceObserver,
            writable: true,
            configurable: true,
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders without crashing', () => {
        const { container } = render(<PerformanceMonitor />);
        expect(container.firstChild).toBeNull();
    });

    it('renders with custom props', () => {
        const { container } = render(
            <PerformanceMonitor
                enableInProduction={true}
                slowRenderThreshold={100}
            />
        );
        expect(container.firstChild).toBeNull();
    });

    it('does not crash when PerformanceObserver is not available', () => {
        Reflect.deleteProperty(window, 'PerformanceObserver');

        const { container } = render(<PerformanceMonitor />);
        expect(container.firstChild).toBeNull();
    });

    it('does not crash when performance API is not available', () => {
        Reflect.deleteProperty(window, 'performance');

        const { container } = render(<PerformanceMonitor />);
        expect(container.firstChild).toBeNull();
    });

    it('handles errors gracefully', () => {
        const mockObserverWithError = jest.fn().mockImplementation(() => {
            throw new Error('PerformanceObserver not supported');
        });

        Object.defineProperty(window, 'PerformanceObserver', {
            value: mockObserverWithError,
            writable: true,
            configurable: true,
        });

        Object.defineProperty(window, 'performance', {
            value: mockPerformance,
            writable: true,
            configurable: true,
        });

        const { container } = render(<PerformanceMonitor />);
        expect(container.firstChild).toBeNull();
        expect(console.warn).toHaveBeenCalledWith(
            'Performance monitoring not available:',
            expect.any(Error)
        );
    });
});
