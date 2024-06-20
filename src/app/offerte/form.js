import React from "react";
import { Flex, Box, SimpleGrid, FormErrorMessage, FormLabel, FormControl, Input, Button, Divider } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import axios, { isCancel, AxiosError } from 'axios';

export default function RegistrationForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

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
                // this.showForm = false
                console.log(response)
            })
            .catch((error) => {
                // handle error
                console.log(error)
                alert('Contactformulier niet verzonden')
            })
            .finally(() => {
                // always executed
            })
        debugger
    }
    return (
        <Flex width='full' justifyContent='center'>
            <form style={{ width: '100%', maxWidth: '600px' }} onSubmit={handleSubmit(onSubmit)}>
                <SimpleGrid minChildWidth={{ base: '100%', lg: '100px' }} spacing='16'>
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
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
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
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
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
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },

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
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.phoneNo && errors.phoneNo.message}
                            </FormErrorMessage>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl isInvalid={errors.licenseplate}>
                            <FormLabel htmlFor='licenseplate'>Uw kenteken</FormLabel>
                            <Input
                                id='licenseplate'
                                {...register('licenseplate', {
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.licenseplate && errors.licenseplate.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.carCode}>
                            <FormLabel htmlFor='carCode'>Uw meldcode</FormLabel>
                            <Input
                                id='carCode'
                                {...register('carCode', {
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.carCode && errors.carCode.message}
                            </FormErrorMessage>
                        </FormControl>


                        <FormControl isInvalid={errors.years}>
                            <FormLabel htmlFor='years'>Schadevrije jaren</FormLabel>
                            <Input
                                id='years'
                                {...register('years', {
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.years && errors.years.message}
                            </FormErrorMessage>
                        </FormControl>

                        <Button mt={4} isLoading={isSubmitting} type='submit'>
                            Verstuur
                        </Button>
                    </Box>
                </SimpleGrid>
            </form>
        </Flex>

    );
}