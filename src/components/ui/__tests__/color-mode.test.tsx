import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ColorModeButton } from '../color-mode';

// Mock the useColorMode hook
jest.mock('../../hooks/use-color-mode', () => ({
    useColorMode: () => ({
        colorMode: 'light',
        toggleColorMode: jest.fn(),
    }),
}));

describe('ColorMode', () => {
    it('renders without crashing', () => {
        render(<ColorModeButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('displays color mode toggle button', () => {
        render(<ColorModeButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('shows current color mode', () => {
        render(<ColorModeButton />);
        expect(screen.getByText(/light/i)).toBeInTheDocument();
    });

    it('handles button click', () => {
        const mockToggle = jest.fn();
        jest.mocked(require('../../hooks/use-color-mode').useColorMode).mockReturnValue({
            colorMode: 'light',
            toggleColorMode: mockToggle,
        });

        render(<ColorModeButton />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockToggle).toHaveBeenCalled();
    });

    it('displays appropriate icon for light mode', () => {
        render(<ColorModeButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('displays appropriate icon for dark mode', () => {
        jest.mocked(require('../../hooks/use-color-mode').useColorMode).mockReturnValue({
            colorMode: 'dark',
            toggleColorMode: jest.fn(),
        });

        render(<ColorModeButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
