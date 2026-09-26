import {
    FieldError,
    TextField as HeroTextField,
    InputGroup as HeroInputGroup,
    Label
} from "@heroui/react";
// Components
import { Description } from "@design-system/ui/typography";
import { Info } from "./tooltip";
// Interface
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldGroupComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps,
    FieldValueComponentProps
} from "../../interfaces/components/input-field";
import { ChangeEvent } from "react";
// Utils
import { cn } from "@lib/utils/css-utils";

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
    tooltip,
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
                    <div className={cn("flex justify-between items-center")}>
                        <Label
                            htmlFor={id}
                            isDisabled={isDisabled}
                            isRequired={isRequired}
                            isInvalid={isInvalid}
                        >
                            {label}
                        </Label>
                        {
                            tooltip &&
                                <Info tooltipContent={tooltip} />
                        }
                    </div>
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