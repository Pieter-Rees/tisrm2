import { background, border, Button, Card, Divider, extendTheme, FormLabel, Input, List, ListItem, UnorderedList } from '@chakra-ui/react'
import { color } from 'framer-motion'
import Link from 'next/link'
import { Form } from 'react-hook-form'
import { BsBorderWidth } from 'react-icons/bs'

const theme = extendTheme({
    colors: {
        'blue': {
            500: '#00a3ff',
            700: '#0077cc',
            900: '#005299',
        },
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
                backgroundColor: 'gray.500',
                color: 'white',
                fontWeight: 'bold',
            },
            defaultProps: {
                size: 'lg',
                variant: 'sm',
            },
            sizes: {
                full: {
                    height: 'full',
                },
                xl: {
                    fontSize: 'lg',
                    h: '56px',
                    px: '32px',
                },
            },
            variants: {
                'blue': {
                    bg: 'blue.800',
                    color: 'white',
                    _hover: {
                        bg: 'blue.700',
                    },
                },
                ghost: {
                    bg: 'transparent',
                    color: 'gray.700',
                    _hover: {
                        bg: 'gray.300',
                    },
                },
                link: {
                    _active: {
                        color: 'white',
                    },
                    _hover: {
                        textDecoration: 'none',
                    },
                    bg: 'transparent',
                    color: 'white',
                    fontWeight: 'normal',
                },
                linkDark: {
                    _active: {
                        color: 'gray.700',
                    },
                    _hover: {
                        textDecoration: 'none',
                    },
                    bg: 'transparent',
                    color: 'gray.700',
                    fontWeight: 'normal'
                },
                white: {
                    bg: 'white',
                    color: 'black',
                    _hover: {
                        bg: 'gray.100',
                    },
                },
            },
        },
        Card: {
            baseStyle: {
                header: {
                    borderTopRadius: 'sm',
                    overflow: 'hidden',
                    padding: '0',
                },
                body: {
                },
                container: {
                    border: '1px solid gray.500',
                    borderRadius: 'lg',
                    boxShadow: 'lg',
                    width: 'full',
                },
                footer: {
                },

            },
            variants: {
                downloads: {
                    header: {
                        backgroundColor: 'red',
                        color: 'red',
                        padding: '4',
                    },
                },
            },
        },
        Container: {
            baseStyle: {
                maxW: '1600px',
            },
        },
        Divider: {
            baseStyle: {
                borderColor: 'gray.700',
                marginY: '8',
                width: 'full',
            },
            variants: {
                'footer': {
                    borderColor: 'blue.200',
                    borderBottomWidth: '1px',
                    height: '1px',
                    marginY: '8',
                },
            },
        },
        Form: {},
        FormLabel: {
            baseStyle: {
                fontSize: 'lg',
                marginY: '2',
            },
        },
        Heading: {
            baseStyle: {
                color: 'gray.700',
                fontWeight: 'bold',
                marginBottom: '2',
            },
            variants: {
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
                xl: {
                    fontSize: '6xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                    marginBottom: '4',
                },
                footer: {
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: '4',
                },
            },
        },
        Input: {
            baseStyle: {
                border: '1px solid gray.700',
                borderRadius: 'md',
                height: '160px',
                marginY: '4',
                minHeight: '160px',
                padding: '4',
            },
        },
        List: {
            baseStyle: {
                container: {
                },

                item: {
                    color: 'gray.700',
                    fontSize: 'xl',
                    listStyle: 'none',
                },


            },
            variants: {
                contact: {
                    container: {
                    },
                    item: {
                        color: 'gray.700',
                        fontSize: 'xl',
                    },
                },
                footer: {
                    container: {
                    },
                    item: {
                        color: 'white',
                        fontSize: 'xl',
                    },
                },
            },
        },
        ListItem: {},
        Text: {
            baseStyle: {
                color: 'gray.700',
                marginBottom: '4',
            },
            defaultProps: {
                size: 'xl',
            },
            sizes: {
                xl: {
                    fontSize: 'xl',
                },
            },
            variants: {
                'footer': {
                    size: 'xl',
                    textColor: 'white',
                },
                gradient: {
                    bgClip: 'text',
                    fontWeight: 'extrabold',
                },
            },
        },
        UnorderedList: {},
    },
})

export default theme
