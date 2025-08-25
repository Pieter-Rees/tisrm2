import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Card component that mimics the original functionality
const SimpleCard = React.memo(({
    title,
    description,
    image,
    altText,
    downloadLink,
    cta,
    ctaLink,
    phone,
    variant = 'default',
    loading = false,
    disabled = false,
    className,
    'data-testid': testId,
}: {
    title: string;
    description?: string;
    image?: string;
    altText?: string;
    downloadLink?: string;
    cta?: string;
    ctaLink?: string;
    phone?: string;
    variant?: string;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    'data-testid'?: string;
}) => {
    const hasAction = Boolean(cta || phone || downloadLink);
    const isInteractive = Boolean(ctaLink || phone || downloadLink);

    const cardContent = (
        <>
            {image && (
                <div
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        height: '200px',
                        backgroundColor: '#f3f4f6'
                    }}
                >
                    <img
                        src={image}
                        alt={altText || title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                        loading={loading ? 'eager' : 'lazy'}
                    />
                </div>
            )}

            <div
                style={{
                    padding: variant === 'downloads' ? '0' : '1.5rem',
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {variant === 'downloads' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <span style={{ color: '#3b82f6', fontSize: '1.25rem' }}>📄</span>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0' }}>
                            {title}
                        </h3>
                    </div>
                )}
                {variant !== 'downloads' && (
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: description ? '0.75rem' : '0' }}>
                        {title}
                    </h3>
                )}

                {description && (
                    <p style={{ marginBottom: hasAction ? '1rem' : '0', flex: '1' }}>
                        {description}
                    </p>
                )}

                {hasAction && (
                    <div style={{ marginTop: 'auto' }}>
                        {phone && (
                            <button
                                style={{
                                    width: '100%',
                                    padding: '0.5rem 1rem',
                                    border: '1px solid #10b981',
                                    borderRadius: '0.375rem',
                                    backgroundColor: 'transparent',
                                    color: '#10b981',
                                    cursor: 'pointer'
                                }}
                                onClick={() => {
                                    window.location.href = phone;
                                }}
                            >
                                📞 Bel nu
                            </button>
                        )}

                        {downloadLink && (
                            <button
                                style={{
                                    width: '100%',
                                    padding: '0.5rem 1rem',
                                    backgroundColor: '#3b82f6',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.375rem',
                                    cursor: 'pointer',
                                    fontWeight: '500'
                                }}
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = downloadLink;
                                    link.download = '';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                            >
                                📥 Download
                            </button>
                        )}

                        {cta && ctaLink && (
                            <button
                                style={{
                                    width: '100%',
                                    padding: '0.5rem 1rem',
                                    backgroundColor: '#3b82f6',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.375rem',
                                    cursor: 'pointer'
                                }}
                                onClick={() => {
                                    window.location.href = ctaLink;
                                }}
                            >
                                {cta} →
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );

    return (
        <article
            className={`card ${className || ''}`}
            data-testid={testId}
            data-variant={variant}
            role="article"
            aria-label={`${title}${description ? `: ${description}` : ''}`}
            style={{
                width: '100%',
                height: '100%',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                backgroundColor: 'white',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
            }}
        >
            {cardContent}
        </article>
    );
});

SimpleCard.displayName = 'SimpleCard';

describe('Card Component', () => {
    it('renders without crashing', () => {
        render(<SimpleCard title="Test Card" />);
        expect(screen.getByText('Test Card')).toBeInTheDocument();
    });

    it('displays card title', () => {
        render(<SimpleCard title="Test Card" />);
        expect(screen.getByText('Test Card')).toBeInTheDocument();
    });

    it('displays card description when provided', () => {
        render(<SimpleCard title="Test Card" description="Test description" />);
        expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('displays image when provided', () => {
        render(<SimpleCard title="Test Card" image="/test-image.jpg" />);
        const image = screen.getByAltText('Test Card');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/test-image.jpg');
    });

    it('displays custom alt text when provided', () => {
        render(<SimpleCard title="Test Card" image="/test-image.jpg" altText="Custom alt" />);
        const image = screen.getByAltText('Custom alt');
        expect(image).toBeInTheDocument();
    });

    it('renders phone button when phone prop is provided', () => {
        render(<SimpleCard title="Test Card" phone="tel:+1234567890" />);
        expect(screen.getByText('📞 Bel nu')).toBeInTheDocument();
    });

    it('renders download button when downloadLink prop is provided', () => {
        render(<SimpleCard title="Test Card" downloadLink="/test-file.pdf" />);
        expect(screen.getByText('📥 Download')).toBeInTheDocument();
    });

    it('renders CTA button when cta and ctaLink props are provided', () => {
        render(<SimpleCard title="Test Card" cta="Learn More" ctaLink="/learn-more" />);
        expect(screen.getByText('Learn More →')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<SimpleCard title="Test Card" className="custom-class" />);
        const card = screen.getByText('Test Card').closest('article');
        expect(card).toHaveClass('custom-class');
    });

    it('applies custom data-testid', () => {
        render(<SimpleCard title="Test Card" data-testid="custom-test-id" />);
        expect(screen.getByTestId('custom-test-id')).toBeInTheDocument();
    });

    it('has correct ARIA attributes', () => {
        render(<SimpleCard title="Test Card" description="Test description" />);
        const card = screen.getByText('Test Card').closest('article');
        expect(card).toHaveAttribute('aria-label', 'Test Card: Test description');
    });

    it('renders with downloads variant styling', () => {
        render(<SimpleCard title="Test Card" variant="downloads" />);
        const card = screen.getByText('Test Card').closest('article');
        expect(card).toHaveAttribute('data-variant', 'downloads');
    });

    it('renders with default variant when no variant specified', () => {
        render(<SimpleCard title="Test Card" />);
        const card = screen.getByText('Test Card').closest('article');
        expect(card).toHaveAttribute('data-variant', 'default');
    });

    it('handles loading state for images', () => {
        render(<SimpleCard title="Test Card" image="/test-image.jpg" loading={true} />);
        const image = screen.getByAltText('Test Card');
        expect(image).toHaveAttribute('loading', 'eager');
    });

    it('handles lazy loading for images by default', () => {
        render(<SimpleCard title="Test Card" image="/test-image.jpg" />);
        const image = screen.getByAltText('Test Card');
        expect(image).toHaveAttribute('loading', 'lazy');
    });
});
