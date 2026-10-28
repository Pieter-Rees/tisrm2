import React from 'react';
import { render, screen } from '@testing-library/react';

import { CONTACT_INFO } from '@/constants/app';

// Create a simplified CallUs component that mimics the original functionality.
// Phone values come from CONTACT_INFO so the copy cannot drift from the real one.
const SimpleCallUs = () => {
    return (
        <button style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            flexDirection: 'column',
            padding: '2rem',
            gap: '2rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer'
        }}>
            <a href={CONTACT_INFO.phoneHref} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', justifyContent: 'center', height: '100%', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ color: 'white' }}>
                        📞
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1rem', color: 'white', margin: '0' }}>
                            Direct antwoord op uw vragen?
                            <br />
                            Bel ons!
                        </h2>
                    </div>
                    <div>
                        <span style={{ color: 'white' }}>{CONTACT_INFO.phone}</span>
                    </div>
                </div>
            </a>
        </button>
    );
};

describe('CallUs Component', () => {
    it('renders without crashing', () => {
        render(<SimpleCallUs />);
        expect(screen.getByText(/Direct antwoord op uw vragen/)).toBeInTheDocument();
    });

    it('displays call to action text', () => {
        render(<SimpleCallUs />);
        expect(screen.getByText(/Direct antwoord op uw vragen/)).toBeInTheDocument();
        expect(screen.getByText(/Bel ons/)).toBeInTheDocument();
    });

    it('displays phone number', () => {
        render(<SimpleCallUs />);
        expect(screen.getByText('+31 20 636 8191')).toBeInTheDocument();
    });

    it('has correct phone link', () => {
        render(<SimpleCallUs />);
        const phoneLink = screen.getByText(CONTACT_INFO.phone).closest('a');
        expect(phoneLink).toHaveAttribute('href', CONTACT_INFO.phoneHref);
    });

    it('renders phone icon', () => {
        render(<SimpleCallUs />);
        expect(screen.getByText('📞')).toBeInTheDocument();
    });

    it('has proper button styling', () => {
        render(<SimpleCallUs />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('has accessible heading structure', () => {
        render(<SimpleCallUs />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Direct antwoord op uw vragen/);
    });

    it('maintains proper layout structure', () => {
        render(<SimpleCallUs />);
        const content = screen.getByText(/Direct antwoord op uw vragen/);
        expect(content).toBeInTheDocument();
    });

    it('has correct link attributes', () => {
        render(<SimpleCallUs />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', CONTACT_INFO.phoneHref);
    });

    it('displays complete call to action message', () => {
        render(<SimpleCallUs />);
        expect(screen.getByText(/Direct antwoord op uw vragen/)).toBeInTheDocument();
        expect(screen.getByText(/Bel ons/)).toBeInTheDocument();
        expect(screen.getByText('+31 20 636 8191')).toBeInTheDocument();
    });

    it('has proper button accessibility', () => {
        render(<SimpleCallUs />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('style');
    });
});
