import { ChangeEvent } from "react";
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
// Utils
import { cn } from "@lib/utils/css";

// #region TextArea

interface TextareaFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldValueComponentProps<string| undefined>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldGroupComponentProps,
    FieldBehaviourComponentProps<string| undefined> {
        rows?: number;
        cols?: number;
        minLength?: number;
        maxLength?: number;
        rowResize?: React.CSSProperties["resize"];
        autoComplete?: string;
};

export const TextareaField = ({
    rows,
    cols,
    minLength,
    maxLength,
    rowResize,
    autoComplete,
    // FieldBaseComponentProps
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
} :TextareaFieldComponentProps) => {

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
            <HeroInputGroup
                variant={variant}
                fullWidth={fullWidth}
            >
                {
                    prefix &&
                        <HeroInputGroup.Prefix className={cn(prefixClassName)}>{prefix}</HeroInputGroup.Prefix>
                }
                <HeroInputGroup.TextArea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    rows={rows}
                    cols={cols}
                    minLength={minLength}
                    maxLength={maxLength}
                    autoComplete={autoComplete}
                    style={{resize: rowResize}}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.currentTarget.value)}
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

// #endregion TextArea