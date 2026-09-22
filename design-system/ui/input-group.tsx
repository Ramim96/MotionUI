import {
    FieldError,
    TextField as HeroTextField,
    InputGroup as HeroInputGroup,
    Label
} from "@heroui/react";
// Components
import { Description } from "@design-system/ui/typography";
// Interface
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldGroupComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps,
    FieldValueComponentProps
} from "../../interfaces/input-field";
import { ChangeEvent } from "react";
// Utils
import { cn } from "@lib/utils/css";

interface InputGroupComponentProps extends
    FieldBaseComponentProps,
    FieldValueComponentProps<string | undefined>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldGroupComponentProps,
    FieldBehaviourComponentProps<string | undefined> {};

export const InputGroup = ({
    // FieldBaseComponentProps
    type,
    id,
    name,
    variant = "primary",
    label,
    ariaLabel,
    description,
    placeholder,
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
    // FieldGroupComponentProps
    prefix,
    suffix,
    prefixClassName,
    suffixClassName,
    // FieldBehaviourComponentProps
    onChange,
}: InputGroupComponentProps) => {

    return (
        <HeroTextField
            aria-label={
                !label
                    ? ariaLabel
                    : undefined
            }
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            fullWidth={fullWidth}
            className={cn(className)}
        >
            {
                label &&
                    <Label htmlFor={id}>{label}</Label>
            }
            <HeroInputGroup variant={variant} fullWidth={fullWidth}>
                {
                    prefix &&
                        <HeroInputGroup.Prefix className={cn(prefixClassName)}>{prefix}</HeroInputGroup.Prefix>
                }
                <HeroInputGroup.Input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
                />
                {
                    suffix &&
                        <HeroInputGroup.Suffix className={cn(suffixClassName)}>{suffix}</HeroInputGroup.Suffix>
                }
            </HeroInputGroup>
            {
                description &&
                    <Description>{description}</Description>
            }
            {
                (isInvalid && fieldError) &&
                    <FieldError>{fieldError}</FieldError>
            }
        </HeroTextField>
    );
};