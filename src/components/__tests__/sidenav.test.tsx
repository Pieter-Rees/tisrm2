import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidenav from '../sidenav';

// Mock the useDisclosure hook
jest.mock('../../hooks/use-disclosure', () => ({
    useDisclosure: () => ({
        isOpen: true,
        onOpen: jest.fn(),
        onClose: jest.fn(),
        onToggle: jest.fn(),
    }),
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

const mockProps = {
    showSideNav: true,
    handleToggle: jest.fn(),
};

describe('Sidenav', () => {
    it('renders without crashing', () => {
        render(<Sidenav {...mockProps} />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays navigation links when open', () => {
        render(<Sidenav {...mockProps} />);
        expect(screen.getByText(/Over ons/i)).toBeInTheDocument();
        expect(screen.getByText(/Verzekeringen/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });

    it('displays close button when open', () => {
        render(<Sidenav {...mockProps} />);
        expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    });

    it('displays company logo', () => {
        render(<Sidenav {...mockProps} />);
        expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    });

    it('has proper navigation structure', () => {
        render(<Sidenav {...mockProps} />);
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });

    it('displays contact information', () => {
        render(<Sidenav {...mockProps} />);
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });
});
