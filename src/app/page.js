import CallUs from '@/components/call-us'
import { Box, Grid, GridItem, Flex, Container } from '@chakra-ui/react'
import Image from 'next/image'
import ThreeElements from '@/components/three-elements'
import Talker from '@/components/talker'

export default function Homepage() {
  return (
    <Container>
      <Flex flexDirection='column' gap='8'>
        <Grid
          width='full'
          templateRows='repeat(1, 1fr)'
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
          gap='8'
        >
          <GridItem justifyContent='center' alignItems='center' colSpan={{ base: 1, lg: 4 }} width='full' borderRadius='lg' overflow='hidden'>
            <Box width='full' overflow='hidden'>
              <Image
                src="/1.webp"
                alt="Picture of the author"
                width='2000'
                height='1000'
              />
            </Box>
          </GridItem>
          <GridItem colSpan={2} bg='blue.700' borderRadius='lg' overflow='hidden' >
            <CallUs />
          </GridItem>
        </Grid>

        <ThreeElements />
        <Talker />

      </Flex>
    </Container>
  )
}