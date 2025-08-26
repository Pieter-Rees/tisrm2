import React from 'react';

// Mock the types to avoid import issues
jest.mock('@/types/components', () => ({
    BreadcrumbProps: {
        separator: '>',
        listClasses: '',
        activeClasses: '',
        capitalizeLinks: false,
        maxItems: undefined,
    },
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: () => '/verzekeringen/particulier',
}));

describe('Breadcrumb Debug Test', () => {
    it('can import and inspect Breadcrumb component', () => {
        const BreadcrumbModule = require('@/components/breadcrumb');
        console.log('BreadcrumbModule:', BreadcrumbModule);
        console.log('BreadcrumbModule.default:', BreadcrumbModule.default);
        console.log('BreadcrumbModule.Breadcrumb:', BreadcrumbModule.Breadcrumb);
        console.log('typeof BreadcrumbModule.default:', typeof BreadcrumbModule.default);

        expect(BreadcrumbModule).toBeDefined();
        expect(BreadcrumbModule.default).toBeDefined();
        expect(typeof BreadcrumbModule.default).toBe('function');
    });
});
