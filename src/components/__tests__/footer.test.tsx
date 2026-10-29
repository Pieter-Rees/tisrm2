import { render, screen } from '@testing-library/react';

import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';

const footerNavigationLinks = [
  {
    href: NAVIGATION_ROUTES.businessInsurance,
    label: 'Zakelijke verzekeringen',
  },
  {
    href: NAVIGATION_ROUTES.personalInsurance,
    label: 'Particuliere verzekeringen',
  },
  { href: NAVIGATION_ROUTES.riskAdvice, label: 'Risk Management' },
  { href: NAVIGATION_ROUTES.about, label: 'Over ons' },
  { href: NAVIGATION_ROUTES.contact, label: 'Contact' },
] as const;

const SimpleFooter = () => {
  const contactLinks = [
    { href: CONTACT_INFO.phoneHref, label: CONTACT_INFO.phone, external: false },
    { href: 'mailto:info@tisrm.nl', label: 'info@tisrm.nl', external: false },
    { href: 'https://linkedin.com', label: 'LinkedIn', external: true },
  ];

  return (
    <footer role="contentinfo">
      <div className="footer-logos">
        <div className="logo-placeholder">Logos</div>
      </div>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Contact</h3>
            <div className="contact-links">
              {contactLinks.map(({ href, label, external }) => (
                <a
                  key={href}
                  href={href}
                  {...(external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Links</h3>
            <div className="navigation-links">
              {footerNavigationLinks.map(({ href, label }) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <div className="logo-section">
              <a href="/">
                <div className="logo">TIS Risk Management</div>
              </a>
            </div>
            <div className="copyright">
              <p>© 2024 TIS Risk Management. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<SimpleFooter />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays company information', () => {
    render(<SimpleFooter />);
    const logoElement = screen.getByText('TIS Risk Management', {
      selector: '.logo',
    });
    expect(logoElement).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(<SimpleFooter />);
    const contactHeading = screen.getByRole('heading', { name: 'Contact' });
    expect(contactHeading).toBeInTheDocument();
    expect(screen.getByText('+31 20 636 8191')).toBeInTheDocument();
    expect(screen.getByText('info@tisrm.nl')).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    render(<SimpleFooter />);
    expect(screen.getByText(/Over ons/)).toBeInTheDocument();
    expect(screen.getByText(/Zakelijke verzekeringen/)).toBeInTheDocument();
    const contactLink = screen.getByRole('link', { name: 'Contact' });
    expect(contactLink).toBeInTheDocument();
  });

  it('displays copyright information', () => {
    render(<SimpleFooter />);
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });

  it('has correct contact link attributes', () => {
    render(<SimpleFooter />);
    const phoneLink = screen.getByText(CONTACT_INFO.phone);
    const emailLink = screen.getByText('info@tisrm.nl');

    expect(phoneLink.closest('a')).toHaveAttribute(
      'href',
      CONTACT_INFO.phoneHref,
    );
    expect(emailLink.closest('a')).toHaveAttribute(
      'href',
      'mailto:info@tisrm.nl',
    );
  });

  it('has correct navigation link attributes', () => {
    render(<SimpleFooter />);
    const businessLink = screen.getByText('Zakelijke verzekeringen');
    const contactLink = screen.getByRole('link', { name: 'Contact' });

    expect(businessLink.closest('a')).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.businessInsurance,
    );
    expect(contactLink).toHaveAttribute('href', NAVIGATION_ROUTES.contact);
  });

  it('has external link attributes for LinkedIn', () => {
    render(<SimpleFooter />);
    const linkedinLink = screen.getByText('LinkedIn');
    const linkElement = linkedinLink.closest('a');

    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders footer logos section', () => {
    render(<SimpleFooter />);
    expect(screen.getByText('Logos')).toBeInTheDocument();
  });
});
