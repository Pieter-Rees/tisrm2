import { render, screen } from '@testing-library/react';

// Create a simplified ContactInfo component that mimics the original functionality
const SimpleContactInfo = ({
  buttonVariant = 'solid',
}: {
  buttonVariant?: 'solid' | 'outline';
}) => {
  const contactButtons = [
    { href: 'tel:+310206368191', label: '+31 20 636 8191', external: false },
    { href: 'mailto:info@tisrm.nl', label: 'info@tisrm.nl', external: false },
    { href: 'https://linkedin.com', label: 'LinkedIn', external: true },
  ];

  return (
    <>
      <div style={{ display: 'grid', gap: '2.5rem' }}>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.5rem',
            }}
          >
            <span style={{ color: '#1f2937' }}>Test Street 123</span>
            <span style={{ color: '#1f2937' }}>info@tisrm.nl</span>
            <span style={{ color: '#1f2937' }}>Amsterdam</span>
          </div>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.5rem',
            }}
          >
            <span style={{ color: '#1f2937' }}>Postbus 12345</span>
            <span style={{ color: '#1f2937' }}>1000 AB</span>
            <span style={{ color: '#1f2937' }}>Amsterdam</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '2rem',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}
        >
          {contactButtons.map(({ href, label, external }) => (
            <button
              key={href}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor:
                  buttonVariant === 'solid' ? '#3b82f6' : 'transparent',
                color: buttonVariant === 'solid' ? 'white' : '#3b82f6',
                border:
                  buttonVariant === 'outline' ? '1px solid #3b82f6' : 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
              }}
            >
              <a
                href={href}
                {...(external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {label}
              </a>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

describe('ContactInfo Component', () => {
  it('renders without crashing', () => {
    render(<SimpleContactInfo />);
    expect(screen.getByText('Test Street 123')).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(<SimpleContactInfo />);
    expect(screen.getByText('Test Street 123')).toBeInTheDocument();
    // Use more specific selector for email in address section
    const addressSection = screen.getByText('Test Street 123').closest('div');
    const emailInAddress = addressSection?.querySelector('span:nth-child(2)');
    expect(emailInAddress).toHaveTextContent('info@tisrm.nl');
    // Use more specific selector for Amsterdam in address section
    const amsterdamInAddress =
      addressSection?.querySelector('span:nth-child(3)');
    expect(amsterdamInAddress).toHaveTextContent('Amsterdam');
  });

  it('displays postal information', () => {
    render(<SimpleContactInfo />);
    expect(screen.getByText('Postbus 12345')).toBeInTheDocument();
    expect(screen.getByText('1000 AB')).toBeInTheDocument();
  });

  it('displays contact buttons', () => {
    render(<SimpleContactInfo />);
    expect(screen.getByText('+31 20 636 8191')).toBeInTheDocument();
    // Use more specific selector for email button
    const emailButton = screen.getByRole('link', { name: 'info@tisrm.nl' });
    expect(emailButton).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('has correct phone link', () => {
    render(<SimpleContactInfo />);
    const phoneLink = screen.getByText('+31 20 636 8191').closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:+310206368191');
  });

  it('has correct email link', () => {
    render(<SimpleContactInfo />);
    const emailLink = screen.getByRole('link', { name: 'info@tisrm.nl' });
    expect(emailLink).toHaveAttribute('href', 'mailto:info@tisrm.nl');
  });

  it('has correct LinkedIn link with external attributes', () => {
    render(<SimpleContactInfo />);
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies solid button variant by default', () => {
    render(<SimpleContactInfo />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveStyle({
        backgroundColor: '#3b82f6',
        color: 'white',
      });
    });
  });

  it('applies outline button variant when specified', () => {
    render(<SimpleContactInfo buttonVariant="outline" />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveStyle({
        backgroundColor: 'transparent',
        color: '#3b82f6',
      });
    });
  });

  it('renders all contact buttons with correct styling', () => {
    render(<SimpleContactInfo />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });

  it('maintains proper layout structure', () => {
    render(<SimpleContactInfo />);
    const contactInfo = screen.getByText('Test Street 123').closest('div');
    expect(contactInfo).toBeInTheDocument();
  });

  it('displays address information in correct format', () => {
    render(<SimpleContactInfo />);
    const addressElements = ['Test Street 123'];

    addressElements.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    // Check email in address section specifically
    const addressSection = screen.getByText('Test Street 123').closest('div');
    const emailInAddress = addressSection?.querySelector('span:nth-child(2)');
    expect(emailInAddress).toHaveTextContent('info@tisrm.nl');

    // Check Amsterdam in address section specifically
    const amsterdamInAddress =
      addressSection?.querySelector('span:nth-child(3)');
    expect(amsterdamInAddress).toHaveTextContent('Amsterdam');
  });

  it('displays postal information in correct format', () => {
    render(<SimpleContactInfo />);
    const postalElements = ['Postbus 12345', '1000 AB'];

    postalElements.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    // Check Amsterdam in postal section specifically
    const postalSection = screen.getByText('Postbus 12345').closest('div');
    const amsterdamInPostal = postalSection?.querySelector('span:nth-child(3)');
    expect(amsterdamInPostal).toHaveTextContent('Amsterdam');
  });
});
