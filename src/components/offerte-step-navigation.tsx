'use client';

import { SPACING_SCALE } from '@/constants/layout';
import { SECTION_SPACING } from '@/constants/typography';
import { Box, Circle, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

interface OfferteStepNavigationProps {
  currentStep: number;
  totalSteps: number;
  steps: Array<{
    title: string;
    description?: string;
    isCompleted?: boolean;
  }>;
}

export default function OfferteStepNavigation({
  currentStep,
  totalSteps: _totalSteps,
  steps,
}: OfferteStepNavigationProps) {
  return (
    <Box my={SECTION_SPACING.small} width="full">
      <HStack gap={0} width="full" justify="space-between">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isUpcoming = index > currentStep;

          return (
            <Flex key={index} direction="column" align="center" flex={1}>
              {/* Step Circle */}
              <Circle
                size="48px"
                bg={
                  isCompleted ? 'green.700'
                  : isActive ?
                    'blue.700'
                  : 'gray.200'
                }
                color={isCompleted || isActive ? 'white' : 'gray.800'}
                mb={SPACING_SCALE.sm}
                position="relative"
                zIndex={2}
              >
                {isCompleted ?
                  <Icon as={FaCheck} boxSize={5} />
                : <Text fontSize="lg" fontWeight="bold">
                    {index + 1}
                  </Text>
                }
              </Circle>

              {/* Step Title */}
              <Text
                fontSize="sm"
                fontWeight={isActive ? 'semibold' : 'medium'}
                color={
                  isActive ? 'blue.900'
                  : isCompleted ?
                    'green.800'
                  : 'gray.800'
                }
                textAlign="center"
                mb={1}
              >
                {step.title}
              </Text>

              {/* Step Description */}
              {step.description && (
                <Text
                  fontSize="xs"
                  color="gray.700"
                  textAlign="center"
                  maxW="120px"
                >
                  {step.description}
                </Text>
              )}
            </Flex>
          );
        })}
      </HStack>
    </Box>
  );
}
