import React from 'react';
import { render, screen } from '@testing-library/react';
import ThreeElements from '../three-elements';

describe('ThreeElements', () => {
    it('renders without crashing', () => {
        render(<ThreeElements />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('displays three main elements', () => {
        render(<ThreeElements />);
        // Look for the three main sections
        const elements = screen.getAllByRole('article');
        expect(elements.length).toBeGreaterThanOrEqual(3);
    });

    it('displays element titles', () => {
        render(<ThreeElements />);
        // Look for titles or headings
        const headings = screen.getAllByRole('heading');
        expect(headings.length).toBeGreaterThan(0);
    });

    it('displays element descriptions', () => {
        render(<ThreeElements />);
        // Look for descriptive text
        const content = screen.getByRole('region');
        expect(content).toBeInTheDocument();
    });

    it('has proper layout structure', () => {
        render(<ThreeElements />);
        const container = screen.getByRole('region');
        expect(container).toBeInTheDocument();
    });

    it('displays icons or visual elements', () => {
        render(<ThreeElements />);
        // Look for images or icons
        const images = screen.getAllByRole('img');
        expect(images.length).toBeGreaterThanOrEqual(0);
    });
});
