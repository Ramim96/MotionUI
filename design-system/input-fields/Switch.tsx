import React from "react";
import {
    Description,
    FieldError,
    Switch as HeroSwitch,
    SwitchGroup as HeroSwitchGroup,
    Label
} from "@heroui/react";
import type { LucideIcon } from "lucide-react";
// Components
import { IconVariant } from "@design-system/icons/IconVariant";
import { IconFactory } from "@design-system/icons/IconFactory";
// Interfaces
// Interface
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

// #region Types

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

// #endregion Types

const getIcon = (iconVariant?: IconVariant): LucideIcon | undefined => {

    if (!iconVariant) {
        return undefined;
    }

    return IconFactory[iconVariant];
};

// #region Switch

interface SwitchComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "variant" | "placeholder">,
    FieldValueComponentProps<string>,
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
    description,
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
                        <Label>{label}</Label>
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
            value={value}
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
                <HeroSwitch.Control>
                    <HeroSwitch.Thumb>
                    {
                        renderIcon()
                    }
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