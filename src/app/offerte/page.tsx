'use client';

import { Box, Container, VStack, Steps } from '@chakra-ui/react';
import RegistrationForm from './form';
import BaseLayout from '@/components/baseLayout';

export default function Offerte() {
  const steps = [
    { title: 'Contactgegevens', description: 'Vul uw gegevens in' },
    { title: 'Bedrijfsgegevens', description: 'Bedrijfsinformatie' },
    { title: 'Verzenden', description: 'Offerte versturen' },
  ];

  return (
    <Container>
      <BaseLayout title="Offerte aanvragen">
        <VStack alignItems="flex-start" width="full" gap="8">
          <Steps.Root defaultValue={0} count={steps.length} width="full">
            {steps.map((step, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Indicator>
                  <Steps.Status 
                    complete={<Steps.Number />} 
                    incomplete={<Steps.Number />}
                  />
                </Steps.Indicator>
                <Box flexShrink="0">
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Description>{step.description}</Steps.Description>
                </Box>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.Root>

          <RegistrationForm />
        </VStack>
      </BaseLayout>
    </Container>
  );
}