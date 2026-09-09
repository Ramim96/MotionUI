"use client";

// Components
import { DatePicker } from "@input-fields/DatePicker";
import { CheckboxInput } from "@input-fields/Checkbox";
import { NumberInput } from "@input-fields/Number";
import { ValidationError } from "@forms/Validation";
import { InputFieldVariant, LabelPosition } from "@input-fields/InputContainer";
import { TextInput } from "@input-fields/InputText";
import { PasswordInput } from "@input-fields/Password";
import { SearchInput } from "@input-fields/Search";
import { RangeInput } from "@input-fields/Range";
// Contexts
import { FormFieldDataType } from "@contexts/FromContext";
import { useFormContext } from "@hooks/useFormContextHook";
// Utils
import { cn } from "@utils/css";

interface FormInputFieldComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
    type: InputFieldVariant;
    id: string;
    label: string;
    tooltip?: string;
    helperText?: string;
    min?: number;
    max?: number;
    step?: number;
    containerSize?: string;
    labelPosition?: LabelPosition;
};

export const FormInputField = ({
    type,
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
            {
                type === InputFieldVariant.Text &&
                    <TextInput
                        type="text"
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        className={className}
                        containerSize={containerSize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(id, e.currentTarget.value as FormFieldDataType)}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Number &&
                    <NumberInput
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        min={min}
                        max={max}
                        step={step}
                        className={className}
                        containerSize={containerSize}
                        onValueChange={(value?: number) => setFieldValue(id, value as FormFieldDataType)}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Checkbox &&
                    <CheckboxInput
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        checked={getFieldValue(id) === true}
                        className={className}
                        containerSize={containerSize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(id, e.currentTarget.checked as FormFieldDataType)}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Email &&
                    <TextInput
                        type="email"
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        className={className}
                        containerSize={containerSize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(id, e.currentTarget.value as FormFieldDataType)}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Password &&
                    <PasswordInput
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        className={className}
                        containerSize={containerSize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(id, e.currentTarget.value as FormFieldDataType)}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Search &&
                    <SearchInput
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        className={className}
                        containerSize={containerSize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(id, e.currentTarget.value as FormFieldDataType)}
                        onClear={() => setFieldValue(id, "")}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Tel &&
                    <TextInput
                        type="tel"
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        className={className}
                        containerSize={containerSize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(id, e.currentTarget.value as FormFieldDataType)}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Url &&
                    <TextInput
                        type="url"
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        className={className}
                        containerSize={containerSize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(id, e.currentTarget.value as FormFieldDataType)}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Range &&
                    <RangeInput
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        className={className}
                        containerSize={containerSize}
                        onValueChange={(value: number) => setFieldValue(id, value as FormFieldDataType)}
                        {...props}
                    />
            }
            {
                type === InputFieldVariant.Date &&
                    <DatePicker
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        helperText={helperText}
                        tooltip={tooltip}
                        value={getInputValue(getFieldValue(id))}
                        className={className}
                        containerSize={containerSize}
                        onValueChange={(value: string) => setFieldValue(id, value as FormFieldDataType)}
                        {...props}
                    />
            }
            <ValidationError error={getFieldValidationError(id)} />
        </div>
    );
};