// Mock the Button component directly - must be at the top
jest.mock('@chakra-ui/react', () => ({
    Button: ({ children, asChild, ...props }: any) => {
        if (asChild) {
            return <div {...props}>{children}</div>;
        }
        return <button {...props}>{children}</button>;
    },
}));

import { render, screen } from '@testing-library/react';
import { ButtonLink } from '../button-link';

// Debug: Log what we're importing
console.log('ButtonLink component:', ButtonLink);
console.log('ButtonLink type:', typeof ButtonLink);

// Mock Next.js Link component
jest.mock('next/link', () => {
    return function MockLink({ href, children, ...props }: any) {
        return <a href={href} {...props}>{children}</a>;
    };
});

describe('ButtonLink Component', () => {
    const defaultProps = {
        href: '/test-page',
        children: 'Click me',
    };

    it('should render with default props', () => {
        render(<ButtonLink {...defaultProps} />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
    });

    it('should render internal link with Next.js Link', () => {
        render(<ButtonLink {...defaultProps} />);

        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/test-page');
    });

    it('should render external link with anchor tag', () => {
        render(
            <ButtonLink href="https://example.com" external>
                External Link
            </ButtonLink>
        );

        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://example.com');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should detect external links automatically', () => {
        render(
            <ButtonLink href="https://example.com">
                Auto External Link
            </ButtonLink>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should handle mailto links', () => {
        render(
            <ButtonLink href="mailto:test@example.com">
                Email Link
            </ButtonLink>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'mailto:test@example.com');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should handle tel links', () => {
        render(
            <ButtonLink href="tel:+1234567890">
                Phone Link
            </ButtonLink>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'tel:+1234567890');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should handle download attribute', () => {
        render(
            <ButtonLink href="/download.pdf" download>
                Download File
            </ButtonLink>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('download');
    });

    it('should pass through Button props', () => {
        render(
            <ButtonLink {...defaultProps} colorScheme="blue" size="lg" variant="solid">
                Styled Button
            </ButtonLink>
        );

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('should handle custom className', () => {
        render(
            <ButtonLink {...defaultProps} className="custom-class">
                Custom Class
            </ButtonLink>
        );

        const button = screen.getByRole('button');
        expect(button).toHaveClass('custom-class');
    });

    it('should forward ref correctly', () => {
        const ref = jest.fn();
        render(
            <ButtonLink {...defaultProps} ref={ref}>
                Ref Test
            </ButtonLink>
        );

        expect(ref).toHaveBeenCalled();
    });

    it('should handle empty href gracefully', () => {
        render(
            <ButtonLink href="">
                Empty Href
            </ButtonLink>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '');
    });

    it('should maintain accessibility', () => {
        render(<ButtonLink {...defaultProps} aria-label="Custom label" />);

        const button = screen.getByLabelText('Custom label');
        expect(button).toBeInTheDocument();
    });

    it('should handle complex children', () => {
        render(
            <ButtonLink {...defaultProps}>
                <span>Complex</span>
                <strong>Content</strong>
            </ButtonLink>
        );

        expect(screen.getByText('Complex')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });
});
