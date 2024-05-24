"use client"

import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    VStack,
} from '@chakra-ui/react'

import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'

import { Box } from '@chakra-ui/react'

export default function Offerte() {
    const steps = [
        { title: 'First', description: 'Contact Info' },
        { title: 'Second', description: 'Date & Time' },
        { title: 'Third', description: 'Select Rooms' },
    ]

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

    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
        <VStack alignItems='flex-start'>
            <Stepper index={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box flexShrink='0'>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name'>First name</FormLabel>
                    <Input
                        id='name'
                        placeholder='name'
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

                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        placeholder='email'
                        {...register('email', {
                            required: 'This is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'invalid email address',
                            },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.age}>
                    <FormLabel htmlFor='age'>Age</FormLabel>
                    <Input
                        id='age'
                        placeholder='age'
                        {...register('age', {
                            required: 'This is required',
                            min: { value: 18, message: 'Min age is 18' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.age && errors.age.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.date}>
                    <FormLabel htmlFor='date'>Date</FormLabel>
                    <Input
                        id='date'
                        placeholder='date'
                        {...register('date', {
                            required: 'This is required',
                        })}
                    />
                    <FormErrorMessage>
                        {errors.date && errors.date.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.time}>
                    <FormLabel htmlFor='time'>Time</FormLabel>
                    <Input
                        id='time'
                        placeholder='time'
                        {...register('time', {
                            required: 'This is required',
                        })}
                    />
                    <FormErrorMessage>
                        {errors.time && errors.time.message}
                    </FormErrorMessage>
                </FormControl>

                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>
            </form>
        </VStack>
    )
}