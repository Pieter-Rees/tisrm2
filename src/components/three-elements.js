import { Grid, GridItem } from "@chakra-ui/react"
import Card from '@/components/card'

export default function ThreeElements() {
    return (
        <Grid
            width='full'
            templateRows='repeat(1, 1fr)'
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
            gap={8}
        >
            <GridItem colSpan={2}>
                <Card title='Say What' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem turpis, sollicitudin et viverra at, mollis nec dolor. In scelerisque enim hendrerit libero hendrerit, vitae sollicitudin diam condimentum. Ut suscipit cursus orci sit amet commodo. Curabitur odio augue, pharetra id nisl in, imperdiet blandit neque. Cras efficitur tortor dolor, a varius elit ornare sed. Nulla ac bibendum ante. Suspendisse potenti. Ut dignissim a metus ut iaculis. Sed justo ante, lobortis ac imperdiet nec, commodo non est. Donec felis nisl, ornare sed ultricies sit amet, ultricies eget est. Vivamus quis elit quis leo mollis consectetur. Sed ut lacus quis purus malesuada pharetra. Nulla dapibus pulvinar magna, quis imperdiet nunc mollis at. In sit amet pretium est. Duis accumsan scelerisque viverra" />
            </GridItem>
            <GridItem colSpan={2}>
                <Card title='Say Hat' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem turpis, sollicitudin et viverra at, mollis nec dolor. In scelerisque enim hendrerit libero hendrerit, vitae sollicitudin diam condimentum. Ut suscipit cursus orci sit amet commodo. Curabitur odio augue, pharetra id nisl in, imperdiet blandit neque. Cras efficitur tortor dolor, a varius elit ornare sed. Nulla ac bibendum ante. Suspendisse potenti. Ut dignissim a metus ut iaculis. Sed justo ante, lobortis ac imperdiet nec, commodo non est. Donec felis nisl, ornare sed ultricies sit amet, ultricies eget est. Vivamus quis elit quis leo mollis consectetur. Sed ut lacus quis purus malesuada pharetra. Nulla dapibus pulvinar magna, quis imperdiet nunc mollis at. In sit amet pretium est. Duis accumsan scelerisque viverra.' />
            </GridItem>
            <GridItem colSpan={2} >
                <Card title='Test' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem turpis, sollicitudin et viverra at, mollis nec dolor. In scelerisque enim hendrerit libero hendrerit, vitae sollicitudin diam condimentum. Ut suscipit cursus orci sit amet commodo. Curabitur odio augue, pharetra id nisl in, imperdiet blandit neque. Cras efficitur tortor dolor, a varius elit ornare sed. Nulla ac bibendum ante. Suspendisse potenti. Ut dignissim a metus ut iaculis. Sed justo ante, lobortis ac imperdiet nec, commodo non est. Donec felis nisl, ornare sed ultricies sit amet, ultricies eget est. Vivamus quis elit quis leo mollis consectetur. Sed ut lacus quis purus malesuada pharetra. Nulla dapibus pulvinar magna, quis imperdiet nunc mollis at. In sit amet pretium est. Duis accumsan scelerisque viverra.' />
            </GridItem>
        </Grid>
    )
}