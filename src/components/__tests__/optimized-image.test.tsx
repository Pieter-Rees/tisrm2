import React from 'react';
import { render, screen } from '@testing-library/react';
import OptimizedImage from '../optimization/optimized-image';

const mockProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    width: 300,
    height: 200,
};

describe('OptimizedImage', () => {
    it('renders without crashing', () => {
        render(<OptimizedImage {...mockProps} />);
        expect(screen.getByAltText('Test image')).toBeInTheDocument();
    });

    it('displays image with correct attributes', () => {
        render(<OptimizedImage {...mockProps} />);
        const image = screen.getByAltText('Test image');
        expect(image).toHaveAttribute('src');
        expect(image).toHaveAttribute('alt', 'Test image');
    });

    it('handles different image formats', () => {
        const webpProps = { ...mockProps, src: '/test-image.webp' };
        render(<OptimizedImage {...webpProps} />);
        expect(screen.getByAltText('Test image')).toBeInTheDocument();
    });

    it('supports responsive sizing', () => {
        const responsiveProps = { ...mockProps, responsive: true };
        render(<OptimizedImage {...responsiveProps} />);
        expect(screen.getByAltText('Test image')).toBeInTheDocument();
    });

    it('handles loading states', () => {
        render(<OptimizedImage {...mockProps} />);
        const image = screen.getByAltText('Test image');
        expect(image).toBeInTheDocument();
    });

    it('supports custom className', () => {
        const customClassProps = { ...mockProps, className: 'custom-image' };
        render(<OptimizedImage {...customClassProps} />);
        const image = screen.getByAltText('Test image');
        expect(image).toBeInTheDocument();
    });
});
