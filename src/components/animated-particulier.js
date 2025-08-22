'use client'

import { motion } from 'framer-motion'
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import StarList from './star-list'

// Animation variants for stacking effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function AnimatedParticulier({ list1, list2, list3, list4 }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Heading as="h1" size="xl" textAlign="center" color="blue.600" mb="8">
          Particuliere Verzekeringen
        </Heading>
        <Text fontSize="lg" textAlign="center" mb="12" lineHeight="tall">
          Bescherm uzelf en uw gezin met onze uitgebreide particuliere verzekeringen. 
          Wij bieden maatwerk oplossingen die passen bij uw persoonlijke situatie en behoeften.
        </Text>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap='6'>
          <GridItem>
            <StarList list={list1} />
          </GridItem>
          <GridItem>
            <StarList list={list2} />
          </GridItem>
          <GridItem>
            <StarList list={list3} />
          </GridItem>
          <GridItem>
            <StarList list={list4} />
          </GridItem>
        </Grid>
      </motion.div>
    </motion.div>
  )
}
