import { render, screen } from '@testing-library/react';
import Logo from '../logo';

describe('Logo Component', () => {
    it('should render with default props', () => {
        render(<Logo />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toBeInTheDocument();
    });

    it('should render with custom width and height', () => {
        render(<Logo width="300px" height="150px" />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toBeInTheDocument();

        // Check that the SVG has the correct dimensions
        const svg = logo.querySelector('svg');
        expect(svg).toHaveAttribute('width', '100%');
        expect(svg).toHaveAttribute('height', '100%');
    });

    it('should have correct SVG attributes', () => {
        render(<Logo />);

        const svg = screen.getByLabelText('TIS Risk Managers Logo');
        expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
        expect(svg).toHaveAttribute('viewBox', '0 0 3920 2120');
    });

    it('should have correct aria-label', () => {
        render(<Logo />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toBeInTheDocument();
    });

    it('should render SVG content', () => {
        render(<Logo />);

        const svg = screen.getByLabelText('TIS Risk Managers Logo');

        // Check for SVG elements
        expect(svg.querySelector('defs')).toBeInTheDocument();
        expect(svg.querySelector('clipPath')).toBeInTheDocument();
        expect(svg.querySelector('path')).toBeInTheDocument();
        expect(svg.querySelector('g')).toBeInTheDocument();
    });

    it('should handle different prop combinations', () => {
        const { rerender } = render(<Logo width="100px" />);

        rerender(<Logo height="200px" />);
        rerender(<Logo width="400px" height="300px" />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toBeInTheDocument();
    });

    it('should maintain accessibility', () => {
        render(<Logo />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toHaveAttribute('aria-label', 'TIS Risk Managers Logo');
    });
});
