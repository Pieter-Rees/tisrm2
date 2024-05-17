import CallUs from '@/components/call-us'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import Image from 'next/image'
import ThreeElements from '@/components/three-elements'

export default function Homepage() {
  return (
    <Box>
      <Grid
        width='full'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(6, 1fr)'
        gap={4}
        height='300px'
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
    </Box>

  )
}