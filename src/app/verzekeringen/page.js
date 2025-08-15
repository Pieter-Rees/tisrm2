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

export default function Verzekeringen() {
    return (
        <PageTransition>
            <Container>
                <GridLayout title='Verzekeringen' breadcrumb={<Breadcrumb capitalizeLinks />}>
                    <Grid
                        width='full'
                        templateRows='repeat(1, 1fr)'
                        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
                        gap='8'
                    >
                        <FadeInCard delay={0}>
                            <GridItem colSpan={{ base: '1', lg: '2' }}>
                                <Card title='Particulier' description="U verwacht als particulier de beste service tegen scherpe premies, alsmede een snelle afhandeling van mogelijke schades. Bij TIS geniet u van adviseurs die op de juiste momenten bereikbaar zijn en de persoonlijke aandacht geven waar u als klant behoefte heeft." cta='Lees meer' ctaLink='/verzekeringen/particulier' buttonVariant='ghost' />
                            </GridItem>
                        </FadeInCard>
                        <FadeInCard delay={0.2}>
                            <GridItem colSpan={{ base: '1', lg: '2' }}>
                                <Card title='Zakelijk' description="Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn, zijn alle risico&apos;s wel goed afgedekt en dan wel tegen de juiste premies? Wij nemen graag samen met u uw verzekeringspakket door en houden deze up to date, zodat ook u kunt genieten van de rust die TIS biedt." cta='Lees meer' ctaLink='/verzekeringen/zakelijk' buttonVariant='ghost' />
                            </GridItem>
                        </FadeInCard>
                        <FadeInCard delay={0.4}>
                            <GridItem colSpan={{ base: '1', lg: '2' }}>
                                <Card title='Taxi' description='TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties én de klanten zelf.' cta='Lees meer' ctaLink='/taxi' buttonVariant='ghost' />
                            </GridItem>
                        </FadeInCard>
                    </Grid>
                </GridLayout>
            </Container>
        </PageTransition>
    )
}