"use client";

// Components
import { ValidationError } from "@forms/Validation";
// Contexts
import { FormFieldDataType } from "@contexts/FromContext";
import { useFormContext } from "@hooks/useFormContextHook";
// Utils
import { cn } from "@utils/css";

interface FormInputFieldComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
    // type: InputFieldVariant;
    id: string;
    label: string;
    tooltip?: string;
    helperText?: string;
    min?: number;
    max?: number;
    step?: number;
    containerSize?: string;
    // labelPosition?: LabelPosition;
};

export const FormInputField = ({
    // type,
    label,
    id,
    name,
    required,
    disabled,
    readOnly,
    placeholder,
    tooltip,
    helperText,
    min,
    max,
    step,
    className,
    containerSize,
    onChange,
    ...props
}: FormInputFieldComponentProps) => {
    
    // Hooks
    const { getFieldValue, setFieldValue, getFieldValidationError } = useFormContext();

    const getInputValue = (value: FormFieldDataType): string | number | readonly string[] | undefined => {

        if (typeof value === "string" || typeof value === "number" || Array.isArray(value)) {
            return value; // Return data types supported by the input field value attribute
        }
        return undefined;
    }

    return (
        <div className={cn("flex flex-col w-75", className)}>
            
            <ValidationError error={getFieldValidationError(id)} />
        </div>
    );
};