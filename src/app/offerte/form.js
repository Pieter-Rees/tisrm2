import React from "react";
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import { Flex } from "@chakra-ui/react";

export default function RegistrationForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }
    return (
        <Flex width='full'>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%;' }}>
                <FormControl isInvalid={errors.onderneming}>
                    <FormLabel htmlFor='name'>Naam onderneming</FormLabel>
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

                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name'>Uw naam</FormLabel>
                    <Input
                        id='name'
                        {...register('name', {
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
                    Submit
                </Button>
            </form>
        </Flex>

    );
}