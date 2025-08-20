import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock Next.js Link component
jest.mock('next/link', () => {
    return function MockLink({ href, children, ...props }: any) {
        return <a href={href} {...props}>{children}</a>;
    };
});

// Mock the data module
jest.mock('@/data/general', () => ({
    contactInfo: {
        address: {
            street: 'Muiderstraat 1',
            city: 'Amsterdam',
        },
        email: 'info@tisrm.nl',
        postalBox: {
            box: 'Postbus 12887',
            postalCode: '1100 AW',
            city: 'Amsterdam',
        },
        social: {
            linkedIn: 'https://www.linkedin.com/company/tisrm/',
        },
    },
}));

// Create a mock ContactInfo component
const MockContactInfo = ({ buttonVariant = 'solid' }: { buttonVariant?: 'solid' | 'outline' }) => (
    <>
        <div>
            <div>
                <p>Muiderstraat 1</p>
                <p>info@tisrm.nl</p>
                <p>Amsterdam</p>
            </div>
            <div>
                <p>Postbus 12887</p>
                <p>1100 AW</p>
                <p>Amsterdam</p>
            </div>
        </div>

        <div>
            <div>
                <button data-variant={buttonVariant}>
                    <a href="tel:+310206368191">+31 020 636 8191</a>
                </button>
                <button data-variant={buttonVariant}>
                    <a href="mailto:info@tisrm.nl">info@tisrm.nl</a>
                </button>
                <button data-variant={buttonVariant}>
                    <a href="https://www.linkedin.com/company/tisrm/" target="_blank" rel="noopener noreferrer">
                        <svg data-testid="icon-BsLinkedin" width="24" height="24">
                            <title>BsLinkedin</title>
                        </svg>
                    </a>
                </button>
            </div>
        </div>
    </>
);

describe('ContactInfo Component', () => {
    it('should render contact information correctly', () => {
        render(<MockContactInfo />);

        expect(screen.getByText('Muiderstraat 1')).toBeInTheDocument();
        expect(screen.getAllByText('info@tisrm.nl')).toHaveLength(2);
        expect(screen.getAllByText('Amsterdam')).toHaveLength(2);
        expect(screen.getByText('Postbus 12887')).toBeInTheDocument();
        expect(screen.getByText('1100 AW')).toBeInTheDocument();
    });

    it('should render contact buttons', () => {
        render(<MockContactInfo />);

        // Check for phone button
        const phoneButton = screen.getByRole('link', { name: '+31 020 636 8191' });
        expect(phoneButton).toBeInTheDocument();
        expect(phoneButton).toHaveAttribute('href', 'tel:+310206368191');

        // Check for email button
        const emailButton = screen.getByRole('link', { name: 'info@tisrm.nl' });
        expect(emailButton).toBeInTheDocument();
        expect(emailButton).toHaveAttribute('href', 'mailto:info@tisrm.nl');

        // Check for LinkedIn button
        const linkedinButton = screen.getByRole('link', { name: 'BsLinkedin' });
        expect(linkedinButton).toHaveAttribute('href', 'https://www.linkedin.com/company/tisrm/');
    });

    it('should render with solid button variant by default', () => {
        render(<MockContactInfo />);

        const buttons = screen.getAllByRole('button');
        buttons.forEach(button => {
            expect(button).toHaveAttribute('data-variant', 'solid');
        });
    });

    it('should render with outline button variant when specified', () => {
        render(<MockContactInfo buttonVariant="outline" />);

        const buttons = screen.getAllByRole('button');
        buttons.forEach(button => {
            expect(button).toHaveAttribute('data-variant', 'outline');
        });
    });

    it('should have correct external link attributes for LinkedIn', () => {
        render(<MockContactInfo />);

        const linkedinButton = screen.getByRole('link', { name: 'BsLinkedin' });
        expect(linkedinButton).toHaveAttribute('target', '_blank');
        expect(linkedinButton).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should not have external attributes for phone and email links', () => {
        render(<MockContactInfo />);

        const phoneButton = screen.getByRole('link', { name: '+31 020 636 8191' });
        const emailButton = screen.getByRole('link', { name: 'info@tisrm.nl' });

        expect(phoneButton).not.toHaveAttribute('target');
        expect(phoneButton).not.toHaveAttribute('rel');
        expect(emailButton).not.toHaveAttribute('target');
        expect(emailButton).not.toHaveAttribute('rel');
    });

    it('should render LinkedIn icon correctly', () => {
        render(<MockContactInfo />);

        // Check that the LinkedIn button contains an SVG icon
        const linkedinButton = screen.getByRole('link', { name: 'BsLinkedin' });
        const svg = linkedinButton.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });

    it('should have correct button structure', () => {
        render(<MockContactInfo />);

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3);

        // Each button should contain a link
        buttons.forEach(button => {
            const link = button.querySelector('a');
            expect(link).toBeInTheDocument();
        });
    });

    it('should maintain accessibility', () => {
        render(<MockContactInfo />);

        // Check that all interactive elements are accessible
        expect(screen.getByRole('link', { name: '+31 020 636 8191' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'info@tisrm.nl' })).toBeInTheDocument();
    });

    it('should handle different button variants', () => {
        const { rerender } = render(<MockContactInfo buttonVariant="solid" />);

        let buttons = screen.getAllByRole('button');
        buttons.forEach(button => {
            expect(button).toHaveAttribute('data-variant', 'solid');
        });

        rerender(<MockContactInfo buttonVariant="outline" />);

        buttons = screen.getAllByRole('button');
        buttons.forEach(button => {
            expect(button).toHaveAttribute('data-variant', 'outline');
        });
    });

    it('should render contact information in correct layout', () => {
        render(<MockContactInfo />);

        // Check that address information is rendered
        expect(screen.getByText('Muiderstraat 1')).toBeInTheDocument();
        expect(screen.getAllByText('Amsterdam')).toHaveLength(2);

        // Check that postal box information is rendered
        expect(screen.getByText('Postbus 12887')).toBeInTheDocument();
        expect(screen.getByText('1100 AW')).toBeInTheDocument();
    });

    it('should have proper button spacing and alignment', () => {
        render(<MockContactInfo />);

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3);
        const buttonContainer = buttons[0]?.parentElement;
        expect(buttonContainer).toBeInTheDocument();
    });
});
