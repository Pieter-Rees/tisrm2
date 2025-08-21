import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';

describe('Footer', () => {
    it('renders without crashing', () => {
        render(<Footer />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('displays company information', () => {
        render(<Footer />);
        expect(screen.getByText(/TIS Risk Management/)).toBeInTheDocument();
    });

    it('displays contact information', () => {
        render(<Footer />);
        expect(screen.getByText(/Contact/)).toBeInTheDocument();
    });

    it('displays navigation links', () => {
        render(<Footer />);
        expect(screen.getByText(/Over ons/)).toBeInTheDocument();
        expect(screen.getByText(/Verzekeringen/)).toBeInTheDocument();
        expect(screen.getByText(/Contact/)).toBeInTheDocument();
    });

    it('displays copyright information', () => {
        render(<Footer />);
        expect(screen.getByText(/©/)).toBeInTheDocument();
    });
});
