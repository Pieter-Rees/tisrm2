import { extendTheme } from '@chakra-ui/react'

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
                    bg: 'red.400',
                    boxShadow: '0 0 2px 2px #efdfde',
                },
                sm: {
                    bg: 'teal.500',
                    fontSize: 'md',
                },
            },
            defaultProps: {
                size: 'lg', // default is md
                variant: 'sm', // default is solid
                colorScheme: 'green', // default is gray
            },
        },
        heading: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                h1: {
                    color: 'marine.500',
                    fontSize: '6xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                },
                h2: {
                    fontSize: '4xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                },
                h3: {
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                },
                h4: {
                    fontSize: 'xl',
                    fontWeight: 'bold',
                    lineHeight: '110%',
                },
                h5: {
                    fontSize: 'lg',
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