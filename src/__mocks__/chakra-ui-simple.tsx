import React from 'react';

// Simple, working mock for Chakra UI components
const createMockComponent = (tag: string, displayName: string) => {
    const Component = React.forwardRef<any, any>((props: any, ref) => {
        const { children, as, asChild, variant, size, spacing, gap, alignItems, justifyContent, direction, ...rest } = props;
        const Element = as || tag;

        // Handle asChild pattern (used by Button)
        if (asChild && React.Children.count(children) === 1) {
            const child = React.Children.only(children) as React.ReactElement;
            return React.cloneElement(child, {
                ...rest,
                ...(child.props || {}),
                variant,
                role: child.props?.role || (tag === 'button' ? 'button' : undefined),
            } as any);
        }

        return React.createElement(Element, {
            ref,
            variant,
            size,
            spacing,
            gap,
            alignItems,
            justifyContent,
            direction,
            role: tag === 'button' ? 'button' : undefined,
            ...rest
        }, children);
    });
    Component.displayName = displayName;
    return Component;
};

// Export all components as named exports
export const Box = createMockComponent('div', 'Box');
export const Button = createMockComponent('button', 'Button');
export const Text = createMockComponent('p', 'Text');
export const Heading = createMockComponent('h3', 'Heading');
export const HStack = createMockComponent('div', 'HStack');
export const VStack = createMockComponent('div', 'VStack');
export const Container = createMockComponent('div', 'Container');
export const Badge = createMockComponent('span', 'Badge');
export const Link = createMockComponent('a', 'Link');
export const Image = createMockComponent('img', 'Image');
export const Input = createMockComponent('input', 'Input');
export const Flex = createMockComponent('div', 'Flex');
export const SimpleGrid = createMockComponent('div', 'SimpleGrid');
export const Stack = createMockComponent('div', 'Stack');
export const Grid = createMockComponent('div', 'Grid');
export const GridItem = createMockComponent('div', 'GridItem');
export const Center = createMockComponent('div', 'Center');
export const Spacer = createMockComponent('div', 'Spacer');
export const Divider = createMockComponent('hr', 'Divider');
export const Icon = createMockComponent('span', 'Icon');
export const Tag = createMockComponent('span', 'Tag');
export const List = createMockComponent('ul', 'List');
export const ListItem = createMockComponent('li', 'ListItem');
export const OrderedList = createMockComponent('ol', 'OrderedList');
export const UnorderedList = createMockComponent('ul', 'UnorderedList');

// Field components
export const Field = {
    Root: createMockComponent('div', 'FieldRoot'),
    Label: createMockComponent('label', 'FieldLabel'),
    RequiredIndicator: createMockComponent('span', 'FieldRequiredIndicator'),
    HelperText: createMockComponent('div', 'FieldHelperText'),
    ErrorText: createMockComponent('div', 'FieldErrorText'),
};

// Hooks
export const useDisclosure = () => ({
    isOpen: false,
    onOpen: jest.fn(),
    onClose: jest.fn(),
    onToggle: jest.fn(),
});

export const useToast = () => ({
    toast: jest.fn(),
});

export const useColorMode = () => ({
    colorMode: 'light',
    toggleColorMode: jest.fn(),
});

export const useBreakpointValue = (values: any) => values?.base || values;

export const useMediaQuery = () => false;

export const useToken = () => '';

export const useStyleConfig = () => ({});

export const useMultiStyleConfig = () => ({});

export const useTheme = () => ({
    colors: {},
    space: {},
    sizes: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borders: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    radii: {},
    breakpoints: {},
    transition: {},
});

// React utilities
export const forwardRef = React.forwardRef;
export const memo = React.memo;
export const createContext = React.createContext;
export const useContext = React.useContext;
export const useState = React.useState;
export const useEffect = React.useEffect;
export const useCallback = React.useCallback;
export const useMemo = React.useMemo;
export const useRef = React.useRef;
export const useImperativeHandle = React.useImperativeHandle;
export const useLayoutEffect = React.useLayoutEffect;
export const useReducer = React.useReducer;
export const useId = React.useId;
export const useDeferredValue = React.useDeferredValue;
export const useTransition = React.useTransition;
export const useSyncExternalStore = React.useSyncExternalStore;
export const useInsertionEffect = React.useInsertionEffect;
export const useDebugValue = React.useDebugValue;
export const use = React.use;
export const startTransition = React.startTransition;
export const createElement = React.createElement;
export const cloneElement = React.cloneElement;
export const isValidElement = React.isValidElement;
export const Children = React.Children;
export const Fragment = React.Fragment;
export const StrictMode = React.StrictMode;
export const Suspense = React.Suspense;
export const Profiler = React.Profiler;
export const lazy = React.lazy;
export const Component = React.Component;
export const PureComponent = React.PureComponent;
export const createRef = React.createRef;
export const version = React.version;
