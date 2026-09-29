import { Grid, GridItem, Heading, Flex, Box } from '@chakra-ui/react'
import Sidebar from '@/components/sidebar'
import { copyGap, splitGap, stackGap } from '@/constants/spacing'

export default function GridLayout({ children, title, sidebar = true, breadcrumb, hideTitle = false }) {
  return (
    <Flex width="full" flexDirection="column" gap={stackGap}>
      {breadcrumb && (
        <Flex width="full" justifyContent="flex-start" alignItems="center" pb={{ base: 2, md: 4 }}>
          {breadcrumb}
        </Flex>
      )}

      {!hideTitle && title && (
        <Flex
          width="full"
          justifyContent="space-between"
          align={{ base: 'flex-start', md: 'flex-end' }}
          flexDirection={{ base: 'column', md: 'row' }}
          gap="4"
        >
          <Box>
            <Box width="56px" height="1px" bg="gold.400" mb={copyGap} />
            <Heading as="h1" variant="xl" mb="0">
              {title}
            </Heading>
          </Box>
        </Flex>
      )}

      <Grid
        width="full"
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(6, 1fr)' }}
        gap={splitGap}
      >
        <GridItem colSpan={{ base: 1, xl: sidebar ? 4 : 6 }}>{children}</GridItem>
        {sidebar && (
          <GridItem colSpan={{ base: 1, xl: 2 }}>
            <Sidebar />
          </GridItem>
        )}
      </Grid>
    </Flex>
  )
}
