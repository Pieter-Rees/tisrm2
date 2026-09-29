import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        navy: {
            500: '#14304F',
            700: '#0B1F3A',
            800: '#081628',
            900: '#050E1A',
        },
        stone: {
            100: '#F7F5F2',
            200: '#E8E4DE',
            300: '#D4CFC6',
            500: '#9A948A',
            700: '#5C574F',
        },
        gold: {
            400: '#C4A574',
            500: '#B08D5B',
        },
        blue: {
            500: '#14304F',
            700: '#0B1F3A',
            800: '#081628',
            900: '#050E1A',
        },
        gray: {
            100: '#F7F5F2',
            200: '#E8E4DE',
            300: '#D4CFC6',
            500: '#9A948A',
            600: '#7A756C',
            700: '#2C2A26',
            800: '#1A1916',
            900: '#0F0E0C',
        },
    },
    fonts: {
        heading: 'var(--font-fraunces), Georgia, serif',
        body: 'var(--font-manrope), "Helvetica Neue", sans-serif',
    },
    fontSizes: {
        xs: '0.8125rem',
        sm: '0.9375rem',
        md: '1.0625rem',
        lg: '1.1875rem',
        xl: '1.375rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '2.875rem',
        '5xl': '3.75rem',
        '6xl': '4.75rem',
        '7xl': '6rem',
    },
    styles: {
        global: {
            'html, body': {
                scrollBehavior: 'smooth',
            },
            html: {
                scrollPaddingTop: '6rem',
            },
            body: {
                bg: 'stone.100',
                color: 'gray.800',
                fontSize: 'lg',
                lineHeight: '1.65',
            },
            '::selection': {
                bg: 'gold.400',
                color: 'navy.900',
            },
            '@media (prefers-reduced-motion: reduce)': {
                '*, *::before, *::after': {
                    animationDuration: '0.01ms !important',
                    animationIterationCount: '1 !important',
                    transitionDuration: '0.01ms !important',
                },
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: '0',
                fontWeight: '600',
                letterSpacing: '0.01em',
                textTransform: 'none',
                transition: 'background 0.25s ease, color 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
                _active: {
                    transform: 'translateY(1px)',
                },
            },
            defaultProps: {
                size: 'lg',
            },
            sizes: {
                full: {
                    height: 'full',
                },
                sm: {
                    h: '42px',
                    px: '18px',
                    fontSize: 'md',
                },
                md: {
                    h: '48px',
                    px: '22px',
                    fontSize: 'md',
                },
                lg: {
                    h: '54px',
                    px: '28px',
                    fontSize: 'lg',
                },
                xl: {
                    fontSize: 'xl',
                    h: '60px',
                    px: '32px',
                },
            },
            variants: {
                blue: {
                    bg: 'navy.700',
                    color: 'white',
                    _hover: {
                        bg: 'navy.500',
                        transform: 'translateY(-1px)',
                    },
                },
                ghost: {
                    bg: 'transparent',
                    color: 'navy.700',
                    borderBottom: '1px solid',
                    borderColor: 'gold.400',
                    borderRadius: '0',
                    px: '0',
                    pb: '1',
                    height: 'auto',
                    minH: 'unset',
                    _hover: {
                        bg: 'transparent',
                        color: 'gold.500',
                        borderColor: 'gold.500',
                        transform: 'translateX(4px)',
                    },
                },
                link: {
                    _active: {
                        color: 'white',
                    },
                    _hover: {
                        textDecoration: 'none',
                        color: 'gold.400',
                    },
                    bg: 'transparent',
                    color: 'white',
                    fontWeight: 'normal',
                },
                linkDark: {
                    _active: {
                        color: 'navy.700',
                    },
                    _hover: {
                        textDecoration: 'none',
                        color: 'gold.500',
                    },
                    bg: 'transparent',
                    color: 'gray.700',
                    fontWeight: 'normal',
                },
                white: {
                    bg: 'white',
                    color: 'navy.700',
                    _hover: {
                        bg: 'stone.200',
                        transform: 'translateY(-1px)',
                    },
                },
                outlineLight: {
                    bg: 'transparent',
                    color: 'white',
                    border: '1px solid',
                    borderColor: 'whiteAlpha.700',
                    _hover: {
                        bg: 'whiteAlpha.200',
                        borderColor: 'white',
                        transform: 'translateY(-1px)',
                    },
                },
                outlineNavy: {
                    bg: 'transparent',
                    color: 'navy.700',
                    border: '1px solid',
                    borderColor: 'navy.700',
                    _hover: {
                        bg: 'stone.200',
                        transform: 'translateY(-1px)',
                    },
                },
            },
        },
        Card: {
            baseStyle: {
                header: {
                    borderTopRadius: '0',
                    overflow: 'hidden',
                    padding: '0',
                },
                body: {},
                container: {
                    border: '1px solid',
                    borderColor: 'stone.300',
                    borderRadius: '0',
                    boxShadow: 'none',
                    width: 'full',
                    bg: 'white',
                },
                footer: {},
            },
            variants: {
                downloads: {
                    header: {
                        backgroundColor: 'navy.700',
                        color: 'white',
                        padding: '4',
                    },
                },
            },
        },
        Container: {
            baseStyle: {
                maxW: '1400px',
                px: { base: 6, md: 8, lg: 10, xl: 12 },
            },
        },
        Divider: {
            baseStyle: {
                borderColor: 'stone.300',
                marginY: '8',
                width: 'full',
            },
            variants: {
                footer: {
                    borderColor: 'whiteAlpha.300',
                    borderBottomWidth: '1px',
                    height: '1px',
                    marginY: '8',
                },
                gold: {
                    borderColor: 'gold.400',
                    borderBottomWidth: '1px',
                    maxW: '64px',
                    marginY: '4',
                },
            },
        },
        FormLabel: {
            baseStyle: {
                fontSize: 'lg',
                marginBottom: '2',
                marginTop: '0',
                color: 'navy.700',
                fontWeight: '600',
            },
        },
        FormControl: {
            baseStyle: {
                marginBottom: '6',
            },
        },
        Input: {
            baseStyle: {
                field: {
                    borderColor: 'stone.300',
                    borderWidth: '1px',
                    borderRadius: '0',
                    height: '56px',
                    fontSize: 'xl',
                },
            },
            defaultProps: {
                variant: null,
            },
        },
        Heading: {
            defaultProps: {
                size: null,
            },
            baseStyle: {
                color: 'navy.700',
                fontFamily: 'heading',
                fontWeight: '560',
                marginBottom: '2',
                letterSpacing: '-0.025em',
                fontOpticalSizing: 'auto',
                fontVariationSettings: '"SOFT" 20, "WONK" 0',
            },
            variants: {
                lg: {
                    fontSize: { base: '3xl', md: '4xl' },
                    fontWeight: '560',
                    lineHeight: '1.08',
                },
                md: {
                    fontSize: { base: '2xl', md: '3xl' },
                    fontWeight: '560',
                    lineHeight: '1.12',
                },
                sm: {
                    fontSize: '2xl',
                    fontWeight: '560',
                    lineHeight: '1.15',
                },
                xl: {
                    fontSize: { base: '4xl', md: '5xl' },
                    fontWeight: '520',
                    lineHeight: '1.02',
                    marginBottom: '4',
                },
                display: {
                    fontSize: { base: 'clamp(2.6rem, 12.5vw, 3.05rem)', md: '5.25rem', lg: '6.35rem' },
                    fontWeight: '520',
                    lineHeight: '1.02',
                    letterSpacing: '-0.035em',
                    marginBottom: '4',
                },
                quote: {
                    fontSize: { base: '2xl', md: '4xl' },
                    fontWeight: '500',
                    fontStyle: 'italic',
                    lineHeight: '1.18',
                    letterSpacing: '-0.03em',
                },
                footer: {
                    color: 'white',
                    fontWeight: '560',
                    marginBottom: '4',
                    fontSize: '2xl',
                },
            },
        },
        List: {
            baseStyle: {
                container: {
                    margin: '0',
                },
                item: {
                    color: 'gray.700',
                    fontSize: 'xl',
                    listStyle: 'none',
                },
            },
            variants: {
                contact: {
                    item: {
                        color: 'gray.800',
                        fontSize: 'xl',
                    },
                },
                footer: {
                    item: {
                        color: 'white',
                        fontSize: 'xl',
                    },
                },
            },
        },
        Text: {
            baseStyle: {
                color: 'gray.800',
                marginBottom: '4',
                lineHeight: '1.65',
                fontSize: 'lg',
            },
            defaultProps: {
                size: null,
            },
            sizes: {
                lg: {
                    fontSize: 'lg',
                },
                xl: {
                    fontSize: 'xl',
                },
            },
            variants: {
                footer: {
                    color: 'whiteAlpha.900',
                    fontSize: 'lg',
                },
                muted: {
                    color: 'gray.700',
                },
                lead: {
                    fontSize: { base: 'xl', md: '2xl' },
                    fontWeight: '500',
                    color: 'navy.700',
                    lineHeight: '1.45',
                },
                eyebrow: {
                    fontSize: 'sm',
                    fontWeight: '650',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    lineHeight: '1.4',
                    marginBottom: '0',
                },
            },
        },
    },
})

export default theme
