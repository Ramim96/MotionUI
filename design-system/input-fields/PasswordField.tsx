"use client";

import { useState } from "react";
// Components
import { IconButton } from "@design-system/Buttons";
import { IconVariant } from "@design-system/icons/IconVariant";
import { InputGroup } from "./InputGroup";
// Interfaces
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

interface PasswordFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldValueComponentProps<string>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<string> {};

export const PasswordField = ({
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
    // FieldBehaviourComponentProps
    onChange,
}: PasswordFieldComponentProps) => {

    // States
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <InputGroup
            type={isVisible ? "text" : "password"}
            id={id}
            name={name}
            variant={variant}
            label={label}
            description={description}
            placeholder={placeholder}
            value={value}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            fieldError={fieldError}
            fullWidth={fullWidth}
            className={cn(className)}
            suffix={
                <IconButton
                    variant="ghost"
                    iconVariant={
                        isVisible
                        ? IconVariant.Eye
                        : IconVariant.EyeOff
                    }
                    ariaLabel={
                        isVisible
                        ? "Hide password"
                        : "Show password"
                    }
                    isDisabled={isDisabled || isReadOnly}
                    onClick={() => setIsVisible((prevState: boolean) => !prevState)}
                />
            }
            suffixClassName={cn("pr-0")}
            onChange={onChange}
        />
    );
};