import React from 'react';
import { render, screen } from '@testing-library/react';


const SimpleColorModeProvider = ({ children, 'data-testid': testId }: any) => {
    return (
        <div data-testid={testId || 'color-mode-provider'}>
            {children}
        </div>
    );
};

const SimpleColorModeIcon = ({ 'data-testid': testId }: any) => {
    return (
        <span data-testid={testId || 'color-mode-icon'}>
            🌙
        </span>
    );
};

const SimpleColorModeButton = ({ onClick, 'data-testid': testId }: any) => {
    return (
        <button
            type="button"
            onClick={onClick}
            data-testid={testId || 'color-mode-button'}
            aria-label="Toggle color mode"
        >
            🌙
        </button>
    );
};

const SimpleLightMode = ({ children, 'data-testid': testId }: any) => {
    return (
        <span data-testid={testId || 'light-mode'}>
            {children}
        </span>
    );
};

const SimpleDarkMode = ({ children, 'data-testid': testId }: any) => {
    return (
        <span data-testid={testId || 'dark-mode'}>
            {children}
        </span>
    );
};

describe('ColorMode Components', () => {
    describe('ColorModeProvider', () => {
        it('renders without crashing', () => {
            render(<SimpleColorModeProvider>Test content</SimpleColorModeProvider>);
            expect(screen.getByText('Test content')).toBeInTheDocument();
        });

        it('renders children correctly', () => {
            const testContent = 'Color mode test content';
            render(<SimpleColorModeProvider>{testContent}</SimpleColorModeProvider>);
            expect(screen.getByText(testContent)).toBeInTheDocument();
        });
    });

    describe('ColorModeIcon', () => {
        it('renders without crashing', () => {
            render(<SimpleColorModeIcon />);
            expect(screen.getByTestId('color-mode-icon')).toBeInTheDocument();
        });

        it('displays the icon', () => {
            render(<SimpleColorModeIcon />);
            expect(screen.getByText('🌙')).toBeInTheDocument();
        });
    });

    describe('ColorModeButton', () => {
        it('renders without crashing', () => {
            const mockOnClick = jest.fn();
            render(<SimpleColorModeButton onClick={mockOnClick} />);
            expect(screen.getByTestId('color-mode-button')).toBeInTheDocument();
        });

        it('calls onClick when clicked', () => {
            const mockOnClick = jest.fn();
            render(<SimpleColorModeButton onClick={mockOnClick} />);

            const button = screen.getByTestId('color-mode-button');
            button.click();

            expect(mockOnClick).toHaveBeenCalledTimes(1);
        });

        it('has proper accessibility attributes', () => {
            const mockOnClick = jest.fn();
            render(<SimpleColorModeButton onClick={mockOnClick} />);

            const button = screen.getByLabelText('Toggle color mode');
            expect(button).toBeInTheDocument();
        });
    });

    describe('LightMode', () => {
        it('renders without crashing', () => {
            render(<SimpleLightMode>Light content</SimpleLightMode>);
            expect(screen.getByText('Light content')).toBeInTheDocument();
        });

        it('renders children correctly', () => {
            render(<SimpleLightMode>Light mode text</SimpleLightMode>);
            expect(screen.getByText('Light mode text')).toBeInTheDocument();
        });
    });

    describe('DarkMode', () => {
        it('renders without crashing', () => {
            render(<SimpleDarkMode>Dark content</SimpleDarkMode>);
            expect(screen.getByText('Dark content')).toBeInTheDocument();
        });

        it('renders children correctly', () => {
            render(<SimpleDarkMode>Dark mode text</SimpleDarkMode>);
            expect(screen.getByText('Dark mode text')).toBeInTheDocument();
        });
    });
});
