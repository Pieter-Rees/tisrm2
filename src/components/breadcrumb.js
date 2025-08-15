'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HStack, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react';

const Breadcrumb = ({ separator, listClasses, activeClasses, capitalizeLinks }) => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const timers = pathNames.map((_, index) => 
            setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
            }, index * 100)
        );

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [pathNames]);

    return (
        <HStack gap='8' fontSize={{ base: 'md', xl: 'lg' }} color='gray.300'>
            {
                pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <React.Fragment key={index}>
                            <Box 
                                fontSize='xl' 
                                className={itemClasses}
                                opacity={visibleItems.includes(index) ? 1 : 0}
                                transform={`translateY(${visibleItems.includes(index) ? 0 : -10}px)`}
                                transition="all 0.4s ease-out"
                                _hover={{
                                    transform: "translateY(-2px)",
                                    transition: "transform 0.2s ease-out"
                                }}
                            >
                                <Link href={href}>{itemLink}</Link>
                            </Box>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }
        </HStack>
    )
}

export default Breadcrumb;
