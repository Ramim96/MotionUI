import { TextFieldType, VariantType } from "../types/InputField";

export interface FieldBaseComponentProps {
    type?: TextFieldType;
    id?: string;
    name?: string;
    variant?: VariantType;
    label?: string;
    description?: string;
    placeholder?: string;
};

export interface FieldValueComponentProps<T> {
    value: T;
};

export interface FieldStatusComponentProps {
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
};

export interface FieldValidationComponentProps {
    isInvalid?: boolean;
    fieldError?: string;
};

export interface FieldStyleComponentProps {
    fullWidth?: boolean;
    className?: string;
};

export interface FieldGroupComponentProps {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    prefixClassName?: string;
    suffixClassName?: string;
};

export interface FieldBehaviourComponentProps<T> {
    onChange: (value: T) => void;
};