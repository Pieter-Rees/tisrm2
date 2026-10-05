'use client';

import { BaseLayout } from '@/components/layout';
import { Field } from '@/components/ui/field';
import { useLocalStorage } from '@/hooks/use-local-storage';
import OfferteStepNavigation from '@/components/offerte-step-navigation';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';
import { SECTION_SPACING } from '@/constants/typography';
import { primaryButtonStyles } from '@/styles/components/button.styles';

interface Step1FormData {
  firstName: string;
  lastName: string;
  businessName: string;
}

export default function OfferteStep1() {
  const router = useRouter();
  const [formData, setFormData] = useLocalStorage<Step1FormData>(
    'offerte-step1',
    {
      firstName: '',
      lastName: '',
      businessName: '',
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
    Boolean(watchedValues.businessName?.trim());



  const onSubmit = (values: Step1FormData) => {
    setFormData(values);
    router.push('/offerte/stap-2');
  };

  return (
    <Container>
      <BaseLayout title="Offerte aanvragen - Stap 1">
        <VStack alignItems="flex-start" width="full" gap={SECTION_SPACING.small}>
          <OfferteStepNavigation
            currentStep={0}
            totalSteps={3}
            steps={[
              { title: 'Contactgegevens', isCompleted: false },
              { title: 'Bedrijfsinformatie', isCompleted: false },
              { title: 'Bevestiging', isCompleted: false }
            ]}
          />

          <Box width="full" maxW="md" mx="auto">
            <VStack gap={COMPONENT_SPACING.form.group} align="stretch">
              <Box textAlign="center">
                <Heading as="h2" size="lg" mb={SPACING_SCALE.xs}>
                  Contactgegevens
                </Heading>
                <Text color="gray.600">
                  Vul uw persoonlijke gegevens en bedrijfsnaam in
                </Text>
              </Box>

              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <VStack gap={COMPONENT_SPACING.form.group} >
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
                    invalid={!!errors.businessName}
                    errorText={errors.businessName?.message}
                  >
                    <Input
                      {...register('businessName', {
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
                    {...primaryButtonStyles}
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
