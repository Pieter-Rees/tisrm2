import CallUs from '@/components/call-us'
import { Grid, GridItem, Flex, Container } from '@chakra-ui/react'
import Image from 'next/image'
import ThreeElements from '@/components/three-elements'


export default function Homepage() {
  return (
    <Container>
      <Flex flexDirection='column' gap='4'>
        <Grid
          width='full'
          templateRows='repeat(1, 1fr)'
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
          gap={8}
        >
          <GridItem colSpan={4} bg='papayawhip' >
            <Image
              src="/1.webp"
              alt="Picture of the author"
              height={500}
              width={1000}
            />
          </GridItem>
          <GridItem colSpan={2} bg='marine.500' >
            <CallUs />
          </GridItem>
        </Grid>
        <ThreeElements />
      </Flex>
    </Container>


  )
}