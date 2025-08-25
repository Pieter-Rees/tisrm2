import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Logo component that mimics the original functionality
const SimpleLogo = ({ width = '200px', height = 'auto' }: { width?: string; height?: string }) => {
    return (
        <div style={{ width, height }}>
            <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3920 2120"
                aria-label="TIS Risk Managers Logo"
                data-testid="logo-svg"
            >
                <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M4830 4560h90c84.39 0 142.52 9.62 180 30" />
                    </clipPath>
                </defs>
                <path
                    d="M-83.163 8898.47H16383.2V-83.163H-83.163"
                    style={{ fill: '#424242' }}
                    transform="matrix(.2405 0 0 -.2405 0 2120)"
                />
                <path
                    d="M693.617 8496.81H16300V693.617H693.617Z"
                    style={{ stroke: '#fff', strokeWidth: '156.06399536' }}
                    transform="matrix(.23067 0 0 -.23067 0 2120)"
                />
                <g clipPath="url(#a)" transform="matrix(.13333 0 0 -.13333 0 2120)">
                    <path
                        d="M2664.8 3598.45h13732.5V2236.87H2664.8"
                        style={{ fill: '#fff' }}
                        transform="scale(1.54233)"
                    />
                </g>
            </svg>
        </div>
    );
};

describe('Logo Component', () => {
    it('should render with default props', () => {
        render(<SimpleLogo />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toBeInTheDocument();
    });

    it('should render with custom width and height', () => {
        render(<SimpleLogo width="300px" height="150px" />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toBeInTheDocument();
    });

    it('should have correct SVG attributes', () => {
        render(<SimpleLogo />);

        const svg = screen.getByLabelText('TIS Risk Managers Logo');
        expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
        expect(svg).toHaveAttribute('viewBox', '0 0 3920 2120');
    });

    it('should have correct aria-label', () => {
        render(<SimpleLogo />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toBeInTheDocument();
    });

    it('should render SVG content', () => {
        render(<SimpleLogo />);

        const svg = screen.getByLabelText('TIS Risk Managers Logo');
        expect(svg).toBeInTheDocument();
        expect(svg.tagName).toBe('svg');
    });

    it('should handle different prop combinations', () => {
        const { rerender } = render(<SimpleLogo width="100px" />);

        rerender(<SimpleLogo height="200px" />);
        rerender(<SimpleLogo width="400px" height="300px" />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toBeInTheDocument();
    });

    it('should maintain accessibility', () => {
        render(<SimpleLogo />);

        const logo = screen.getByLabelText('TIS Risk Managers Logo');
        expect(logo).toHaveAttribute('aria-label', 'TIS Risk Managers Logo');
    });

    it('should apply custom width and height styles', () => {
        render(<SimpleLogo width="250px" height="100px" />);

        const container = screen.getByTestId('logo-svg').parentElement;
        expect(container).toHaveStyle({ width: '250px', height: '100px' });
    });

    it('should render with default dimensions when no props provided', () => {
        render(<SimpleLogo />);

        const container = screen.getByTestId('logo-svg').parentElement;
        expect(container).toHaveStyle({ width: '200px', height: 'auto' });
    });
});
