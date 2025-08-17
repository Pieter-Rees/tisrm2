'use client';

import { useState, useCallback } from 'react';
import {
  Box,
  SimpleGrid,
  Input,
  Button,
  Heading,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Field } from '@/components/ui/field';
import type { OfferteFormData } from '@/types/components';

export default function RegistrationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<OfferteFormData>();

  const [showForm, setShowForm] = useState(true);

  const onSubmit = useCallback(async (values: OfferteFormData) => {
    const formData = { ...values, tisrm: true };
    const formAddress = 'https://pieterrees.nl/email';

    try {
      await axios.post(formAddress, formData, {
        timeout: 10000, // 10 second timeout
      });
      setShowForm(false);
    } catch (error) {
      console.error('Form submission error:', error);
      // TODO: Add proper error handling UI
    }
  }, []);

  if (!showForm) {
    return (
      <Box textAlign="center" py="16">
        <Heading as="h2" size="lg" mb="4" color="gray.900">
          Bedankt voor uw aanmelding!
        </Heading>
        <Text color="gray.800">
          Wij nemen zo spoedig mogelijk contact met u op.
        </Text>
      </Box>
    );
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8">
        <Box>
          <Field
            label="Uw voornaam"
            required
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}
          >
            <Input
              id="firstName"
              type="text"
              placeholder="Voornaam"
              {...register('firstName', {
                required: 'Vul uw voornaam in',
                minLength: { value: 2, message: 'Vul uw voornaam in' },
              })}
            />
          </Field>

          <Field
            label="Uw achternaam"
            required
            invalid={!!errors.lastName}
            errorText={errors.lastName?.message}
          >
            <Input
              id="lastName"
              type="text"
              placeholder="Achternaam"
              {...register('lastName', {
                required: 'Vul uw achternaam in',
                minLength: { value: 2, message: 'Vul uw achternaam in' },
              })}
            />
          </Field>

          <Field
            label="Uw email adres"
            required
            invalid={!!errors.emailAddress}
            errorText={errors.emailAddress?.message}
          >
            <Input
              id="emailAddress"
              type="email"
              placeholder="email@voorbeeld.nl"
              {...register('emailAddress', {
                required: 'Vul uw email adres in',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Vul een geldig email adres in',
                },
              })}
            />
          </Field>

          <Field
            label="Uw telefoonnummer"
            required
            invalid={!!errors.phoneNo}
            errorText={errors.phoneNo?.message}
          >
            <Input
              id="phoneNo"
              type="tel"
              placeholder="06-12345678"
              {...register('phoneNo', {
                required: 'Vul uw telefoonnummer in',
                minLength: { value: 10, message: 'Vul een correct telefoonnummer in' },
              })}
            />
          </Field>
        </Box>
        <Box hideFrom="lg">
          <Box width="full" height="1px" bg="gray.300" />
        </Box>

        <Box>
          <Field
            label="Bedrijfsnaam"
            required
            invalid={!!errors.companyName}
            errorText={errors.companyName?.message}
          >
            <Input
              id="companyName"
              type="text"
              placeholder="Uw bedrijfsnaam"
              {...register('companyName', {
                required: 'Vul uw bedrijfsnaam in',
                minLength: { value: 2, message: 'Vul uw bedrijfsnaam in' },
              })}
            />
          </Field>

          <Field
            label="KVK nummer"
            required
            invalid={!!errors.kvkNumber}
            errorText={errors.kvkNumber?.message}
          >
            <Input
              id="kvkNumber"
              type="text"
              placeholder="12345678"
              {...register('kvkNumber', {
                required: 'Vul uw KVK nummer in',
                minLength: { value: 8, message: 'Vul een correct KVK nummer in' },
              })}
            />
          </Field>

          <Field
            label="BTW nummer"
            required
            invalid={!!errors.btwNumber}
            errorText={errors.btwNumber?.message}
          >
            <Input
              id="btwNumber"
              type="text"
              placeholder="NL123456789B01"
              {...register('btwNumber', {
                required: 'Vul uw BTW nummer in',
                minLength: { value: 14, message: 'Vul een correct BTW nummer in' },
              })}
            />
          </Field>

          <Field
            label="Postcode"
            required
            invalid={!!errors.postalCode}
            errorText={errors.postalCode?.message}
          >
            <Input
              id="postalCode"
              type="text"
              placeholder="1234 AB"
              {...register('postalCode', {
                required: 'Vul uw postcode in',
                pattern: {
                  value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                  message: 'Vul een geldige Nederlandse postcode in',
                },
              })}
            />
          </Field>
        </Box>
      </SimpleGrid>

      <Field
        label="Aanvullende informatie (optioneel)"
        helperText="Vertel ons meer over uw verzekeringsbehoefte"
        invalid={!!errors.message}
        errorText={errors.message?.message}
      >
        <Textarea
          id="message"
          placeholder="Beschrijf hier uw specifieke wensen of vragen..."
          rows={4}
          {...register('message')}
        />
      </Field>

      <Box mt="8">
        <Button
          type="submit"
          loading={isSubmitting}
          loadingText="Versturen..."
          variant="solid"
          bg="blue.500"
          color="white"
          size="lg"
          width="full"
        >
          Offerte aanvragen
        </Button>
      </Box>
    </Box>
  );
}