import { render, RenderOptions } from '@testing-library/react';
import React from 'react';

// Create a comprehensive mock provider that wraps all necessary providers
const AllProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div data-testid="test-provider-wrapper">{children}</div>;
};

// Custom render function that includes providers
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

interface MockComponentProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

export const createMockComponent = (name: string, testId?: string) => {
  const MockComponent = React.forwardRef<HTMLDivElement, MockComponentProps>(
    (props, ref) => {
      const { children, ...rest } = props;
      return (
        <div
          ref={ref}
          data-testid={testId || `mock-${name.toLowerCase()}`}
          {...rest}
        >
          {(children as React.ReactNode) || name}
        </div>
      );
    },
  );
  MockComponent.displayName = `Mock${name}`;
  return MockComponent;
};

// Mock component with proper roles
export const createMockComponentWithRole = (
  name: string,
  role: string,
  testId?: string,
) => {
  const MockComponent = React.forwardRef<HTMLDivElement, MockComponentProps>(
    (props, ref) => {
      const { children, ...rest } = props;
      return (
        <div
          ref={ref}
          role={role}
          data-testid={testId || `mock-${name.toLowerCase()}`}
          {...rest}
        >
          {(children as React.ReactNode) || name}
        </div>
      );
    },
  );
  MockComponent.displayName = `Mock${name}`;
  return MockComponent;
};

// Common mock constants
export const MOCK_CONSTANTS = {
  UI_CONSTANTS: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    animations: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
    },
    zIndexes: {
      dropdown: 1000,
      sticky: 1020,
      fixed: 1030,
      modal: 1040,
      popover: 1050,
      tooltip: 1060,
      toast: 1070,
    },
    hover: {
      card: {
        transition: 'all 0.3s ease',
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
      },
      button: {
        transition: 'all 0.2s ease-in-out',
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      },
      image: {
        transition: 'all 0.3s ease',
        transform: 'scale(1.02)',
        boxShadow: 'xl',
      },
      link: {
        transition: 'all 0.2s ease',
        color: 'blue.500',
        transform: 'translateX(2px)',
      },
      subtle: {
        transition: 'all 0.2s ease',
        transform: 'translateY(-1px)',
        bg: 'gray.50',
      },
    },
  },
  NAVIGATION_ROUTES: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
};

// Mock hooks
export const mockHooks = {
  useDisclosure: () => ({
    isOpen: false,
    onOpen: jest.fn(),
    onClose: jest.fn(),
    onToggle: jest.fn(),
  }),
  useColorMode: () => ({
    colorMode: 'light',
    toggleColorMode: jest.fn(),
  }),
  useLocalStorage: (key: string, defaultValue: unknown) => [
    defaultValue,
    jest.fn(),
    jest.fn(),
  ],
  useMediaQuery: () => false,
  useMultiStepForm: () => ({
    formState: {
      data: {},
      errors: {},
      isSubmitting: false,
      isValid: true,
      isDirty: false,
    },
    register: jest.fn(),
    handleSubmit: jest.fn(),
    watch: jest.fn(),
    setValue: jest.fn(),
    getValues: jest.fn(),
    reset: jest.fn(),
  }),
};

export const setupTest = () => {
  // Clear all mocks
  jest.clearAllMocks();

  // Reset DOM
  document.body.innerHTML = '';
};

export default {
  render: customRender,
  createMockComponent,
  createMockComponentWithRole,
  MOCK_CONSTANTS,
  mockHooks,
  setupTest,
};
