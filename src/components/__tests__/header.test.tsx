import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header';

// Mock the useColorMode hook
jest.mock('../../hooks/use-color-mode', () => ({
    useColorMode: () => ({
        colorMode: 'light',
        toggleColorMode: jest.fn(),
    }),
}));

describe('Header', () => {
    it('renders without crashing', () => {
        render(<Header />);
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('displays the logo', () => {
        render(<Header />);
        expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    });

    it('displays navigation menu', () => {
        render(<Header />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays contact information', () => {
        render(<Header />);
        expect(screen.getByText(/Contact/)).toBeInTheDocument();
    });

    it('displays color mode toggle', () => {
        render(<Header />);
        expect(screen.getByRole('button', { name: /toggle color mode/i })).toBeInTheDocument();
    });
});
