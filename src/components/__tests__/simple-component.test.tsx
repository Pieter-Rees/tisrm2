import React from 'react';
import { render, screen } from '@testing-library/react';

// Simple test component
const SimpleComponent = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="simple-component">{children}</div>
);

describe('SimpleComponent', () => {
    it('renders without crashing', () => {
        render(<SimpleComponent>Test content</SimpleComponent>);
        expect(screen.getByTestId('simple-component')).toBeInTheDocument();
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Hello World';
        render(<SimpleComponent>{testContent}</SimpleComponent>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });
});
