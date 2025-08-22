'use client'

import { motion } from 'framer-motion'
import { Box, Grid, GridItem, Flex, Show } from '@chakra-ui/react'
import Image from 'next/image'
import CallUs from './call-us'
import ThreeElements from './three-elements'
import Talker from './talker'
import SchadeMelden from './schade-melden'

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

export default function AnimatedContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section with Image and Phone Call */}
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }} gap='8' width='full'>
        <motion.div variants={itemVariants}>
          <GridItem colSpan={{ base: 1, lg: 4 }} w='100%'>
            <Box position='relative' height='400px' borderRadius='lg' overflow='hidden' boxShadow='lg'>
              <Image
                src="/1.webp"
                alt="TIS Risk Management hero image"
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </GridItem>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <GridItem colSpan={{ base: 1, lg: 2 }} w='100%'>
            <Flex 
              bg='blue.700' 
              borderRadius='lg' 
              boxShadow='lg' 
              overflow='hidden' 
              position='relative' 
              width='full' 
              height='400px'
              direction='column'
              justify='center'
              align='center'
              p='8'
              gap='8'
            >
              <Box color='white' textAlign='center'>
                <Box mb='2'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="32px" width="32px">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                </Box>
                <Box fontSize='2xl' fontWeight='bold' mb='4'>
                  Direct antwoord op uw vragen?<br/>Bel ons!
                </Box>
                <Box fontSize='xl'>
                  +31 20 636 8191
                </Box>
              </Box>
            </Flex>
          </GridItem>
        </motion.div>
      </Grid>

      {/* Feature Cards Section */}
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }} gap='8' width='full'>
        <motion.div variants={itemVariants}>
          <GridItem colSpan={2}>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='lg'>
              <Box 
                height='200px' 
                backgroundImage='url(/slider-2.jpg)'
                backgroundSize='cover'
                backgroundPosition='center center'
              />
              <Box p='4'>
                <Box fontSize='2xl' fontWeight='bold' color='gray.700' mb='4'>
                  Risk Managers
                </Box>
                <Box fontSize='xl' color='gray.700'>
                  TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd in het register GRMC. Wilt u weten wat wij kunnen betekenen in het kader van risico management, lees hier verder of neem contact met ons op!
                </Box>
              </Box>
            </Box>
          </GridItem>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GridItem colSpan={2}>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='lg'>
              <Box 
                height='200px' 
                backgroundImage='url(/unieke-kenmerken.jpg)'
                backgroundSize='cover'
                backgroundPosition='center center'
              />
              <Box p='4'>
                <Box fontSize='2xl' fontWeight='bold' color='gray.700' mb='4'>
                  Maatwerk
                </Box>
                <Box fontSize='xl' color='gray.700'>
                  De verzekeringen van TIS zijn stuk voor stuk maatwerk. De standaard verzekeringsproducten zijn vaak niet toereikend, waardoor er een kans bestaat dat er geen dekking is óf juist dekking heeft voor zaken die geen betrekking hebben op u of uw bedrijf. Op basis van jarenlange ervaring hebben wij daarom een unieke werkwijze, welke compleet is afgestemd op de wensen van de klanten.
                </Box>
              </Box>
            </Box>
          </GridItem>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GridItem colSpan={2}>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='lg'>
              <Box 
                height='200px' 
                backgroundImage='url(/slider-3.jpg)'
                backgroundSize='cover'
                backgroundPosition='center center'
              />
              <Box p='4'>
                <Box fontSize='2xl' fontWeight='bold' color='gray.700' mb='4'>
                  Schadeafhandeling
                </Box>
                <Box fontSize='xl' color='gray.700'>
                  TIS biedt u een volledig digitale schadeafhandeling. Door deze specialisatie staan wij bekend om het snel en vakkundig afwikkelen van uw schade, van een inbraak, stormschade of het verhalen van uw bedrijfsschade. Per schadedossier ontvangt u van ons een unieke inlogcode waarmee u de voortgang zelf kunt volgen, via de PC, tablet of smartphone!
                </Box>
              </Box>
            </Box>
          </GridItem>
        </motion.div>
      </Grid>

      {/* Quote Section */}
      <motion.div variants={itemVariants}>
        <Flex 
          direction={{ base: 'column', lg: 'row' }} 
          gap={{ base: '4', lg: '16' }} 
          justify='center' 
          align='center'
          py='16'
        >
          <Box position='relative' width='250px' height='250px' overflow='hidden' borderRadius='50%' boxShadow='lg'>
            <Image
              src="/rene.jpg"
              alt="Rene Enthoven"
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </Box>
          
          <Flex direction='column' align='center' justify='center' textAlign='center'>
            <Box mb='4'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="64px" width="64px" color="gray">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"></path>
              </svg>
            </Box>
            <Box fontSize='xl' color='gray.700' mb='4'>
              De weldaden van een verzekering komen samen met het onheil aan het licht.
            </Box>
            <Box fontSize='xl' fontWeight='bold' color='gray.700'>
              Rene Enthoven <br/>Directeur TIS Risk Managers
            </Box>
          </Flex>
        </Flex>
      </motion.div>
    </motion.div>
  )
}
