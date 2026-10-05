'use client';

import { BaseLayout } from '@/components/layout';
import OfferteStepNavigation from '@/components/offerte-step-navigation';
import { Field } from '@/components/ui/field';
import { UI_CONSTANTS } from '@/constants/app';
import { useLocalStorage } from '@/hooks/use-local-storage';
import {
  isValidDutchLicensePlate,
  isValidDutchPhoneNumber,
  isValidDutchPostalCode,
  isValidEmail,
} from '@/lib/utils';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';
import { SECTION_SPACING } from '@/constants/typography';
import { primaryButtonStyles } from '@/styles/components/button.styles';

interface Step1Data {
  firstName: string;
  lastName: string;
  businessName: string;
}

interface Step2FormData {
  emailAddress: string;
  phoneNo: string;
  kvkno: string;
  plateNo: string;
  postalCode: string;
  carCode: string;
  damageFreeYears: string;
}

export default function OfferteStep2() {
  const router = useRouter();
  const [step1Data] = useLocalStorage<Step1Data | null>('offerte-step1', null);
  const [formData, setFormData] = useLocalStorage<Step2FormData>(
    'offerte-step2',
    {
      emailAddress: '',
      phoneNo: '',
      kvkno: '',
      plateNo: '',
      postalCode: '',
      carCode: '',
      damageFreeYears: '',
    },
  );

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
    Boolean(watchedValues.emailAddress?.trim()) &&
    Boolean(watchedValues.phoneNo?.trim()) &&
    Boolean(watchedValues.kvkno?.trim()) &&
    Boolean(watchedValues.plateNo?.trim()) &&
    Boolean(watchedValues.postalCode?.trim()) &&
    Boolean(watchedValues.carCode?.trim()) &&
    Boolean(watchedValues.damageFreeYears?.trim());

  const onSubmit = (values: Step2FormData) => {
    setFormData(values);
    router.push('/offerte/stap-3');
  };

  const goBack = () => {
    router.push('/offerte/stap-1');
  };

  return (
    <Container>
      <BaseLayout title="Offerte aanvragen - Stap 2">
        <VStack alignItems="flex-start" width="full" gap={SECTION_SPACING.small}>
          <OfferteStepNavigation
            currentStep={1}
            totalSteps={3}
            steps={[
              { title: 'Contactgegevens', isCompleted: false },
              { title: 'Bedrijfsinformatie', isCompleted: false },
              { title: 'Bevestiging', isCompleted: false },
            ]}
          />

          {!step1Data && (
            <Box
              p={COMPONENT_SPACING.card.md}
              borderRadius="md"
              bg="blue.50"
              borderLeft="4px solid"
              borderColor="blue.700"
              width="full"
            >
              <Text color="blue.900" fontSize="sm">
                Uw contactgegevens uit stap 1 ontbreken nog.{' '}
                <Link asChild>
                  <NextLink href="/offerte/stap-1">Ga naar stap 1</NextLink>
                </Link>
              </Text>
            </Box>
          )}

          <Box width="full" maxW="md" mx="auto">
            <VStack gap={COMPONENT_SPACING.form.group} align="stretch">
              <Box textAlign="center">
                <Heading as="h2" size="lg" mb={SPACING_SCALE.xs}>
                  Bedrijfsgegevens
                </Heading>
                <Text color="gray.600">
                  Vul uw contact- en bedrijfsinformatie in
                </Text>
              </Box>

              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <VStack gap={COMPONENT_SPACING.form.group} align="stretch">
                  <Field
                    label="E-mailadres"
                    required
                    invalid={!!errors.emailAddress}
                    errorText={errors.emailAddress?.message}
                  >
                    <Input
                      {...register('emailAddress', {
                        required: 'E-mailadres is verplicht',
                        validate: value =>
                          isValidEmail(value) || 'Voer een geldig e-mailadres in',
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
                        validate: value =>
                          isValidDutchPhoneNumber(value) ||
                          'Voer een geldig Nederlands telefoonnummer in',
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
                    invalid={!!errors.kvkno}
                    errorText={errors.kvkno?.message}
                  >
                    <Input
                      {...register('kvkno', {
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
                    label="Kenteken"
                    required
                    invalid={!!errors.plateNo}
                    errorText={errors.plateNo?.message}
                  >
                    <Input
                      {...register('plateNo', {
                        required: 'Kenteken is verplicht',
                        validate: value =>
                          isValidDutchLicensePlate(value) ||
                          'Voer een geldig Nederlands kenteken in (bijv. AB-12-CD)',
                      })}
                      placeholder="AB-12-CD"
                      maxLength={9}
                      size="lg"
                    />
                  </Field>

                  <Field
                    label="Meldcode"
                    required
                    invalid={!!errors.carCode}
                    errorText={errors.carCode?.message}
                  >
                    <Input
                      {...register('carCode', {
                        required: 'Meldcode is verplicht',
                        pattern: {
                          value: /^[A-Z0-9]{3,6}$/,
                          message:
                            'Voer een geldige meldcode in (3-6 karakters)',
                        },
                      })}
                      placeholder="ABC123"
                      maxLength={6}
                      size="lg"
                    />
                  </Field>

                  <Field
                    label="Schade vrije jaren"
                    required
                    invalid={!!errors.damageFreeYears}
                    errorText={errors.damageFreeYears?.message}
                  >
                    <Input
                      {...register('damageFreeYears', {
                        required: 'Schade vrije jaren is verplicht',
                        pattern: {
                          value: /^[0-9]+$/,
                          message: 'Voer het aantal schade vrije jaren in',
                        },
                        min: {
                          value: 0,
                          message: 'Schade vrije jaren kan niet negatief zijn',
                        },
                        max: {
                          value: 50,
                          message:
                            'Schade vrije jaren kan niet meer dan 50 zijn',
                        },
                      })}
                      type="number"
                      placeholder="0"
                      min="0"
                      max="50"
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

                  <HStack gap={SPACING_SCALE.md}>
                    <Button
                      onClick={goBack}
                      size="lg"
                      flex="1"
                      variant="outline"
                      color="gray.700"
                      borderColor="gray.700"
                      transition={UI_CONSTANTS.hover.subtle.transition}
                      _hover={UI_CONSTANTS.hover.subtle}
                    >
                      Vorige stap
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      flex="1"
                      {...primaryButtonStyles}
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
