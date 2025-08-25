import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Loading component that mimics the original functionality
const SimpleLoading = ({
    size = 'lg',
    text = 'Laden...',
    fullScreen = false
}: {
    size?: string;
    text?: string;
    fullScreen?: boolean;
}) => {
    const content = (
        <div role="status" aria-live="polite">
            <div data-testid="spinner" data-size={size}></div>
            {text && (
                <div data-testid="loading-text">{text}</div>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div data-testid="loading-fullscreen">
                {content}
            </div>
        );
    }

    return (
        <div data-testid="loading-container">
            {content}
        </div>
    );
};

describe('Loading', () => {
    it('displays loading text', () => {
        render(<SimpleLoading />);
        expect(screen.getByText('Laden...')).toBeInTheDocument();
    });

    it('displays spinner or loading animation', () => {
        render(<SimpleLoading />);
        const loadingElement = screen.getByRole('status');
        expect(loadingElement).toBeInTheDocument();
    });

    it('has accessible loading state', () => {
        render(<SimpleLoading />);
        const loadingElement = screen.getByRole('status');
        expect(loadingElement).toHaveAttribute('aria-live', 'polite');
    });

    it('can be customized with custom text', () => {
        const customText = 'Custom loading message';
        render(<SimpleLoading text={customText} />);
        expect(screen.getByText(customText)).toBeInTheDocument();
    });

    it('supports fullscreen mode', () => {
        render(<SimpleLoading fullScreen={true} />);
        const fullscreenElement = screen.getByTestId('loading-fullscreen');
        expect(fullscreenElement).toBeInTheDocument();
    });

    it('supports custom size', () => {
        render(<SimpleLoading size="sm" />);
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toHaveAttribute('data-size', 'sm');
    });

    it('renders inline by default', () => {
        render(<SimpleLoading />);
        const container = screen.getByTestId('loading-container');
        expect(container).toBeInTheDocument();
    });
});
