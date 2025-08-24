'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, VStack, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import Card from './card';

interface AnimatedVerzekeringenProps {
  types: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function AnimatedVerzekeringen({ types }: AnimatedVerzekeringenProps) {
  return (
    <Box as="section" py={16}>
      <VStack gap={12} align="stretch">
        <motion.div variants={itemVariants}>
          <VStack gap={6} textAlign="center">
            <Heading as="h2" size="2xl" color="blue.600">
              Verzekeringen
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl">
              Uitgebreide verzekeringsoplossingen voor particulieren en bedrijven.
            </Text>
          </VStack>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {types.map((type, index) => (
              <Card
                key={index}
                title={type.title}
                description={type.description}
                variant="featured"
              />
            ))}
          </SimpleGrid>
        </motion.div>
      </VStack>
    </Box>
  );
}
