'use client';

import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Button from './ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactInfo from './contact-info';
import Logo from './logo';

interface AnimatedContactProps {
    handleSchadeClick: () => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
} as const;

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut' as const,
        },
    },
} as const;

const bottomSectionVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut' as const,
        },
    },
} as const;

export default function AnimatedContact({ handleSchadeClick }: AnimatedContactProps) {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
                gap="8"
            >
                <motion.div variants={itemVariants}>
                    <GridItem w="100%">
                        <Flex width="100%" paddingY="12" justifyContent="center">
                            <Logo />
                        </Flex>
                        <ContactInfo buttonVariant="solid" />
                    </GridItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <GridItem w="100%">
                        <Flex
                            borderRadius="lg"
                            boxShadow="lg"
                            overflow="hidden"
                            position="relative"
                            width="full"
                            alignItems="center"
                            height="400px"
                            minHeight="400px"
                        >
                            <Image
                                src="/bb.jpg"
                                alt="Contact page image"
                                fill={true}
                                style={{ objectFit: 'cover' }}
                            />
                        </Flex>
                    </GridItem>
                </motion.div>
            </Grid>

            <motion.div variants={bottomSectionVariants}>
                <Box paddingTop="20" textAlign="center">
                    <Text>
                        Wil u uw schade inzien of een schade melden, klik op onderstaande
                        knop.
                    </Text>
                    <Button variant="primary" onClick={handleSchadeClick}>
                        Schade melden
                    </Button>
                </Box>
            </motion.div>
        </motion.div>
    );
}
