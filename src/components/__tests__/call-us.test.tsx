import React from 'react';
import { render, screen } from '@testing-library/react';
import CallUs from '../call-us';

describe('CallUs', () => {
    it('renders without crashing', () => {
        render(<CallUs />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('displays call to action text', () => {
        render(<CallUs />);
        expect(screen.getByText(/Bel ons/i)).toBeInTheDocument();
    });

    it('displays phone number', () => {
        render(<CallUs />);
        expect(screen.getByText(/06/)).toBeInTheDocument();
    });

    it('has clickable phone number', () => {
        render(<CallUs />);
        const phoneLink = screen.getByRole('link');
        expect(phoneLink).toHaveAttribute('href', 'tel:06-12345678');
    });

    it('displays urgency message', () => {
        render(<CallUs />);
        expect(screen.getByText(/Direct beschikbaar/i)).toBeInTheDocument();
    });
});
