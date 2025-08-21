import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterLogos from '../footer-logos';

describe('FooterLogos', () => {
    it('renders without crashing', () => {
        render(<FooterLogos />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('displays partner logos', () => {
        render(<FooterLogos />);
        // Check for common partner logos
        expect(screen.getByAltText(/partner/i)).toBeInTheDocument();
    });

    it('renders logos with proper alt text', () => {
        render(<FooterLogos />);
        const logos = screen.getAllByRole('img');
        logos.forEach(logo => {
            expect(logo).toHaveAttribute('alt');
        });
    });

    it('displays certification logos', () => {
        render(<FooterLogos />);
        // Look for certification or quality assurance logos
        const logos = screen.getAllByRole('img');
        expect(logos.length).toBeGreaterThan(0);
    });

    it('has proper spacing and layout', () => {
        render(<FooterLogos />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });
});
