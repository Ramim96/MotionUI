import { LucideIcon } from "lucide-react";
// Components
import { IconFactory } from "@icons/IconFactory";
import { IconVariant } from "@icons/IconVariant";
import { Text } from "@text/Texts";
// Utils
import { cn } from "@utils/css";
import { Tooltip } from "@tooltips/Tooltips";

// #region Input field variant enum

export const enum InputFieldVariant {
    Text,
    Number,
    Checkbox,
    Email,
    Password,
    Search,
    Tel,
    Url,
    Range,
    Date,
    // Radio,
    // File,
    // Color,
    // Time,
    // DateTimeLocal,
};

// #endregion Input field variant enum

export type LabelPosition = "top" | "right" | "left";

// #region Container

interface ContainerComponentProps {
    id?: string;
    label?: string;
    required?: boolean;
    helperText?: string;
    tooltip?: string;
    size?: string;
    labelPosition?: LabelPosition;
    children: React.ReactNode;
};

export const Container = ({
    id,
    label,
    required,
    helperText,
    tooltip,
    size,
    labelPosition = "top",
    children,
}: ContainerComponentProps) => {

    return (
        <div
            className={cn(
                "flex flex-col gap-y-1", // Positioning
                size ?? "w-full",
            )}
        >
            {   // Place items on a row basis for checkboxes
                (labelPosition === "right") &&
                    <div className={cn("flex gap-x-2")}>
                        {children}
                        {
                            (label && id) &&
                                <Label
                                    id={id}
                                    info={tooltip}
                                    required={required}
                                >
                                    {label}
                                </Label>
                        }
                    </div>
            }
            {   // Place items on a column basis
                (labelPosition === "top") &&
                    <div className={cn("flex flex-col gap-y-1")}>
                    {
                        (label && id) &&
                            <Label
                                id={id}
                                info={tooltip}
                                required={required}
                            >
                                {label}
                            </Label>
                    }
                    {children}
                </div>
            }
            {   // Place items on a column basis
                (labelPosition === "left") &&
                    <div className={cn("flex gap-x-2")}>
                    {
                        (label && id) &&
                            <Label
                                id={id}
                                info={tooltip}
                                required={required}
                            >
                                {label}
                            </Label>
                    }
                    {children}
                </div>
            }
            {
                helperText &&
                    <HelperText>
                        {helperText}
                    </HelperText>
            }
        </div>
    );
};

// #endregion Container

// #region Input container

interface InputContainerComponentProps {
    children: React.ReactNode;
    disabled?: boolean;
};

export const InputContainer = ({
    children,
    disabled,
}: InputContainerComponentProps) => {

    return (
        <div
            className={cn(
                "relative flex justify-between items-center", // Positioning
                "border border-neutral rounded-md w-full", // Box & sizing
                !disabled && "focus-within:border-2 focus-within:border-primary-contrast", // Effect
                "transition-colors duration-300", // Animation
            )}
        >
            {children}
        </div>
    );
};

// #endregion Input container

// #region Label

interface LabelComponentProps {
    id: string;
    required?: boolean;
    info?: string;
    children: React.ReactNode;
};

export const Label = ({
    id,
    required,
    info,
    children
}: LabelComponentProps) => {

    const InfoIcon: LucideIcon = IconFactory[IconVariant.Info];

    return (
        <div className={cn(
            "flex justify-between items-center", // Positioning
            "w-full", // Box & sizing
        )}>
            <label
                htmlFor={id}
                className={cn(
                    "flex justify-between items-center gap-x-2", // Positioning
                    "w-full", // Box & sizing
                )}
            >
                <div className={cn("flex justify-start items-center")}>
                    <Text className={cn("text-primary-contrast")}>{children}</Text>
                    {
                        required &&
                            <Text
                                size={cn("text-lg")}
                                className={cn("text-red-500")}
                            >
                                *
                            </Text>
                    }
                </div>
            </label>
            {
                info &&
                    <div className={cn("flex justify-center items-center")}>
                        <Tooltip tooltipContent={info}>
                            <InfoIcon
                                size={20}
                                strokeWidth={1.7}
                                className={cn("text-primary-contrast")}
                            />
                        </Tooltip>
                    </div>
            }
        </div>
    );
};

// #endregion Label

// #region Helper text

interface HelperTextComponentProps {
    children: React.ReactNode;
};

export const HelperText = ({ children }: HelperTextComponentProps) => {

    return (
        <div className={cn("flex justify-start items-center wrap-break-word")}>
            <Text className={cn("text-neutral font-semibold")}>
                {children}
            </Text>
        </div>
    );
};

// #endregion Helper text