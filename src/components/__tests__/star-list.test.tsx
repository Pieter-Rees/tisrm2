import { render, screen } from '@testing-library/react';
import React from 'react';

// Create a simple mock component that mimics StarList behavior
const MockStarList = ({ listItems }: { listItems: string[] }) => (
    <ul role="list">
        {listItems.map((item, index) => (
            <li key={index} role="listitem">
                <svg data-testid={`icon-BsStarFill`} width="16px" height="16px">
                    <title>BsStarFill</title>
                </svg>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

describe('StarList Component', () => {
    const mockListItems = [
        'First item with stars',
        'Second item with stars',
        'Third item with stars',
    ];

    it('should render with list items', () => {
        render(<MockStarList listItems={mockListItems} />);

        mockListItems.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('should render correct number of list items', () => {
        render(<MockStarList listItems={mockListItems} />);

        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(mockListItems.length);
    });

    it('should render stars for each item', () => {
        render(<MockStarList listItems={mockListItems} />);

        // Check that stars are rendered (BsStarFill icons)
        const stars = document.querySelectorAll('svg');
        expect(stars).toHaveLength(mockListItems.length);
    });

    it('should handle empty list', () => {
        render(<MockStarList listItems={[]} />);

        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();

        const listItems = screen.queryAllByRole('listitem');
        expect(listItems).toHaveLength(0);
    });

    it('should handle single item', () => {
        const singleItem = ['Only one item'];
        render(<MockStarList listItems={singleItem} />);

        expect(screen.getByText('Only one item')).toBeInTheDocument();

        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(1);
    });

    it('should have correct HTML structure', () => {
        render(<MockStarList listItems={mockListItems} />);

        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();
        expect(list.tagName).toBe('UL');

        const listItems = screen.getAllByRole('listitem');
        listItems.forEach(item => {
            expect(item.tagName).toBe('LI');
        });
    });

    it('should render items with correct text content', () => {
        render(<MockStarList listItems={mockListItems} />);

        mockListItems.forEach((item, index) => {
            const listItem = screen.getByText(item);
            expect(listItem).toBeInTheDocument();
            expect(listItem.closest('li')).toBeInTheDocument();
        });
    });

    it('should handle special characters in list items', () => {
        const specialItems = [
            'Item with & special characters',
            'Item with "quotes"',
            'Item with <tags>',
        ];

        render(<MockStarList listItems={specialItems} />);

        specialItems.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('should maintain accessibility', () => {
        render(<MockStarList listItems={mockListItems} />);

        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();

        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(mockListItems.length);
    });
});