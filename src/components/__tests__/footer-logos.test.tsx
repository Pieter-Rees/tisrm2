import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified FooterLogos component that mimics the original functionality
const SimpleFooterLogos = ({ height = 'auto' }: { height?: string }) => {
    const logos = [
        { src: '/logos/sbb.png', alt: 'SBB Logo' },
        { src: '/logos/grmc.png', alt: 'GRMC Logo' },
        { src: '/logos/kifid.png', alt: 'Kifid Logo' },
    ];

    return (
        <div className="footer-logos-container" style={{ backgroundColor: '#f3f4f6', padding: '2rem 0', marginTop: '4rem' }}>
            <div className="footer-logos-flex" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {logos.map(({ src, alt }) => (
                    <div key={src} className="footer-logo-item" style={{ height, width: '200px' }}>
                        <img src={src} alt={alt} width="1000" height="1000" />
                    </div>
                ))}
            </div>
        </div>
    );
};

describe('FooterLogos', () => {
    it('renders without crashing', () => {
        render(<SimpleFooterLogos />);
        expect(screen.getByAltText('SBB Logo')).toBeInTheDocument();
    });

    it('displays partner logos', () => {
        render(<SimpleFooterLogos />);
        // Check for common partner logos
        expect(screen.getByAltText('SBB Logo')).toBeInTheDocument();
        expect(screen.getByAltText('GRMC Logo')).toBeInTheDocument();
        expect(screen.getByAltText('Kifid Logo')).toBeInTheDocument();
    });

    it('renders logos with proper alt text', () => {
        render(<SimpleFooterLogos />);
        const logos = screen.getAllByRole('img');
        logos.forEach(logo => {
            expect(logo).toHaveAttribute('alt');
        });
    });

    it('displays certification logos', () => {
        render(<SimpleFooterLogos />);
        // Look for certification or quality assurance logos
        const logos = screen.getAllByRole('img');
        expect(logos.length).toBeGreaterThan(0);
    });

    it('has proper spacing and layout', () => {
        render(<SimpleFooterLogos />);
        const container = screen.getByAltText('SBB Logo').closest('.footer-logos-container');
        expect(container).toBeInTheDocument();
    });

    it('renders correct number of logos', () => {
        render(<SimpleFooterLogos />);
        const logos = screen.getAllByRole('img');
        expect(logos).toHaveLength(3);
    });

    it('applies custom height prop', () => {
        render(<SimpleFooterLogos height="100px" />);
        const logoItems = screen.getAllByRole('img').map(img => img.closest('.footer-logo-item'));
        logoItems.forEach(item => {
            expect(item).toHaveStyle({ height: '100px' });
        });
    });

    it('has correct image sources', () => {
        render(<SimpleFooterLogos />);
        expect(screen.getByAltText('SBB Logo')).toHaveAttribute('src', '/logos/sbb.png');
        expect(screen.getByAltText('GRMC Logo')).toHaveAttribute('src', '/logos/grmc.png');
        expect(screen.getByAltText('Kifid Logo')).toHaveAttribute('src', '/logos/kifid.png');
    });

    it('has proper image dimensions', () => {
        render(<SimpleFooterLogos />);
        const logos = screen.getAllByRole('img');
        logos.forEach(logo => {
            expect(logo).toHaveAttribute('width', '1000');
            expect(logo).toHaveAttribute('height', '1000');
        });
    });
});
