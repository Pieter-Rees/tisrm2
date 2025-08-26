import React from 'react';

interface MockProps {
  children?: React.ReactNode;
  as?: string;
  role?: string;
  [key: string]: unknown;
}

// Ensure all components are properly exported and available

const createMockComponent = (tag: string, displayName: string) => {
  const Component = React.forwardRef<HTMLElement, MockProps>((props: MockProps, ref) => {
    const {
      children,
      as,
      asChild,
      // Note: These Chakra-specific props are extracted but not used in basic mock
      // variant,
      // size,
      // spacing,
      // gap,
      // alignItems,
      // justifyContent,
      // direction,
      // bg,
      // backgroundColor,
      // color,
      // p,
      // m,
      // px,
      // py,
      // mx,
      // my,
      // w,
      // h,
      // width,
      // height,
      // maxW,
      // maxH,
      // minW,
      // minH,
      // borderRadius,
      // boxShadow,
      // border,
      // borderColor,
      // borderWidth,
      // borderStyle,
      // position,
      // top,
      // left,
      // right,
      // bottom,
      // zIndex,
      // display,
      // visibility,
      // overflow,
      // transform,
      // transition,
      // fontSize,
      // fontWeight,
      // lineHeight,
      // textAlign,
      // cursor,
      // hideFrom,
      // showFrom,
      // hideBelow,
      // showBelow,
      // _hover,
      // _focus,
      // _active,
      // _disabled,
      ...rest
    } = props;
    const Element = as || tag;

    if (asChild && React.Children.count(children) === 1) {
      const child = React.Children.only(children) as React.ReactElement<Record<string, unknown>>;
      return React.cloneElement(child, {
        ...rest,
        ...(child.props || {}),
        role: (child.props as Record<string, unknown>)?.role || (tag === 'button' ? 'button' : undefined),
      } as Record<string, unknown>);
    }

    // Filter out Chakra-specific props and only pass valid HTML attributes
    const validHtmlProps = Object.keys(rest).reduce((acc, key) => {
      // Only include standard HTML attributes or data-* attributes
      if (
        key.startsWith('data-') ||
        key.startsWith('aria-') ||
        ['id', 'className', 'style', 'onClick', 'onSubmit', 'type', 'value', 'onChange', 'placeholder', 'disabled', 'required', 'name', 'role', 'tabIndex', 'href', 'target', 'rel', 'src', 'alt'].includes(key)
      ) {
        acc[key] = rest[key];
      }
      return acc;
    }, {} as Record<string, unknown>);

    return React.createElement(
      Element,
      {
        ref,
        role: tag === 'button' ? 'button' : undefined,
        ...validHtmlProps,
      },
      children,
    );
  });
  Component.displayName = displayName;
  return Component;
};

const Box = createMockComponent('div', 'Box');
const Button = createMockComponent('button', 'Button');
const Text = createMockComponent('p', 'Text');
const Heading = createMockComponent('h3', 'Heading');
const HStack = createMockComponent('div', 'HStack');
const VStack = createMockComponent('div', 'VStack');
const Container = createMockComponent('div', 'Container');
const Badge = createMockComponent('span', 'Badge');
const Link = createMockComponent('a', 'Link');
const Image = createMockComponent('img', 'Image');
const Input = createMockComponent('input', 'Input');
const Flex = createMockComponent('div', 'Flex');
const SimpleGrid = createMockComponent('div', 'SimpleGrid');
const Stack = createMockComponent('div', 'Stack');
const Grid = createMockComponent('div', 'Grid');
const GridItem = createMockComponent('div', 'GridItem');
const Center = createMockComponent('div', 'Center');
const Spacer = createMockComponent('div', 'Spacer');
const Divider = createMockComponent('hr', 'Divider');
const Icon = createMockComponent('span', 'Icon');
const Tag = createMockComponent('span', 'Tag');
const Circle = createMockComponent('div', 'Circle');
const List = createMockComponent('ul', 'List');
const ListItem = createMockComponent('li', 'ListItem');
const OrderedList = createMockComponent('ol', 'OrderedList');
const UnorderedList = createMockComponent('ul', 'UnorderedList');

export const Field = {
  Root: createMockComponent('div', 'FieldRoot'),
  Label: createMockComponent('label', 'FieldLabel'),
  RequiredIndicator: createMockComponent('span', 'FieldRequiredIndicator'),
  HelperText: createMockComponent('div', 'FieldHelperText'),
  ErrorText: createMockComponent('div', 'FieldErrorText'),
};

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

export const useBreakpointValue = (values: Record<string, unknown>) => values?.base || values;

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

// Default export for the entire module
export default {
  Box,
  Button,
  Text,
  Heading,
  HStack,
  VStack,
  Container,
  Badge,
  Link,
  Image,
  Input,
  Flex,
  SimpleGrid,
  Stack,
  Grid,
  GridItem,
  Center,
  Spacer,
  Divider,
  Icon,
  Tag,
  Circle,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
  Field,
  useDisclosure,
  useToast,
  useColorMode,
  useBreakpointValue,
  useMediaQuery,
  useToken,
  useStyleConfig,
  useMultiStyleConfig,
  useTheme,
  forwardRef,
  memo,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useReducer,
  useId,
  useDeferredValue,
  useTransition,
  useSyncExternalStore,
  useInsertionEffect,
  useDebugValue,
  use,
  startTransition,
  createElement,
  cloneElement,
  isValidElement,
  Children,
  Fragment,
  StrictMode,
  Suspense,
  Profiler,
  lazy,
  Component,
  PureComponent,
  createRef,
  version,
};
