import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from '../provider';

describe('Provider', () => {
    it('renders without crashing', () => {
        render(<Provider>Test content</Provider>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Provider test content';
        render(<Provider>{testContent}</Provider>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('wraps children in provider context', () => {
        render(<Provider>Content</Provider>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <Provider>
                <div>Child 1</div>
                <div>Child 2</div>
            </Provider>
        );
        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<Provider>Content</Provider>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
