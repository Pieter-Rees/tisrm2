'use client'

import GridLayout from "@/components/gridLayout"
import { Container, Text, Box } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
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

export default function Zakelijk() {
    return (
        <PageTransition>
            <Container>
                <GridLayout title='Zakelijk' breadcrumb={<Breadcrumb capitalizeLinks />}>
                    <Box
                        opacity={0}
                        transition="opacity 0.5s ease-out"
                        style={{ opacity: 1 }}
                    >
                        <FadeInText delay={0}>
                            Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn, zijn alle risico&apos;s wel goed afgedekt en dan wel tegen de juiste premies? Wij nemen graag samen met u uw verzekeringspakket door en houden deze up to date, zodat ook u kunt genieten van de rust die TIS biedt.
                        </FadeInText>
                        <FadeInText delay={0.1}>
                            Wij bieden verzekeringen tegen een concurrerend tarief, zonder daarbij de kwaliteit van het product uit het oog te verliezen.
                        </FadeInText>
                        <FadeInText delay={0.2}>
                            Of u nu een auto-, bromfiets-, aansprakelijkheid- of woonhuisverzekering nodig heeft, wij staan voor u klaar!
                        </FadeInText>
                        <FadeInText delay={0.3}>
                            Bovendien proberen wij al uw zakelijke (schade) verzekeringen samen te voegen in één pakket, waardoor u een makkelijk overzicht heeft van uw lopende verzekeringen. Daarbij geeft een pakket aantrekkelijke kortingen over de premies.
                        </FadeInText>
                        <FadeInText delay={0.4}>
                            Wij groeien graag met u mee.
                        </FadeInText>
                        <FadeInText delay={0.5}>
                            Bent u geïnteresseerd of heeft u vragen, neem dan gerust contact op via de mail of bel ons!
                        </FadeInText>
                    </Box>
                </GridLayout>
            </Container>
        </PageTransition>
    )
}