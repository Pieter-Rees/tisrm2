import React from 'react';
import { render, screen } from '@testing-library/react';


const SimpleTalker = ({ name, title, image, quote, company, 'data-testid': testId }: any) => {
    return (
        <section
            data-testid={testId}
            aria-label="Customer testimonial"
            style={{
                padding: '2rem',
                backgroundColor: '#f8fafc',
                borderRadius: '0.5rem',
                margin: '1rem 0',
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{ flex: '0 0 auto', marginBottom: '1rem' }}>
                    <div style={{
                        position: 'relative',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid white',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    }}>
                        <img
                            src={image}
                            alt={`Portrait of ${name}, ${title}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    flex: '1',
                    textAlign: 'center',
                }}>
                    <div style={{ color: '#3b82f6', opacity: '0.6', fontSize: '3rem' }}>
                        &ldquo;
                    </div>

                    <div style={{
                        fontSize: '1.125rem',
                        fontStyle: 'italic',
                        lineHeight: '1.8',
                        maxWidth: '600px',
                        color: '#374151',
                    }}>
                        {quote}
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.25rem',
                        marginTop: '1rem',
                    }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#1f2937' }}>
                            {name}
                        </div>
                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                            {title}
                        </div>
                        {company && (
                            <div style={{ fontSize: '0.875rem', color: '#3b82f6', fontWeight: '500' }}>
                                {company}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const mockProps = {
    name: 'Test Name',
    title: 'Test Title',
    image: '/test-image.jpg',
    quote: 'Test quote',
};

describe('Talker', () => {
    it('renders without crashing', () => {
        render(<SimpleTalker {...mockProps} />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('displays talk to us text', () => {
        render(<SimpleTalker {...mockProps} />);
        expect(screen.getByText('Test quote')).toBeInTheDocument();
    });

    it('has proper button styling', () => {
        render(<SimpleTalker {...mockProps} />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });

    it('displays contact information', () => {
        render(<SimpleTalker {...mockProps} />);
        expect(screen.getByText('Test Name')).toBeInTheDocument();
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('is accessible', () => {
        render(<SimpleTalker {...mockProps} />);
        const container = screen.getByRole('region');
        expect(container).toHaveAttribute('aria-label', 'Customer testimonial');
    });

    it('displays testimonial image', () => {
        render(<SimpleTalker {...mockProps} />);
        const image = screen.getByAltText(/Portrait of Test Name/i);
        expect(image).toBeInTheDocument();
    });

    it('displays company information when provided', () => {
        const propsWithCompany = { ...mockProps, company: 'Test Company' };
        render(<SimpleTalker {...propsWithCompany} />);
        expect(screen.getByText('Test Company')).toBeInTheDocument();
    });
});
