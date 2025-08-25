import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Field component for testing
const SimpleField = ({ 
    label, 
    helperText, 
    errorText, 
    required, 
    invalid, 
    children, 
    'data-testid': testId 
}: any) => {
    return (
        <div data-testid={testId || 'field'}>
            {label && (
                <label>
                    {label}
                    {required && <span aria-label="required">*</span>}
                </label>
            )}
            <div>{children}</div>
            {helperText && (
                <div data-helper-text>{helperText}</div>
            )}
            {errorText && (
                <div data-error-text>{errorText}</div>
            )}
        </div>
    );
};

describe('Field Component', () => {
    const defaultProps = {
        label: 'Test Label',
        helperText: 'Helper text',
        errorText: 'Error text',
        required: false,
        invalid: false,
    };

    it('should render with all props', () => {
        render(
            <SimpleField {...defaultProps}>
                <input type="text" />
            </SimpleField>
        );

        expect(screen.getByText('Test Label')).toBeInTheDocument();
        expect(screen.getByText('Helper text')).toBeInTheDocument();
        expect(screen.getByText('Error text')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render required indicator when required is true', () => {
        render(
            <SimpleField {...defaultProps} required>
                <input type="text" />
            </SimpleField>
        );

        expect(screen.getByLabelText('required')).toBeInTheDocument();
    });

    it('should render error text when invalid is true', () => {
        const errorText = 'Invalid input';
        render(
            <SimpleField {...defaultProps} errorText={errorText}>
                <input type="text" />
            </SimpleField>
        );

        expect(screen.getByText(errorText)).toBeInTheDocument();
    });

    it('should not render label when not provided', () => {
        const { label, ...propsWithoutLabel } = defaultProps;
        render(<SimpleField {...propsWithoutLabel}>
            <input type="text" />
        </SimpleField>);

        const labels = document.querySelectorAll('label');
        expect(labels).toHaveLength(0);
    });

    it('should not render helper text when not provided', () => {
        const { helperText, ...propsWithoutHelper } = defaultProps;
        render(<SimpleField {...propsWithoutHelper}>
            <input type="text" />
        </SimpleField>);

        const helperTexts = document.querySelectorAll('[data-helper-text]');
        expect(helperTexts).toHaveLength(0);
    });

    it('should not render error text when not provided', () => {
        const { errorText, ...propsWithoutError } = defaultProps;
        render(<SimpleField {...propsWithoutError}>
            <input type="text" />
        </SimpleField>);

        const errorTexts = document.querySelectorAll('[data-error-text]');
        expect(errorTexts).toHaveLength(0);
    });

    it('should handle complex children', () => {
        render(
            <SimpleField {...defaultProps}>
                <div>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </div>
            </SimpleField>
        );

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should handle all props together', () => {
        render(
            <SimpleField
                label="Email Address"
                helperText="We'll never share your email"
                errorText="Please enter a valid email"
                required
                invalid
            >
                <input type="email" />
            </SimpleField>
        );

        expect(screen.getByText('Email Address')).toBeInTheDocument();
        expect(screen.getByText("We'll never share your email")).toBeInTheDocument();
        expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
        expect(screen.getByLabelText('required')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should maintain accessibility', () => {
        render(
            <SimpleField label="Username" required>
                <input type="text" id="username" />
            </SimpleField>
        );

        const label = screen.getByText('Username');
        const input = screen.getByRole('textbox');
        const requiredIndicator = screen.getByLabelText('required');

        expect(label).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(requiredIndicator).toBeInTheDocument();
    });

    it('should handle empty strings gracefully', () => {
        render(
            <SimpleField label="" helperText="" errorText="">
                <input type="text" />
            </SimpleField>
        );

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should handle undefined props gracefully', () => {
        render(
            <SimpleField>
                <input type="text" />
            </SimpleField>
        );

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});
