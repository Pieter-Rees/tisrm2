import React from 'react';
import { render, screen } from '@testing-library/react';


const SimpleSidebar = ({ className, 'data-testid': testId }: any) => {
    const sidebarCards = [
        {
            id: 'quote',
            title: 'Verzekering afsluiten',
            description:
                'Vraag vandaag nog een vrijblijvende offerte aan voor uw verzekeringen',
            cta: 'Offerte aanvragen',
            ctaLink: '/offerte',
            buttonVariant: 'solid',
            phone: undefined,
        },
        {
            id: 'documents',
            title: 'Formulieren & Documenten',
            description:
                'Download direct belangrijke formulieren voor uw schadeafhandeling en verzekeringsaanvragen',
            cta: 'Naar downloads',
            ctaLink: '/downloads',
            buttonVariant: 'outline',
            phone: undefined,
        },
        {
            id: 'contact',
            title: 'Vragen?',
            description: 'Neem direct contact met ons op voor persoonlijk advies',
            cta: 'Bel nu',
            ctaLink: undefined,
            phone: 'tel:+31205201234',
            buttonVariant: 'outline',
        },
    ];

    return (
        <aside
            className={className || ''}
            data-testid={testId || ''}
            aria-label="Sidebar navigation and quick actions"
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'stretch',
            }}
        >
            {sidebarCards.map(card => (
                <div
                    key={card.id}
                    data-testid={`sidebar-card-${card.id}`}
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1f2937',
                        marginBottom: '0.75rem',
                    }}>
                        {card.title}
                    </h3>
                    <p style={{
                        color: '#6b7280',
                        lineHeight: '1.6',
                        marginBottom: '1rem',
                    }}>
                        {card.description}
                    </p>
                    {card.ctaLink ? (
                        <a
                            href={card.ctaLink}
                            style={{
                                display: 'inline-block',
                                background: card.buttonVariant === 'solid' ? '#3b82f6' : 'transparent',
                                color: card.buttonVariant === 'solid' ? 'white' : '#3b82f6',
                                border: card.buttonVariant === 'outline' ? '1px solid #3b82f6' : 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                textDecoration: 'none',
                                fontWeight: '500',
                            }}
                        >
                            {card.cta} →
                        </a>
                    ) : (
                        <a
                            href={card.phone}
                            style={{
                                display: 'inline-block',
                                background: 'transparent',
                                color: '#3b82f6',
                                border: '1px solid #3b82f6',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                textDecoration: 'none',
                                fontWeight: '500',
                            }}
                        >
                            {card.cta}
                        </a>
                    )}
                </div>
            ))}

            <div style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#eff6ff',
                borderRadius: '0.375rem',
                border: '1px solid #bfdbfe',
                textAlign: 'center',
            }}>
                <div style={{
                    fontSize: '0.875rem',
                    color: '#1d4ed8',
                    fontWeight: '500',
                    marginBottom: '0.25rem',
                }}>
                    Hulp nodig?
                </div>
                <div style={{
                    fontSize: '0.75rem',
                    color: '#2563eb',
                }}>
                    Onze experts helpen u graag verder met al uw verzekeringsvragen
                </div>
            </div>
        </aside>
    );
};

describe('Sidebar', () => {
    it('renders without crashing', () => {
        render(<SimpleSidebar />);
        expect(screen.getByRole('complementary')).toBeInTheDocument();
    });

    it('displays sidebar cards', () => {
        render(<SimpleSidebar />);
        expect(screen.getByText('Verzekering afsluiten')).toBeInTheDocument();
        expect(screen.getByText('Formulieren & Documenten')).toBeInTheDocument();
        expect(screen.getByText('Vragen?')).toBeInTheDocument();
    });

    it('displays help section', () => {
        render(<SimpleSidebar />);
        expect(screen.getByText('Hulp nodig?')).toBeInTheDocument();
        expect(screen.getByText(/Onze experts helpen u graag verder/)).toBeInTheDocument();
    });

    it('has proper sidebar structure', () => {
        render(<SimpleSidebar />);
        expect(screen.getByTestId('sidebar-card-quote')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-card-documents')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-card-contact')).toBeInTheDocument();
    });
});
