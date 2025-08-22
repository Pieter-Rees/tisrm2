'use client'

import { motion } from 'framer-motion'
import { Grid, GridItem } from '@chakra-ui/react'
import Card from './card'

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

export default function AnimatedVerzekeringen() {
  const insuranceTypes = [
    {
      title: "Particuliere Verzekeringen",
      description: "Persoonlijke verzekeringen voor u en uw gezin",
      link: "/verzekeringen/particulier",
      icon: "🏠"
    },
    {
      title: "Zakelijke Verzekeringen",
      description: "Verzekeringen voor uw bedrijf en medewerkers",
      link: "/verzekeringen/zakelijk",
      icon: "💼"
    }
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap='8'>
        {insuranceTypes.map((type, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GridItem w='100%'>
              <Card 
                title={type.title}
                description={type.description}
                link={type.link}
                icon={type.icon}
              />
            </GridItem>
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  )
}

