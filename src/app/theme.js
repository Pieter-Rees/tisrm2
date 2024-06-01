import { background, Button, Card, extendTheme, List, UnorderedList } from '@chakra-ui/react'
import { color } from 'framer-motion'

const theme = extendTheme({
    colors: {
        'gray': {
            500: '#abadaf',
            600: '#7d7f83',
            700: '#33373d',
            800: '#1d2025',
            900: '#171a1d',
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold', // Normally, it is "semibold"
                color: 'white',
                backgroundColor: 'gray.500',
            },
            sizes: {
                xl: {
                    h: '56px',
                    fontSize: 'lg',
                    px: '32px',
                },
            },
            variants: {
                'blue': {
                    bg: 'blue.700',
                    color: 'white',
                    _hover: {
                        bg: 'blue.900',
                    },
                },
                white: {
                    bg: 'white',
                    color: 'black',
                    _hover: {
                        bg: 'gray.100',
                    },
                },
            },
            defaultProps: {
                size: 'lg', // default is md
                variant: 'sm', // default is solid

            },
        },
        Text: {
            baseStyle: {
                marginBottom: '4',
                color: 'gray.500',
            },
            sizes: {
                xl: {
                    fontSize: 'xl',
                },
            },
            variants: {
                'footer': {
                    textColor: 'white'
                },
                gradient: {
                    bgGradient: 'linear(to-r, red.400, orange.400, yellow.400)',
                    bgClip: 'text',
                    fontWeight: 'extrabold',
                },
            },
            defaultProps: {
                size: 'xl', // 'md' is the default value
            },
        },
        Heading: {
            baseStyle: {
                color: 'gray.500',
                marginBottom: '2',
                fontWeight: 'bold',
            },
            variants: {
                xl: {
                    fontSize: '6xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                    marginBottom: '4',
                },
                lg: {
                    fontSize: '4xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                },
                md: {
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                },
                sm: {
                    fontSize: 'xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                },
                footer: {
                    color: 'white',
                }
            }
        },
        Container: {
            baseStyle: {
                maxW: '1600px',
            },
        },
        UnorderedList: {
            baseStyle: {
                color: 'gray.500',
                listStyleType: 'none',
            },
            sizes: {
                xl: {
                    fontSize: 'xl',
                },
            },
            variants: {
                'footer': {
                    color: 'white',
                }
            },
        },
        List: {
            baseStyle: {
                color: 'gray.500',
                marginBottom: '4',
                listStyleType: 'none',
            },
            sizes: {
                xl: {
                    fontSize: 'xl',
                },
            },
            variants: {
                'footer': {
                    color: 'white',
                }
            },
        },
    }
})

export default theme