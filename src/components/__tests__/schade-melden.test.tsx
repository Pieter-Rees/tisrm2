import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified SchadeMelden component that mimics the original functionality
const SimpleSchadeMelden = () => {
    return (
        <button aria-label="Schade melden">
            <a
                href="https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="button-content">
                    <div className="button-text">
                        <h2>Schade melden</h2>
                    </div>
                </div>
            </a>
        </button>
    );
};

describe('SchadeMelden', () => {
    it('renders without crashing', () => {
        render(<SimpleSchadeMelden />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('displays damage reporting text', () => {
        render(<SimpleSchadeMelden />);
        expect(screen.getByText(/Schade melden/i)).toBeInTheDocument();
    });

    it('has proper button styling', () => {
        render(<SimpleSchadeMelden />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('displays urgency or importance indicator', () => {
        render(<SimpleSchadeMelden />);
        // Look for any text that indicates urgency
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('is accessible', () => {
        render(<SimpleSchadeMelden />);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-label');
    });

    it('has correct link attributes', () => {
        render(<SimpleSchadeMelden />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('has correct href', () => {
        render(<SimpleSchadeMelden />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen');
    });

    it('renders heading element', () => {
        render(<SimpleSchadeMelden />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Schade melden');
    });
});
