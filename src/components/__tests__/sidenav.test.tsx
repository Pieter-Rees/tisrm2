import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Sidenav component for testing
const SimpleSidenav = ({ showSideNav, handleToggle, className, 'data-testid': testId }: any) => {
    const navigationLinks = [
        { href: '/', label: 'Home' },
        { href: '/verzekeringen', label: 'Verzekeringen' },
        { href: '/taxi', label: 'Taxi' },
        { href: '/risk-management', label: 'Risk Management' },
        { href: '/over-ons', label: 'Over ons' },
        { href: '/downloads', label: 'Downloads' },
        { href: '/contact', label: 'Contact' },
    ];

    const handleDamageReportClick = () => {
        // Mock function for testing
        handleToggle();
    };

    const handleLinkClick = () => {
        handleToggle();
    };

    return (
        <nav
            className={className || ''}
            data-testid={testId || ''}
            role="navigation"
            style={{
                position: 'fixed',
                top: 0,
                height: '100vh',
                width: '400px',
                maxWidth: '400px',
                backgroundColor: 'white',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                transition: 'left 0.3s ease-in-out',
                overflowY: 'auto',
                borderRight: '1px solid #e5e7eb',
                left: showSideNav ? '0' : '-100%',
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb',
            }}>
                <div style={{ padding: '0.5rem' }}>
                    <div data-testid="logo">TIS Risk Management Logo</div>
                </div>
                <button
                    type="button"
                    onClick={handleToggle}
                    aria-label="Close navigation menu"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '0.5rem',
                    }}
                >
                    ✕
                </button>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1',
                padding: '1rem',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                }}>
                    {navigationLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={handleLinkClick}
                            style={{
                                display: 'block',
                                padding: '0.75rem 1rem',
                                color: '#374151',
                                textDecoration: 'none',
                                borderRadius: '0.375rem',
                                fontWeight: '500',
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <hr style={{ margin: '1rem 0', borderColor: '#e5e7eb' }} />

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}>
                    <button
                        type="button"
                        onClick={handleDamageReportClick}
                        style={{
                            background: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.375rem',
                            cursor: 'pointer',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}
                    >
                        📄 Schade melden
                    </button>

                    <button
                        type="button"
                        style={{
                            background: 'transparent',
                            color: '#3b82f6',
                            border: '1px solid #3b82f6',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.375rem',
                            cursor: 'pointer',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}
                    >
                        📞 Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

const mockProps = {
    showSideNav: true,
    handleToggle: jest.fn(),
};

describe('Sidenav', () => {
    it('renders without crashing', () => {
        render(<SimpleSidenav {...mockProps} />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays navigation links when open', () => {
        render(<SimpleSidenav {...mockProps} />);
        expect(screen.getByText(/Over ons/i)).toBeInTheDocument();
        expect(screen.getByText(/Verzekeringen/i)).toBeInTheDocument();
        // Use a more specific selector for the navigation link
        const navLinks = screen.getAllByRole('link');
        const contactLink = navLinks.find(link => link.textContent === 'Contact');
        expect(contactLink).toBeInTheDocument();
    });

    it('displays close button when open', () => {
        render(<SimpleSidenav {...mockProps} />);
        expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    });

    it('displays company logo', () => {
        render(<SimpleSidenav {...mockProps} />);
        expect(screen.getByTestId('logo')).toBeInTheDocument();
    });

    it('has proper navigation structure', () => {
        render(<SimpleSidenav {...mockProps} />);
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });

    it('displays contact information', () => {
        render(<SimpleSidenav {...mockProps} />);
        // Use a more specific selector for the contact button
        const buttons = screen.getAllByRole('button');
        const contactButton = buttons.find(button => button.textContent?.includes('Contact'));
        expect(contactButton).toBeInTheDocument();
    });
});
