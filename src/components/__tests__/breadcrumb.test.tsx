import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../breadcrumb';

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: () => '/verzekeringen/particulier',
}));

describe('Breadcrumb', () => {
    it('renders without crashing', () => {
        render(<Breadcrumb />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays breadcrumb items based on current path', () => {
        render(<Breadcrumb />);
        expect(screen.getByText('verzekeringen')).toBeInTheDocument();
        expect(screen.getByText('particulier')).toBeInTheDocument();
    });

    it('renders links for non-last items', () => {
        render(<Breadcrumb />);
        const verzekeringenLink = screen.getByRole('link', { name: 'verzekeringen' });
        expect(verzekeringenLink).toBeInTheDocument();
    });

    it('renders last item as text, not link', () => {
        render(<Breadcrumb />);
        const lastItem = screen.getByText('particulier');
        expect(lastItem).toBeInTheDocument();
        expect(lastItem.tagName).not.toBe('A');
    });

    it('displays separator between items', () => {
        render(<Breadcrumb />);
        expect(screen.getByText('>')).toBeInTheDocument();
    });

    it('supports custom separator', () => {
        render(<Breadcrumb separator="/" />);
        expect(screen.getByText('/')).toBeInTheDocument();
    });
});
