'use client';

import BaseLayout from '@/components/baseLayout';
import { Field } from '@/components/ui/field';
import { UI_CONSTANTS } from '@/constants/app';
import { useLocalStorage } from '@/hooks/use-local-storage';
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
import { useForm } from 'react-hook-form';

interface Step1FormData {
  firstName: string;
  lastName: string;
  companyName: string;
}

export default function OfferteStep1() {
  const router = useRouter();
  const [formData, setFormData] = useLocalStorage<Step1FormData>(
    'offerte-step1',
    {
      firstName: '',
      lastName: '',
      companyName: '',
    },
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<Step1FormData>({
    mode: 'onChange',
    defaultValues: formData,
  });

  const watchedValues = watch();
  const isFormValid =
    Boolean(watchedValues.firstName?.trim()) &&
    Boolean(watchedValues.lastName?.trim()) &&
    Boolean(watchedValues.companyName?.trim());

  const steps = [
    { title: 'Contactgegevens', description: 'Vul uw gegevens in' },
    { title: 'Bedrijfsgegevens', description: 'Bedrijfsinformatie' },
    { title: 'Controleren', description: 'Controleer en verstuur' },
  ];

  const onSubmit = (values: Step1FormData) => {
    setFormData(values);
    router.push('/offerte/stap-2');
  };

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
                        index === 0 ? 'blue.500'
                          : index < 0 ?
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
                        color={index === 0 ? 'blue.600' : 'gray.600'}
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
                      bg="gray.300"
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
                  Contactgegevens
                </Heading>
                <Text color="gray.600">
                  Vul uw persoonlijke gegevens en bedrijfsnaam in
                </Text>
              </Box>

              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <VStack gap="6" align="stretch">
                  <Field
                    label="Voornaam"
                    required
                    invalid={!!errors.firstName}
                    errorText={errors.firstName?.message}
                  >
                    <Input
                      {...register('firstName', {
                        required: 'Voornaam is verplicht',
                        minLength: {
                          value: 2,
                          message: 'Voornaam moet minimaal 2 karakters zijn',
                        },
                        pattern: {
                          value: /^[a-zA-ZÀ-ÿ\s'-]+$/,
                          message: 'Ongeldige karakters in voornaam',
                        },
                      })}
                      placeholder="Bijvoorbeeld: Jan"
                      autoComplete="given-name"
                      size="lg"
                    />
                  </Field>

                  <Field
                    label="Achternaam"
                    required
                    invalid={!!errors.lastName}
                    errorText={errors.lastName?.message}
                  >
                    <Input
                      {...register('lastName', {
                        required: 'Achternaam is verplicht',
                        minLength: {
                          value: 2,
                          message: 'Achternaam moet minimaal 2 karakters zijn',
                        },
                        pattern: {
                          value: /^[a-zA-ZÀ-ÿ\s'-]+$/,
                          message: 'Ongeldige karakters in achternaam',
                        },
                      })}
                      placeholder="Bijvoorbeeld: de Vries"
                      autoComplete="family-name"
                      size="lg"
                    />
                  </Field>

                  <Field
                    label="Bedrijfsnaam"
                    required
                    invalid={!!errors.companyName}
                    errorText={errors.companyName?.message}
                  >
                    <Input
                      {...register('companyName', {
                        required: 'Bedrijfsnaam is verplicht',
                        minLength: {
                          value: 2,
                          message:
                            'Bedrijfsnaam moet minimaal 2 karakters zijn',
                        },
                      })}
                      placeholder="Uw bedrijfsnaam"
                      autoComplete="organization"
                      size="lg"
                    />
                  </Field>

                  <Button
                    type="button"
                    size="lg"
                    width="full"
                    bg="blue.500"
                    color="white"
                    transition={UI_CONSTANTS.hover.button.transition}
                    _hover={{
                      bg: 'blue.600',
                      ...UI_CONSTANTS.hover.button,
                    }}
                    _active={{ bg: 'blue.700' }}
                    disabled={!isFormValid || Object.keys(errors).length > 0}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Volgende stap
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </BaseLayout>
    </Container>
  );
}
