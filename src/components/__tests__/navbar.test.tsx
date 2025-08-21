import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../navbar';

// Mock the useDisclosure hook
jest.mock('../../hooks/use-disclosure', () => ({
    useDisclosure: () => ({
        isOpen: false,
        onOpen: jest.fn(),
        onClose: jest.fn(),
        onToggle: jest.fn(),
    }),
}));

describe('Navbar', () => {
    it('renders without crashing', () => {
        render(<Navbar />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays the logo', () => {
        render(<Navbar />);
        expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    });

    it('displays navigation links', () => {
        render(<Navbar />);
        expect(screen.getByText(/Over ons/)).toBeInTheDocument();
        expect(screen.getByText(/Verzekeringen/)).toBeInTheDocument();
        expect(screen.getByText(/Contact/)).toBeInTheDocument();
    });

    it('displays mobile menu button', () => {
        render(<Navbar />);
        expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    });

    it('displays contact button', () => {
        render(<Navbar />);
        expect(screen.getByText(/Contact/)).toBeInTheDocument();
    });
});
