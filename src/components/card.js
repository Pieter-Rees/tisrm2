'use client'

import React from 'react';
import Link from 'next/link';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Card = ({ title, description, image, altText, downloadLink, cta, ctaLink, phone, buttonVariant = 'solid', variant }) => {
    const hasCta = cta || phone || downloadLink;
    
    const getCardBg = () => {
        switch (variant) {
            case 'sidebar':
                return 'white';
            case 'downloads':
                return 'gray.50';
            default:
                return 'white';
        }
    };

    const getButtonVariant = () => {
        if (buttonVariant === 'blue') {
            return { 
                variant: 'solid', 
                bg: 'blue.500', 
                color: 'white'
            };
        }
        return { variant: 'outline' };
    };

    return (
        <Box 
            border="1px solid" 
            borderColor="gray.200" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="lg"
            bg={getCardBg()}
        >
            {image &&
                <Box 
                    overflow='hidden' 
                    borderTopRadius='lg'
                    backgroundImage={`url(${image})`}
                    backgroundSize='cover' 
                    backgroundPosition='center' 
                    height='200px' 
                />
            }
            <Box p="4">
                {title &&
                    <Heading as='h2' size='lg' mb={image ? "4" : "0"} color="gray.900">
                        {title}
                    </Heading>
                }
                {description && 
                    <Text mb={hasCta ? "4" : "0"} color="gray.800">
                        {description}
                    </Text>
                }
                
                {hasCta && (
                    <>
                        {cta && ctaLink &&
                            <Button as={Link} href={ctaLink} width='full' {...getButtonVariant()}>
                                {cta}
                            </Button>
                        }
                        {phone && 
                            <Button as={Link} href={phone} width='full' {...getButtonVariant()}>
                                Bel ons nu
                            </Button>
                        }
                        {downloadLink && 
                            <Button as={Link} href={downloadLink} width='full' {...getButtonVariant()}>
                                Download
                            </Button>
                        }
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Card;