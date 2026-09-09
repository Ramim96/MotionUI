"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";
// Components
import { IconFactory } from "@icons/IconFactory";
import { IconVariant } from "@icons/IconVariant";
import { Container, InputContainer } from "@input-fields/InputContainer";
// Utils
import { cn } from "@utils/css";

// #region Input password

interface PasswordInputComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    tooltip?: string;
    containerSize?: string;
};

export const PasswordInput = ({
    type = "password",
    id,
    name,
    label,
    required,
    disabled,
    readOnly,
    placeholder,
    helperText,
    tooltip,
    value,
    className,
    containerSize,
    onChange,
    ...props
}: PasswordInputComponentProps) => {

    // States
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Components
    const EyeIcon: LucideIcon = IconFactory[IconVariant.Eye];
    const EyeOffIcon: LucideIcon = IconFactory[IconVariant.EyeOff];

    const onClickHandler = (e: React.MouseEvent<SVGSVGElement>, showPassword: boolean) => {

        e.preventDefault();

        setShowPassword(showPassword);
    };

    return (
        <Container
            id={id}
            label={label}
            required={required}
            helperText={helperText}
            tooltip={tooltip}
            size={containerSize}
        >
            <InputContainer disabled={disabled || readOnly}>
                {/* Input field */}
                <input
                    type={
                        (!disabled && !readOnly && showPassword)
                            ? "text"
                            : type
                    }
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled || readOnly}
                    placeholder={placeholder}
                    value={value}
                    className={cn(
                        className,
                        "pl-2 py-1 pr-1", // Positioning
                        "bg-transparent outline-none w-full", // Box & sizing
                        "text-primary-contrast text-sm", // Font
                        (!disabled && !readOnly) && "cursor-pointer", // Effect
                        (disabled || readOnly) && "cursor-not-allowed", // Disabled or readonly
                    )}
                    onChange={onChange}
                    {...props}
                />
                {/* Icon button */}
                <div className={cn("flex justify-center items-center pl-1 pr-2")}>
                {
                    (!disabled && !readOnly)
                        ?   showPassword
                                ?   <EyeIcon
                                        size={20}
                                        strokeWidth={1.5}
                                        className={cn(
                                            "flex justify-center items-center m-0 p-0", // Positioning
                                            "text-neutral", // Font
                                            "hover:text-primary-contrast cursor-pointer", // Effect
                                            "transition-colors duration-300", // Animation
                                        )}
                                        onClick={(e: React.MouseEvent<SVGSVGElement>) => onClickHandler(e, false)}
                                    />
                                :   <EyeOffIcon
                                        size={20}
                                        strokeWidth={1.5}
                                        className={cn(
                                            "flex justify-center items-center m-0 p-0", // Positioning
                                            "text-neutral", // Font
                                            "hover:text-primary-contrast cursor-pointer", // Effect
                                            "transition-colors duration-300", // Animation
                                        )}
                                        onClick={(e: React.MouseEvent<SVGSVGElement>) => onClickHandler(e, true)}
                                    />
                        :   <EyeOffIcon
                                size={20}
                                strokeWidth={1.5}
                                className={cn(
                                    "flex justify-center items-center m-0 p-0", // Positioning
                                    "text-neutral", // Font
                                    "cursor-not-allowed", // Effect
                                )}
                            />
                }
                </div>
            </InputContainer>
        </Container>
    );
};

// #endregion Input password