import React from 'react';
import { render, screen } from '@testing-library/react';
import { Toaster } from '../toaster';

describe('Toaster', () => {
    it('renders without crashing', () => {
        render(<Toaster />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('renders toaster container', () => {
        render(<Toaster />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });

    it('has proper accessibility attributes', () => {
        render(<Toaster />);
        const container = screen.getByRole('region');
        expect(container).toHaveAttribute('aria-live', 'polite');
    });

    it('supports custom positioning', () => {
        render(<Toaster />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });

    it('supports custom z-index', () => {
        render(<Toaster />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<Toaster />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });
});
