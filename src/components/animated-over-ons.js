'use client'

import { motion } from 'framer-motion'
import { Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
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

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateY: -15
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function AnimatedOverOns({ list }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Flex direction={{ base: 'column', lg: 'row' }} gap='8' alignItems='center'>
          <Flex flex='1' direction='column' gap='6'>
            <Text fontSize='2xl' fontWeight='bold' color='blue.600'>
              Over TIS Risk Management
            </Text>
            <Text fontSize='lg' lineHeight='tall'>
              TIS Risk Management is een toonaangevend adviesbureau gespecialiseerd in risicomanagement en verzekeringsadvies. 
              Wij helpen bedrijven en particulieren bij het identificeren, analyseren en beheersen van risico&apos;s.
            </Text>
            <StarList list={list} />
          </Flex>
          
          <motion.div variants={imageVariants} flex='1'>
            <Flex 
              borderRadius='lg' 
              boxShadow='xl' 
              overflow='hidden' 
              position='relative' 
              width='full' 
              height='400px'
            >
              <Image
                src="/team.jpg"
                alt="TIS Risk Management team"
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </Flex>
          </motion.div>
        </Flex>
      </motion.div>
    </motion.div>
  )
}
