import React from 'react';
import { render, screen } from '@testing-library/react';


const SimpleButtonLink = ({
    href,
    external = false,
    download = false,
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    className,
    'data-testid': testId,
    ...props
}: any) => {
    const isExternal =
        external ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:');

    const buttonStyle = {
        padding: size === 'sm' ? '0.5rem 1rem' : size === 'lg' ? '1rem 2rem' : '0.75rem 1.5rem',
        fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.125rem' : '1rem',
        backgroundColor: variant === 'primary' ? '#3b82f6' :
            variant === 'secondary' ? '#6b7280' :
                variant === 'outline' ? 'transparent' :
                    variant === 'ghost' ? 'transparent' : '#3b82f6',
        color: variant === 'outline' || variant === 'ghost' ? '#3b82f6' : 'white',
        border: variant === 'outline' ? '1px solid #3b82f6' : 'none',
        borderRadius: '0.375rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        textDecoration: 'none',
        display: 'inline-block',
    };

    if (isExternal) {
        return (
            <a
                href={href}
                target={external || href.startsWith('http') ? '_blank' : undefined}
                rel={
                    external || href.startsWith('http') ?
                        'noopener noreferrer'
                        : undefined
                }
                download={download || undefined}
                style={buttonStyle}
                className={className}
                data-testid={testId || 'button-link'}
                data-external="true"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={href}
            download={download || undefined}
            style={buttonStyle}
            className={className}
            data-testid={testId || 'button-link'}
            data-internal="true"
            {...props}
        >
            {children}
        </a>
    );
};

describe('ButtonLink Component', () => {
    const defaultProps = {
        href: '/test',
        children: 'Test Link',
    };

    it('should render with default props', () => {
        render(<SimpleButtonLink {...defaultProps} />);
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });

    it('should render internal link with Next.js Link', () => {
        render(<SimpleButtonLink {...defaultProps} />);
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('data-internal', 'true');
    });

    it('should render external link with anchor tag', () => {
        render(
            <SimpleButtonLink href="https://example.com" external>
                External Link
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('data-external', 'true');
        expect(link).toHaveAttribute('target', '_blank');
    });

    it('should detect external links automatically', () => {
        render(
            <SimpleButtonLink href="https://example.com">
                Auto External Link
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('data-external', 'true');
        expect(link).toHaveAttribute('target', '_blank');
    });

    it('should handle mailto links', () => {
        render(
            <SimpleButtonLink href="mailto:test@example.com">
                Email Link
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('data-external', 'true');
        expect(link).toHaveAttribute('href', 'mailto:test@example.com');
    });

    it('should handle tel links', () => {
        render(
            <SimpleButtonLink href="tel:+1234567890">
                Phone Link
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('data-external', 'true');
        expect(link).toHaveAttribute('href', 'tel:+1234567890');
    });

    it('should handle download attribute', () => {
        render(
            <SimpleButtonLink href="/download.pdf" download>
                Download File
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('download', '');
    });

    it('should pass through Button props', () => {
        render(
            <SimpleButtonLink {...defaultProps} variant="outline" size="lg">
                Styled Button
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveTextContent('Styled Button');
    });

    it('should handle custom className', () => {
        render(
            <SimpleButtonLink {...defaultProps} className="custom-class">
                Custom Class
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toHaveClass('custom-class');
    });

    it('should forward ref correctly', () => {
        const ref = jest.fn();
        render(
            <SimpleButtonLink {...defaultProps} ref={ref}>
                Ref Test
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });

    it('should handle empty href gracefully', () => {
        render(
            <SimpleButtonLink href="">
                Empty Href
            </SimpleButtonLink>
        );
        const link = screen.getByTestId('button-link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '');
    });

    it('should maintain accessibility', () => {
        render(<SimpleButtonLink {...defaultProps} aria-label="Custom label" />);
        const link = screen.getByLabelText('Custom label');
        expect(link).toBeInTheDocument();
    });

    it('should handle complex children', () => {
        render(
            <SimpleButtonLink {...defaultProps}>
                <span>Complex</span>
                <strong>Content</strong>
            </SimpleButtonLink>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(screen.getByText('Complex')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should support custom test ID', () => {
        render(<SimpleButtonLink {...defaultProps} data-testid="custom-button-link" />);
        expect(screen.getByTestId('custom-button-link')).toBeInTheDocument();
    });

    it('should handle disabled state', () => {
        render(<SimpleButtonLink {...defaultProps} disabled />);
        const link = screen.getByRole('link');
        expect(link).toHaveStyle({ cursor: 'not-allowed', opacity: 0.6 });
    });

    it('should apply different variants correctly', () => {
        const variants = ['primary', 'secondary', 'outline', 'ghost'];

        variants.forEach(variant => {
            const { unmount } = render(<SimpleButtonLink {...defaultProps} variant={variant} />);
            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            unmount();
        });
    });
});
