'use client'

import GridLayout from "@/components/gridLayout"
import { Container, Grid, GridItem, Box } from '@chakra-ui/react'
import Card from '@/components/card'
import Breadcrumb from "@/components/breadcrumb"
import PageTransition from '@/components/page-transition'
import { useState, useEffect } from 'react';

const FadeInCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transform={`translateY(${isVisible ? 0 : 30}px)`}
      transition="all 0.6s ease-out"
    >
      {children}
    </Box>
  );
};

export default function Bestanden() {
    return (
        <PageTransition>
            <Container>
                <GridLayout title='Bestanden' breadcrumb={<Breadcrumb capitalizeLinks />}>
                    <Box
                        opacity={0}
                        transition="opacity 0.5s ease-out"
                        style={{ opacity: 1 }}
                    >
                        <Grid
                            width='full'
                            templateRows='repeat(1, 1fr)'
                            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
                            gap='8'
                        >
                            <FadeInCard delay={0}>
                                <GridItem colSpan={{ base: '1', lg: '2' }}>
                                    <Card title='Algemene Voorwaarden' description='Algemene voorwaarden van TIS Risk Managers' downloadLink='/documents/algemene-voorwaarden.pdf' />
                                </GridItem>
                            </FadeInCard>
                            <FadeInCard delay={0.1}>
                                <GridItem colSpan={{ base: '1', lg: '2' }}>
                                    <Card title='Beloningsbeleid' description='Beloningsbeleid van TIS Risk Managers' downloadLink='/documents/beloningsbeleid.pdf' />
                                </GridItem>
                            </FadeInCard>
                            <FadeInCard delay={0.2}>
                                <GridItem colSpan={{ base: '1', lg: '2' }}>
                                    <Card title='Dienstverleningsdocument' description='Dienstverleningsdocument van TIS Risk Managers' downloadLink='/documents/dienstverleningsdocument.pdf' />
                                </GridItem>
                            </FadeInCard>
                            <FadeInCard delay={0.3}>
                                <GridItem colSpan={{ base: '1', lg: '2' }}>
                                    <Card title='Incidentenregeling' description='Incidentenregeling van TIS Risk Managers' downloadLink='/documents/incidentenregeling.pdf' />
                                </GridItem>
                            </FadeInCard>
                            <FadeInCard delay={0.4}>
                                <GridItem colSpan={{ base: '1', lg: '2' }}>
                                    <Card title='Interne Klachtenprocedure' description='Interne klachtenprocedure van TIS Risk Managers' downloadLink='/documents/interne-klachtenprocedure.pdf' />
                                </GridItem>
                            </FadeInCard>
                            <FadeInCard delay={0.5}>
                                <GridItem colSpan={{ base: '1', lg: '2' }}>
                                    <Card title='Privacyverklaring' description='Privacyverklaring van TIS Risk Managers' downloadLink='/documents/privacyverklaring.pdf' />
                                </GridItem>
                            </FadeInCard>
                        </Grid>
                    </Box>
                </GridLayout>
            </Container>
        </PageTransition>
    )
}