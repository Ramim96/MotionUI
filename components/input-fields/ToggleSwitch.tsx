"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";
// Components
import { PrimitiveButton } from "@buttons/Button";
import { IconFactory } from "@icons/IconFactory";
import { IconVariant } from "@icons/IconVariant";
import { Container } from "@input-fields/InputContainer";
// Contexts
import { FormFieldDataType } from "@contexts/FromContext";
// Utils
import { cn } from "@utils/css";

export interface ToggleSwitchComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    helperText?: string;
    tooltip?: string;
    containerSize?: string;
    iconVariantTrue?: IconVariant;
    iconVariantFalse?: IconVariant;
    onValueChange?: (value: FormFieldDataType) => void;
};

export const ToggleSwitch = ({
    id,
    name,
    label,
    required,
    disabled,
    readOnly,
    placeholder,
    helperText,
    tooltip,
    checked,
    className,
    containerSize,
    iconVariantTrue,
    iconVariantFalse,
    onValueChange,
    ...props
}: ToggleSwitchComponentProps) => {

    // States
    const [toggled, setToggled] = useState<boolean>(checked ?? false);

    // Icons
    const ToggleActive: LucideIcon | undefined = iconVariantTrue
        ? IconFactory[iconVariantTrue]
        : undefined;

    const ToggleInactive: LucideIcon | undefined = iconVariantFalse
        ? IconFactory[iconVariantFalse]
        : undefined;

    const toggleWitchHandler = () => {

        setToggled((prevState: boolean) => !prevState);
        onValueChange?.(!toggled);
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
            <PrimitiveButton
                className={cn(
                    "flex items-center", // Positioning
                    "bg-teal-300 rounded-full w-13 h-7", // Box & sizing
                    (!disabled && !readOnly) && "cursor-pointer", // Effect
                    (disabled || readOnly) && "cursor-not-allowed", // Disabled
                )}
                onClick={() =>
                    (!disabled && !readOnly)
                        ? toggleWitchHandler()
                        : undefined
                }
            >
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled || readOnly}
                    checked={toggled}
                    className={cn("hidden")}
                    onChange={undefined}
                    {...props}
                />
                <div
                    className={cn(
                        className,
                        "flex justify-center items-center", // Positioning
                        "rounded-full bg-zinc-50 w-6 h-6", // Box & sizing
                        "transition-transform duration-300", // Animation
                        toggled
                            ? "translate-x-full"
                            : "translate-x-1",
                    )}
                >
                {
                    (toggled && iconVariantTrue && ToggleActive) &&
                        <ToggleActive
                            size={17}
                            strokeWidth={2}
                            className={cn(
                                "text-teal-300",  // Font
                                (!disabled && !readOnly) && "cursor-pointer", // Effect
                                (disabled || readOnly) && "cursor-not-allowed", // Disabled
                            )}
                        />
                }
                {
                    (!toggled && iconVariantFalse && ToggleInactive) &&
                        <ToggleInactive
                            size={17}
                            strokeWidth={2}
                            className={cn(
                                "text-teal-300",  // Font
                                (!disabled && !readOnly) && "cursor-pointer", // Effect
                                (disabled || readOnly) && "cursor-not-allowed", // Disabled
                            )}
                        />
                }
                </div>
            </PrimitiveButton>
        </Container>
    );
};