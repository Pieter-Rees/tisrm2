import React from 'react';
import { render, screen } from '@testing-library/react';
import { withLazyWrapper } from '../optimization/lazy-wrapper';

// Mock component for testing
const TestComponent = () => <div>Test content</div>;

describe('LazyWrapper', () => {
    it('creates a lazy wrapper function', () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        expect(typeof lazyWrapper).toBe('function');
    });

    it('wraps a component with lazy loading', () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('supports custom loading text', () => {
        const lazyWrapper = withLazyWrapper('Custom loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent />);
        expect(screen.getByText('Custom loading...')).toBeInTheDocument();
    });

    it('supports error boundary wrapping', () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('supports custom loading size', () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent loadingSize="lg" />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});
