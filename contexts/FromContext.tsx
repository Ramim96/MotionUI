"use client";

import { createContext, useCallback, useState } from "react";
import * as yup from "yup";

export type FormFieldDataType = boolean | string | number | readonly string[] | undefined;

export interface FormContextProps {
    formValues: Record<string, FormFieldDataType>;
    getFieldValue: (fieldName: string) => FormFieldDataType;
    setFieldValue: (fieldName: string, fieldValue: FormFieldDataType) => void;
    getFieldValidationError: (fieldName: string) => string | undefined;
    validate: () => boolean;
    resetForm: () => void;
};

interface FormContextProviderProps {
    values: Record<string, FormFieldDataType>;
    validationSchema: yup.ObjectSchema<any>;
    children: React.ReactNode;
};

// #region Context

export const FormContext = createContext<FormContextProps | undefined>(undefined);

// #endregion Context

// #region Context provider

export const FormContextProvider = ({
    values,
    validationSchema,
    children,
}: FormContextProviderProps) => {

    // States
    const [formValues, setFormValues] = useState<Record<string, FormFieldDataType>>(values);
    const [validationErrors, setValidationErrors] = useState<Partial<Record<string, string>>>({});

    const getFieldValue = useCallback((fieldName: string): FormFieldDataType => {

        return formValues[fieldName];
    }, [formValues]);

    const setFieldValue = useCallback((fieldName: string, fieldValue: FormFieldDataType): void => {

        setFormValues((currentValues) => ({
            ...currentValues,
            [fieldName]: fieldValue,
        }));
    }, []);

    const getFieldValidationError = useCallback((fieldName: string): string | undefined => {

        return validationErrors[fieldName];
    }, [validationErrors]);

    const validate = useCallback((): boolean => {

        try {
            validationSchema.validateSync(formValues, {
                abortEarly: false,
            });

            setValidationErrors({});

            return true;

        }
        catch (error) {

            if (error instanceof yup.ValidationError) {

                const errors: Partial<Record<string, string>> = {};

                for (const issue of error.inner) {

                    if (issue.path) {
                        errors[issue.path] = issue.message;
                    }
                }

                setValidationErrors(errors);

                return false;
            }

            throw error;
        }
    }, [validationSchema, formValues]);

    const resetForm = useCallback((): void => {
        
        const defaultValues = validationSchema.getDefault({});
        setFormValues(defaultValues);
        setValidationErrors({});
    }, [validationSchema]);

    const contextValue: FormContextProps = {
        formValues,
        getFieldValue,
        setFieldValue,
        getFieldValidationError,
        validate,
        resetForm,
    };

    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    );
};

// #endregion Context provider