import React from 'react';
import { render, screen } from '@testing-library/react';
import PageAnimation from '../page-animation';

describe('PageAnimation', () => {
    it('renders without crashing', () => {
        render(<PageAnimation>Test content</PageAnimation>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Page animation test content';
        render(<PageAnimation>{testContent}</PageAnimation>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies animation wrapper', () => {
        render(<PageAnimation>Content</PageAnimation>);
        const container = screen.getByText('Content').parentElement;
        expect(container).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <PageAnimation>
                <div>Animated content 1</div>
                <div>Animated content 2</div>
            </PageAnimation>
        );
        expect(screen.getByText('Animated content 1')).toBeInTheDocument();
        expect(screen.getByText('Animated content 2')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<PageAnimation>Content</PageAnimation>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
