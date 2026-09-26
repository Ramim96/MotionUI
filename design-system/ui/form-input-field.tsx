"use client";

// Contexts
import { useFormContext } from "@hooks/use-form-context";
// Components
import { Checkbox, CheckboxSizeType } from "@design-system/ui/checkbox";
import { DateField } from "@design-system/ui/date-field";
import { EmailField } from "@design-system/ui/email-field";
import { NumberField } from "@design-system/ui/number-field";
import { PasswordField } from "@design-system/ui/password-field";
import { RadioGroup } from "@design-system/ui/radio-field";
import { SearchField } from "@design-system/ui/search-field";
import { Switch } from "@design-system/ui/switch";
import { TelField } from "@design-system/ui/tel-field";
import { TextareaField } from "@design-system/ui/textarea-field";
import { TextField } from "@design-system/ui/text-field";
import { UrlField } from "@design-system/ui/url-field";
// Interfaces
import {
    FieldBaseComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps
} from "../../interfaces/components/input-field";
// Types
import { InputType } from "../../types/components/form-input-field";
// Utils
import { DateValue, Orientation } from "@heroui/react";

interface FormInputFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldStatusComponentProps,
    FieldStyleComponentProps {
    type: InputType;
    children?: React.ReactNode;
    size?: CheckboxSizeType;
    minValue?: number;
    maxValue?: number;
    step?: number;
    orientation?: Orientation;
    formatOptions?: Intl.NumberFormatOptions;
    ariaLabel?: string;
};

export const FormInputField = ({
    id,
    name,
    type,
    children,
    size,
    minValue,
    maxValue,
    step,
    orientation,
    formatOptions,
    ariaLabel,
    // FieldBaseComponentProps, FieldStatusComponentProps, FieldStyleComponentProps
    ...props
}: FormInputFieldComponentProps) => {
    
    // Hooks
    const { getFieldValue, setFieldValue, getFieldValidationError } = useFormContext();

    return (
        <div>
        {
            type === "checkbox" &&
                <Checkbox
                    id={id}
                    name={name}
                    size={size}
                    value={getFieldValue(name) as boolean}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value: boolean) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "date" &&
                <DateField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as DateValue ?? null}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value: DateValue | null) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "email" &&
                <EmailField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as string | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "number" &&
                <NumberField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as number | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    minValue={minValue}
                    maxValue={maxValue}
                    step={step}
                    formatOptions={formatOptions}
                    aria-label={ariaLabel}
                    onChange={(value?: number) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "password" &&
                <PasswordField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as string | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "radio" &&
                <RadioGroup
                    id={id}
                    name={name}
                    value={getFieldValue(name) as string | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    orientation={orientation}
                    onChange={(value?: string) => setFieldValue(name, value)}
                    {...props}
                >
                    {children}
                </RadioGroup>
        }
        {
            type === "search" &&
                <SearchField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as string | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "switch" &&
                <Switch
                    id={id}
                    name={name}
                    isSelected={getFieldValue(name) as boolean}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value: boolean) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "tel" &&
                <TelField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as string | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "text" &&
                <TextField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as string | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "textarea" &&
                <TextareaField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as string | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                    {...props}
                />
        }
        {
            type === "url" &&
                <UrlField
                    id={id}
                    name={name}
                    value={getFieldValue(name) as string | undefined}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                    {...props}
                />
        }
        </div>
    );
};