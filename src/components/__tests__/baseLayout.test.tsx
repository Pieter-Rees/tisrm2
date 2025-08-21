import React from 'react';
import { render, screen } from '@testing-library/react';

// Try to import the component
let BaseLayout: any;
try {
    const imported = require('../baseLayout').default;
    // Extract the actual component from React.memo wrapper
    // The memo wrapper has the component as its first argument
    BaseLayout = imported.type || imported;
    console.log('BaseLayout imported successfully:', BaseLayout);
    console.log('BaseLayout type:', typeof BaseLayout);
    console.log('BaseLayout displayName:', BaseLayout.displayName);
} catch (error) {
    console.error('Failed to import BaseLayout:', error);
}

// Mock the ErrorBoundary component to avoid circular dependency issues
jest.mock('../error-boundary', () => {
    return function MockErrorBoundary({ children }: { children: React.ReactNode }) {
        return <div data-testid="error-boundary">{children}</div>;
    };
});

describe('BaseLayout', () => {
    it('should have working test setup', () => {
        render(<div>Test content</div>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should be importable', () => {
        expect(BaseLayout).toBeDefined();
        expect(typeof BaseLayout).toBe('function');
        expect(BaseLayout.displayName).toBe('BaseLayout');
    });

    it('should render without crashing - minimal test', () => {
        if (!BaseLayout) {
            throw new Error('BaseLayout component not available');
        }
        
        // Try to render with minimal props
        try {
            render(<BaseLayout>Test</BaseLayout>);
            expect(screen.getByText('Test')).toBeInTheDocument();
        } catch (error) {
            console.error('Render error:', error);
            throw error;
        }
    });
});
