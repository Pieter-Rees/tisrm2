import React from 'react';
import { render } from '@testing-library/react';
import PerformanceMonitor from '../performance-monitor';

// Mock performance API
const mockPerformance = {
    now: jest.fn(() => 1000),
    mark: jest.fn(),
    measure: jest.fn(),
};

const mockPerformanceObserver = jest.fn().mockImplementation((callback) => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
}));

Object.defineProperty(window, 'performance', {
    value: mockPerformance,
    writable: true,
});

Object.defineProperty(window, 'PerformanceObserver', {
    value: mockPerformanceObserver,
    writable: true,
});

describe('PerformanceMonitor', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'warn').mockImplementation(() => { });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders without crashing', () => {
        const { container } = render(<PerformanceMonitor />);
        expect(container.firstChild).toBeNull(); // Component doesn't render anything visible
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
        // Temporarily remove PerformanceObserver
        delete (window as any).PerformanceObserver;

        const { container } = render(<PerformanceMonitor />);
        expect(container.firstChild).toBeNull();
    });

    it('does not crash when performance API is not available', () => {
        // Temporarily remove performance API
        delete (window as any).performance;

        const { container } = render(<PerformanceMonitor />);
        expect(container.firstChild).toBeNull();
    });

    it('handles errors gracefully', () => {
        // Mock PerformanceObserver to throw an error
        const mockObserverWithError = jest.fn().mockImplementation(() => {
            throw new Error('PerformanceObserver not supported');
        });

        Object.defineProperty(window, 'PerformanceObserver', {
            value: mockObserverWithError,
            writable: true,
        });

        // Keep performance API available for this test
        Object.defineProperty(window, 'performance', {
            value: mockPerformance,
            writable: true,
        });

        const { container } = render(<PerformanceMonitor />);
        expect(container.firstChild).toBeNull();
        expect(console.warn).toHaveBeenCalledWith(
            'Performance monitoring not available:',
            expect.any(Error)
        );
    });
});
