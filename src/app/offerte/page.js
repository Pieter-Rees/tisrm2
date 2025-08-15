"use client"

import GridLayout from "@/components/gridLayout"
import { Container, VStack, Box } from '@chakra-ui/react'
import Breadcrumb from "@/components/breadcrumb"
import PageTransition from '@/components/page-transition'
import { useState, useEffect } from 'react';

const FadeInForm = ({ children, delay = 0 }) => {
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

export default function Offerte() {
    return (
        <PageTransition>
            <Container>
                <GridLayout title='Offerte' breadcrumb={<Breadcrumb capitalizeLinks />}>
                    <FadeInForm delay={0.1}>
                        <VStack spacing={8} align="stretch">
                            {/* Form content here */}
                        </VStack>
                    </FadeInForm>
                </GridLayout>
            </Container>
        </PageTransition>
    )
}