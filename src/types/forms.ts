import type { FieldPath, FieldValues, UseFormReturn, FieldErrors } from 'react-hook-form';

// Re-export FieldValues for convenience
export type { FieldValues };

// Common form step data interfaces
export interface StepFormData {
  readonly step: number;
  readonly isValid: boolean;
  readonly hasChanges: boolean;
}

export interface PersonalInfoStep extends StepFormData {
  readonly firstName: string;
  readonly lastName: string;
  readonly companyName: string;
}

export interface ContactInfoStep extends StepFormData {
  readonly emailAddress: string;
  readonly phoneNo: string;
  readonly kvkNumber: string;
  readonly btwNumber: string;
  readonly postalCode: string;
}

export interface MessageStep extends StepFormData {
  readonly message?: string;
}

// Complete form data types
export interface OfferteFormData extends PersonalInfoStep, ContactInfoStep, MessageStep {
  readonly submittedAt?: string;
  readonly id?: string;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
  readonly submittedAt?: string;
}

// Form state management  
export interface FormState<T extends FieldValues> {
  readonly data: T;
  readonly errors: FieldErrors<T>;
  readonly isSubmitting: boolean;
  readonly isValid: boolean;
  readonly isDirty: boolean;
  readonly isLoading: boolean;
  readonly isSubmitted: boolean;
  readonly isSubmitSuccessful: boolean;
  readonly isValidating: boolean;
  readonly submitCount: number;
  readonly defaultValues?: T | undefined;
  readonly disabled: boolean;
  readonly dirtyFields: any;
  readonly touchedFields: any;
  readonly validatingFields: any;
  readonly isReady: boolean;
  readonly currentStep?: number;
  readonly totalSteps?: number;
}

// Form hooks
export type FormHookReturn<T extends FieldValues> = Omit<UseFormReturn<T>, 'formState'> & {
  readonly formState: FormState<T>;
  readonly isStepValid: (step: number) => boolean;
  readonly goToStep: (step: number) => void;
  readonly nextStep: () => void;
  readonly previousStep: () => void;
};

// Validation types
export interface ValidationRule {
  readonly required?: boolean | string;
  readonly pattern?: {
    readonly value: RegExp;
    readonly message: string;
  };
  readonly minLength?: {
    readonly value: number;
    readonly message: string;
  };
  readonly maxLength?: {
    readonly value: number;
    readonly message: string;
  };
  readonly validate?: (value: unknown) => boolean | string;
}

export type ValidationRules<T extends FieldValues> = Partial<Record<FieldPath<T>, ValidationRule>>;

// Form submission
export interface SubmissionResult {
  readonly success: boolean;
  readonly message?: string;
  readonly errors?: Record<string, string>;
  readonly data?: unknown;
}

export type SubmissionHandler<T extends FieldValues> = (data: T) => Promise<SubmissionResult>;

// Common validation patterns
export const VALIDATION_PATTERNS = {
  email: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Voer een geldig e-mailadres in',
  },
  phone: {
    value: /^(\+31|0)[1-9][0-9]{8}$/,
    message: 'Voer een geldig Nederlands telefoonnummer in',
  },
  postalCode: {
    value: /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/,
    message: 'Voer een geldige Nederlandse postcode in',
  },
  kvk: {
    value: /^[0-9]{8}$/,
    message: 'KvK-nummer moet 8 cijfers bevatten',
  },
  btw: {
    value: /^NL[0-9]{9}B[0-9]{2}$/,
    message: 'BTW-nummer moet in het formaat NL123456789B01 zijn',
  },
} as const;

// Form step configuration
export interface FormStepConfig {
  readonly title: string;
  readonly description?: string;
  readonly fields: readonly string[];
  readonly validation?: ValidationRules<any>;
  readonly isOptional?: boolean;
}

export interface MultiStepFormConfig {
  readonly steps: readonly FormStepConfig[];
  readonly allowSkip?: boolean;
  readonly persistData?: boolean;
  readonly storageKey?: string;
}
