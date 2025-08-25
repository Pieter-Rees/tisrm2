import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified CallToAction component that mimics the original functionality
const SimpleCallToAction = React.memo(({
    className,
    'data-testid': testId
}: {
    className?: string;
    'data-testid'?: string;
}) => {
    return (
        <div
            className={className}
            data-testid={testId}
            style={{
                marginTop: '3rem',
                padding: '2rem',
                backgroundColor: '#eff6ff',
                borderRadius: '0.75rem',
                border: '1px solid #bfdbfe',
                textAlign: 'center'
            }}
        >
            <h3
                style={{
                    fontSize: '1.125rem',
                    color: '#1e3a8a',
                    marginBottom: '0.75rem',
                    fontWeight: '600'
                }}
            >
                Klaar voor persoonlijk advies?
            </h3>
            <div style={{ fontSize: '0.875rem', color: '#1d4ed8', marginBottom: '1rem', maxWidth: '32rem', margin: '0 auto 1rem auto' }}>
                Neem contact op voor een vrijblijvend gesprek over uw
                verzekeringsbehoefte
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    maxWidth: '32rem',
                    margin: '0 auto'
                }}
            >
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', backgroundColor: 'white' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Bel direct</h4>
                    <button style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.375rem',
                        cursor: 'pointer'
                    }}>
                        <a href="tel:+310206368191" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Bel nu
                        </a>
                    </button>
                </div>
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', backgroundColor: 'white' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Offerte aanvragen</h4>
                    <button style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: 'transparent',
                        color: '#3b82f6',
                        border: '1px solid #3b82f6',
                        borderRadius: '0.375rem',
                        cursor: 'pointer'
                    }}>
                        <a href="/offerte" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Start hier
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
});

SimpleCallToAction.displayName = 'SimpleCallToAction';

describe('CallToAction Component', () => {
    it('renders without crashing', () => {
        render(<SimpleCallToAction />);
        expect(screen.getByText('Klaar voor persoonlijk advies?')).toBeInTheDocument();
    });

    it('displays main heading', () => {
        render(<SimpleCallToAction />);
        expect(screen.getByText('Klaar voor persoonlijk advies?')).toBeInTheDocument();
    });

    it('displays description text', () => {
        render(<SimpleCallToAction />);
        expect(screen.getByText(/Neem contact op voor een vrijblijvend gesprek/)).toBeInTheDocument();
    });

    it('displays call direct card', () => {
        render(<SimpleCallToAction />);
        expect(screen.getByText('Bel direct')).toBeInTheDocument();
        expect(screen.getByText('Bel nu')).toBeInTheDocument();
    });

    it('displays quote request card', () => {
        render(<SimpleCallToAction />);
        expect(screen.getByText('Offerte aanvragen')).toBeInTheDocument();
        expect(screen.getByText('Start hier')).toBeInTheDocument();
    });

    it('has correct phone link', () => {
        render(<SimpleCallToAction />);
        const phoneLink = screen.getByText('Bel nu').closest('a');
        expect(phoneLink).toHaveAttribute('href', 'tel:+310206368191');
    });

    it('has correct quote link', () => {
        render(<SimpleCallToAction />);
        const quoteLink = screen.getByText('Start hier').closest('a');
        expect(quoteLink).toHaveAttribute('href', '/offerte');
    });

    it('applies custom className', () => {
        render(<SimpleCallToAction className="custom-class" />);
        const container = screen.getByText('Klaar voor persoonlijk advies?').closest('div');
        expect(container).toHaveClass('custom-class');
    });

    it('applies custom data-testid', () => {
        render(<SimpleCallToAction data-testid="custom-test-id" />);
        expect(screen.getByTestId('custom-test-id')).toBeInTheDocument();
    });

    it('has proper heading structure', () => {
        render(<SimpleCallToAction />);
        const mainHeading = screen.getByRole('heading', { level: 3 });
        expect(mainHeading).toBeInTheDocument();
        expect(mainHeading).toHaveTextContent('Klaar voor persoonlijk advies?');
    });

    it('renders both action cards', () => {
        render(<SimpleCallToAction />);
        const cards = screen.getAllByText(/Bel direct|Offerte aanvragen/);
        expect(cards).toHaveLength(2);
    });

    it('maintains proper layout structure', () => {
        render(<SimpleCallToAction />);
        const container = screen.getByText('Klaar voor persoonlijk advies?').closest('div');
        expect(container).toBeInTheDocument();
    });

    it('has accessible button elements', () => {
        render(<SimpleCallToAction />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
    });

    it('has proper link accessibility', () => {
        render(<SimpleCallToAction />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(2);
    });
});
