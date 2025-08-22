'use client'

import { motion } from 'framer-motion'
import { Heading, Text } from '@chakra-ui/react'

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

export default function AnimatedZakelijk() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Heading as="h1" size="xl" textAlign="center" color="blue.600" mb="8">
          Zakelijke Verzekeringen
        </Heading>
        <Text fontSize="lg" textAlign="center" mb="12" lineHeight="tall">
          Bescherm uw bedrijf tegen risico&apos;s met onze zakelijke verzekeringen. 
          Wij bieden maatwerk oplossingen voor bedrijven van alle groottes en sectoren.
        </Text>
      </motion.div>
    </motion.div>
  )
}
