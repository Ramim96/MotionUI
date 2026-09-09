import Link from "next/link";
import { LucideIcon } from "lucide-react";
// Components
import { IconFactory } from "@icons/IconFactory";
import { IconVariant } from "@icons/IconVariant";
import { Text } from "@text/Texts";
// Utils
import { cn } from "@utils/css";

interface ButtonComponentBodyProps {
    value?: number | string | readonly string[] | undefined;
    disabled?: boolean;
    children?: React.ReactNode;
};

interface ButtonComponentAppearanceProps {
    className?: string;
};

interface ButtonComponentTextProps {
    size?: string;
};

interface ButtonComponentIconProps {
    iconVariant?: IconVariant;
    iconOnly?: boolean;
    iconSize?: number;
    iconStrokeWidth?: number;
    iconPosition?: "left" | "right"
    iconClassName?: string;
};

interface ButtonComponentActionProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// #region Primitive button

interface PrimitiveButtonComponentProps
    extends ButtonComponentBodyProps,
    ButtonComponentAppearanceProps,
    ButtonComponentTextProps,
    ButtonComponentIconProps,
    ButtonComponentActionProps {};

export const PrimitiveButton = ({
    // ButtonComponentBodyProps
    value,
    disabled,
    children,
    // ButtonComponentAppearanceProps
    className,
    // ButtonComponentTextProps
    size,
    // ButtonComponentIconProps
    iconVariant,
    iconOnly,
    iconSize = 16,
    iconStrokeWidth = 1.8,
    iconPosition = "left",
    iconClassName,
    // ButtonComponentActionProps
    onClick,
}: PrimitiveButtonComponentProps) => {

    const Icon: LucideIcon | undefined = iconVariant && IconFactory[iconVariant];

    return (
        <button
            type="button"
            value={value}
            disabled={disabled}
            className={cn(className)}
            onClick={onClick}
        >
        {
            (iconPosition === "left" && Icon) &&
                <Icon
                    size={iconSize}
                    strokeWidth={iconStrokeWidth}
                    className={cn(iconClassName)}
                />
        }
        {
            !iconOnly &&
                <Text size={size}>{children}</Text>
        }
        {
            (iconPosition === "right" && Icon) &&
                <Icon
                    size={iconSize}
                    strokeWidth={iconStrokeWidth}
                    className={cn(iconClassName)}
                />
        }
        </button>
    );
};

// #endregion Primitive button

// #region Link button

interface LinkButtonComponentProps
    extends ButtonComponentBodyProps,
    ButtonComponentAppearanceProps,
    ButtonComponentTextProps,
    ButtonComponentIconProps {
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const LinkButton = ({
    // ButtonComponentIconProps
    href,
    onClick,
    // ButtonComponentBodyProps
    value,
    disabled,
    children,
    // ButtonComponentAppearanceProps
    className,
    // ButtonComponentTextProps
    size,
    // ButtonComponentIconProps
    iconVariant,
    iconOnly,
    iconSize,
    iconStrokeWidth,
    iconClassName,
    iconPosition,
}: LinkButtonComponentProps) => {

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn("flex justify-center items-center")}
        >
            <PrimitiveButton
                value={value}
                disabled={disabled}
                className={cn(className)}
                size={size}
                iconVariant={iconVariant}
                iconOnly={iconOnly}
                iconSize={iconSize}
                iconStrokeWidth={iconStrokeWidth}
                iconPosition={iconPosition}
                iconClassName={iconClassName}
            >
                {children}
            </PrimitiveButton>
        </Link>
    );
};

// #endregion Link button

// #region Button 

interface ButtonComponentProps
    extends ButtonComponentBodyProps,
    ButtonComponentAppearanceProps,
    ButtonComponentIconProps {
    variant: "primary" | "secondary" | "destructive";
};

export const Button = ({
    // ButtonComponentProps
    variant,
    // ButtonComponentBodyProps
    value,
    disabled,
    children,
    // ButtonComponentAppearanceProps
    className,
    // ButtonComponentIconProps
    iconVariant,
    iconOnly,
    iconSize,
    iconStrokeWidth,
    iconPosition,
    iconClassName,
}: ButtonComponentProps) => {

    return (
        <PrimitiveButton
            value={value}
            disabled={disabled}
            className={cn(
                className,
                "btn",
                variant === "primary"
                    && cn("btn-primary"),
                variant === "secondary"
                    && cn("btn-secondary"),
                variant === "destructive"
                    && cn("btn-destructive"),
            )}
            iconVariant={iconVariant}
            iconOnly={iconOnly}
            iconSize={iconSize}
            iconStrokeWidth={iconStrokeWidth}
            iconPosition={iconPosition}
            iconClassName={iconClassName}
        >
            {children}
        </PrimitiveButton>
    );
};

// #endregion Button

// #region Submit

export interface InputSubmitProps {
    type?: string;
    id?: string;
    value?: string | number | readonly string[];
    disabled?: boolean;
    className?: string;
    tooltip?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
};

export const Submit = ({
    type = "submit",
    id = "submit",
    value = "Submit",
    disabled,
    className,
    onClick,
}: InputSubmitProps) => {

    return (
        <input
            type={type}
            id={id}
            value={value}
            disabled={disabled}
            className={cn(
                className,
                "btn btn-primary"
            )}
            onClick={onClick}
        />
    );
};

// #endregion Submit

// #region Reset

export interface InputResetProps {
    type?: string;
    id?: string;
    value?: string | number | readonly string[];
    disabled?: boolean;
    className?: string;
    tooltip?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
};

export const Reset = ({
    type = "reset",
    id = "reset",
    value = "Reset",
    disabled,
    className,
    onClick,
}: InputResetProps) => {

    return (
        <input
            type={type}
            id={id}
            value={value}
            disabled={disabled}
            className={cn(
                className,
                "btn btn-destructive"
            )}
            onClick={onClick}
        />
    );
};

// #endregion Reset