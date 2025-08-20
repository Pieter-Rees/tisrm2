import React from 'react';

// Simple working mock for Chakra UI components
const Box = React.forwardRef(({ children, as, ...props }, ref) => {
  const Component = as || 'div';
  return React.createElement(Component, { ref, ...props }, children);
});
Box.displayName = 'Box';

const Button = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('button', { ref, ...props }, children);
});
Button.displayName = 'Button';

const Text = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('p', { ref, ...props }, children);
});
Text.displayName = 'Text';

const Heading = React.forwardRef(({ children, as, ...props }, ref) => {
  const Component = as || 'h3';
  return React.createElement(Component, { ref, ...props }, children);
});
Heading.displayName = 'Heading';

const HStack = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
HStack.displayName = 'HStack';

const VStack = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
VStack.displayName = 'VStack';

const Container = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
Container.displayName = 'Container';

const Badge = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('span', { ref, ...props }, children);
});
Badge.displayName = 'Badge';

const Link = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('a', { ref, ...props }, children);
});
Link.displayName = 'Link';

const Image = React.forwardRef(({ ...props }, ref) => {
  return React.createElement('img', { ref, ...props });
});
Image.displayName = 'Image';

const Input = React.forwardRef(({ ...props }, ref) => {
  return React.createElement('input', { ref, ...props });
});
Input.displayName = 'Input';

const Flex = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
Flex.displayName = 'Flex';

const SimpleGrid = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
SimpleGrid.displayName = 'SimpleGrid';

const Stack = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
Stack.displayName = 'Stack';

const Grid = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
Grid.displayName = 'Grid';

const GridItem = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
GridItem.displayName = 'GridItem';

const Center = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
Center.displayName = 'Center';

const Spacer = React.forwardRef((props, ref) => {
  return React.createElement('div', { ref, ...props });
});
Spacer.displayName = 'Spacer';

const Divider = React.forwardRef((props, ref) => {
  return React.createElement('hr', { ref, ...props });
});
Divider.displayName = 'Divider';

const Icon = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('span', { ref, ...props }, children);
});
Icon.displayName = 'Icon';

const Tag = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('span', { ref, ...props }, children);
});
Tag.displayName = 'Tag';

const List = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('ul', { ref, ...props }, children);
});
List.displayName = 'List';

const ListItem = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('li', { ref, ...props }, children);
});
ListItem.displayName = 'ListItem';

const OrderedList = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('ol', { ref, ...props }, children);
});
OrderedList.displayName = 'OrderedList';

const UnorderedList = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('ul', { ref, ...props }, children);
});
UnorderedList.displayName = 'UnorderedList';

// Field components
const FieldRoot = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
FieldRoot.displayName = 'FieldRoot';

const FieldLabel = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('label', { ref, ...props }, children);
});
FieldLabel.displayName = 'FieldLabel';

const FieldRequiredIndicator = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('span', { ref, ...props }, children);
});
FieldRequiredIndicator.displayName = 'FieldRequiredIndicator';

const FieldHelperText = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
FieldHelperText.displayName = 'FieldHelperText';

const FieldErrorText = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
FieldErrorText.displayName = 'FieldErrorText';

const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  RequiredIndicator: FieldRequiredIndicator,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
};

// Hooks
const useDisclosure = () => ({
  isOpen: false,
  onOpen: jest.fn(),
  onClose: jest.fn(),
  onToggle: jest.fn(),
});

const useToast = () => ({
  toast: jest.fn(),
});

const useColorMode = () => ({
  colorMode: 'light',
  toggleColorMode: jest.fn(),
});

const useBreakpointValue = (values) => values?.base || values;

const useMediaQuery = () => false;

const useToken = () => '';

const useStyleConfig = () => ({});

const useMultiStyleConfig = () => ({});

const useTheme = () => ({
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
const forwardRef = React.forwardRef;
const memo = React.memo;
const createContext = React.createContext;
const useContext = React.useContext;
const useState = React.useState;
const useEffect = React.useEffect;
const useCallback = React.useCallback;
const useMemo = React.useMemo;
const useRef = React.useRef;
const useImperativeHandle = React.useImperativeHandle;
const useLayoutEffect = React.useLayoutEffect;
const useReducer = React.useReducer;
const useId = React.useId;
const useDeferredValue = React.useDeferredValue;
const useTransition = React.useTransition;
const useSyncExternalStore = React.useSyncExternalStore;
const useInsertionEffect = React.useInsertionEffect;
const useDebugValue = React.useDebugValue;
const use = React.use;
const startTransition = React.startTransition;
const createElement = React.createElement;
const cloneElement = React.cloneElement;
const isValidElement = React.isValidElement;
const Children = React.Children;
const Fragment = React.Fragment;
const StrictMode = React.StrictMode;
const Suspense = React.Suspense;
const Profiler = React.Profiler;
const lazy = React.lazy;
const Component = React.Component;
const PureComponent = React.PureComponent;
const createRef = React.createRef;
const version = React.version;

// Export everything
export {
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
