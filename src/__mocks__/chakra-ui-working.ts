import React from 'react';

const createMockComponent = (tag, displayName) => {
  const Component = React.forwardRef(({ children, as, ...props }, ref) => {
    const ComponentTag = as || tag;
    return React.createElement(ComponentTag, { ref, ...props }, children);
  });
  Component.displayName = displayName;
  return Component;
};

// Create all the components
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
// const Circle = createMockComponent('div', 'Circle'); // Unused, commented out
const List = createMockComponent('ul', 'List');
const ListItem = createMockComponent('li', 'ListItem');
const OrderedList = createMockComponent('ol', 'OrderedList');
const UnorderedList = createMockComponent('ul', 'UnorderedList');

const FieldRoot = createMockComponent('div', 'FieldRoot');
const FieldLabel = createMockComponent('label', 'FieldLabel');
const FieldRequiredIndicator = createMockComponent('span', 'FieldRequiredIndicator');
const FieldHelperText = createMockComponent('div', 'FieldHelperText');
const FieldErrorText = createMockComponent('div', 'FieldErrorText');

const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  RequiredIndicator: FieldRequiredIndicator,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
};

// Mock hooks
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

// Export everything as both default and named exports
const chakraUI = {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Field,
  Flex,
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
  SimpleGrid,
  Spacer,
  Stack,
  Tag,
  Text,
  UnorderedList,
  VStack,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useMediaQuery,
  useMultiStyleConfig,
  useStyleConfig,
  useTheme,
  useToast,
  useToken,
};

// Export as both default and named exports
export default chakraUI;
export const {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Field,
  Flex,
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
  SimpleGrid,
  Spacer,
  Stack,
  Tag,
  Text,
  UnorderedList,
  VStack,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useMediaQuery,
  useMultiStyleConfig,
  useStyleConfig,
  useTheme,
  useToast,
  useToken,
} = chakraUI;
