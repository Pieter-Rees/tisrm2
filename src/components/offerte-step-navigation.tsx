'use client';

import React from 'react';
import { Box, HStack, Text, Badge } from '@chakra-ui/react';

interface OfferteStepNavigationProps {
    currentStep: number;
    totalSteps: number;
    steps: Array<{
        title: string;
        isCompleted?: boolean;
    }>;
}

export default function OfferteStepNavigation({
    currentStep,
    totalSteps,
    steps
}: OfferteStepNavigationProps) {
    return (
        <Box mb={6}>
            <HStack gap={4} mb={4}>
                <Text fontSize="sm" color="gray.600">
                    Stap {currentStep} van {totalSteps}
                </Text>
            </HStack>

            <HStack gap={2}>
                {steps.map((step, index) => (
                    <Badge
                        key={index}
                        colorScheme={index < currentStep ? 'green' : index === currentStep ? 'blue' : 'gray'}
                        variant={index === currentStep ? 'solid' : 'outline'}
                    >
                        {step.title}
                    </Badge>
                ))}
            </HStack>
        </Box>
    );
}
