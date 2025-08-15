'use client'

import GridLayout from "@/components/gridLayout"
import { Container, Text, Heading, Box } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
import PageTransition from '@/components/page-transition'
import { useState, useEffect } from 'react';

const FadeInHeading = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Heading
      as='h2'
      variant='lg'
      opacity={isVisible ? 1 : 0}
      transform={`translateY(${isVisible ? 0 : 20}px)`}
      transition="all 0.5s ease-out"
    >
      {children}
    </Heading>
  );
};

const FadeInText = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Text
      opacity={isVisible ? 1 : 0}
      transform={`translateY(${isVisible ? 0 : 20}px)`}
      transition="all 0.5s ease-out"
    >
      {children}
    </Text>
  );
};

export default function Taxi() {
    return (
        <PageTransition>
            <Container>
                <GridLayout title='Taxi' breadcrumb={<Breadcrumb capitalizeLinks />}>
                    <Box
                        opacity={0}
                        transition="opacity 0.5s ease-out"
                        style={{ opacity: 1 }}
                    >
                        <FadeInHeading delay={0}>
                            Taxi verzekeringen
                        </FadeInHeading>
                        <FadeInText delay={0.1}>
                            TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties én de klanten zelf.
                        </FadeInText>
                        <FadeInText delay={0.2}>
                            Wij begrijpen de unieke uitdagingen van de taxibranche en bieden verzekeringsoplossingen die specifiek zijn afgestemd op uw behoeften.
                        </FadeInText>
                        
                        <FadeInHeading delay={0.3}>
                            Onze expertise
                        </FadeInHeading>
                        <FadeInText delay={0.4}>
                            Als specialist in taxiverzekeringen kennen wij alle aspecten van de branche. Wij helpen u bij het vinden van de beste dekking voor uw voertuigen, passagiers en bedrijfsactiviteiten.
                        </FadeInText>
                        <FadeInText delay={0.5}>
                            Onze adviseurs zijn op de hoogte van de laatste ontwikkelingen in de markt en kunnen u voorzien van het beste advies.
                        </FadeInText>
                        
                        <FadeInHeading delay={0.6}>
                            Persoonlijke service
                        </FadeInHeading>
                        <FadeInText delay={0.7}>
                            Bij TIS krijgt u persoonlijke aandacht en een vaste contactpersoon die uw dossier kent. Wij zijn bereikbaar wanneer u ons nodig heeft en helpen u snel bij vragen of schade.
                        </FadeInText>
                    </Box>
                </GridLayout>
            </Container>
        </PageTransition>
    )
}