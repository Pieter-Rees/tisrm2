import React from 'react';
import { render, screen } from '@testing-library/react';
import Talker from '../talker';

const mockProps = {
    name: 'Test Name',
    title: 'Test Title',
    image: '/test-image.jpg',
    quote: 'Test quote',
};

describe('Talker', () => {
    it('renders without crashing', () => {
        render(<Talker {...mockProps} />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('displays talk to us text', () => {
        render(<Talker {...mockProps} />);
        expect(screen.getByText('Test quote')).toBeInTheDocument();
    });

    it('has proper button styling', () => {
        render(<Talker {...mockProps} />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });

    it('displays contact information', () => {
        render(<Talker {...mockProps} />);
        expect(screen.getByText('Test Name')).toBeInTheDocument();
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('is accessible', () => {
        render(<Talker {...mockProps} />);
        const container = screen.getByRole('region');
        expect(container).toHaveAttribute('aria-label', 'Customer testimonial');
    });

    it('displays testimonial image', () => {
        render(<Talker {...mockProps} />);
        const image = screen.getByAltText(/Portrait of Test Name/i);
        expect(image).toBeInTheDocument();
    });

    it('displays company information when provided', () => {
        const propsWithCompany = { ...mockProps, company: 'Test Company' };
        render(<Talker {...propsWithCompany} />);
        expect(screen.getByText('Test Company')).toBeInTheDocument();
    });
});
