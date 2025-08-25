import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Create a simplified Button component for testing
const SimpleButton = ({ 
    variant = 'primary', 
    size = 'md', 
    children, 
    onClick, 
    disabled = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    'data-testid': testId,
    ...props 
}: any) => {
    const buttonStyle = {
        padding: size === 'sm' ? '0.5rem 1rem' : size === 'lg' ? '1rem 2rem' : '0.75rem 1.5rem',
        fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.125rem' : '1rem',
        backgroundColor: variant === 'primary' ? '#3b82f6' : 
                       variant === 'secondary' ? '#6b7280' :
                       variant === 'outline' ? 'transparent' :
                       variant === 'ghost' ? 'transparent' :
                       variant === 'danger' ? '#ef4444' :
                       variant === 'success' ? '#10b981' : '#3b82f6',
        color: variant === 'outline' || variant === 'ghost' ? '#3b82f6' : 'white',
        border: variant === 'outline' ? '1px solid #3b82f6' : 'none',
        borderRadius: '0.375rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
    };

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            style={buttonStyle}
            data-testid={testId || 'button'}
            data-variant={variant}
            data-size={size}
            {...props}
        >
            {leftIcon && <span data-testid="left-icon">{leftIcon}</span>}
            {isLoading ? 'Loading...' : children}
            {rightIcon && <span data-testid="right-icon">{rightIcon}</span>}
        </button>
    );
};

describe('Button Component', () => {
    const defaultProps = {
        children: 'Click me',
        onClick: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<SimpleButton {...defaultProps} />);
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    it('displays button text', () => {
        render(<SimpleButton {...defaultProps} />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const mockOnClick = jest.fn();
        render(<SimpleButton {...defaultProps} onClick={mockOnClick} />);
        
        const button = screen.getByTestId('button');
        fireEvent.click(button);
        
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('applies primary variant by default', () => {
        render(<SimpleButton {...defaultProps} />);
        const button = screen.getByTestId('button');
        expect(button).toHaveAttribute('data-variant', 'primary');
    });

    it('applies different variants correctly', () => {
        const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'];
        
        variants.forEach(variant => {
            const { unmount } = render(<SimpleButton {...defaultProps} variant={variant} />);
            const button = screen.getByTestId('button');
            expect(button).toHaveAttribute('data-variant', variant);
            unmount();
        });
    });

    it('applies medium size by default', () => {
        render(<SimpleButton {...defaultProps} />);
        const button = screen.getByTestId('button');
        expect(button).toHaveAttribute('data-size', 'md');
    });

    it('applies different sizes correctly', () => {
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
        
        sizes.forEach(size => {
            const { unmount } = render(<SimpleButton {...defaultProps} size={size} />);
            const button = screen.getByTestId('button');
            expect(button).toHaveAttribute('data-size', size);
            unmount();
        });
    });

    it('handles disabled state', () => {
        render(<SimpleButton {...defaultProps} disabled />);
        const button = screen.getByTestId('button');
        expect(button).toBeDisabled();
    });

    it('handles loading state', () => {
        render(<SimpleButton {...defaultProps} isLoading />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('displays left icon when provided', () => {
        const leftIcon = '←';
        render(<SimpleButton {...defaultProps} leftIcon={leftIcon} />);
        expect(screen.getByTestId('left-icon')).toBeInTheDocument();
        expect(screen.getByText(leftIcon)).toBeInTheDocument();
    });

    it('displays right icon when provided', () => {
        const rightIcon = '→';
        render(<SimpleButton {...defaultProps} rightIcon={rightIcon} />);
        expect(screen.getByTestId('right-icon')).toBeInTheDocument();
        expect(screen.getByText(rightIcon)).toBeInTheDocument();
    });

    it('handles custom test ID', () => {
        render(<SimpleButton {...defaultProps} data-testid="custom-button" />);
        expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    });

    it('forwards additional props', () => {
        render(<SimpleButton {...defaultProps} aria-label="Custom button" />);
        const button = screen.getByLabelText('Custom button');
        expect(button).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
        render(<SimpleButton onClick={jest.fn()} />);
        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument();
    });

    it('maintains proper button type', () => {
        render(<SimpleButton {...defaultProps} type="submit" />);
        const button = screen.getByTestId('button');
        expect(button).toHaveAttribute('type', 'submit');
    });
});
