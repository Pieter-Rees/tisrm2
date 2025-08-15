'use client'

import GridLayout from "@/components/gridLayout"
import { Container, Text, Flex, Box, Image } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
import StarList from "@/components/star-list"
import PageTransition from '@/components/page-transition'
import { useState, useEffect } from 'react';

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

const FadeInList = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transform={`translateY(${isVisible ? 0 : 20}px)`}
      transition="all 0.5s ease-out"
    >
      {children}
    </Box>
  );
};

const FadeInImage = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Flex
      opacity={isVisible ? 1 : 0}
      transform={`translateY(${isVisible ? 0 : 20}px)`}
      transition="all 0.5s ease-out"
      _hover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease-out"
      }}
    >
      {children}
    </Flex>
  );
};

export default function OverOns() {
    const list1 = [
        'Meer dan 25 jaar ervaring',
        'Gediplomeerd Risico Manager',
        'Geregistreerd in het GRMC register',
        'Onafhankelijk adviseur',
        'Landelijk werkend',
        'Persoonlijke aandacht'
    ];

    const list2 = [
        'Snelle schadeafhandeling',
        'Digitale schadeafhandeling',
        'Unieke inlogcode per schadedossier',
        'Volg de voortgang zelf',
        'PC, tablet of smartphone',
        'Vakkundige afwikkeling'
    ];

    return (
        <PageTransition>
            <Container>
                <GridLayout title='Over ons' breadcrumb={<Breadcrumb capitalizeLinks />}>
                    <Box
                        opacity={0}
                        transition="opacity 0.5s ease-out"
                        style={{ opacity: 1 }}
                    >
                        <FadeInText delay={0}>
                            TIS is al meer dan 25 jaar een landelijk werkend assurantiekantoor, welke altijd gespecialiseerd is geweest in verzekeren van het personenvervoer. Door onze jarenlange expertise in de personenvervoerbranche genieten wij veel vertrouwen bij de verzekeringsmaatschappijen. Als klant bent u degene die daar direct van profiteert.
                        </FadeInText>
                        <FadeInText delay={0.1}>
                            Doordat voorwaarden, mogelijkheden en premies per maatschappij verschillen en wij onafhankelijk zijn, kunnen wij voor de meest passende mogelijkheden combineren voor uw bedrijf. Dit resulteert in een zeer goede Prijs-Kwaliteit verhouding, waarmee u geniet van de meest uitgebreide voorwaarden tegen aantrekkelijke premies.
                        </FadeInText>
                        <FadeInText delay={0.2}>
                            Om u hierbij te helpen en beschermen tegen de mogelijke financiële gevolgen van schade in welke situatie dan ook, bieden wij u altijd de beste verzekering op maat. Omdat wij 100 % onafhankelijk zijn bekijken wij per onderneming en per verzekering waar deze het beste kan worden ondergebracht.
                        </FadeInText>
                        <FadeInText delay={0.3}>
                            Hierdoor zijn wij instaat voor u het beste uit de markt te kiezen, tegen de aantrekkelijkste premies.
                        </FadeInText>
                        <FadeInText delay={0.4}>
                            Wilt u uw verzekeringspakket een grondig met ons doorlopen? Neem dan gerust contact met ons op!
                        </FadeInText>
                        
                        <FadeInList delay={0.5}>
                            <StarList listItems={list1} />
                        </FadeInList>
                        
                        <FadeInText delay={0.6}>
                            Wij bieden u een volledig digitale schadeafhandeling. Door deze specialisatie staan wij bekend om het snel en vakkundig afwikkelen van uw schade, van een inbraak, stormschade of het verhalen van uw bedrijfsschade.
                        </FadeInText>
                        
                        <FadeInList delay={0.7}>
                            <StarList listItems={list2} />
                        </FadeInList>
                        
                        <FadeInImage delay={0.8}>
                            <Image
                                src="/team.jpg"
                                alt="Team TIS"
                                width="100%"
                                height="auto"
                                borderRadius="lg"
                                boxShadow="lg"
                            />
                        </FadeInImage>
                    </Box>
                </GridLayout>
            </Container>
        </PageTransition>
    )
}