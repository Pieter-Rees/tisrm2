'use client';

import { useCallback, useEffect, useState } from 'react';
import { useForm, type FieldPath, type DefaultValues, type UseFormReturn, type SubmitHandler } from 'react-hook-form';
import { useLocalStorage } from './use-local-storage';
import type { 
  FieldValues, 
  MultiStepFormConfig, 
  FormHookReturn,
  SubmissionHandler,
} from '@/types/forms';

interface UseMultiStepFormOptions<T extends FieldValues> {
  readonly config: MultiStepFormConfig;
  readonly defaultValues: T;
  readonly onSubmit: SubmissionHandler<T>;
  readonly persistData?: boolean;
}

export function useMultiStepForm<T extends FieldValues>({
  config,
  defaultValues,
  onSubmit,
  persistData = true,
}: UseMultiStepFormOptions<T>): FormHookReturn<T> {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const storageKey = persistData ? (config.storageKey || 'form-data') : '';
  const [persistedData, setPersistentData, clearPersistentData] = useLocalStorage<Partial<T>>(
    storageKey,
    {}
  );

  const mergedDefaults = persistData ? { ...defaultValues, ...persistedData } : defaultValues;
  const form = useForm<T>({
    defaultValues: mergedDefaults as DefaultValues<T>,
    mode: 'onChange',
  });

  const { watch, trigger, getValues, formState } = form;
  const watchedValues = watch();

  // Persist form data on change
  useEffect(() => {
    if (persistData && Object.keys(watchedValues).length > 0) {
      setPersistentData(watchedValues);
    }
  }, [watchedValues, persistData, setPersistentData]);

  // Validate current step
  const isStepValid = useCallback((step: number): boolean => {
    const stepConfig = config.steps[step];
    if (!stepConfig) return false;

    const stepFields = stepConfig.fields;
    const currentErrors = formState.errors;
    
    // Check if all required fields in this step are filled and valid
    return stepFields.every(field => {
      const value = getValues(field as FieldPath<T>);
      const hasError = currentErrors[field as keyof typeof currentErrors];
      const isEmpty = value === '' || value === null || value === undefined;
      
      return !hasError && (!isEmpty || stepConfig.isOptional);
    });
  }, [config.steps, formState.errors, getValues]);

  // Navigation functions
  const goToStep = useCallback((step: number) => {
    if (step >= 0 && step < config.steps.length) {
      setCurrentStep(step);
    }
  }, [config.steps.length]);

  const nextStep = useCallback(async () => {
    const stepConfig = config.steps[currentStep];
    if (!stepConfig) return;

    // Trigger validation for current step fields
    const isValid = await trigger(stepConfig.fields as FieldPath<T>[]);
    
    if (isValid && currentStep < config.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, config.steps, trigger]);

  const previousStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  // Enhanced form submission
  const handleFormSubmit = useCallback(async (data: T) => {
    setIsSubmitting(true);
    try {
      const result = await onSubmit(data);
      if (result.success && persistData) {
        clearPersistentData();
      }
      return result;
    } finally {
      setIsSubmitting(false);
    }
  }, [onSubmit, persistData, clearPersistentData]);

  // Enhanced form state
  const enhancedFormState = {
    data: getValues(),
    errors: formState.errors,
    isSubmitting,
    isValid: formState.isValid,
    isDirty: formState.isDirty,
    isLoading: formState.isLoading,
    isSubmitted: formState.isSubmitted,
    isSubmitSuccessful: formState.isSubmitSuccessful,
    isValidating: formState.isValidating,
    submitCount: formState.submitCount,
    defaultValues: formState.defaultValues as T | undefined,
    disabled: formState.disabled,
    dirtyFields: formState.dirtyFields,
    touchedFields: formState.touchedFields,
    validatingFields: formState.validatingFields,
    isReady: true,
    currentStep,
    totalSteps: config.steps.length,
  };

  return {
    ...form,
    formState: enhancedFormState,
    isStepValid,
    goToStep,
    nextStep,
    previousStep,
  };
}
