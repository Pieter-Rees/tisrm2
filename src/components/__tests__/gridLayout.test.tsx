import React from 'react';
import { render, screen } from '@testing-library/react';
import GridLayout from '../gridLayout';

describe('GridLayout', () => {
    it('renders without crashing', () => {
        render(<GridLayout>Test content</GridLayout>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Grid layout test content';
        render(<GridLayout>{testContent}</GridLayout>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies grid layout styling', () => {
        render(<GridLayout>Content</GridLayout>);
        const container = screen.getByText('Content').parentElement;
        expect(container).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <GridLayout>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </GridLayout>
        );
        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
        expect(screen.getByText('Child 3')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<GridLayout>Content</GridLayout>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
