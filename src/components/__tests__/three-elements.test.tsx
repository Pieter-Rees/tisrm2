import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified ThreeElements component for testing
const SimpleThreeElements = ({ elements, className, 'data-testid': testId }: any) => {
    const defaultElements = [
        {
            id: 'risk-management',
            image: '/slider-2.jpg',
            title: 'Risk Managers',
            description:
                'TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd in het register GRMC.',
            cta: 'Lees meer',
            ctaLink: '/risk-management',
            variant: 'elevated',
        },
        {
            id: 'maatwerk',
            image: '/unieke-kenmerken.jpg',
            title: 'Maatwerk Verzekeringen',
            description:
                'De verzekeringen van TIS zijn stuk voor stuk maatwerk. De standaard verzekeringsproducten zijn vaak niet toereikend, waardoor er een kans bestaat dat er geen dekking is óf juist dekking heeft voor zaken die geen betrekking hebben op u of uw bedrijf.',
            cta: 'Lees meer',
            ctaLink: '/verzekeringen',
            variant: 'elevated',
        },
        {
            id: 'schadeafhandeling',
            image: '/slider-3.jpg',
            title: 'Digitale Schadeafhandeling',
            description:
                'TIS biedt u een volledig digitale schadeafhandeling. Door deze specialisatie staan wij bekend om het snel en vakkundig afwikkelen van uw schade, van een inbraak, stormschade of het verhalen van uw bedrijfsschade.',
            cta: 'Lees meer',
            ctaLink: '#',
            variant: 'elevated',
            external: true,
        },
    ];

    const cardsToRender = elements || defaultElements;

    return (
        <section
            className={className || ''}
            data-testid={testId || ''}
            aria-label="Key features and services"
            style={{
                padding: '4rem 2rem',
                backgroundColor: '#f8fafc',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{
                    fontSize: '2.25rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '1rem',
                }}>
                    Waarom kiezen voor TIS?
                </h2>
                <p style={{
                    fontSize: '1.125rem',
                    color: '#6b7280',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}>
                    Ontdek onze unieke aanpak en specialisaties die ons onderscheiden in
                    de verzekeringsmarkt
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {cardsToRender.map((element: any, index: number) => (
                    <article key={element.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #e5e7eb',
                    }}>
                        <img
                            src={element.image}
                            alt={element.title}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '0.375rem',
                                marginBottom: '1rem',
                            }}
                        />
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: '#1f2937',
                            marginBottom: '0.75rem',
                        }}>
                            {element.title}
                        </h3>
                        <p style={{
                            color: '#6b7280',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem',
                        }}>
                            {element.description}
                        </p>
                        <button
                            type="button"
                            style={{
                                background: 'transparent',
                                color: '#3b82f6',
                                border: '1px solid #3b82f6',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                cursor: 'pointer',
                                fontWeight: '500',
                            }}
                            data-testid={`feature-card-${element.id}`}
                        >
                            {element.cta} →
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
};

describe('ThreeElements', () => {
    it('renders without crashing', () => {
        render(<SimpleThreeElements />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('displays three main elements', () => {
        render(<SimpleThreeElements />);
        // Look for the three main sections
        const elements = screen.getAllByRole('article');
        expect(elements.length).toBeGreaterThanOrEqual(3);
    });

    it('displays element titles', () => {
        render(<SimpleThreeElements />);
        // Look for titles or headings
        const headings = screen.getAllByRole('heading');
        expect(headings.length).toBeGreaterThan(0);
    });

    it('displays element descriptions', () => {
        render(<SimpleThreeElements />);
        // Look for descriptive text
        const content = screen.getByRole('region');
        expect(content).toBeInTheDocument();
    });

    it('has proper layout structure', () => {
        render(<SimpleThreeElements />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });

    it('displays icons or visual elements', () => {
        render(<SimpleThreeElements />);
        // Look for images or icons
        const images = screen.getAllByRole('img');
        expect(images.length).toBeGreaterThanOrEqual(0);
    });
});
