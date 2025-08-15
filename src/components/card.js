'use client'

import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import AnimatedImage from './animated-image';
import { useState } from 'react';

const CardElement = ({ title, description, image, altText, downloadLink, cta, ctaLink, phone, buttonVariant = 'solid', variant }) => {
    const hasCta = cta || phone || downloadLink;
    const [isHovered, setIsHovered] = useState(false);
    
    // Don't render image section if no image is provided
    const shouldShowImage = image && variant !== 'sidebar';
    
    return (
        <Box
            transform={`translateY(${isHovered ? -8 : 0}px)`}
            transition="all 0.3s ease-out"
            cursor="pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            width='full'
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.500"
        >
            <Box padding="0" borderTopRadius="sm" overflow="hidden">
                {shouldShowImage &&
                    <Box overflow='hidden' borderTopRadius='lg' height='200px'>
                        <AnimatedImage
                            src={image}
                            alt={altText || title}
                            width={800}
                            height={200}
                            objectFit="cover"
                        />
                    </Box>
                }
                {title &&
                    <Box>
                        <Text margin='0' fontSize="2xl" fontWeight="bold" paddingX='4' marginTop={shouldShowImage ? '4' : '0'}>{title}</Text>
                    </Box>}
            </Box>
            {description && <Box padding="5"><Text margin='0'>{description}</Text></Box>}

            {hasCta &&
                <Box padding="5">
                    {cta && ctaLink &&
                        <Box 
                            width="100%"
                            _hover={{
                                transform: "scale(1.02)",
                                transition: "transform 0.2s ease-out"
                            }}
                            _active={{
                                transform: "scale(0.98)",
                                transition: "transform 0.1s ease-out"
                            }}
                        >
                            <Button 
                                as='a' 
                                href={ctaLink} 
                                variant={buttonVariant} 
                                width='100%' 
                                minWidth='100%'
                            >
                                {cta}
                            </Button>
                        </Box>}
                    {phone && 
                        <Box 
                            width="100%"
                            _hover={{
                                transform: "scale(1.02)",
                                transition: "transform 0.2s ease-out"
                            }}
                            _active={{
                                transform: "scale(0.98)",
                                transition: "transform 0.1s ease-out"
                            }}
                        >
                            <Button 
                                as='a' 
                                href={phone} 
                                variant={buttonVariant} 
                                width='100%'
                            >
                                Bel ons nu
                            </Button>
                        </Box>}
                    {downloadLink && 
                        <Box
                            _hover={{
                                transform: "scale(1.02)",
                                transition: "transform 0.2s ease-out"
                            }}
                            _active={{
                                transform: "scale(0.98)",
                                transition: "transform 0.1s ease-out"
                            }}
                        >
                            <Button 
                                as='a' 
                                href={downloadLink} 
                                variant={buttonVariant}
                            >
                                Download
                            </Button>
                        </Box>}
                </Box>}
        </Box>
    );
};

export default CardElement;