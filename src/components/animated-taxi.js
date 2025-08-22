'use client'

import { motion } from 'framer-motion'
import { Grid, GridItem, Box, Flex, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'

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

export default function AnimatedTaxi() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap='8'>
        <motion.div variants={itemVariants}>
          <GridItem w='100%'>
            <Flex direction='column' gap='6' height='full' justifyContent='center'>
              <Text fontSize='3xl' fontWeight='bold' color='blue.600'>
                Taxi Verzekeringen
              </Text>
              <Text fontSize='lg' lineHeight='tall'>
                Specifieke verzekeringsoplossingen voor taxibedrijven en chauffeurs. 
                Wij begrijpen de unieke risico&apos;s van de taxisector en bieden passende dekking.
              </Text>
              <Button variant='blue' size='lg'>
                Vraag een offerte aan
              </Button>
            </Flex>
          </GridItem>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <GridItem w='100%'>
            <Flex 
              borderRadius='lg' 
              boxShadow='lg' 
              overflow='hidden' 
              position='relative' 
              width='full' 
              height='400px'
            >
              <Image
                src="/mercedes.png"
                alt="Taxi verzekeringen"
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </Flex>
          </GridItem>
        </motion.div>
      </Grid>
    </motion.div>
  )
}
