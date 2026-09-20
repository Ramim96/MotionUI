import {
    FieldError,
    TextField as HeroTextField,
    InputGroup as HeroInputGroup,
    Label,
    Description
} from "@heroui/react";
// Interface
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldGroupComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps,
    FieldValueComponentProps
} from "../../interfaces/InputField";
import { ChangeEvent } from "react";
// Utils
import { cn } from "@utils/css";

interface InputGroupComponentProps extends
    FieldBaseComponentProps,
    FieldValueComponentProps<string>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldGroupComponentProps,
    FieldBehaviourComponentProps<string> {};

export const InputGroup = ({
    // FieldBaseComponentProps
    type,
    id,
    name,
    variant = "primary",
    label,
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
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            fullWidth={fullWidth}
            className={cn(className)}
        >
            {
                label &&
                    <Label>{label}</Label>
            }
            <HeroInputGroup
                variant={variant}
                fullWidth={fullWidth}
            >
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