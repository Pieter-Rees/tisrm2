const React = require('react');

const DOM_PROP_ALLOWLIST = new Set([
  'id',
  'className',
  'style',
  'role',
  'tabIndex',
  'title',
  'href',
  'src',
  'alt',
  'type',
  'name',
  'value',
  'placeholder',
  'disabled',
  'checked',
  'readOnly',
  'required',
  'target',
  'rel',
  'download',
  'children',
]);

function isDomSafeProp(key) {
  return (
    DOM_PROP_ALLOWLIST.has(key) ||
    key.startsWith('data-') ||
    key.startsWith('aria-') ||
    key.startsWith('on')
  );
}

function filterDomProps(props) {
  const next = {};
  for (const [key, value] of Object.entries(props)) {
    if (isDomSafeProp(key)) {
      next[key] = value;
    }
  }
  return next;
}

function createChakraMock(displayName, defaultTag = 'div') {
  const Component = React.forwardRef(
    ({ as, asChild, children, ...props }, ref) => {
      const domProps = filterDomProps(props);

      if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
          ...domProps,
          ref,
        });
      }

      const Tag = as || defaultTag;
      return React.createElement(Tag, { ref, ...domProps }, children);
    },
  );
  Component.displayName = displayName;
  return Component;
}

const Box = createChakraMock('Box');
const Flex = createChakraMock('Flex');
const Grid = createChakraMock('Grid');
const GridItem = createChakraMock('GridItem');
const Heading = createChakraMock('Heading', 'h2');
const Text = createChakraMock('Text', 'p');
const Button = createChakraMock('Button', 'button');
const Link = createChakraMock('Link', 'a');
const Image = createChakraMock('Image', 'img');
const Separator = createChakraMock('Separator', 'hr');
const Span = createChakraMock('Span', 'span');
const Stack = createChakraMock('Stack');
const HStack = createChakraMock('HStack');
const VStack = createChakraMock('VStack');
const Container = createChakraMock('Container');
const SimpleGrid = createChakraMock('SimpleGrid');

module.exports = {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Separator,
  Span,
  Stack,
  HStack,
  VStack,
  Container,
  SimpleGrid,
  createChakraMock,
};
