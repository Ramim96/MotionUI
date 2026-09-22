import React from "react";
import {
    Button as HeroButton,
    Link as HeroLink,
    Spinner,
} from "@heroui/react";
import type { LucideIcon } from "lucide-react";
// Components
import type { IconVariant } from "@design-system/icons/icon-variants";
// Utils
import { cn } from "@lib/utils/css";
import { getIcon } from "@lib/utils/icon-utils";

// #region Types

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline"
    | "ghost"
    | "danger"
    | "danger-soft";

export type ButtonSize =
    | "sm"
    | "md"
    | "lg";

// #endregion Types

interface BaseButtonComponentProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isDisabled?: boolean;
    isPending?: boolean;
    className?: string;
    onClick?: () => void;
};

// #region Button

export interface ButtonComponentProps extends BaseButtonComponentProps {
    children: React.ReactNode;
    fullWidth?: boolean;
    iconVariant?: IconVariant;
    ariaLabel?: string;
};

export const Button = ({
    // ButtonComponentProps
    children,
    fullWidth,
    iconVariant,
    ariaLabel,
    // BaseButtonComponentProps
    variant = "primary",
    size,
    isDisabled,
    isPending,
    className,
    onClick,
}: ButtonComponentProps) => {

    const IconComponent: LucideIcon | undefined = getIcon(iconVariant);

    return (
        <HeroButton
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            isDisabled={isDisabled}
            isPending={isPending}
            aria-label={ariaLabel}
            className={cn(
                className,
                "transition-colors duration-300",
            )}
            onPress={onClick}
        >
            {
                isPending &&
                    <Spinner size="sm" color="current" />
            }
            {
                (!isPending && iconVariant && IconComponent) &&
                    <IconComponent size={18} strokeWidth={1.5} />
            }
            {children}
        </HeroButton>
    );
};

// #endregion Button

// #region Icon button

export interface IconButtonComponentProps extends BaseButtonComponentProps {
    iconVariant: IconVariant;
    ariaLabel: string;
};

export const IconButton = ({
    // IconButtonComponentProps
    iconVariant,
    ariaLabel,
    // BaseButtonComponentProps
    variant = "primary",
    size,
    isDisabled,
    isPending,
    className,
    onClick,
}: IconButtonComponentProps) => {

    const IconComponent: LucideIcon | undefined = getIcon(iconVariant);

    return (
        <HeroButton
            variant={variant}
            size={size}
            className={className}
            isIconOnly
            isDisabled={isDisabled}
            isPending={isPending}
            aria-label={ariaLabel}
            onPress={onClick}
        >
            {
                isPending &&
                    <Spinner size="sm" color="current" />
            }
            {
                (!isPending && IconComponent) &&
                    <IconComponent size={18} strokeWidth={1.5} />
            }
        </HeroButton>
    );
};


// #endregion Icon button

// #region Link button

export interface LinkComponentProps {
    href: string;
    children: React.ReactNode;
    noUnderline?: boolean;
    underlineOffset?: 1 | 2 | 3 | 4;
    className?: string;
}

const underlineOffsetClasses: Record<number, string> = {
    1: "underline-offset-1",
    2: "underline-offset-2",
    3: "underline-offset-3",
    4: "underline-offset-4",
};

export const Link = ({
    // LinkComponentProps
    href,
    children,
    noUnderline,
    underlineOffset,
    className,
}: LinkComponentProps) => {

    return (
        <HeroLink
            href={href}
            className={cn(
                className,
                noUnderline && "no-underline",
                underlineOffset && underlineOffsetClasses[underlineOffset],
            )}
        >
            {children}
        </HeroLink>
    );
};

// #endregion Link button