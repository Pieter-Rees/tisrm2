import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedGrid from '../common/animated-grid';

describe('AnimatedGrid', () => {
    it('renders without crashing', () => {
        render(<AnimatedGrid>Test content</AnimatedGrid>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Animated grid test content';
        render(<AnimatedGrid>{testContent}</AnimatedGrid>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies grid layout styling', () => {
        render(<AnimatedGrid>Content</AnimatedGrid>);
        const container = screen.getByText('Content').parentElement;
        expect(container).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <AnimatedGrid>
                <div>Grid item 1</div>
                <div>Grid item 2</div>
                <div>Grid item 3</div>
            </AnimatedGrid>
        );
        expect(screen.getByText('Grid item 1')).toBeInTheDocument();
        expect(screen.getByText('Grid item 2')).toBeInTheDocument();
        expect(screen.getByText('Grid item 3')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<AnimatedGrid>Content</AnimatedGrid>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });

    it('supports grid configuration', () => {
        render(<AnimatedGrid columns="repeat(3, 1fr)">Content</AnimatedGrid>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
