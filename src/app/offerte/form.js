import React, { useState } from "react";
import { Flex, Box, Checkbox, SimpleGrid, FormErrorMessage, FormLabel, FormControl, Input, Button, Divider, Heading } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import axios, { isCancel, AxiosError } from 'axios';
import { Show } from '@chakra-ui/react'
export default function RegistrationForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const [showForm, setShowForm] = useState(true);


    function onSubmit(values) {
        const formAddress = 'https://pietserver.nl:4000/email'
        console.log(values)
        axios({
            method: 'post',
            url: formAddress,

            data: values // Probably wrong
        })
            .then((response) => {
                console.log(response)
                setShowForm(false)
            })
            .catch((error) => {
                console.log(error)
                alert('Contactformulier niet verzonden')
            })
    }
    return (
        <Flex width='full' justifyContent='center'>
            {showForm ? (
                <form style={{ width: '100%', maxWidth: '1200px' }} onSubmit={handleSubmit(onSubmit)}>
                    <SimpleGrid minChildWidth={{ base: '100%', lg: '100px' }} spacing={{ base: '0', lg: '144px' }}>
                        <Box>
                            <FormControl isInvalid={errors.businessName}>
                                <FormLabel htmlFor='businessName'>Naam onderneming</FormLabel>
                                <Input
                                    id='businessName'
                                    {...register('businessName', {
                                        required: 'Vul de naam in van uw onderneming',
                                        minLength: { value: 1, message: 'Vul de naam in van uw onderneming' },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.businessName && errors.businessName.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.kvkno}>
                                <FormLabel htmlFor='kvkno'>KVK Nummer</FormLabel>
                                <Input
                                    id='kvkno'
                                    {...register('kvkno', {
                                        required: 'Vul uw kvk nummer in',
                                        minLength: { value: 6, message: 'Vul uw kvk nummer in' },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.kvkno && errors.kvkno.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Divider orientation='horizontal' />
                            <FormControl isInvalid={errors.contactName}>
                                <FormLabel htmlFor='contactName'>Uw naam</FormLabel>
                                <Input
                                    id='contactName'
                                    {...register('contactName', {
                                        required: 'Vul uw naam in',
                                        minLength: { value: 1, message: 'Vul uw naam in' },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.contactName && errors.contactName.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.emailAddress}>
                                <FormLabel htmlFor='emailAddress'>Uw email adres</FormLabel>
                                <Input
                                    id='emailAddress'
                                    {...register('emailAddress', {
                                        required: 'Vul uw email adres in',
                                        minLength: { value: 6, message: 'Vul uw email adres in' },

                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.emailAddress && errors.emailAddress.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.phoneNo}>
                                <FormLabel htmlFor='phoneNo'>Uw telefoonnummer</FormLabel>
                                <Input
                                    id='phoneNo'
                                    {...register('phoneNo', {
                                        required: 'Vul uw telefoonnummer in',
                                        phoneNo: 'Telefoonnummer is niet correct',
                                        minLength: { value: 10, message: 'Vul een correct telefoonnummer in' },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.phoneNo && errors.phoneNo.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Box>
                        <Show below='lg'>
                            <Divider orientation='horizontal' />
                        </Show>

                        <Box>
                            <FormControl isInvalid={errors.plateNo}>
                                <FormLabel htmlFor='plateNo'>Uw kenteken</FormLabel>
                                <Input
                                    id='plateNo'
                                    {...register('plateNo', {
                                        required: 'Vul uw kenteken in',
                                        plateNo: 'Kenteken is niet correct',
                                        minLength: { value: 8, message: 'Vul uw kenteken in' },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.plateNo && errors.plateNo.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.carCode}>
                                <FormLabel htmlFor='carCode'>Uw meldcode</FormLabel>
                                <Input
                                    id='carCode'
                                    {...register('carCode', {
                                        required: 'Vul uw meldcode in',
                                        carCode: 'Meldcode is niet correct',
                                        minLength: { value: 4, message: 'Minimale lengte meldcode is 4' },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.carCode && errors.carCode.message}
                                </FormErrorMessage>
                            </FormControl>


                            <FormControl isInvalid={errors.damageFreeYears}>
                                <FormLabel htmlFor='damageFreeYears'>Schadevrije jaren</FormLabel>
                                <Input
                                    id='damageFreeYears'
                                    {...register('damageFreeYears', {
                                        required: 'Vul uw schadevrije jaren in',
                                        minLength: { value: 1, message: 'Vul uw schadevrije jaren in' },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.damageFreeYears && errors.damageFreeYears.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl marginTop='4' isInvalid={errors.sendCopy}>
                                <Checkbox size='lg'
                                    defaultChecked
                                    id="sendCopy"
                                    {...register('sendCopy')}>Verzend kopie</Checkbox>
                                <FormErrorMessage>
                                    {errors.sendCopy && errors.sendCopy.message}
                                </FormErrorMessage>
                            </FormControl>

                            <Button mt='8' isLoading={isSubmitting} type='submit'>
                                Verstuur
                            </Button>
                        </Box>
                    </SimpleGrid>
                </form>
            ) : (
                <Box textAlign='center'>
                    <Heading as='h2' size='xl'>Bedankt voor uw aanvraag</Heading>
                    <Heading as='h3' size='lg'>Er zal spoedig contact met u worden opgenomen!</Heading>
                </Box>
            )}

        </Flex >

    );
}