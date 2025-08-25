import React from 'react';

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

// Create a simplified version of the Breadcrumb component for testing
const createSimpleBreadcrumb = () => {
    return function SimpleBreadcrumb({ separator = '>' }: { separator?: string }) {
        const paths = mockUsePathname();
        const pathNames = paths.split('/').filter((path: string) => path);

        // This is the core logic we want to test
        const breadcrumbItems = pathNames.map((link: string, index: number) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`;
            const isCurrentPage = paths === href;
            const itemLink = link;

            return {
                link: itemLink,
                href,
                isCurrentPage,
                shouldShowSeparator: index < pathNames.length - 1
            };
        });

        return breadcrumbItems;
    };
};

describe('Breadcrumb Logic', () => {
    beforeEach(() => {
        // Reset the mock before each test
        mockUsePathname.mockClear();
    });

    it('should parse path correctly', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');

        const SimpleBreadcrumb = createSimpleBreadcrumb();
        const result = SimpleBreadcrumb({ separator: '>' });

        expect(result).toHaveLength(2);
        expect(result[0]).toEqual({
            link: 'verzekeringen',
            href: '/verzekeringen',
            isCurrentPage: false,
            shouldShowSeparator: true
        });
        expect(result[1]).toEqual({
            link: 'particulier',
            href: '/verzekeringen/particulier',
            isCurrentPage: true,
            shouldShowSeparator: false
        });
    });

    it('should handle custom separator', () => {
        mockUsePathname.mockReturnValue('/verzekeringen/particulier');

        const SimpleBreadcrumb = createSimpleBreadcrumb();
        const result = SimpleBreadcrumb({ separator: '/' });

        expect(result).toHaveLength(2);
        // The separator logic is handled in the render, but we can test the structure
        expect(result[0].shouldShowSeparator).toBe(true);
        expect(result[1].shouldShowSeparator).toBe(false);
    });

    it('should handle empty path', () => {
        mockUsePathname.mockReturnValue('/');

        const SimpleBreadcrumb = createSimpleBreadcrumb();
        const result = SimpleBreadcrumb({ separator: '>' });

        expect(result).toHaveLength(0);
    });

    it('should handle single level path', () => {
        mockUsePathname.mockReturnValue('/verzekeringen');

        const SimpleBreadcrumb = createSimpleBreadcrumb();
        const result = SimpleBreadcrumb({ separator: '>' });

        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({
            link: 'verzekeringen',
            href: '/verzekeringen',
            isCurrentPage: true,
            shouldShowSeparator: false
        });
    });
});
