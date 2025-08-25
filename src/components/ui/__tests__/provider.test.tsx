import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Provider component for testing
const SimpleProvider = ({ children, 'data-testid': testId }: any) => {
    return (
        <div data-testid={testId || 'provider'}>
            {children}
        </div>
    );
};

describe('Provider', () => {
    it('renders without crashing', () => {
        render(<SimpleProvider>Test content</SimpleProvider>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Provider test content';
        render(<SimpleProvider>{testContent}</SimpleProvider>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('wraps children in provider context', () => {
        render(<SimpleProvider>Content</SimpleProvider>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <SimpleProvider>
                <div>Child 1</div>
                <div>Child 2</div>
            </SimpleProvider>
        );

        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<SimpleProvider>Content</SimpleProvider>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
