import React from 'react';
import { render, screen } from '@testing-library/react';


const SimpleComponent: React.FC<{ children?: React.ReactNode; testId?: string }> = ({
    children,
    testId = 'simple-component'
}) => {
    return (
        <div data-testid={testId} role="region">
            <h1>Simple Test Component</h1>
            {children}
        </div>
    );
};

describe('Simple Component Test', () => {
    it('renders basic component successfully', () => {
        render(<SimpleComponent>Test content</SimpleComponent>);

        expect(screen.getByTestId('simple-component')).toBeInTheDocument();
        expect(screen.getByText('Simple Test Component')).toBeInTheDocument();
        expect(screen.getByText('Test content')).toBeInTheDocument();
        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('renders without children', () => {
        render(<SimpleComponent />);

        expect(screen.getByTestId('simple-component')).toBeInTheDocument();
        expect(screen.getByText('Simple Test Component')).toBeInTheDocument();
    });

    it('has proper accessibility attributes', () => {
        render(<SimpleComponent />);

        const component = screen.getByTestId('simple-component');
        expect(component).toHaveAttribute('role', 'region');
    });

    it('can handle custom testId', () => {
        render(<SimpleComponent testId="custom-id">Content</SimpleComponent>);

        expect(screen.getByTestId('custom-id')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('can handle complex children', () => {
        render(
            <SimpleComponent>
                <div>
                    <span>Nested content</span>
                    <button>Test button</button>
                </div>
            </SimpleComponent>
        );

        expect(screen.getByText('Nested content')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});

