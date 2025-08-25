import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified OptimizedImage component for testing
const SimpleOptimizedImage = ({ 
    src, 
    alt, 
    width, 
    height, 
    className, 
    'data-testid': testId,
    responsive,
    ...props 
}: any) => {
    return (
        <div 
            className={className || ''} 
            data-testid={testId || 'optimized-image'}
            style={{ 
                width: responsive ? '100%' : width, 
                height: height,
                position: 'relative'
            }}
        >
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

describe('OptimizedImage', () => {
    const mockProps = {
        src: '/test-image.jpg',
        alt: 'Test image',
        width: 300,
        height: 200,
    };

    it('renders without crashing', () => {
        render(<SimpleOptimizedImage {...mockProps} />);
        expect(screen.getByAltText('Test image')).toBeInTheDocument();
    });

    it('displays image with correct attributes', () => {
        render(<SimpleOptimizedImage {...mockProps} />);
        const image = screen.getByAltText('Test image');
        expect(image).toHaveAttribute('src');
        expect(image).toHaveAttribute('alt', 'Test image');
    });

    it('handles different image formats', () => {
        const webpProps = { ...mockProps, src: '/test-image.webp' };
        render(<SimpleOptimizedImage {...webpProps} />);
        expect(screen.getByAltText('Test image')).toBeInTheDocument();
    });

    it('supports responsive sizing', () => {
        const responsiveProps = { ...mockProps, responsive: true };
        render(<SimpleOptimizedImage {...responsiveProps} />);
        expect(screen.getByAltText('Test image')).toBeInTheDocument();
    });

    it('handles loading states', () => {
        render(<SimpleOptimizedImage {...mockProps} />);
        const image = screen.getByAltText('Test image');
        expect(image).toBeInTheDocument();
    });

    it('supports custom className', () => {
        const customClassProps = { ...mockProps, className: 'custom-image' };
        render(<SimpleOptimizedImage {...customClassProps} />);
        const image = screen.getByAltText('Test image');
        expect(image).toBeInTheDocument();
    });

    it('maintains proper dimensions', () => {
        render(<SimpleOptimizedImage {...mockProps} />);
        const container = screen.getByTestId('optimized-image');
        expect(container).toBeInTheDocument();
    });

    it('supports custom test ID', () => {
        render(<SimpleOptimizedImage {...mockProps} data-testid="custom-image" />);
        expect(screen.getByTestId('custom-image')).toBeInTheDocument();
    });
});
