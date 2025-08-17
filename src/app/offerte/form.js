import React, { useState } from "react";
import { Flex, Box, Checkbox, SimpleGrid, Input, Button, Heading, Text } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import axios, { isCancel, AxiosError } from 'axios';

export default function RegistrationForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const [showForm, setShowForm] = useState(true);


    function onSubmit(values) {

        values['tisrm'] = true

        const formAddress = 'https://pieterrees.nl/email'
        console.log('Sending form data to:', formAddress)
        console.log('Form data:', values)
        
        axios({
            method: 'post',
            url: formAddress,
            data: values,
            timeout: 10000 // 10 second timeout
        })
            .then((response) => {
                console.log('Success response:', response)
                setShowForm(false)
            })
            .catch((error) => {
                console.error('Error details:', error)
            }
        )
    }

    if (!showForm) {
        return (
            <Box textAlign='center' py='16'>
                <Heading as='h2' size='lg' mb='4'>
                    Bedankt voor uw aanmelding!
                </Heading>
                <Text>
                    Wij nemen zo spoedig mogelijk contact met u op.
                </Text>
            </Box>
        )
    }

    return (
        <Box as='form' onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap='8'>
                <Box>
                    <Box mb='4'>
                        <Box as='label' htmlFor='firstName' display='block' mb='2' fontWeight='medium'>
                            Uw voornaam
                        </Box>
                        <Input
                            id='firstName'
                            type='text'
                            {...register('firstName', {
                                required: 'Vul uw voornaam in',
                                minLength: { value: 2, message: 'Vul uw voornaam in' },
                            })}
                            borderColor={errors.firstName ? 'red.500' : 'gray.300'}
                        />
                        {errors.firstName && (
                            <Box color='red.500' fontSize='sm' mt='1'>
                                {errors.firstName.message}
                            </Box>
                        )}
                    </Box>

                    <Box mb='4'>
                        <Box as='label' htmlFor='lastName' display='block' mb='2' fontWeight='medium'>
                            Uw achternaam
                        </Box>
                        <Input
                            id='lastName'
                            type='text'
                            {...register('lastName', {
                                required: 'Vul uw achternaam in',
                                minLength: { value: 2, message: 'Vul uw achternaam in' },
                            })}
                            borderColor={errors.lastName ? 'red.500' : 'gray.300'}
                        />
                        {errors.lastName && (
                            <Box color='red.500' fontSize='sm' mt='1'>
                                {errors.lastName.message}
                            </Box>
                        )}
                    </Box>

                    <Box mb='4'>
                        <Box as='label' htmlFor='emailAddress' display='block' mb='2' fontWeight='medium'>
                            Uw email adres
                        </Box>
                        <Input
                            id='emailAddress'
                            type='email'
                            {...register('emailAddress', {
                                required: 'Vul uw email adres in',
                                minLength: { value: 6, message: 'Vul uw email adres in' },

                            })}
                            borderColor={errors.emailAddress ? 'red.500' : 'gray.300'}
                        />
                        {errors.emailAddress && (
                            <Box color='red.500' fontSize='sm' mt='1'>
                                {errors.emailAddress.message}
                            </Box>
                        )}
                    </Box>

                    <Box mb='4'>
                        <Box as='label' htmlFor='phoneNo' display='block' mb='2' fontWeight='medium'>
                            Uw telefoonnummer
                        </Box>
                        <Input
                            id='phoneNo'
                            {...register('phoneNo', {
                                required: 'Vul uw telefoonnummer in',
                                minLength: { value: 10, message: 'Vul een correct telefoonnummer in' },
                            })}
                            borderColor={errors.phoneNo ? 'red.500' : 'gray.300'}
                        />
                        {errors.phoneNo && (
                            <Box color='red.500' fontSize='sm' mt='1'>
                                {errors.phoneNo.message}
                            </Box>
                        )}
                    </Box>
                </Box>
                <Box hideFrom='lg'>
                    <Box width='full' height='1px' bg='gray.300' />
                </Box>

                <Box>
                    <Box mb='4'>
                        <Box as='label' htmlFor='companyName' display='block' mb='2' fontWeight='medium'>
                            Bedrijfsnaam
                        </Box>
                        <Input
                            id='companyName'
                            type='text'
                            {...register('companyName', {
                                required: 'Vul uw bedrijfsnaam in',
                                minLength: { value: 2, message: 'Vul uw bedrijfsnaam in' },
                            })}
                            borderColor={errors.companyName ? 'red.500' : 'gray.300'}
                        />
                        {errors.companyName && (
                            <Box color='red.500' fontSize='sm' mt='1'>
                                {errors.companyName.message}
                            </Box>
                        )}
                    </Box>

                    <Box mb='4'>
                        <Box as='label' htmlFor='kvkNumber' display='block' mb='2' fontWeight='medium'>
                            KVK nummer
                        </Box>
                        <Input
                            id='kvkNumber'
                            type='text'
                            {...register('kvkNumber', {
                                required: 'Vul uw KVK nummer in',
                                minLength: { value: 8, message: 'Vul een correct KVK nummer in' },
                            })}
                            borderColor={errors.kvkNumber ? 'red.500' : 'gray.300'}
                        />
                        {errors.kvkNumber && (
                            <Box color='red.500' fontSize='sm' mt='1'>
                                {errors.kvkNumber.message}
                            </Box>
                        )}
                    </Box>

                    <Box mb='4'>
                        <Box as='label' htmlFor='btwNumber' display='block' mb='2' fontWeight='medium'>
                            BTW nummer
                        </Box>
                        <Input
                            id='btwNumber'
                            type='text'
                            {...register('btwNumber', {
                                required: 'Vul uw BTW nummer in',
                                minLength: { value: 14, message: 'Vul een correct BTW nummer in' },
                            })}
                            borderColor={errors.btwNumber ? 'red.500' : 'gray.300'}
                        />
                        {errors.btwNumber && (
                            <Box color='red.500' fontSize='sm' mt='1'>
                                {errors.btwNumber.message}
                            </Box>
                        )}
                    </Box>

                    <Box mb='4'>
                        <Box as='label' htmlFor='postalCode' display='block' mb='2' fontWeight='medium'>
                            Postcode
                        </Box>
                        <Input
                            id='postalCode'
                            type='text'
                            {...register('postalCode', {
                                required: 'Vul uw postcode in',
                                minLength: { value: 6, message: 'Vul een correct postcode in' },
                            })}
                            borderColor={errors.postalCode ? 'red.500' : 'gray.300'}
                        />
                        {errors.postalCode && (
                            <Box color='red.500' fontSize='sm' mt='1'>
                                {errors.postalCode.message}
                            </Box>
                        )}
                    </Box>
                </Box>
            </SimpleGrid>

            <Box mt='8'>
                <Button
                    type='submit'
                    isLoading={isSubmitting}
                    loadingText='Versturen...'
                    colorScheme='blue'
                    size='lg'
                    width='full'
                >
                    Versturen
                </Button>
            </Box>
        </Box>
    )
}