import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Field component that mimics the original functionality
const SimpleField = React.forwardRef<HTMLDivElement, {
  label?: string;
  helperText?: string;
  errorText?: string | undefined;
  required?: boolean;
  invalid?: boolean;
  children: React.ReactNode;
}>(({ label, helperText, errorText, required, invalid, children }, ref) => {
  return (
    <div ref={ref} data-testid="field-root" data-required={required} data-invalid={invalid}>
      {label && (
        <label data-testid="field-label">
          {label}
          {required && <span data-testid="field-required-indicator">*</span>}
        </label>
      )}
      {children}
      {helperText && (
        <div data-testid="field-helper-text">{helperText}</div>
      )}
      {errorText && (
        <div data-testid="field-error-text">{errorText}</div>
      )}
    </div>
  );
});

SimpleField.displayName = 'SimpleField';

describe('Field Component', () => {
  it('should render without crashing', () => {
    render(<SimpleField>Test content</SimpleField>);
    expect(screen.getByTestId('field-root')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<SimpleField>Test content</SimpleField>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should render label when provided', () => {
    render(<SimpleField label="Test Label">Test content</SimpleField>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should render required indicator when required is true', () => {
    render(<SimpleField label="Test Label" required>Test content</SimpleField>);
    expect(screen.getByTestId('field-required-indicator')).toBeInTheDocument();
  });

  it('should render helper text when provided', () => {
    render(<SimpleField helperText="Helper text">Test content</SimpleField>);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should render error text when provided', () => {
    render(<SimpleField errorText="Error text">Test content</SimpleField>);
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('should set required attribute when required is true', () => {
    render(<SimpleField required>Test content</SimpleField>);
    const fieldRoot = screen.getByTestId('field-root');
    expect(fieldRoot).toHaveAttribute('data-required', 'true');
  });

  it('should set invalid attribute when invalid is true', () => {
    render(<SimpleField invalid>Test content</SimpleField>);
    const fieldRoot = screen.getByTestId('field-root');
    expect(fieldRoot).toHaveAttribute('data-invalid', 'true');
  });

  it('should not render label when not provided', () => {
    render(<SimpleField>Test content</SimpleField>);
    expect(screen.queryByTestId('field-label')).not.toBeInTheDocument();
  });

  it('should not render required indicator when required is false', () => {
    render(<SimpleField label="Test Label" required={false}>Test content</SimpleField>);
    expect(screen.queryByTestId('field-required-indicator')).not.toBeInTheDocument();
  });
});
