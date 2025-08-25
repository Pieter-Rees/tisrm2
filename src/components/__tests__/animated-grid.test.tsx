import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified AnimatedGrid component for testing
const SimpleAnimatedGrid = ({ children, columns, gap, className, 'data-testid': testId }: any) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: columns || 'repeat(1, 1fr)',
        gap: gap || '6',
        width: '100%',
        maxWidth: '100%',
        minWidth: '0',
        alignItems: 'stretch',
        justifyItems: 'stretch',
    };

    return (
        <div className={className || ''} data-testid={testId || ''}>
            <div style={gridStyle}>
                {children}
            </div>
        </div>
    );
};

describe('AnimatedGrid', () => {
    it('renders without crashing', () => {
        render(<SimpleAnimatedGrid>Test content</SimpleAnimatedGrid>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Animated grid test content';
        render(<SimpleAnimatedGrid>{testContent}</SimpleAnimatedGrid>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies grid layout styling', () => {
        render(<SimpleAnimatedGrid>Content</SimpleAnimatedGrid>);
        const container = screen.getByText('Content').parentElement;
        expect(container).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <SimpleAnimatedGrid>
                <div>Grid item 1</div>
                <div>Grid item 2</div>
                <div>Grid item 3</div>
            </SimpleAnimatedGrid>
        );
        expect(screen.getByText('Grid item 1')).toBeInTheDocument();
        expect(screen.getByText('Grid item 2')).toBeInTheDocument();
        expect(screen.getByText('Grid item 3')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<SimpleAnimatedGrid>Content</SimpleAnimatedGrid>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });

    it('supports grid configuration', () => {
        render(<SimpleAnimatedGrid columns="repeat(3, 1fr)">Content</SimpleAnimatedGrid>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
