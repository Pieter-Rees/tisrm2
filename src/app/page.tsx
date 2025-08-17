import CallUs from '@/components/call-us';
import { Box, Grid, GridItem, Flex, Container } from '@chakra-ui/react';
import Image from 'next/image';
import ThreeElements from '@/components/three-elements';
import Talker from '@/components/talker';
import SchadeMelden from '@/components/schade-melden';
import Sidebar from '@/components/sidebar';

export default function Homepage() {
  return (
    <Container>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(6, 1fr)' }}
        gap="8"
      >
        <GridItem colSpan={{ base: 1, xl: 4 }}>
          <Flex flexDirection="column" gap="8">
            <Grid
              width="full"
              templateRows="repeat(1, 1fr)"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                lg: 'repeat(6, 1fr)',
              }}
              gap="8"
            >
              <GridItem
                justifyContent="center"
                alignItems="center"
                colSpan={{ base: 1, lg: 4 }}
                width="full"
                borderRadius="lg"
                boxShadow="lg"
                overflow="hidden"
              >
                <Box width="full" overflow="hidden">
                  <Image
                    src="/1.webp"
                    alt="TIS Insurance Services main image"
                    width={2000}
                    height={1000}
                    priority
                  />
                </Box>
              </GridItem>
              <GridItem
                colSpan={{ base: 1, lg: 2 }}
                bg="blue.700"
                borderRadius="lg"
                boxShadow="lg"
                overflow="hidden"
              >
                <CallUs />
              </GridItem>
              <Box hideFrom="lg">
                <SchadeMelden />
              </Box>
            </Grid>
            <ThreeElements />
            <Talker />
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 1, xl: 2 }} hideBelow="xl">
          <Sidebar />
        </GridItem>
      </Grid>
    </Container>
  );
}