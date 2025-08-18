'use client';

import { useState, useCallback, useTransition, useMemo } from 'react';
import {
  Box,
  SimpleGrid,
  Input,
  Button,
  Heading,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BsCheck2Circle, BsExclamationTriangle } from 'react-icons/bs';

import { Field } from '@/components/ui/field';
import { isValidEmail, isValidDutchPostalCode } from '@/lib/utils';
import type { OfferteFormData } from '@/types/components';

type SubmissionState = 'idle' | 'success' | 'error';
export default function RegistrationForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<OfferteFormData>({
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNo: '',
      companyName: '',
      kvkNumber: '',
      btwNumber: '',
      postalCode: '',
      message: '',
    },
  });

  const watchedValues = watch();
  
  const filledFieldsCount = useMemo(() => 
    Object.entries(watchedValues).filter(([key, value]) => key !== 'message' && value).length,
    [watchedValues]
  );
  
  const totalRequiredFields = 8;

  const onSubmit = useCallback(async (values: OfferteFormData) => {
    setErrorMessage('');
    
    startTransition(async () => {
      try {
        const payload = {
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
            'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(15000), // 15 second timeout
        });

        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        // Form submission successful - log in development mode only
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log('Form submission successful:', result);
        }
        
        setSubmissionState('success');
        reset(); // Clear form on success
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmissionState('error');
        
        if (error instanceof Error) {
          if (error.name === 'TimeoutError') {
            setErrorMessage('De aanvraag duurde te lang. Probeer het opnieuw.');
          } else if (error.message.includes('Network')) {
            setErrorMessage('Netwerkfout. Controleer uw internetverbinding en probeer opnieuw.');
          } else {
            setErrorMessage(`Er is een fout opgetreden: ${error.message}`);
          }
        } else {
          setErrorMessage('Er is een onbekende fout opgetreden. Probeer het later opnieuw.');
        }
      }
    });
  }, [reset]);

  // Success state
  if (submissionState === 'success') {
    return (
      <VStack gap="6" textAlign="center" py="12">
        <Box color="green.500" fontSize="4xl">
          <BsCheck2Circle />
        </Box>
        <Heading as="h2" size="lg" color="green.700">
          Bedankt voor uw aanvraag!
        </Heading>
        <Text color="gray.700" fontSize="lg" maxW="md">
          Wij hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op.
        </Text>
        <Button
          onClick={() => setSubmissionState('idle')}
          variant="outline"
          colorScheme="green"
          size="sm"
        >
          Nieuwe aanvraag indienen
        </Button>
      </VStack>
    );
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      {/* Error Alert */}
      {submissionState === 'error' && (
        <Box
          p="4"
          mb="6"
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

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8">
        {/* Personal Information */}
        <VStack gap="6" align="stretch">
          <Heading as="h3" size="md" color="gray.800">
            Persoonlijke gegevens
          </Heading>
          
          <Field
            label="Voornaam"
            required
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}
          >
            <Input
              {...register('firstName', {
                required: 'Voornaam is verplicht',
                minLength: { value: 2, message: 'Voornaam moet minimaal 2 karakters zijn' },
                pattern: { value: /^[a-zA-ZÀ-ÿ\s'-]+$/, message: 'Ongeldige karakters in voornaam' },
              })}
              placeholder="Bijvoorbeeld: Jan"
              autoComplete="given-name"
              aria-describedby="firstName-help"
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
                minLength: { value: 2, message: 'Achternaam moet minimaal 2 karakters zijn' },
                pattern: { value: /^[a-zA-ZÀ-ÿ\s'-]+$/, message: 'Ongeldige karakters in achternaam' },
              })}
              placeholder="Bijvoorbeeld: de Vries"
              autoComplete="family-name"
            />
          </Field>

          <Field
            label="E-mailadres"
            required
            invalid={!!errors.emailAddress}
            errorText={errors.emailAddress?.message}
          >
            <Input
              {...register('emailAddress', {
                required: 'E-mailadres is verplicht',
                validate: value => isValidEmail(value) || 'Voer een geldig e-mailadres in',
              })}
              type="email"
              placeholder="bijvoorbeeld@bedrijf.nl"
              autoComplete="email"
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
                  message: 'Voer een geldig Nederlands telefoonnummer in',
                },
              })}
              type="tel"
              placeholder="06-12345678 of +31612345678"
              autoComplete="tel"
            />
          </Field>
        </VStack>

        {/* Business Information */}
        <VStack gap="6" align="stretch">
          <Heading as="h3" size="md" color="gray.800">
            Bedrijfsgegevens
          </Heading>
          
          <Field
            label="Bedrijfsnaam"
            required
            invalid={!!errors.companyName}
            errorText={errors.companyName?.message}
          >
            <Input
              {...register('companyName', {
                required: 'Bedrijfsnaam is verplicht',
                minLength: { value: 2, message: 'Bedrijfsnaam moet minimaal 2 karakters zijn' },
              })}
              placeholder="Uw bedrijfsnaam"
              autoComplete="organization"
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
                  message: 'Voer een geldig Nederlands BTW-nummer in (bijv. NL123456789B01)',
                },
              })}
              placeholder="NL123456789B01"
              maxLength={14}
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
                validate: value => isValidDutchPostalCode(value) || 'Voer een geldige Nederlandse postcode in',
              })}
              placeholder="1234 AB"
              maxLength={7}
            />
          </Field>
        </VStack>
      </SimpleGrid>

      {/* Additional Information */}
      <Box mt="8">
        <Field
          label="Aanvullende informatie (optioneel)"
          helperText="Vertel ons meer over uw specifieke verzekeringsbehoefte of stel eventuele vragen"
          invalid={!!errors.message}
          errorText={errors.message?.message}
        >
          <Textarea
            {...register('message', {
              maxLength: { value: 1000, message: 'Bericht mag maximaal 1000 karakters bevatten' },
            })}
            placeholder="Beschrijf hier uw specifieke wensen, vragen of opmerkingen..."
            rows={4}
            resize="vertical"
          />
        </Field>
      </Box>

      {/* Submit Button */}
      <Box mt="8">
        <Button
          type="submit"
          loading={isSubmitting || isPending}
          loadingText="Versturen..."
          size="lg"
          width="full"
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.600' }}
          _active={{ bg: 'blue.700' }}
          disabled={Object.keys(errors).length > 0}
        >
          Offerte aanvragen
        </Button>
      </Box>

      {filledFieldsCount > 0 && (
        <Text fontSize="sm" color="gray.600" mt="4" textAlign="center">
          Voortgang: {filledFieldsCount} / {totalRequiredFields} velden ingevuld
        </Text>
      )}
    </Box>
  );
}