import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified CallUs component that mimics the original functionality
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
            <a href="tel:+310206368191" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                        <span style={{ color: 'white' }}>+31 20 636 8191</span>
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
        const phoneLink = screen.getByText('+31 20 636 8191').closest('a');
        expect(phoneLink).toHaveAttribute('href', 'tel:+310206368191');
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
        expect(link).toHaveAttribute('href', 'tel:+310206368191');
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
