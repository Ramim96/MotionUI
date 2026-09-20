import {
    Description,
    FieldError, 
    NumberField as HeroNumberField,
    Label
} from "@heroui/react";
// Interface
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps,
    FieldValueComponentProps
} from "../../interfaces/InputField";
// Utils
import { cn } from "@utils/css";

interface InputGroupComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "placeholder">,
    FieldValueComponentProps<number | undefined>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<number | undefined> {
    minValue?: number;
    maxValue?: number;
    step?: number;
    formatOptions?: Intl.NumberFormatOptions;
    ariaLabel?: string;
};

export const NumberField = ({
    minValue,
    maxValue,
    step,
    formatOptions,
    ariaLabel,
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
    description,
    // FieldValueComponentProps
    value,
    // FieldStatusComponentProps
    isDisabled,
    isReadOnly,
    isRequired,
    // FieldValidationComponentProps
    isInvalid,
    fieldError,
    // FieldStyleComponentProps
    fullWidth,
    className,
    // FieldBehaviourComponentProps
    onChange,
}: InputGroupComponentProps) => {

    return (
        <HeroNumberField
            id={id}
            name={name}
            variant={variant}
            value={value}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            formatOptions={formatOptions}
            aria-label={ariaLabel}
            className={cn(
                fullWidth && "w-full",
                className,
            )}
            onChange={onChange}
        >
            {
                label &&
                    <Label>{label}</Label>
            }
            <HeroNumberField.Group>
                <HeroNumberField.DecrementButton />
                <HeroNumberField.Input />
                <HeroNumberField.IncrementButton />
            </HeroNumberField.Group>
            {
                description &&
                    <Description>{description}</Description>
            }
            {
                (isInvalid && fieldError) &&
                    <FieldError>{fieldError}</FieldError>
            }
        </HeroNumberField>
    );
};

// #endregion TextArea