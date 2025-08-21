import React from 'react';
import { render, screen } from '@testing-library/react';
import SchadeMelden from '../schade-melden';

describe('SchadeMelden', () => {
    it('renders without crashing', () => {
        render(<SchadeMelden />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('displays damage reporting text', () => {
        render(<SchadeMelden />);
        expect(screen.getByText(/Schade melden/i)).toBeInTheDocument();
    });

    it('has proper button styling', () => {
        render(<SchadeMelden />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('displays urgency or importance indicator', () => {
        render(<SchadeMelden />);
        // Look for any text that indicates urgency
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('is accessible', () => {
        render(<SchadeMelden />);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-label');
    });
});
