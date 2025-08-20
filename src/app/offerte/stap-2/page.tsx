'use client';

import BaseLayout from '@/components/baseLayout';
import { Field } from '@/components/ui/field';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { isValidDutchPostalCode } from '@/lib/utils';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Step1Data {
  firstName: string;
  lastName: string;
  companyName: string;
}

interface Step2FormData {
  emailAddress: string;
  phoneNo: string;
  kvkNumber: string;
  btwNumber: string;
  postalCode: string;
}

export default function OfferteStep2() {
  const router = useRouter();
  const [step1Data] = useLocalStorage<Step1Data | null>('offerte-step1', null);
  const [formData, setFormData] = useLocalStorage<Step2FormData>(
    'offerte-step2',
    {
      emailAddress: '',
      phoneNo: '',
      kvkNumber: '',
      btwNumber: '',
      postalCode: '',
    },
  );
  const [isCheckingData, setIsCheckingData] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<Step2FormData>({
    mode: 'onChange',
    defaultValues: formData,
  });

  const watchedValues = watch();
  const isFormValid =
    watchedValues.emailAddress &&
    watchedValues.phoneNo &&
    watchedValues.kvkNumber &&
    watchedValues.btwNumber &&
    watchedValues.postalCode;

  const steps = [
    { title: 'Contactgegevens', description: 'Vul uw gegevens in' },
    { title: 'Bedrijfsgegevens', description: 'Bedrijfsinformatie' },
    { title: 'Controleren', description: 'Controleer en verstuur' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCheckingData(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!isCheckingData && !step1Data) {
      router.push('/offerte/stap-1');
    }
  }, [step1Data, router, isCheckingData]);

  const onSubmit = (values: Step2FormData) => {
    setFormData(values);
    router.push('/offerte/stap-3');
  };

  const goBack = () => {
    router.push('/offerte/stap-1');
  };

  if (isCheckingData || !step1Data) {
    return null; // Loading or will redirect
  }

  return (
    <Container>
      <BaseLayout>
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
                        index === 1 ? 'blue.500'
                        : index < 1 ?
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
                          index === 1 ? 'blue.600'
                          : index < 1 ?
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
                      bg={index < 1 ? 'green.500' : 'gray.300'}
                      zIndex="-1"
                    />
                  )}
                </Box>
              ))}
            </HStack>
          </Box>

          <Box width="full" maxW="md" mx="auto">
            <VStack gap="6" align="stretch">
              <Box textAlign="center">
                <Heading as="h2" size="lg" mb="2">
                  Bedrijfsgegevens
                </Heading>
                <Text color="gray.600">
                  Vul uw contact- en bedrijfsinformatie in
                </Text>
              </Box>

              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <VStack gap="6" align="stretch">
                  <Field
                    label="E-mailadres"
                    required
                    invalid={!!errors.emailAddress}
                    errorText={errors.emailAddress?.message}
                  >
                    <Input
                      {...register('emailAddress', {
                        required: 'E-mailadres is verplicht',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Voer een geldig e-mailadres in',
                        },
                      })}
                      type="email"
                      placeholder="bijvoorbeeld@bedrijf.nl"
                      autoComplete="email"
                      size="lg"
                    />
                  </Field>

                  <Field
                    label="Telefoonnummer"
                    required
                    invalid={!!errors.phoneNo}
                    errorText={errors.phoneNo?.message}
                  >
                    <Input
                      {...register('phoneNo', {
                        required: 'Telefoonnummer is verplicht',
                        pattern: {
                          value: /^(\+31|0)[0-9]{9}$/,
                          message:
                            'Voer een geldig Nederlands telefoonnummer in',
                        },
                      })}
                      type="tel"
                      placeholder="06-12345678 of +31612345678"
                      autoComplete="tel"
                      size="lg"
                    />
                  </Field>

                  <Field
                    label="KVK-nummer"
                    required
                    invalid={!!errors.kvkNumber}
                    errorText={errors.kvkNumber?.message}
                  >
                    <Input
                      {...register('kvkNumber', {
                        required: 'KVK-nummer is verplicht',
                        pattern: {
                          value: /^[0-9]{8}$/,
                          message: 'KVK-nummer moet 8 cijfers bevatten',
                        },
                      })}
                      placeholder="12345678"
                      maxLength={8}
                      size="lg"
                    />
                  </Field>

                  <Field
                    label="BTW-nummer"
                    required
                    invalid={!!errors.btwNumber}
                    errorText={errors.btwNumber?.message}
                  >
                    <Input
                      {...register('btwNumber', {
                        required: 'BTW-nummer is verplicht',
                        pattern: {
                          value: /^NL[0-9]{9}B[0-9]{2}$/,
                          message:
                            'Voer een geldig Nederlands BTW-nummer in (bijv. NL123456789B01)',
                        },
                      })}
                      placeholder="NL123456789B01"
                      maxLength={14}
                      size="lg"
                    />
                  </Field>

                  <Field
                    label="Postcode"
                    required
                    invalid={!!errors.postalCode}
                    errorText={errors.postalCode?.message}
                  >
                    <Input
                      {...register('postalCode', {
                        required: 'Postcode is verplicht',
                        validate: value =>
                          isValidDutchPostalCode(value) ||
                          'Voer een geldige Nederlandse postcode in',
                      })}
                      placeholder="1234 AB"
                      maxLength={7}
                      size="lg"
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
                      type="button"
                      size="lg"
                      flex="1"
                      bg="blue.500"
                      color="white"
                      _hover={{ bg: 'blue.600' }}
                      _active={{ bg: 'blue.700' }}
                      disabled={!isFormValid || Object.keys(errors).length > 0}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Volgende stap
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
