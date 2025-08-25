'use client';

import React from 'react';
import {
    Box,
    Text,
    HStack,
    Circle,
    Icon,
    Flex
} from '@chakra-ui/react';
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
    steps
}: OfferteStepNavigationProps) {
    return (
        <Box my={8} width="full">
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
                                bg={isCompleted ? "green.500" : isActive ? "blue.500" : "gray.200"}
                                color={isCompleted || isActive ? "white" : "gray.500"}
                                mb={3}
                                position="relative"
                                zIndex={2}
                            >
                                {isCompleted ? (
                                    <Icon as={FaCheck} boxSize={5} />
                                ) : (
                                    <Text fontSize="lg" fontWeight="bold">
                                        {index + 1}
                                    </Text>
                                )}
                            </Circle>

                            {/* Step Title */}
                            <Text
                                fontSize="sm"
                                fontWeight={isActive ? "semibold" : "medium"}
                                color={isActive ? "blue.600" : isCompleted ? "green.600" : "gray.500"}
                                textAlign="center"
                                mb={1}
                            >
                                {step.title}
                            </Text>

                            {/* Step Description */}
                            {step.description && (
                                <Text
                                    fontSize="xs"
                                    color="gray.500"
                                    textAlign="center"
                                    maxW="120px"
                                >
                                    {step.description}
                                </Text>
                            )}

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <Box
                                    position="absolute"
                                    top="24px"
                                    left={`calc(${(index + 1) * 100}% - 24px)`}
                                    width="calc(100% - 48px)"
                                    height="2px"
                                    bg={isCompleted ? "green.200" : "gray.200"}
                                    zIndex={1}
                                />
                            )}
                        </Flex>
                    );
                })}
            </HStack>
        </Box>
    );
}
