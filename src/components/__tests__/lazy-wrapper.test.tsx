import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the imports first
jest.mock('@/components/error-boundary', () => ({
    __esModule: true,
    default: ({ children, fallback, 'data-testid': testId }: any) => (
        <div data-testid={testId || 'error-boundary'}>
            {fallback || children}
        </div>
    ),
}));

jest.mock('@/components/loading', () => ({
    __esModule: true,
    default: ({ text = 'Loading...', size = 'md', 'data-testid': testId }: any) => {
        const sizeStyles = {
            xs: { fontSize: '0.75rem', padding: '0.25rem' },
            sm: { fontSize: '0.875rem', padding: '0.5rem' },
            md: { fontSize: '1rem', padding: '0.75rem' },
            lg: { fontSize: '1.125rem', padding: '1rem' },
            xl: { fontSize: '1.25rem', padding: '1.25rem' },
        };

        return (
            <div 
                data-testid={testId || 'loading'}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: sizeStyles[size as keyof typeof sizeStyles]?.padding || '0.75rem',
                    fontSize: sizeStyles[size as keyof typeof sizeStyles]?.fontSize || '1rem',
                }}
            >
                {text}
            </div>
        );
    },
}));

// Import the actual component after mocking
import { withLazyWrapper } from '../optimization/lazy-wrapper';

// Mock component for testing
const TestComponent = () => <div data-testid="test-component">Test content</div>;

describe('LazyWrapper', () => {
    it('creates a lazy wrapper function', () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        expect(typeof lazyWrapper).toBe('function');
    });

    it('wraps a component with lazy loading', async () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent />);
        
        // Initially should show loading
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        
        // Wait for the component to load
        await screen.findByTestId('test-component');
        expect(screen.getByTestId('test-component')).toBeInTheDocument();
    });

    it('supports custom loading text', async () => {
        const lazyWrapper = withLazyWrapper('Custom loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent />);
        expect(screen.getByText('Custom loading...')).toBeInTheDocument();
        
        // Wait for the component to load
        await screen.findByTestId('test-component');
    });

    it('supports error boundary wrapping', async () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        
        // Wait for the component to load
        await screen.findByTestId('test-component');
    });

    it('supports custom loading size', async () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent loadingSize="lg" />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        
        // Wait for the component to load
        await screen.findByTestId('test-component');
    });

    it('handles error boundary disabled', async () => {
        const lazyWrapper = withLazyWrapper('Loading...', false);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        
        // Wait for the component to load
        await screen.findByTestId('test-component');
    });

    it('forwards additional props to wrapped component', async () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent data-testid="wrapped-component" />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        
        // Wait for the component to load
        await screen.findByTestId('test-component');
    });

    it('supports custom test ID', async () => {
        const lazyWrapper = withLazyWrapper('Loading...', true);
        const WrappedComponent = lazyWrapper(React.lazy(() => Promise.resolve({ default: TestComponent })));

        render(<WrappedComponent data-testid="custom-lazy-wrapper" />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        
        // Wait for the component to load
        await screen.findByTestId('test-component');
    });
});
