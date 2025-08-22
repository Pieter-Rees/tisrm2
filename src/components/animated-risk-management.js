'use client'

import { motion } from 'framer-motion'
import { Text } from '@chakra-ui/react'
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

export default function AnimatedRiskManagement({ list }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Text fontSize='2xl' fontWeight='bold' color='blue.600' textAlign='center' mb='8'>
          Risicomanagement Diensten
        </Text>
        <Text fontSize='lg' lineHeight='tall' textAlign='center' mb='12'>
          TIS Risk Management biedt uitgebreide risicomanagement diensten aan voor bedrijven van alle groottes. 
          Wij helpen u bij het identificeren, analyseren en beheersen van risico&apos;s om uw bedrijf te beschermen.
        </Text>
        <StarList list={list} />
      </motion.div>
    </motion.div>
  )
}
