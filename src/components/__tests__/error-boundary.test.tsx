import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../error-boundary';

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
            <ErrorBoundary>
                <NoError />
            </ErrorBoundary>
        );
        expect(screen.getByText('No error')).toBeInTheDocument();
    });

    it('renders error UI when there is an error', () => {
        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        );
        expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });

    it('displays error details when available', () => {
        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        );
        expect(screen.getByText(/Test error/i)).toBeInTheDocument();
    });

    it('provides a way to report the error', () => {
        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        );
        expect(screen.getByText(/Report this error/i)).toBeInTheDocument();
    });

    it('provides a way to go back', () => {
        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        );
        expect(screen.getByText(/Go back/i)).toBeInTheDocument();
    });
});
