import { background, Card, extendTheme } from '@chakra-ui/react'
import { color } from 'framer-motion'

const theme = extendTheme({
    colors: {
        marine: {
            500: '#002D62',
        },
    },
    brand: {
        100: 'orange',
        // ...
        900: '#1a202c',
    },

    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold', // Normally, it is "semibold"
                bg: 'gray.600',
                color: 'white',
                _hover: {
                    bg: 'red.300',
                },
            },
            sizes: {
                xl: {
                    h: '56px',
                    fontSize: 'lg',
                    px: '32px',
                },
            },
            variants: {
                'with-shadow': {
                    boxShadow: '0 0 2px 2px #efdfde',
                },
                sm: {
                    fontSize: 'md',
                },
            },
            defaultProps: {
                size: 'lg', // default is md
                variant: 'sm', // default is solid
                colorScheme: 'brand', // default is gray

            },
        },
        Heading: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                xl: {
                    color: 'marine.500',
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
            }
        },
        container: {
            baseStyle: {
                maxW: 'container.xl',
            },
        },
    }
})

export default theme