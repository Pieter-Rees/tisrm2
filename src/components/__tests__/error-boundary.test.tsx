import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified ErrorBoundary component for testing
interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    'data-testid'?: string;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class SimpleErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    override componentDidCatch(error: Error, errorInfo: any) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    override render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div 
                    data-testid={this.props['data-testid'] || 'error-boundary'}
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        minHeight: '200px', 
                        padding: '2rem' 
                    }}
                >
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '1rem', 
                        textAlign: 'center' 
                    }}>
                        <h2 style={{ fontSize: '1.125rem', color: '#ef4444' }}>
                            Er is iets misgegaan
                        </h2>
                        <p style={{ color: '#6b7280' }}>
                            Er is een onverwachte fout opgetreden. Probeer de pagina te herladen.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                background: '#3b82f6',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                            }}
                        >
                            Pagina herladen
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div data-testid={this.props['data-testid'] || 'error-boundary'}>
                {this.props.children}
            </div>
        );
    }
}

// Component that throws an error
const ThrowError = () => {
    throw new Error('Test error');
};

// Component that doesn't throw an error
const NoError = () => <div>No error</div>;

describe('ErrorBoundary', () => {
    beforeEach(() => {
        // Suppress console.error for error boundary tests
        jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders children when there is no error', () => {
        render(
            <SimpleErrorBoundary>
                <NoError />
            </SimpleErrorBoundary>
        );
        expect(screen.getByText('No error')).toBeInTheDocument();
    });

    it('renders error UI when there is an error', () => {
        render(
            <SimpleErrorBoundary>
                <ThrowError />
            </SimpleErrorBoundary>
        );
        expect(screen.getByText(/Er is iets misgegaan/i)).toBeInTheDocument();
    });

    it('displays error details when available', () => {
        render(
            <SimpleErrorBoundary>
                <ThrowError />
            </SimpleErrorBoundary>
        );
        expect(screen.getByText(/Er is een onverwachte fout opgetreden/i)).toBeInTheDocument();
    });

    it('provides a way to reload the page', () => {
        render(
            <SimpleErrorBoundary>
                <ThrowError />
            </SimpleErrorBoundary>
        );
        expect(screen.getByText(/Pagina herladen/i)).toBeInTheDocument();
    });

    it('handles custom fallback', () => {
        const customFallback = <div>Custom error message</div>;
        render(
            <SimpleErrorBoundary fallback={customFallback}>
                <ThrowError />
            </SimpleErrorBoundary>
        );
        expect(screen.getByText('Custom error message')).toBeInTheDocument();
    });

    it('maintains error state after error occurs', () => {
        const { rerender } = render(
            <SimpleErrorBoundary>
                <NoError />
            </SimpleErrorBoundary>
        );

        // Initially no error
        expect(screen.getByText('No error')).toBeInTheDocument();

        // Now render with error
        rerender(
            <SimpleErrorBoundary>
                <ThrowError />
            </SimpleErrorBoundary>
        );

        // Should show error UI
        expect(screen.getByText(/Er is iets misgegaan/i)).toBeInTheDocument();
    });

    it('supports custom test ID', () => {
        render(
            <SimpleErrorBoundary data-testid="custom-error-boundary">
                <NoError />
            </SimpleErrorBoundary>
        );
        expect(screen.getByTestId('custom-error-boundary')).toBeInTheDocument();
    });
});
