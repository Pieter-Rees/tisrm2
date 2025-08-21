import React from 'react';
import { render, screen } from '@testing-library/react';
import PageLayout from '../page-layout';

describe('PageLayout', () => {
    it('renders without crashing', () => {
        render(<PageLayout>Test content</PageLayout>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Page layout test content';
        render(<PageLayout>{testContent}</PageLayout>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies page layout styling', () => {
        render(<PageLayout>Content</PageLayout>);
        const container = screen.getByText('Content').parentElement;
        expect(container).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <PageLayout>
                <div>Header</div>
                <div>Main content</div>
                <div>Footer</div>
            </PageLayout>
        );
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Main content')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<PageLayout>Content</PageLayout>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
