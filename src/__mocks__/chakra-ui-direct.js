const React = require('react');

// Create simple mock components that Jest can properly recognize
const Box = (props) => React.createElement('div', props, props.children);
const HStack = (props) => React.createElement('div', props, props.children);
const VStack = (props) => React.createElement('div', props, props.children);
const Text = (props) => React.createElement('span', props, props.children);
const Button = (props) => React.createElement('button', props, props.children);
const Heading = (props) => React.createElement('h3', props, props.children);
const Container = (props) => React.createElement('div', props, props.children);
const Badge = (props) => React.createElement('span', props, props.children);
const Link = (props) => React.createElement('a', props, props.children);
const Image = (props) => React.createElement('img', props);
const Input = (props) => React.createElement('input', props);
const Flex = (props) => React.createElement('div', props, props.children);
const SimpleGrid = (props) => React.createElement('div', props, props.children);
const Stack = (props) => React.createElement('div', props, props.children);
const Grid = (props) => React.createElement('div', props, props.children);
const GridItem = (props) => React.createElement('div', props, props.children);
const Center = (props) => React.createElement('div', props, props.children);
const Spacer = (props) => React.createElement('div', props);
const Divider = (props) => React.createElement('hr', props);
const Icon = (props) => React.createElement('span', props, props.children);
const Tag = (props) => React.createElement('span', props, props.children);
const Circle = (props) => React.createElement('div', props, props.children);
const List = (props) => React.createElement('ul', props, props.children);
const ListItem = (props) => React.createElement('li', props, props.children);
const OrderedList = (props) => React.createElement('ol', props, props.children);
const UnorderedList = (props) => React.createElement('ul', props, props.children);

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

// Export everything
module.exports = {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
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
