'use client'

import React from "react";
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import { Flex } from "@chakra-ui/react";
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
    }
    return (
        <Flex width='full' justifyContent='center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.businessName}>
                    <FormLabel htmlFor='businessName'>Naam onderneming</FormLabel>
                    <Input
                        id='businessName'
                        {...register('businessName', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.businessName && errors.businessName.message}
                    </FormErrorMessage>
                </FormControl>

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
                        {errors.name && errors.name.message}
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


                <Button mt={4} isLoading={isSubmitting} type='submit'>
                    Verstuur
                </Button>
            </form>
        </Flex>

    );
}