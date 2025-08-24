'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import StarList from './star-list';

interface AnimatedParticulierProps {
  list1: Array<{ title: string; description: string }>;
  list2: Array<{ title: string; description: string }>;
  list3: Array<{ title: string; description: string }>;
  list4: Array<{ title: string; description: string }>;
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

export default function AnimatedParticulier({ list1, list2, list3, list4 }: AnimatedParticulierProps) {
  return (
    <Box as="section" py={16}>
      <VStack gap={12} align="stretch">
        <motion.div variants={itemVariants}>
          <VStack gap={6} textAlign="center">
            <Heading as="h2" size="2xl" color="blue.600">
              Particuliere Verzekeringen
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl">
              Bescherm uzelf en uw gezin met onze uitgebreide particuliere verzekeringen.
            </Text>
          </VStack>
        </motion.div>

        <motion.div variants={itemVariants}>
          <StarList listItems={list1.map(item => item.title)} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <StarList listItems={list2.map(item => item.title)} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <StarList listItems={list3.map(item => item.title)} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <StarList listItems={list4.map(item => item.title)} />
        </motion.div>
      </VStack>
    </Box>
  );
}
