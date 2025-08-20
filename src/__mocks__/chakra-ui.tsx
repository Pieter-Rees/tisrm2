import React from 'react';

// Mock Chakra UI v3 components with proper TypeScript support
export const Box = React.forwardRef<HTMLDivElement, any>(({ children, as, ...props }, ref) => {
  const Component = as || 'div';
  return <Component ref={ref} {...props}>{children}</Component>;
});
Box.displayName = 'Box';

export const Button = React.forwardRef<HTMLButtonElement, any>(({ children, asChild, ...props }, ref) => {
  if (asChild) {
    return <div {...props}>{children}</div>;
  }
  return <button ref={ref} {...props}>{children}</button>;
});
Button.displayName = 'Button';

export const Heading = React.forwardRef<HTMLHeadingElement, any>(({ children, as, ...props }, ref) => {
  const Component = as || 'h3';
  return <Component ref={ref} {...props}>{children}</Component>;
});
Heading.displayName = 'Heading';

export const Text = React.forwardRef<HTMLParagraphElement, any>(({ children, ...props }, ref) => (
  <p ref={ref} {...props}>{children}</p>
));
Text.displayName = 'Text';

export const Flex = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Flex.displayName = 'Flex';

export const HStack = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
HStack.displayName = 'HStack';

export const VStack = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
VStack.displayName = 'VStack';

export const SimpleGrid = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
SimpleGrid.displayName = 'SimpleGrid';

export const Stack = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Stack.displayName = 'Stack';

export const Container = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Container.displayName = 'Container';

export const Grid = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Grid.displayName = 'Grid';

export const GridItem = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
GridItem.displayName = 'GridItem';

export const Center = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Center.displayName = 'Center';

export const Spacer = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
Spacer.displayName = 'Spacer';

export const Divider = React.forwardRef<HTMLHRElement, any>((props, ref) => (
  <hr ref={ref} {...props} />
));
Divider.displayName = 'Divider';

export const Link = React.forwardRef<HTMLAnchorElement, any>(({ children, ...props }, ref) => (
  <a ref={ref} {...props}>{children}</a>
));
Link.displayName = 'Link';

export const Icon = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
Icon.displayName = 'Icon';

export const Badge = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
Badge.displayName = 'Badge';

export const Tag = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
Tag.displayName = 'Tag';

export const Avatar = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Avatar.displayName = 'Avatar';

export const AvatarGroup = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
AvatarGroup.displayName = 'AvatarGroup';

export const AvatarBadge = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
AvatarBadge.displayName = 'AvatarBadge';

export const AvatarImage = React.forwardRef<HTMLImageElement, any>((props, ref) => (
  <img ref={ref} {...props} />
));
AvatarImage.displayName = 'AvatarImage';

export const AvatarFallback = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
AvatarFallback.displayName = 'AvatarFallback';

// Mock Field components (Chakra UI v3 pattern)
const FieldRoot = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
FieldRoot.displayName = 'FieldRoot';

const FieldLabel = React.forwardRef<HTMLLabelElement, any>(({ children, ...props }, ref) => (
  <label ref={ref} {...props}>{children}</label>
));
FieldLabel.displayName = 'FieldLabel';

const FieldRequiredIndicator = React.forwardRef<HTMLSpanElement, any>((props, ref) => (
  <span ref={ref} data-required {...props}>*</span>
));
FieldRequiredIndicator.displayName = 'FieldRequiredIndicator';

const FieldHelperText = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} data-helper-text {...props}>{children}</div>
));
FieldHelperText.displayName = 'FieldHelperText';

const FieldErrorText = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} data-error-text {...props}>{children}</div>
));
FieldErrorText.displayName = 'FieldErrorText';

// Export Field as both a named export and as an object with subcomponents
export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  RequiredIndicator: FieldRequiredIndicator,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
};

// Mock form components
export const FormControl = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
FormControl.displayName = 'FormControl';

export const FormLabel = React.forwardRef<HTMLLabelElement, any>(({ children, ...props }, ref) => (
  <label ref={ref} {...props}>{children}</label>
));
FormLabel.displayName = 'FormLabel';

export const FormHelperText = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
FormHelperText.displayName = 'FormHelperText';

export const FormErrorMessage = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
FormErrorMessage.displayName = 'FormErrorMessage';

export const Input = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <input ref={ref} {...props} />
));
Input.displayName = 'Input';

export const Textarea = React.forwardRef<HTMLTextAreaElement, any>(({ children, ...props }, ref) => (
  <textarea ref={ref} {...props}>{children}</textarea>
));
Textarea.displayName = 'Textarea';

export const Select = React.forwardRef<HTMLSelectElement, any>(({ children, ...props }, ref) => (
  <select ref={ref} {...props}>{children}</select>
));
Select.displayName = 'Select';

export const Checkbox = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <input type="checkbox" ref={ref} {...props} />
));
Checkbox.displayName = 'Checkbox';

export const Radio = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <input type="radio" ref={ref} {...props} />
));
Radio.displayName = 'Radio';

export const Switch = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <input type="checkbox" ref={ref} {...props} />
));
Switch.displayName = 'Switch';

export const Progress = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
Progress.displayName = 'Progress';

export const CircularProgress = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
CircularProgress.displayName = 'CircularProgress';

export const Skeleton = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
Skeleton.displayName = 'Skeleton';

export const SkeletonText = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
SkeletonText.displayName = 'SkeletonText';

export const SkeletonCircle = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
SkeletonCircle.displayName = 'SkeletonCircle';

export const Alert = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} role="alert" {...props}>{children}</div>
));
Alert.displayName = 'Alert';

export const AlertIcon = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
AlertIcon.displayName = 'AlertIcon';

export const AlertTitle = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
AlertDescription.displayName = 'AlertDescription';

export const Modal = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Modal.displayName = 'Modal';

export const ModalOverlay = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
ModalOverlay.displayName = 'ModalOverlay';

export const ModalContent = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
ModalContent.displayName = 'ModalContent';

export const ModalHeader = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
ModalHeader.displayName = 'ModalHeader';

export const ModalBody = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
ModalBody.displayName = 'ModalBody';

export const ModalFooter = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
ModalFooter.displayName = 'ModalFooter';

export const ModalCloseButton = React.forwardRef<HTMLButtonElement, any>((props, ref) => (
  <button ref={ref} {...props} />
));
ModalCloseButton.displayName = 'ModalCloseButton';

export const Drawer = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Drawer.displayName = 'Drawer';

export const DrawerOverlay = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
DrawerOverlay.displayName = 'DrawerOverlay';

export const DrawerContent = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
DrawerContent.displayName = 'DrawerContent';

export const DrawerHeader = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
DrawerHeader.displayName = 'DrawerHeader';

export const DrawerBody = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
DrawerBody.displayName = 'DrawerBody';

export const DrawerFooter = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
DrawerFooter.displayName = 'DrawerFooter';

export const DrawerCloseButton = React.forwardRef<HTMLButtonElement, any>((props, ref) => (
  <button ref={ref} {...props} />
));
DrawerCloseButton.displayName = 'DrawerCloseButton';

export const Tooltip = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Tooltip.displayName = 'Tooltip';

export const Popover = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Popover.displayName = 'Popover';

export const PopoverTrigger = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
PopoverTrigger.displayName = 'PopoverTrigger';

export const PopoverContent = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
PopoverContent.displayName = 'PopoverContent';

export const PopoverHeader = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
PopoverHeader.displayName = 'PopoverHeader';

export const PopoverBody = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
PopoverBody.displayName = 'PopoverBody';

export const PopoverFooter = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
PopoverFooter.displayName = 'PopoverFooter';

export const PopoverArrow = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...props} />
));
PopoverArrow.displayName = 'PopoverArrow';

export const PopoverCloseButton = React.forwardRef<HTMLButtonElement, any>((props, ref) => (
  <button ref={ref} {...props} />
));
PopoverCloseButton.displayName = 'PopoverCloseButton';

export const Menu = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Menu.displayName = 'Menu';

export const MenuButton = React.forwardRef<HTMLButtonElement, any>(({ children, ...props }, ref) => (
  <button ref={ref} {...props}>{children}</button>
));
MenuButton.displayName = 'MenuButton';

export const MenuList = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
MenuList.displayName = 'MenuList';

export const MenuItem = React.forwardRef<HTMLButtonElement, any>(({ children, ...props }, ref) => (
  <button ref={ref} {...props}>{children}</button>
));
MenuItem.displayName = 'MenuItem';

export const MenuDivider = React.forwardRef<HTMLHRElement, any>((props, ref) => (
  <hr ref={ref} {...props} />
));
MenuDivider.displayName = 'MenuDivider';

export const MenuGroup = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
MenuGroup.displayName = 'MenuGroup';

export const MenuGroupTitle = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
MenuGroupTitle.displayName = 'MenuGroupTitle';

export const Tabs = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Tabs.displayName = 'Tabs';

export const TabList = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
TabList.displayName = 'TabList';

export const Tab = React.forwardRef<HTMLButtonElement, any>(({ children, ...props }, ref) => (
  <button ref={ref} {...props}>{children}</button>
));
Tab.displayName = 'Tab';

export const TabPanels = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
TabPanels.displayName = 'TabPanels';

export const TabPanel = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
TabPanel.displayName = 'TabPanel';

export const Accordion = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Accordion.displayName = 'Accordion';

export const AccordionItem = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
AccordionItem.displayName = 'AccordionItem';

export const AccordionButton = React.forwardRef<HTMLButtonElement, any>(({ children, ...props }, ref) => (
  <button ref={ref} {...props}>{children}</button>
));
AccordionButton.displayName = 'AccordionButton';

export const AccordionPanel = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
AccordionPanel.displayName = 'AccordionPanel';

export const AccordionIcon = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
AccordionIcon.displayName = 'AccordionIcon';

export const Breadcrumb = React.forwardRef<HTMLElement, any>(({ children, ...props }, ref) => (
  <nav ref={ref} {...props}>{children}</nav>
));
Breadcrumb.displayName = 'Breadcrumb';

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, any>(({ children, ...props }, ref) => (
  <li ref={ref} {...props}>{children}</li>
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, any>(({ children, ...props }, ref) => (
  <a ref={ref} {...props}>{children}</a>
));
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbSeparator = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export const Stat = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
Stat.displayName = 'Stat';

export const StatLabel = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
StatLabel.displayName = 'StatLabel';

export const StatNumber = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
StatNumber.displayName = 'StatNumber';

export const StatHelpText = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
StatHelpText.displayName = 'StatHelpText';

export const StatArrow = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
StatArrow.displayName = 'StatArrow';

export const StatGroup = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>{children}</div>
));
StatGroup.displayName = 'StatGroup';

export const Table = React.forwardRef<HTMLTableElement, any>(({ children, ...props }, ref) => (
  <table ref={ref} {...props}>{children}</table>
));
Table.displayName = 'Table';

export const Thead = React.forwardRef<HTMLTableSectionElement, any>(({ children, ...props }, ref) => (
  <thead ref={ref} {...props}>{children}</thead>
));
Thead.displayName = 'Thead';

export const Tbody = React.forwardRef<HTMLTableSectionElement, any>(({ children, ...props }, ref) => (
  <tbody ref={ref} {...props}>{children}</tbody>
));
Tbody.displayName = 'Tbody';

export const Tfoot = React.forwardRef<HTMLTableSectionElement, any>(({ children, ...props }, ref) => (
  <tfoot ref={ref} {...props}>{children}</tfoot>
));
Tfoot.displayName = 'Tfoot';

export const Tr = React.forwardRef<HTMLTableRowElement, any>(({ children, ...props }, ref) => (
  <tr ref={ref} {...props}>{children}</tr>
));
Tr.displayName = 'Tr';

export const Th = React.forwardRef<HTMLTableCellElement, any>(({ children, ...props }, ref) => (
  <th ref={ref} {...props}>{children}</th>
));
Th.displayName = 'Th';

export const Td = React.forwardRef<HTMLTableCellElement, any>(({ children, ...props }, ref) => (
  <td ref={ref} {...props}>{children}</td>
));
Td.displayName = 'Td';

export const Caption = React.forwardRef<HTMLTableCaptionElement, any>(({ children, ...props }, ref) => (
  <caption ref={ref} {...props}>{children}</caption>
));
Caption.displayName = 'Caption';

export const List = React.forwardRef<HTMLUListElement, any>(({ children, ...props }, ref) => (
  <ul ref={ref} {...props}>{children}</ul>
));
List.displayName = 'List';

export const ListItem = React.forwardRef<HTMLLIElement, any>(({ children, ...props }, ref) => (
  <li ref={ref} {...props}>{children}</li>
));
ListItem.displayName = 'ListItem';

export const OrderedList = React.forwardRef<HTMLOListElement, any>(({ children, ...props }, ref) => (
  <ol ref={ref} {...props}>{children}</ol>
));
OrderedList.displayName = 'OrderedList';

export const UnorderedList = React.forwardRef<HTMLUListElement, any>(({ children, ...props }, ref) => (
  <ul ref={ref} {...props}>{children}</ul>
));
UnorderedList.displayName = 'UnorderedList';

export const ListIcon = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
ListIcon.displayName = 'ListIcon';

export const Code = React.forwardRef<HTMLElement, any>(({ children, ...props }, ref) => (
  <code ref={ref} {...props}>{children}</code>
));
Code.displayName = 'Code';

export const Kbd = React.forwardRef<HTMLElement, any>(({ children, ...props }, ref) => (
  <kbd ref={ref} {...props}>{children}</kbd>
));
Kbd.displayName = 'Kbd';

export const Highlight = React.forwardRef<HTMLElement, any>(({ children, ...props }, ref) => (
  <mark ref={ref} {...props}>{children}</mark>
));
Highlight.displayName = 'Highlight';

export const Sub = React.forwardRef<HTMLElement, any>(({ children, ...props }, ref) => (
  <sub ref={ref} {...props}>{children}</sub>
));
Sub.displayName = 'Sub';

export const Sup = React.forwardRef<HTMLElement, any>(({ children, ...props }, ref) => (
  <sup ref={ref} {...props}>{children}</sup>
));
Sup.displayName = 'Sup';

export const VisuallyHidden = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
VisuallyHidden.displayName = 'VisuallyHidden';

export const Portal = ({ children }: any) => children;

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
  setColorMode: jest.fn(),
  toggleColorMode: jest.fn(),
});

export const useColorModeValue = (light: any, dark: any) => light;

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

export const createIcon = (icon: any) => icon;

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

// export const flushSync = React.flushSync; // Not available in React 19

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

// No default export needed for named imports
