'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HStack, Box } from '@chakra-ui/react'
export default function Breadcrumb({ separator, listClasses, activeClasses, capitalizeLinks }) {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <>
            <HStack gap='8' fontSize={{ base: 'md', xl: 'lg' }}>
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                        let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                        return (
                            <React.Fragment key={index}>
                                <Box fontSize='xl' className={itemClasses} >
                                    <Link href={href}>{itemLink}</Link>

                                </Box>
                                {pathNames.length !== index + 1 && separator}
                            </React.Fragment>
                        )
                    })
                }
            </HStack>
            {pathNames.length > 0 && separator}

        </>
    )
}
