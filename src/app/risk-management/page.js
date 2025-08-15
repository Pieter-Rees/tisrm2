'use client'

import GridLayout from "@/components/gridLayout"
import { Container, Text, Box } from '@chakra-ui/react'
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

export default function RiskManagement() {
    const list = [
        'Risico inventarisatie',
        'Risico analyse',
        'Risico evaluatie',
        'Risico beheersing',
        'Risico monitoring',
        'Risico rapportage'
    ];

    return (
        <PageTransition>
            <Container>
                <GridLayout title='Risk Management' breadcrumb={<Breadcrumb capitalizeLinks />}>
                    <Box
                        opacity={0}
                        transition="opacity 0.5s ease-out"
                        style={{ opacity: 1 }}
                    >
                        <FadeInText delay={0}>
                            TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd in het register GRMC.
                        </FadeInText>
                        <FadeInText delay={0.1}>
                            Wilt u weten wat wij kunnen betekenen in het kader van risico management, lees hier verder of neem contact met ons op!
                        </FadeInText>
                        <FadeInText delay={0.2}>
                            Wij bieden u een volledig risico management traject aan, waarbij wij samen met u kijken naar de risico&apos;s binnen uw organisatie en hoe deze het beste kunnen worden beheerd.
                        </FadeInText>
                        <FadeInText delay={0.3}>
                            Door onze jarenlange ervaring in de verzekeringsbranche kunnen wij u helpen bij het identificeren van risico&apos;s en het vinden van de beste oplossingen.
                        </FadeInText>
                        <FadeInText delay={0.4}>
                            Onze risico managers zijn gecertificeerd en geregistreerd in het GRMC register, wat betekent dat wij voldoen aan de hoogste kwaliteitsstandaarden.
                        </FadeInText>
                        <FadeInText delay={0.5}>
                            Neem contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen bij het beheren van uw risico&apos;s.
                        </FadeInText>
                        
                        <FadeInList delay={0.6}>
                            <StarList listItems={list} />
                        </FadeInList>
                    </Box>
                </GridLayout>
            </Container>
        </PageTransition>
    )
}