'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, VStack, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import StarList from './star-list';
import Card from './card';

interface AnimatedOverOnsProps {
  list: Array<{
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export default function AnimatedOverOns({ list }: AnimatedOverOnsProps) {
  return (
    <Box as="section" py={16}>
      <VStack gap={12} align="stretch">
        <motion.div variants={itemVariants}>
          <VStack gap={6} textAlign="center">
            <Heading as="h2" size="2xl" color="blue.600">
              Over TIS Risk Management
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl">
              TIS Risk Management is een toonaangevend adviesbureau gespecialiseerd in risicomanagement en verzekeringsadvies.
            </Text>
          </VStack>
        </motion.div>

        <motion.div variants={imageVariants}>
          <Image
            src="/team.jpg"
            alt="Team foto"
            borderRadius="xl"
            shadow="2xl"
            maxW="full"
            h="auto"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {list.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                variant="featured"
              />
            ))}
          </SimpleGrid>
        </motion.div>

        <motion.div variants={itemVariants}>
          <StarList listItems={list.map(item => item.title)} />
        </motion.div>
      </VStack>
    </Box>
  );
}
