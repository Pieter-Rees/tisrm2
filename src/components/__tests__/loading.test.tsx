import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../loading';

describe('Loading', () => {
    it('renders without crashing', () => {
        render(<Loading />);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('displays loading text', () => {
        render(<Loading />);
        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });

    it('displays spinner or loading animation', () => {
        render(<Loading />);
        // Look for common loading indicators
        const loadingElement = screen.getByRole('status');
        expect(loadingElement).toBeInTheDocument();
    });

    it('has accessible loading state', () => {
        render(<Loading />);
        const loadingElement = screen.getByRole('status');
        expect(loadingElement).toHaveAttribute('aria-live', 'polite');
    });

    it('can be customized with custom text', () => {
        const customText = 'Custom loading message';
        render(<Loading text={customText} />);
        expect(screen.getByText(customText)).toBeInTheDocument();
    });
});
