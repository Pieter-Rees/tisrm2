import CallUs from '@/components/call-us'
import { Box, Grid, GridItem, Flex, Container } from '@chakra-ui/react'
import Image from 'next/image'
import ThreeElements from '@/components/three-elements'
import Talker from '@/components/talker'

export default function Homepage() {
  return (
    <Container>
      <Flex flexDirection='column' gap='4'>
        <Grid
          width='full'
          templateRows='repeat(1, 1fr)'
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
          gap={4}
        >
          <GridItem justifyContent='center' alignItems='center' borderRadius='lg' colSpan={{ base: 1, lg: 4 }} width='full'>
            <Box width='full' borderRadius='lg' overflow='hidden'>
              <Image
                borderRadius='lg'
                src="/1.webp"
                alt="Picture of the author"
                width='2000'
                height='1000'
              />
            </Box>
          </GridItem>
          <GridItem colSpan={2} borderRadius='lg' bg='blue.700' >
            <CallUs />
          </GridItem>
        </Grid>

        <ThreeElements />
        <Talker />

      </Flex>
    </Container>
  )
}