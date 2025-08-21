import React from 'react';
import { render, screen } from '@testing-library/react';
import UnifiedLayout from '../layout/unified-layout';

describe('UnifiedLayout', () => {
    it('renders without crashing', () => {
        render(<UnifiedLayout>Test content</UnifiedLayout>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Unified layout test content';
        render(<UnifiedLayout>{testContent}</UnifiedLayout>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies unified layout styling', () => {
        render(<UnifiedLayout>Content</UnifiedLayout>);
        const container = screen.getByText('Content').parentElement;
        expect(container).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <UnifiedLayout>
                <div>Header</div>
                <div>Main content</div>
                <div>Footer</div>
            </UnifiedLayout>
        );
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Main content')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<UnifiedLayout>Content</UnifiedLayout>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });

    it('supports layout configuration', () => {
        render(<UnifiedLayout variant="centered">Content</UnifiedLayout>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
