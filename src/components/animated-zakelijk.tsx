'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';

interface AnimatedZakelijkProps {
  list: Array<{ title: string; description: string }>;
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

export default function AnimatedZakelijk({ list: _list }: AnimatedZakelijkProps) {
  return (
    <Box as="section" py={16}>
      <VStack gap={12} align="stretch">
        <motion.div variants={itemVariants}>
          <VStack gap={6} textAlign="center">
            <Heading as="h2" size="2xl" color="blue.600">
              Zakelijke Verzekeringen
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl">
              Professionele verzekeringsoplossingen voor uw bedrijf.
            </Text>
          </VStack>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Text fontSize="lg" color="gray.600">
            Wij bieden uitgebreide zakelijke verzekeringen die passen bij uw bedrijfsbehoeften.
          </Text>
        </motion.div>
      </VStack>
    </Box>
  );
}
