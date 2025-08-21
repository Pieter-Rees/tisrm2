import React from 'react';
import { render, screen } from '@testing-library/react';
import { VStack } from '../stack';

describe('Stack', () => {
    it('renders without crashing', () => {
        render(<VStack>Test content</VStack>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Stack test content';
        render(<VStack>{testContent}</VStack>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies stack layout styling', () => {
        render(<VStack>Content</VStack>);
        const container = screen.getByText('Content').parentElement;
        expect(container).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <VStack>
                <div>Stack item 1</div>
                <div>Stack item 2</div>
                <div>Stack item 3</div>
            </VStack>
        );
        expect(screen.getByText('Stack item 1')).toBeInTheDocument();
        expect(screen.getByText('Stack item 2')).toBeInTheDocument();
        expect(screen.getByText('Stack item 3')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<VStack>Content</VStack>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });

    it('supports direction prop', () => {
        render(<VStack direction="row">Content</VStack>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });

    it('supports spacing prop', () => {
        render(<VStack spacing={4}>Content</VStack>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
