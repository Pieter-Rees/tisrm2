import CallUs from '@/components/call-us'
import { Box, Flex, Container, Show, Grid, GridItem, Button } from '@chakra-ui/react'
import ThreeElements from '@/components/three-elements'
import Talker from '@/components/talker'
import SchadeMelden from '@/components/schade-melden'
import PageTransition from '@/components/page-transition'
import AnimatedImage from '@/components/animated-image'
import { BsTelephoneFill } from 'react-icons/bs'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function Homepage() {
  return (
    <PageTransition>
      <Container>
        <Flex flexDirection='column' gap='8'>
          {/* Hero Section with Grid Layout - matches original site exactly */}
          <Grid
            width='full'
            templateRows='repeat(1, 1fr)'
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
            gap='8'
          >
            {/* Left Column - Hero Image - spans 4 columns on large screens */}
            <GridItem
              colSpan={{ base: 1, lg: 4 }}
              justifyContent='center'
              alignItems='center'
              width='full'
              borderRadius='lg'
              boxShadow='lg'
              overflow='hidden'
            >
              <AnimatedImage
                src="/1.webp"
                alt="Picture of the author"
                width='2000'
                height='300'
                priority={true}
              />
            </GridItem>
            
            {/* Right Column - Call to Action - spans 2 columns on large screens */}
            <GridItem
              colSpan={{ base: 1, lg: 2 }}
              bg='blue.700'
              borderRadius='lg'
              boxShadow='lg'
              overflow='hidden'
            >
              <CallUs />
            </GridItem>
          </Grid>
          
          {/* Mobile version of CallUs - shows below large breakpoint */}
          <Show below='lg'>
            <Button 
              width='full' 
              size='full' 
              variant='blue' 
              as='a' 
              href='tel:+310206368191'
              bg='blue.800'
              _hover={{ bg: 'blue.700' }}
              _active={{ bg: 'blue.700' }}
              borderRadius='lg'
              boxShadow='lg'
              overflow='hidden'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              height='full'
              padding='8'
              gap='8'
              textDecoration='none'
            >
              <Box color='white'>
                <BsTelephoneFill size='32px' />
              </Box>
              
              <Box textAlign='center'>
                <Heading as='h2' size='md' color='white' marginBottom='2'>
                  Direct antwoord op uw vragen?
                  <br />
                  Bel ons!
                </Heading>
                <Text color='white' fontSize='xl'>
                  +31 20 636 8191
                </Text>
              </Box>
            </Button>
          </Show>
          
          <Show below='lg'>
            <SchadeMelden />
          </Show>
          
          <ThreeElements />
          <Talker />
        </Flex>
      </Container>
    </PageTransition>
  )
}