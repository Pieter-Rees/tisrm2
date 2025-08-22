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

export default function AnimatedBestanden() {
  const documents = [
    {
      title: "Algemene Voorwaarden",
      description: "Bekijk onze algemene voorwaarden",
      link: "/documents/algemene-voorwaarden.pdf",
      icon: "📄"
    },
    {
      title: "Privacyverklaring",
      description: "Lees onze privacyverklaring",
      link: "/documents/privacyverklaring.pdf",
      icon: "🔒"
    },
    {
      title: "Beloningsbeleid",
      description: "Bekijk ons beloningsbeleid",
      link: "/documents/beloningsbeleid.pdf",
      icon: "💰"
    },
    {
      title: "Dienstverleningsdocument",
      description: "Lees ons dienstverleningsdocument",
      link: "/documents/dienstverleningsdocument.pdf",
      icon: "📋"
    },
    {
      title: "Incidentenregeling",
      description: "Bekijk onze incidentenregeling",
      link: "/documents/incidentenregeling.pdf",
      icon: "⚠️"
    },
    {
      title: "Interne Klachtenprocedure",
      description: "Lees onze interne klachtenprocedure",
      link: "/documents/interne-klachtenprocedure.pdf",
      icon: "📞"
    }
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap='6'>
        {documents.map((doc, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GridItem w='100%'>
              <Card 
                title={doc.title}
                description={doc.description}
                link={doc.link}
                icon={doc.icon}
              />
            </GridItem>
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  )
}

