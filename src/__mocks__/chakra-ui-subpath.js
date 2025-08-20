// Mock for Chakra UI subpath imports (e.g., @chakra-ui/react/Box)
// This handles the Next.js modularizeImports transformation

const React = require('react');

// List of Chakra UI style props that should be filtered out
const CHAKRA_STYLE_PROPS = [
  // Layout props
  'display', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight',
  'overflow', 'overflowX', 'overflowY', 'verticalAlign', 'boxSizing',
  
  // Color props
  'color', 'backgroundColor', 'bg', 'bgColor', 'opacity',
  
  // Typography props
  'fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing',
  'textAlign', 'textDecoration', 'textTransform', 'textOverflow', 'whiteSpace',
  
  // Space props
  'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
  'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
  'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
  
  // Flexbox props
  'alignItems', 'alignContent', 'justifyItems', 'justifyContent', 'flexWrap',
  'flexDirection', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'justifySelf',
  'alignSelf', 'order',
  
  // Grid props
  'gridTemplateColumns', 'gridTemplateRows', 'gridTemplateAreas', 'gridArea',
  'gridColumn', 'gridRow', 'gridAutoFlow', 'gridAutoColumns', 'gridAutoRows',
  'gap', 'rowGap', 'columnGap',
  
  // Border props
  'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft',
  'borderWidth', 'borderStyle', 'borderColor', 'borderRadius',
  
  // Position props
  'position', 'zIndex', 'top', 'right', 'bottom', 'left',
  
  // Other common props
  'spacing', 'listStyleType', 'boxShadow', 'transform', 'transition',
];

// Create a generic mock component for subpath imports
const MockComponent = React.forwardRef(({ children, as, ...props }, ref) => {
  const Component = as || 'div';
  
  // Filter out Chakra UI style props that aren't valid DOM attributes
  const validDOMProps = {};
  for (const [key, value] of Object.entries(props)) {
    if (!CHAKRA_STYLE_PROPS.includes(key)) {
      validDOMProps[key] = value;
    }
  }
  
  return React.createElement(Component, { ref, ...validDOMProps }, children);
});
MockComponent.displayName = 'MockChakraComponent';

// Export as default (this is what gets imported from subpaths)
module.exports = MockComponent;
module.exports.default = MockComponent;
