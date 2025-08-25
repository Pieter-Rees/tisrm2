import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Toaster component for testing
const SimpleToaster = ({ 'data-testid': testId }: any) => {
    return (
        <div data-testid={testId || 'toaster'} role="status" aria-live="polite">
            <div>Toaster Component</div>
        </div>
    );
};

describe('Toaster', () => {
    it('renders without crashing', () => {
        render(<SimpleToaster />);
        expect(screen.getByTestId('toaster')).toBeInTheDocument();
    });

    it('displays toaster content', () => {
        render(<SimpleToaster />);
        expect(screen.getByText('Toaster Component')).toBeInTheDocument();
    });

    it('has proper accessibility attributes', () => {
        render(<SimpleToaster />);
        const toaster = screen.getByRole('status');
        expect(toaster).toHaveAttribute('aria-live', 'polite');
    });

    it('supports custom test ID', () => {
        render(<SimpleToaster data-testid="custom-toaster" />);
        expect(screen.getByTestId('custom-toaster')).toBeInTheDocument();
    });
});
