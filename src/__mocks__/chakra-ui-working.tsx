import React from 'react';

interface MockProps {
  children?: React.ReactNode;
  as?: string;
  [key: string]: any;
}

const Box = React.forwardRef<HTMLDivElement, MockProps>(({ children, as, ...props }, ref) => {
  const Component = as || 'div';
  return React.createElement(Component, { ref, ...props }, children);
});

Box.displayName = 'Box';

const Button = React.forwardRef<HTMLButtonElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('button', { ref, ...props }, children);
});

Button.displayName = 'Button';

const Text = React.forwardRef<HTMLParagraphElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('p', { ref, ...props }, children);
});

Text.displayName = 'Text';

const Heading = React.forwardRef<HTMLHeadingElement, MockProps>(({ children, as, ...props }, ref) => {
  const Component = as || 'h3';
  return React.createElement(Component, { ref, ...props }, children);
});

Heading.displayName = 'Heading';

const HStack = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

HStack.displayName = 'HStack';

const VStack = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

VStack.displayName = 'VStack';

const Container = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

Container.displayName = 'Container';

const Badge = React.forwardRef<HTMLSpanElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('span', { ref, ...props }, children);
});

Badge.displayName = 'Badge';

const Link = React.forwardRef<HTMLAnchorElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('a', { ref, ...props }, children);
});

Link.displayName = 'Link';

const Image = React.forwardRef<HTMLImageElement, MockProps>(({ ...props }, ref) => {
  return React.createElement('img', { ref, ...props });
});

Image.displayName = 'Image';

const Input = React.forwardRef<HTMLInputElement, MockProps>(({ ...props }, ref) => {
  return React.createElement('input', { ref, ...props });
});

Input.displayName = 'Input';

const Flex = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

Flex.displayName = 'Flex';

const SimpleGrid = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

SimpleGrid.displayName = 'SimpleGrid';

const Stack = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

Stack.displayName = 'Stack';

const Grid = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

Grid.displayName = 'Grid';

const GridItem = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

GridItem.displayName = 'GridItem';

const Center = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

Center.displayName = 'Center';

const Spacer = React.forwardRef<HTMLDivElement, MockProps>((props, ref) => {
  return React.createElement('div', { ref, ...props });
});

Spacer.displayName = 'Spacer';

const Divider = React.forwardRef<HTMLHRElement, MockProps>((props, ref) => {
  return React.createElement('hr', { ref, ...props });
});

Divider.displayName = 'Divider';

const Icon = React.forwardRef<HTMLSpanElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('span', { ref, ...props }, children);
});

Icon.displayName = 'Icon';

const Tag = React.forwardRef<HTMLSpanElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('span', { ref, ...props }, children);
});

Tag.displayName = 'Tag';

const Circle = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

Circle.displayName = 'Circle';

const List = React.forwardRef<HTMLUListElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('ul', { ref, ...props }, children);
});

List.displayName = 'List';

const ListItem = React.forwardRef<HTMLLIElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('li', { ref, ...props }, children);
});

ListItem.displayName = 'ListItem';

const OrderedList = React.forwardRef<HTMLOListElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('ol', { ref, ...props }, children);
});

OrderedList.displayName = 'OrderedList';

const UnorderedList = React.forwardRef<HTMLUListElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('ul', { ref, ...props }, children);
});

UnorderedList.displayName = 'UnorderedList';

const FieldRoot = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

FieldRoot.displayName = 'FieldRoot';

const FieldLabel = React.forwardRef<HTMLLabelElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('label', { ref, ...props }, children);
});

FieldLabel.displayName = 'FieldLabel';

const FieldRequiredIndicator = React.forwardRef<HTMLSpanElement, MockProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('span', { ref, ...props }, children);
  },
);

FieldRequiredIndicator.displayName = 'FieldRequiredIndicator';

const FieldHelperText = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

FieldHelperText.displayName = 'FieldHelperText';

const FieldErrorText = React.forwardRef<HTMLDivElement, MockProps>(({ children, ...props }, ref) => {
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

const useBreakpointValue = (values: any) => values?.base || values;

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
const forwardRef = React.forwardRef;
const memo = React.memo;
const createContext = React.createContext;
const useContext = React.useContext;
const useState = React.useState;
const useEffect = React.useEffect;

export {
  Badge,
  Box,
  Button,
  Center,
  Children,
  Component,
  Container,
  Divider,
  Field,
  Flex,
  Fragment,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  List,
  ListItem,
  OrderedList,
  Profiler,
  PureComponent,
  SimpleGrid,
  Spacer,
  Stack,
  StrictMode,
  Suspense,
  Tag,
  Text,
  UnorderedList,
  VStack,
  cloneElement,
  createContext,
  createElement,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  use,
  useBreakpointValue,
  useCallback,
  useColorMode,
  useContext,
  useDebugValue,
  useDeferredValue,
  useDisclosure,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMediaQuery,
  useMemo,
  useMultiStyleConfig,
  useReducer,
  useRef,
  useState,
  useStyleConfig,
  useSyncExternalStore,
  useTheme,
  useToast,
  useToken,
  useTransition,
  version,
};
