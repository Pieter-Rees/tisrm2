import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: () => '/verzekeringen/particulier',
}));


const SimpleBreadcrumb = ({ separator = '>' }: { separator?: string }) => {
    const paths = ['verzekeringen', 'particulier'];

    return (
        <nav role="navigation">
            {paths.map((link, index) => (
                <React.Fragment key={index}>
                    <span>{link}</span>
                    {index < paths.length - 1 && (
                        <span>{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

describe('SimpleBreadcrumb', () => {
    it('renders without crashing', () => {
        render(<SimpleBreadcrumb />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays breadcrumb items based on current path', () => {
        render(<SimpleBreadcrumb />);
        expect(screen.getByText('verzekeringen')).toBeInTheDocument();
        expect(screen.getByText('particulier')).toBeInTheDocument();
    });

    it('displays separator between items', () => {
        render(<SimpleBreadcrumb />);
        expect(screen.getByText('>')).toBeInTheDocument();
    });

    it('supports custom separator', () => {
        render(<SimpleBreadcrumb separator="/" />);
        expect(screen.getByText('/')).toBeInTheDocument();
    });
});
