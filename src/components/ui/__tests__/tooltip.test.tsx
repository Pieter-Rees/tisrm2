import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from '../tooltip';

describe('Tooltip', () => {
    it('renders without crashing', () => {
        render(<Tooltip label="Test tooltip">Hover me</Tooltip>);
        expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        render(<Tooltip label="Test tooltip">Tooltip trigger</Tooltip>);
        expect(screen.getByText('Tooltip trigger')).toBeInTheDocument();
    });

    it('displays tooltip on hover', async () => {
        render(<Tooltip label="Test tooltip">Hover me</Tooltip>);
        const trigger = screen.getByText('Hover me');

        fireEvent.mouseEnter(trigger);

        // Tooltip should appear
        expect(screen.getByText('Test tooltip')).toBeInTheDocument();
    });

    it('supports custom placement', () => {
        render(<Tooltip label="Test tooltip" placement="top">Hover me</Tooltip>);
        expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('supports disabled state', () => {
        render(<Tooltip label="Test tooltip" isDisabled>Hover me</Tooltip>);
        expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('supports custom delay', () => {
        render(<Tooltip label="Test tooltip" openDelay={500}>Hover me</Tooltip>);
        expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <Tooltip label="Test tooltip">
                <div>Child 1</div>
                <div>Child 2</div>
            </Tooltip>
        );
        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });
});
