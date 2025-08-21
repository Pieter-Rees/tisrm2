import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../sidebar';

// Mock the useDisclosure hook
jest.mock('../../hooks/use-disclosure', () => ({
    useDisclosure: () => ({
        isOpen: true,
        onOpen: jest.fn(),
        onClose: jest.fn(),
        onToggle: jest.fn(),
    }),
}));

describe('Sidebar', () => {
    it('renders without crashing', () => {
        render(<Sidebar />);
        expect(screen.getByRole('complementary')).toBeInTheDocument();
    });

    it('displays navigation links when open', () => {
        render(<Sidebar />);
        expect(screen.getByText(/Over ons/)).toBeInTheDocument();
        expect(screen.getByText(/Verzekeringen/)).toBeInTheDocument();
        expect(screen.getByText(/Contact/)).toBeInTheDocument();
    });

    it('displays close button', () => {
        render(<Sidebar />);
        expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    });

    it('displays company logo', () => {
        render(<Sidebar />);
        expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    });
});
