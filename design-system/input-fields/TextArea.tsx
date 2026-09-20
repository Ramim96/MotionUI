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
// Utils
import { cn } from "@utils/css";
import { ChangeEvent } from "react";

// #region TextArea

interface TextAreaComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldValueComponentProps<string>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldGroupComponentProps,
    FieldBehaviourComponentProps<string> {
        rows?: number;
        cols?: number;
        minLength?: number;
        maxLength?: number;
        rowResize?: React.CSSProperties["resize"];
        autoComplete?: string;
};

export const TextArea = ({
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
} :TextAreaComponentProps) => {

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