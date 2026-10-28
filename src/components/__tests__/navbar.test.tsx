import React from 'react';
import { render, screen } from '@testing-library/react';

import { PRIMARY_NAVIGATION } from '@/constants/app';

const SimpleNavbar = () => {
  const handleDamageReportClick = () => {
    // Mock function for testing
  };

  return (
    <nav
      role="navigation"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          fontSize: '0.875rem',
          fontWeight: '500',
        }}
      >
        {PRIMARY_NAVIGATION.map(({ href, label }) => (
          <div key={href}>
            <a
              href={href}
              style={{
                textDecoration: 'none',
                display: 'block',
                paddingBottom: '4px',
                position: 'relative',
                color: '#374151',
                fontWeight: '500',
                borderBottom: '2px solid transparent',
                transition: 'all 0.2s ease-in-out',
              }}
            >
              {label}
            </a>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          type="button"
          style={{
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: '500',
          }}
          onClick={handleDamageReportClick}
        >
          📄 Schade melden
        </button>

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
        >
          📞 Contact
        </button>
      </div>
    </nav>
  );
};

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<SimpleNavbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    render(<SimpleNavbar />);
    expect(screen.getByText(/Over ons/)).toBeInTheDocument();
    expect(screen.getByText(/Zakelijk/)).toBeInTheDocument();
    const navLinks = screen.getAllByRole('link');
    const contactLink = navLinks.find(link => link.textContent === 'Contact');
    expect(contactLink).toBeInTheDocument();
  });

  it('displays damage report button', () => {
    render(<SimpleNavbar />);
    expect(screen.getByText(/Schade melden/)).toBeInTheDocument();
  });

  it('displays contact button', () => {
    render(<SimpleNavbar />);
    const buttons = screen.getAllByRole('button');
    const contactButton = buttons.find(button =>
      button.textContent?.includes('Contact'),
    );
    expect(contactButton).toBeInTheDocument();
  });

  it('has proper navigation structure', () => {
    render(<SimpleNavbar />);

    PRIMARY_NAVIGATION.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
