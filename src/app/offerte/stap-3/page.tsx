'use client';

import BaseLayout from '@/components/baseLayout';
import { Field } from '@/components/ui/field';
import { useLocalStorage } from '@/hooks/use-local-storage';
import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { BsCheck2Circle, BsExclamationTriangle } from 'react-icons/bs';

interface Step1Data {
  firstName: string;
  lastName: string;
  companyName: string;
}

interface Step2Data {
  emailAddress: string;
  phoneNo: string;
  kvkNumber: string;
  btwNumber: string;
  postalCode: string;
}

interface Step3FormData {
  message: string;
}

type SubmissionState = 'idle' | 'success' | 'error';

export default function OfferteStep3() {
  const router = useRouter();
  const [step1Data] = useLocalStorage<Step1Data | null>('offerte-step1', null);
  const [step2Data] = useLocalStorage<Step2Data | null>('offerte-step2', null);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>('idle');
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isCheckingData, setIsCheckingData] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Step3FormData>({
    defaultValues: {
      message: '',
    },
  });

  const steps = [
    { title: 'Contactgegevens', description: 'Vul uw gegevens in' },
    { title: 'Bedrijfsgegevens', description: 'Bedrijfsinformatie' },
    { title: 'Controleren', description: 'Controleer en verstuur' },
  ];

  // Give localStorage time to load before checking for data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCheckingData(false);
    }, 100); // Small delay to allow localStorage to load

    return () => clearTimeout(timer);
  }, []);

  // Redirect to appropriate step if data is missing (after initial load)
  useEffect(() => {
    if (!isCheckingData) {
      if (!step1Data) {
        router.push('/offerte/stap-1');
      } else if (!step2Data) {
        router.push('/offerte/stap-2');
      }
    }
  }, [step1Data, step2Data, router, isCheckingData]);

  const clearAllData = useCallback(() => {
    localStorage.removeItem('offerte-step1');
    localStorage.removeItem('offerte-step2');
  }, []);

  const onSubmit = useCallback(
    async (values: Step3FormData) => {
      if (!step1Data || !step2Data) return;

      setErrorMessage('');

      startTransition(async () => {
        try {
          const payload = {
            ...step1Data,
            ...step2Data,
            ...values,
            tisrm: true,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
          };

          const formAddress = 'https://pieterrees.nl/email';

          const response = await fetch(formAddress, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(15000), // 15 second timeout
          });

          if (!response.ok) {
            throw new Error(
              `Server responded with ${response.status}: ${response.statusText}`,
            );
          }

          const result = await response.json();
          // Form submission successful - log in development mode only
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log('Form submission successful:', result);
          }

          setSubmissionState('success');
          reset();
          clearAllData();

          // Scroll to top to show success message
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
          console.error('Form submission error:', error);
          setSubmissionState('error');

          if (error instanceof Error) {
            if (error.name === 'TimeoutError') {
              setErrorMessage(
                'De aanvraag duurde te lang. Probeer het opnieuw.',
              );
            } else if (error.message.includes('Network')) {
              setErrorMessage(
                'Netwerkfout. Controleer uw internetverbinding en probeer opnieuw.',
              );
            } else {
              setErrorMessage(`Er is een fout opgetreden: ${error.message}`);
            }
          } else {
            setErrorMessage(
              'Er is een onbekende fout opgetreden. Probeer het later opnieuw.',
            );
          }
        }
      });
    },
    [step1Data, step2Data, reset, clearAllData],
  );

  const goBack = () => {
    router.push('/offerte/stap-2');
  };

  const startNewRequest = () => {
    setSubmissionState('idle');
    clearAllData();
    router.push('/offerte/stap-1');
  };

  if (isCheckingData || !step1Data || !step2Data) {
    return null; // Loading or will redirect
  }

  // Success state
  if (submissionState === 'success') {
    return (
      <Container>
        <BaseLayout>
          <VStack gap="6" textAlign="center" py="12">
            <Box color="green.500" fontSize="4xl">
              <BsCheck2Circle />
            </Box>
            <Heading as="h2" size="lg" color="green.700">
              Bedankt voor uw aanvraag!
            </Heading>
            <Text color="gray.700" fontSize="lg" maxW="md">
              Wij hebben uw aanvraag ontvangen en nemen binnen 24 uur contact
              met u op.
            </Text>
            <Button
              onClick={startNewRequest}
              variant="outline"
              colorScheme="green"
              size="lg"
            >
              Nieuwe aanvraag indienen
            </Button>
          </VStack>
        </BaseLayout>
      </Container>
    );
  }

  return (
    <Container>
      <BaseLayout title="Offerte aanvragen - Stap 3">
        <VStack alignItems="flex-start" width="full" gap="8">
          <Box width="full" py="6">
            <HStack justify="center" gap="8" width="full">
              {steps.map((step, index) => (
                <Box
                  key={index}
                  textAlign="center"
                  position="relative"
                  flex="1"
                >
                  <VStack gap="2">
                    <Box
                      width="10"
                      height="10"
                      borderRadius="full"
                      bg={
                        index === 2 ? 'blue.500'
                          : index < 2 ?
                            'green.500'
                            : 'gray.300'
                      }
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                      fontSize="sm"
                    >
                      {index + 1}
                    </Box>
                    <Box>
                      <Text
                        fontWeight="medium"
                        fontSize="sm"
                        color={
                          index === 2 ? 'blue.600'
                            : index < 2 ?
                              'green.600'
                              : 'gray.600'
                        }
                      >
                        {step.title}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {step.description}
                      </Text>
                    </Box>
                  </VStack>
                  {index < steps.length - 1 && (
                    <Box
                      position="absolute"
                      top="5"
                      right="-16"
                      width="32"
                      height="0.5"
                      bg={index < 2 ? 'green.500' : 'gray.300'}
                      zIndex="-1"
                    />
                  )}
                </Box>
              ))}
            </HStack>
          </Box>

          <Box width="full" maxW="2xl" mx="auto">
            <VStack gap="8" align="stretch">
              <Box textAlign="center">
                <Heading as="h2" size="lg" mb="2">
                  Controleer uw gegevens
                </Heading>
                <Text color="gray.600">
                  Controleer uw gegevens en verstuur de offerte aanvraag
                </Text>
              </Box>

              {/* Error Alert */}
              {submissionState === 'error' && (
                <Box
                  p="4"
                  borderRadius="md"
                  bg="red.50"
                  borderLeft="4px solid"
                  borderColor="red.500"
                >
                  <Box display="flex" alignItems="center" gap="3">
                    <Box color="red.500">
                      <BsExclamationTriangle size="20" />
                    </Box>
                    <Box>
                      <Heading as="h4" size="sm" color="red.700" mb="1">
                        Fout bij verzenden!
                      </Heading>
                      <Text fontSize="sm" color="red.600">
                        {errorMessage}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              )}

              {/* Review Data */}
              <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
                <Card.Root>
                  <Card.Header>
                    <Heading size="md">Contactgegevens</Heading>
                  </Card.Header>
                  <Card.Body>
                    <VStack align="stretch" gap="3">
                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          Voornaam
                        </Text>
                        <Text fontWeight="medium">{step1Data.firstName}</Text>
                      </Box>
                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          Achternaam
                        </Text>
                        <Text fontWeight="medium">{step1Data.lastName}</Text>
                      </Box>
                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          Bedrijfsnaam
                        </Text>
                        <Text fontWeight="medium">{step1Data.companyName}</Text>
                      </Box>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <Card.Root>
                  <Card.Header>
                    <Heading size="md">Bedrijfsgegevens</Heading>
                  </Card.Header>
                  <Card.Body>
                    <VStack align="stretch" gap="3">
                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          E-mailadres
                        </Text>
                        <Text fontWeight="medium">
                          {step2Data.emailAddress}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          Telefoonnummer
                        </Text>
                        <Text fontWeight="medium">{step2Data.phoneNo}</Text>
                      </Box>
                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          KVK-nummer
                        </Text>
                        <Text fontWeight="medium">{step2Data.kvkNumber}</Text>
                      </Box>
                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          BTW-nummer
                        </Text>
                        <Text fontWeight="medium">{step2Data.btwNumber}</Text>
                      </Box>
                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          Postcode
                        </Text>
                        <Text fontWeight="medium">{step2Data.postalCode}</Text>
                      </Box>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </SimpleGrid>

              {/* Additional Message */}
              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <VStack gap="6" align="stretch">
                  <Field
                    label="Aanvullende informatie (optioneel)"
                    helperText="Vertel ons meer over uw specifieke verzekeringsbehoefte of stel eventuele vragen"
                    invalid={!!errors.message}
                    errorText={errors.message?.message}
                  >
                    <Textarea
                      {...register('message', {
                        maxLength: {
                          value: 1000,
                          message:
                            'Bericht mag maximaal 1000 karakters bevatten',
                        },
                      })}
                      placeholder="Beschrijf hier uw specifieke wensen, vragen of opmerkingen..."
                      rows={4}
                      resize="vertical"
                    />
                  </Field>

                  <HStack gap="4">
                    <Button
                      onClick={goBack}
                      size="lg"
                      flex="1"
                      variant="outline"
                      colorScheme="gray"
                    >
                      Vorige stap
                    </Button>
                    <Button
                      type="submit"
                      loading={isPending}
                      loadingText="Versturen..."
                      size="lg"
                      flex="1"
                      bg="green.500"
                      color="white"
                      _hover={{ bg: 'green.600' }}
                      _active={{ bg: 'green.700' }}
                    >
                      Offerte aanvragen
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </BaseLayout>
    </Container>
  );
}
