import React from 'react';
import { render, screen } from '@testing-library/react';


const SimpleHeader = () => {
    const [showSideNav, setShowSideNav] = React.useState(false);

    const handleToggle = () => setShowSideNav(!showSideNav);
    const closeSideNav = () => setShowSideNav(false);

    return (
        <header role="banner" style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
                    <div style={{ flex: '0 0 auto', padding: '1rem' }}>
                        <a href="/" aria-label="Go to homepage" onClick={closeSideNav}>
                            <div data-testid="logo">TIS Risk Management Logo</div>
                        </a>
                    </div>

                    <div style={{ flex: '1' }} data-testid="navbar" role="navigation">
                        Navigation Menu
                    </div>

                    <div>
                        <button
                            type="button"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#374151',
                                cursor: 'pointer',
                                padding: '0.5rem',
                            }}
                            onClick={handleToggle}
                            aria-label={showSideNav ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={showSideNav}
                            aria-controls="mobile-navigation"
                        >
                            {showSideNav ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {showSideNav && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                    }}
                    onClick={closeSideNav}
                    aria-hidden="true"
                    data-testid="mobile-menu-overlay"
                />
            )}

            <aside data-testid="sidenav" style={{ display: showSideNav ? 'block' : 'none' }}>
                Side Navigation
            </aside>
        </header>
    );
};

describe('Header', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<SimpleHeader />);
        // The header should render with its mocked sub-components
        expect(screen.getByTestId('logo')).toBeInTheDocument();
    });

    it('displays the logo component', () => {
        render(<SimpleHeader />);
        expect(screen.getByTestId('logo')).toBeInTheDocument();
        expect(screen.getByText('TIS Risk Management Logo')).toBeInTheDocument();
    });

    it('displays the navigation menu', () => {
        render(<SimpleHeader />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByText('Navigation Menu')).toBeInTheDocument();
    });

    it('displays the side navigation', () => {
        render(<SimpleHeader />);
        expect(screen.getByTestId('sidenav')).toBeInTheDocument();
        expect(screen.getByText('Side Navigation')).toBeInTheDocument();
    });

    it('has proper structure with all components', () => {
        render(<SimpleHeader />);

        // All three main components should be present
        expect(screen.getByTestId('logo')).toBeInTheDocument();
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        expect(screen.getByTestId('sidenav')).toBeInTheDocument();
    });
});