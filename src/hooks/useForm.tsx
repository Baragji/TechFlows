'use client';

import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useNotification } from './useNotification';

export interface FormField {
  value: string;
  error?: string;
  touched?: boolean;
}

export interface FormState {
  [key: string]: FormField;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  custom?: (value: string) => string | undefined;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface UseFormOptions {
  initialValues?: { [key: string]: string };
  validationRules?: ValidationRules;
  onSubmit?: (data: { [key: string]: string }) => Promise<void> | void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\+]?[0-9]{8,15}$/;

const validateField = (value: string, rules: ValidationRule): string | undefined => {
  if (rules.required && !value.trim()) {
    return 'Dette felt er påkrævet';
  }

  if (value && rules.minLength && value.length < rules.minLength) {
    return `Minimum ${rules.minLength} tegn påkrævet`;
  }

  if (value && rules.maxLength && value.length > rules.maxLength) {
    return `Maksimum ${rules.maxLength} tegn tilladt`;
  }

  if (value && rules.email && !emailRegex.test(value)) {
    return 'Indtast venligst en gyldig email adresse';
  }

  if (value && rules.phone && !phoneRegex.test(value.replace(/\s/g, ''))) {
    return 'Indtast venligst et gyldigt telefonnummer';
  }

  if (value && rules.pattern && !rules.pattern.test(value)) {
    return 'Ugyldig format';
  }

  if (rules.custom) {
    return rules.custom(value);
  }

  return undefined;
};

export const useForm = (options: UseFormOptions = {}) => {
  const { initialValues = {}, validationRules = {}, onSubmit } = options;
  const { showNotification } = useNotification();

  // Initialize form state
  const [formState, setFormState] = useState<FormState>(() => {
    const state: FormState = {};
    Object.keys(initialValues).forEach(key => {
      state[key] = {
        value: initialValues[key] || '',
        error: undefined,
        touched: false
      };
    });
    return state;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get field value
  const getValue = useCallback((fieldName: string): string => {
    return formState[fieldName]?.value || '';
  }, [formState]);

  // Get field error
  const getError = useCallback((fieldName: string): string | undefined => {
    return formState[fieldName]?.error;
  }, [formState]);

  // Check if field has been touched
  const isTouched = useCallback((fieldName: string): boolean => {
    return formState[fieldName]?.touched || false;
  }, [formState]);

  // Set field value
  const setValue = useCallback((fieldName: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value,
        error: validationRules[fieldName] ? validateField(value, validationRules[fieldName]) : undefined
      }
    }));
  }, [validationRules]);

  // Handle input change
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValue(name, value);
  }, [setValue]);

  // Handle field blur
  const handleBlur = useCallback((fieldName: string) => {
    setFormState(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        touched: true
      }
    }));
  }, []);

  // Validate all fields
  const validateForm = useCallback((): boolean => {
    let isValid = true;
    const newFormState = { ...formState };

    Object.keys(validationRules).forEach(fieldName => {
      const value = formState[fieldName]?.value || '';
      const error = validateField(value, validationRules[fieldName]);
      
      newFormState[fieldName] = {
        ...newFormState[fieldName],
        value,
        error,
        touched: true
      };

      if (error) {
        isValid = false;
      }
    });

    setFormState(newFormState);
    return isValid;
  }, [formState, validationRules]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    const isValid = validateForm();
    
    if (!isValid) {
      showNotification('Ret venligst fejlene i formularen', 'error');
      return;
    }

    if (onSubmit) {
      setIsSubmitting(true);
      try {
        const data: { [key: string]: string } = {};
        Object.keys(formState).forEach(key => {
          data[key] = formState[key].value;
        });
        
        await onSubmit(data);
        showNotification('Formularen blev sendt succesfuldt!', 'success');
      } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Der opstod en fejl. Prøv venligst igen.', 'error');
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [formState, isSubmitting, onSubmit, showNotification, validateForm]);

  // Reset form
  const resetForm = useCallback(() => {
    const resetState: FormState = {};
    Object.keys(initialValues).forEach(key => {
      resetState[key] = {
        value: initialValues[key] || '',
        error: undefined,
        touched: false
      };
    });
    setFormState(resetState);
    setIsSubmitting(false);
  }, [initialValues]);

  // Check if form has errors
  const hasErrors = useCallback((): boolean => {
    return Object.values(formState).some(field => field.error);
  }, [formState]);

  // Check if form is dirty (has changes)
  const isDirty = useCallback((): boolean => {
    return Object.keys(formState).some(key => {
      const initialValue = initialValues[key] || '';
      const currentValue = formState[key]?.value || '';
      return initialValue !== currentValue;
    });
  }, [formState, initialValues]);

  return {
    // Values and state
    formState,
    isSubmitting,
    
    // Getters
    getValue,
    getError,
    isTouched,
    hasErrors,
    isDirty,
    
    // Setters
    setValue,
    
    // Event handlers
    handleChange,
    handleBlur,
    handleSubmit,
    
    // Actions
    validateForm,
    resetForm
  };
};

export default useForm;