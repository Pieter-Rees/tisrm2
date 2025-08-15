'use client'

import GridLayout from "@/components/gridLayout"
import { Container, Grid, GridItem, Box, Button, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
import AnimatedImage from '@/components/animated-image'
import PageTransition from '@/components/page-transition'
import { useState, useEffect } from 'react';
import { contactInfo } from '@/data/general'
import { BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from 'react-icons/bs'

const FadeInGrid = ({ children, delay = 0 }) => {
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

const FadeInImage = ({ children, delay = 0 }) => {
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

const FadeInBox = ({ children, delay = 0 }) => {
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

const FadeInButton = ({ children, delay = 0 }) => {
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
      _hover={{
        scale: 1.05,
        transform: "translateY(-2px)",
        transition: "all 0.3s ease-out"
      }}
      _active={{
        scale: 0.95,
        transition: "all 0.1s ease-out"
      }}
    >
      {children}
    </Box>
  );
};

export default function Contact() {
    return (
        <PageTransition>
            <Container>
                <GridLayout title='Contact' breadcrumb={<Breadcrumb capitalizeLinks />}>
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
                            <FadeInGrid delay={0}>
                                <GridItem w='100%'>
                                    <VStack spacing={6} align="stretch">
                                        <Text fontSize="lg" fontWeight="bold">
                                            Neem contact met ons op
                                        </Text>
                                        <Text>
                                            Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op. Wij helpen u graag verder!
                                        </Text>
                                    </VStack>
                                </GridItem>
                            </FadeInGrid>
                            <FadeInImage delay={0.1}>
                                <GridItem w='100%'>
                                    <AnimatedImage
                                        src="/slider-1.jpg"
                                        alt="Contact TIS"
                                        width={800}
                                        height={400}
                                        borderRadius="lg"
                                    />
                                </GridItem>
                            </FadeInImage>
                            <FadeInBox delay={0.2}>
                                <GridItem colSpan={{ base: '1', lg: '2' }}>
                                    <VStack spacing={4} align="stretch">
                                        <HStack spacing={3}>
                                            <Icon as={BsTelephoneFill} color="blue.500" />
                                            <Text>
                                                <Link href={`tel:${contactInfo.phone}`} color="blue.500">
                                                    {contactInfo.phone}
                                                </Link>
                                            </Text>
                                        </HStack>
                                        <HStack spacing={3}>
                                            <Icon as={BsEnvelopeFill} color="blue.500" />
                                            <Text>
                                                <Link href={`mailto:${contactInfo.email}`} color="blue.500">
                                                    {contactInfo.email}
                                                </Link>
                                            </Text>
                                        </HStack>
                                        <HStack spacing={3}>
                                            <Icon as={BsGeoAltFill} color="blue.500" />
                                            <Text>{contactInfo.address}</Text>
                                        </HStack>
                                    </VStack>
                                </GridItem>
                            </FadeInBox>
                            <FadeInButton delay={0.3}>
                                <GridItem colSpan={{ base: '1', lg: '2' }}>
                                    <Button
                                        as='a'
                                        href="/offerte"
                                        variant='blue'
                                        size='lg'
                                        width='100%'
                                    >
                                        Offerte aanvragen
                                    </Button>
                                </GridItem>
                            </FadeInButton>
                        </Grid>
                    </Box>
                </GridLayout>
            </Container>
        </PageTransition>
    )
}