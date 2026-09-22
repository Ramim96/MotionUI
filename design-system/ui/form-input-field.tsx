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
} from "../../interfaces/input-field";
// Types
import { InputType } from "../../types/form-input-field";
// Utils
import { cn } from "@lib/utils/css";
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
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
    description,
    placeholder,
    // FieldStatusComponentProps
    isDisabled,
    isReadOnly,
    isRequired,
    // FieldStyleComponentProps
    fullWidth,
    className,
    // Additional
    type,
    children,
    size,
    minValue,
    maxValue,
    step,
    orientation,
    formatOptions,
    ariaLabel,
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
                    variant={variant}
                    label={label}
                    description={description}
                    value={getFieldValue(name) as boolean}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    className={cn(className)}
                    size={size}
                    onChange={(value: boolean) => setFieldValue(name, value)}
                />
        }
        {
            type === "date" &&
                <DateField
                    id={id}
                    name={name}
                    label={label}
                    description={description}
                    value={getFieldValue(name) as DateValue ?? null}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value: DateValue | null) => setFieldValue(name, value)}
                />
        }
        {
            type === "email" &&
                <EmailField
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={getFieldValue(name) as string | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                />
        }
        {
            type === "number" &&
                <NumberField
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    value={getFieldValue(name) as number | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    minValue={minValue}
                    maxValue={maxValue}
                    step={step}
                    formatOptions={formatOptions}
                    aria-label={ariaLabel}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value?: number) => setFieldValue(name, value)}
                />
        }
        {
            type === "password" &&
                <PasswordField
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={getFieldValue(name) as string | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                />
        }
        {
            type === "radio" &&
                <RadioGroup
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    value={getFieldValue(name) as string | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    className={cn(className)}
                    orientation={orientation}
                    onChange={(value?: string) => setFieldValue(name, value)}
                >
                    {children}
                </RadioGroup>
        }
        {
            type === "search" &&
                <SearchField
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={getFieldValue(name) as string | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                />
        }
        {
            type === "switch" &&
                <Switch
                    id={id}
                    name={name}
                    label={label}
                    description={description}
                    isSelected={getFieldValue(name) as boolean}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    className={cn(className)}
                    onChange={(value: boolean) => setFieldValue(name, value)}
                />
        }
        {
            type === "tel" &&
                <TelField
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={getFieldValue(name) as string | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                />
        }
        {
            type === "text" &&
                <TextField
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={getFieldValue(name) as string | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                />
        }
        {
            type === "textarea" &&
                <TextareaField
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={getFieldValue(name) as string | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                />
        }
        {
            type === "url" &&
                <UrlField
                    id={id}
                    name={name}
                    variant={variant}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={getFieldValue(name) as string | undefined}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    isRequired={isRequired}
                    isInvalid={getFieldValidationError(name) !== undefined}
                    fieldError={getFieldValidationError(name)}
                    fullWidth={fullWidth}
                    className={cn(className)}
                    onChange={(value?: string) => setFieldValue(name, value)}
                />
        }
        </div>
    );
};