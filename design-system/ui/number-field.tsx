import {
    FieldError, 
    NumberField as HeroNumberField,
    Label
} from "@heroui/react";
// Components
import { Description } from "@design-system/ui/typography";
// Interface
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps,
    FieldValueComponentProps
} from "../../interfaces/input-field";
// Utils
import { cn } from "@lib/utils/css";

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
};

export const NumberField = ({
    minValue,
    maxValue,
    step,
    formatOptions,
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
    ariaLabel,
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
            aria-label={
                !label
                    ? ariaLabel
                    : undefined
            }
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
            className={cn(
                fullWidth && "w-full",
                className,
            )}
            onChange={onChange}
        >
            {
                label &&
                    <Label htmlFor={id}>{label}</Label>
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