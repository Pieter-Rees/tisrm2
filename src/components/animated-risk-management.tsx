'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import StarList from './star-list';

interface AnimatedRiskManagementProps {
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

export default function AnimatedRiskManagement({ list }: AnimatedRiskManagementProps) {
  return (
    <Box as="section" py={16}>
      <VStack gap={12} align="stretch">
        <motion.div variants={itemVariants}>
          <VStack gap={6} textAlign="center">
            <Heading as="h2" size="2xl" color="blue.600">
              Risk Management
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl">
              Professioneel risicomanagement voor uw bedrijf.
            </Text>
          </VStack>
        </motion.div>

        <motion.div variants={itemVariants}>
          <StarList listItems={list.map(item => item.title)} />
        </motion.div>
      </VStack>
    </Box>
  );
}
