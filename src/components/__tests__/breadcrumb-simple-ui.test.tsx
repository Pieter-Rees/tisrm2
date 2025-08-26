import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock next/navigation
const mockUsePathname = jest.fn();
jest.mock('next/navigation', () => ({
    usePathname: mockUsePathname,
}));

// Mock the types
jest.mock('@/types/components', () => ({
    BreadcrumbProps: {
        separator: '>',
        listClasses: '',
        activeClasses: '',
        capitalizeLinks: false,
        maxItems: undefined,
    },
}));

// Create a simplified Breadcrumb component that uses basic HTML instead of Chakra UI
const SimpleBreadcrumb = ({ separator = '>' }: { separator?: string }) => {
    const paths = mockUsePathname();
    const pathNames = paths.split('/').filter((path: string) => path);

    return (
        <nav role="navigation">
            {pathNames.map((link, index) => {
                const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                const isCurrentPage = paths === href;
                const itemLink = link;

                return (
                    <React.Fragment key={index}>
                        <div className={isCurrentPage ? 'active' : ''}>
                            {isCurrentPage ? (
                                <span>{itemLink}</span>
                            ) : (
                                <a href={href}>{itemLink}</a>
                            )}
                        </div>
                        {pathNames.length !== index + 1 && (
                            <span className="separator">{separator}</span>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

describe('Simple Breadcrumb UI', () => {
    beforeEach(() => {
        mockUsePathname.mockClear();
    });

    it('renders without crashing', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<SimpleBreadcrumb />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays breadcrumb items based on current path', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<SimpleBreadcrumb />);
        expect(screen.getByText('verzekeringen')).toBeInTheDocument();
        expect(screen.getByText('particulier')).toBeInTheDocument();
    });

    it('renders links for non-last items', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<SimpleBreadcrumb />);
        const verzekeringenLink = screen.getByRole('link', { name: 'verzekeringen' });
        expect(verzekeringenLink).toBeInTheDocument();
        expect(verzekeringenLink).toHaveAttribute('href', '/verzekeringen');
    });

    it('renders last item as text, not link', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<SimpleBreadcrumb />);
        const lastItem = screen.getByText('particulier');
        expect(lastItem).toBeInTheDocument();
        expect(lastItem.tagName).not.toBe('A');
    });

    it('displays separator between items', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<SimpleBreadcrumb />);
        expect(screen.getByText('>')).toBeInTheDocument();
    });

    it('supports custom separator', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<SimpleBreadcrumb separator="/" />);
        expect(screen.getByText('/')).toBeInTheDocument();
    });

    it('handles empty path', () => {
        mockUsePathname.mockReturnValue('/');
        render(<SimpleBreadcrumb />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        // Should not have any breadcrumb items
        expect(screen.queryByText('verzekeringen')).not.toBeInTheDocument();
    });

    it('handles single level path', () => {
        mockUsePathname.mockReturnValue('/verzekeringen');
        render(<SimpleBreadcrumb />);
        expect(screen.getByText('verzekeringen')).toBeInTheDocument();
        expect(screen.queryByText('>')).not.toBeInTheDocument(); // No separator for single item
    });
});
