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
        // return new Promise((resolve) => {
        //     const email = 'https://pietsmailserver.nl:4000/email'

        // })
        const formAddress = 'https://pietserver.nl:4000/email'

        axios({
            method: 'post',
            url: formAddress,

            data: {
                contactName: contactName,
            }
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
                <FormControl isInvalid={errors.onderneming}>
                    <FormLabel htmlFor='onderneming'>Naam onderneming</FormLabel>
                    <Input
                        id='onderneming'
                        {...register('onderneming', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.onderneming && errors.onderneming.message}
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

                <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor='email'>Uw email adres</FormLabel>
                    <Input
                        id='email'
                        {...register('email', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.meldcode}>
                    <FormLabel htmlFor='meldcode'>Uw meldcode</FormLabel>
                    <Input
                        id='meldcode'
                        {...register('meldcode', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.meldcode && errors.meldcode.message}
                    </FormErrorMessage>
                </FormControl>


                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Verstuur
                </Button>
            </form>
        </Flex>

    );
}