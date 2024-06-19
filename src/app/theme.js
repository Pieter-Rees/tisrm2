import { background, border, Button, Card, extendTheme, FormLabel, List, ListItem, UnorderedList } from '@chakra-ui/react'
import { color } from 'framer-motion'
import Link from 'next/link'
import { Form } from 'react-hook-form'
import { BsBorderWidth } from 'react-icons/bs'

const theme = extendTheme({
    colors: {
        'gray': {
            500: '#abadaf',
            600: '#7d7f83',
            700: '#33373d',
            800: '#1d2025',
            900: '#171a1d',
        },
        'blue': {
            500: '#00a3ff',
            700: '#0077cc',
            900: '#005299',
        },

    },
    components: {
        Form: {
            baseStyle: {
            },
        },
        formControl: {
            baseStyle: {
                marginBottom: '4',
            },
        },

        FormLabel: {
            baseStyle: {
                color: 'gray.700',
                marginBottom: '2',
                fontWeight: 'bold',
            },
            variants: {
                'footer': {
                    color: 'white',
                },
            },
        },
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
                full: {
                    width: 'full',
                    height: 'full',
                }
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
                ghost: {
                    bg: 'transparent',
                    color: 'gray.700',
                    _hover: {
                        bg: 'gray.300',
                    },
                },
                link: {
                    bg: 'transparent',
                    color: 'white',
                    fontWeight: 'normal',
                    _hover: {
                        textDecoration: 'none',

                    },
                    _active: {
                        color: 'white',
                    },


                }
            },
            defaultProps: {
                size: 'lg', // default is md
                variant: 'sm', // default is solid

            },
        },

        Card: {
            baseStyle: {
                header: {
                    borderTopRadius: 'sm',
                    padding: '0',
                },
                body: {
                    padding: '0',
                },
                footer: {
                    padding: '0',
                },
                container: {
                    width: 'full',
                    border: '1px solid gray.500',
                    borderRadius: 'lg',
                    padding: '8',
                    boxShadow: 'lg',

                },
            },
            variants: {
                downloads: {
                    header: {
                        padding: '4',
                        color: 'red',
                        backgroundColor: 'red',
                    },
                },
            }

        },

        Text: {
            baseStyle: {
                marginBottom: '4',
                color: 'gray.700',
            },
            sizes: {
                xl: {
                    fontSize: 'xl',
                },
            },
            variants: {
                'footer': {
                    textColor: 'white',
                    size: 'xl',
                },
                gradient: {
                    bgClip: 'text',
                    fontWeight: 'extrabold',
                },
            },
            defaultProps: {
                size: 'xl',
            },
        },
        Heading: {
            baseStyle: {
                color: 'gray.700',
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
        List: {
            variants: {
                footer: {
                    item: {
                        fontSize: 'lg',
                        color: 'white',
                    }
                },
                contact: {
                    container: {
                        textAlign: 'center',
                    },
                }
            },

            baseStyle: {
                container: {
                    paddingY: '4',
                    marginInlineStart: '0',
                },
                item: {
                    color: 'gray.700',
                    fontSize: 'lg',
                    listStyle: "none",
                }
            }
        }
    }
})

export default theme