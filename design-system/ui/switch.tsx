import React from "react";
import {
    FieldError,
    Switch as HeroSwitch,
    SwitchGroup as HeroSwitchGroup,
    Label
} from "@heroui/react";
import type { LucideIcon } from "lucide-react";
// Components
import { Description } from "@design-system/ui/typography";
import { IconVariant } from "@design-system/icons/icon-variants";
import { IconFactory } from "@design-system/icons/icon-factory";
// Interfaces
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps
} from "../../interfaces/input-field";
// Utils
import { cn } from "@lib/utils/css";

export type LabelPositionType =
    | "left"
    | "right";

export type SwitchSizeType =
    | "sm"
    | "md"
    | "lg";

export type SwitchGroupOrientationType =
    | "vertical"
    | "horizontal";

const getIcon = (iconVariant?: IconVariant): LucideIcon | undefined => {

    if (!iconVariant) {
        return undefined;
    }

    return IconFactory[iconVariant];
};

// #region Switch

interface SwitchComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "variant" | "placeholder">,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    Omit<FieldStyleComponentProps, "fullWidth">,
    FieldBehaviourComponentProps<boolean> {
    isSelected: boolean;
    labelPosition?: LabelPositionType;
    iconVariantGeneric?: IconVariant;
    iconVariantSelected?: IconVariant;
    iconVariantUnselected?: IconVariant;
    size?: SwitchSizeType;
};

export const Switch = ({
    isSelected,
    labelPosition = "right",
    iconVariantGeneric,
    iconVariantSelected,
    iconVariantUnselected,
    size,
    // FieldBaseComponentProps
    id,
    name,
    label,
    ariaLabel,
    description,
    // FieldStatusComponentProps
    isDisabled,
    isReadOnly,
    isRequired,
    // FieldValidationComponentProps
    isInvalid,
    fieldError,
    // FieldStyleComponentProps
    className,
    // FieldBehaviourComponentProps
    onChange,
}: SwitchComponentProps) => {

    const IconGeneric = getIcon(iconVariantGeneric);
    const IconSelected = getIcon(iconVariantSelected);
    const IconUnselected = getIcon(iconVariantUnselected);

    const renderLabel = (flexPosition: "items-start" | "items-end") => {

        return (
            <div className={cn("flex flex-col", flexPosition)}>
                {
                    label &&
                        <Label htmlFor={id}>{label}</Label>
                }
                {
                    description &&
                        <Description>{description}</Description>
                }
                {
                    (isInvalid && fieldError) &&
                        <FieldError>{fieldError}</FieldError>
                }
            </div>
        );
    };

    const renderIcon = () => {

        if (IconGeneric) {
            return (
                <IconGeneric
                    size={16}
                    strokeWidth={1.5}
                />
            );
        }

        if (isSelected && IconSelected) {
            return (
                <IconSelected
                    size={16}
                    strokeWidth={1.5}
                />
            );
        }

        if (!isSelected && IconUnselected) {
            return (
                <IconUnselected
                    size={16}
                    strokeWidth={1.5}
                />
            );
        }

        return null;
    };

    return (
        <HeroSwitch
            id={id}
            name={name}
            aria-label={
                label
                    ? undefined
                    : ariaLabel
            }
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            isSelected={isSelected}
            size={size}
            className={cn(className)}
            onChange={onChange}
        >
            <HeroSwitch.Content>
                {
                    (labelPosition === "left") &&
                        renderLabel("items-end")
                }
                <HeroSwitch.Control
                    className={cn(
                        (isInvalid && fieldError ) && "border border-danger")
                    }
                >
                    <HeroSwitch.Thumb>
                    {renderIcon()}
                    </HeroSwitch.Thumb>
                </HeroSwitch.Control>
                {
                    (labelPosition === "right") &&
                        renderLabel("items-start")
                }
            </HeroSwitch.Content>
        </HeroSwitch>
    );
};

// #endregion Switch

// #region Switch group

interface SwitchGroupComponentProps {
    children: React.ReactNode;
    orientation?: SwitchGroupOrientationType;
    className?: string;
};

export const SwitchGroup = ({
    children,
    orientation = "vertical",
    className,
}: SwitchGroupComponentProps) => {

    return (
        <HeroSwitchGroup
            orientation={orientation}
            className={className}
        >
            {children}
        </HeroSwitchGroup>
    );
};

// #endregion Switch group