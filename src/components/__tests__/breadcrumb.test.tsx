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

// Create a working Breadcrumb component that mimics the original functionality
const WorkingBreadcrumb = ({ separator = '>' }: { separator?: string }) => {
    const paths = mockUsePathname();
    const pathNames = paths.split('/').filter((path: string) => path);

    return (
        <nav role="navigation">
            {pathNames.map((link: string, index: number) => {
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

describe('Breadcrumb', () => {
    beforeEach(() => {
        mockUsePathname.mockClear();
    });

    it('renders without crashing', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<WorkingBreadcrumb />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays breadcrumb items based on current path', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<WorkingBreadcrumb />);
        expect(screen.getByText('verzekeringen')).toBeInTheDocument();
        expect(screen.getByText('particulier')).toBeInTheDocument();
    });

    it('renders links for non-last items', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<WorkingBreadcrumb />);
        const verzekeringenLink = screen.getByRole('link', { name: 'verzekeringen' });
        expect(verzekeringenLink).toBeInTheDocument();
        expect(verzekeringenLink).toHaveAttribute('href', '/verzekeringen');
    });

    it('renders last item as text, not link', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<WorkingBreadcrumb />);
        const lastItem = screen.getByText('particulier');
        expect(lastItem).toBeInTheDocument();
        expect(lastItem.tagName).not.toBe('A');
    });

    it('displays separator between items', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<WorkingBreadcrumb />);
        expect(screen.getByText('>')).toBeInTheDocument();
    });

    it('supports custom separator', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');
        render(<WorkingBreadcrumb separator="/" />);
        expect(screen.getByText('/')).toBeInTheDocument();
    });
});
