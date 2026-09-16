import React from "react";
import {
    Description,
    Switch as HeroSwitch,
    SwitchGroup as HeroSwitchGroup,
} from "@heroui/react";
import type { LucideIcon } from "lucide-react";
// Components
import { IconVariant } from "@icons/IconVariant";
import { IconFactory } from "@icons/IconFactory";
// Types
import {
    LabelPositionType,
    SwitchGroupOrientationType,
    SwitchSizeType,
} from "./Types";
// Utils
import { cn } from "@utils/css";

const getIcon = (iconVariant?: IconVariant): LucideIcon | undefined => {

    if (!iconVariant) {
        return undefined;
    }

    return IconFactory[iconVariant];
};

// #region Switch

interface SwitchComponentProps {
    name?: string;
    label?: string;
    labelPosition?: LabelPositionType;
    description?: string;
    defaultSelected?: boolean;
    isSelected?: boolean;
    value?: string;
    iconVariantGeneric?: IconVariant;
    iconVariantSelected?: IconVariant;
    iconVariantUnselected?: IconVariant;
    size?: SwitchSizeType;
    isDisabled?: boolean;
    className?: string;
    onChange?: (isSelected: boolean) => void;
}

export const Switch = ({
    name,
    label,
    labelPosition = "right",
    description,
    defaultSelected,
    isSelected,
    value,
    iconVariantGeneric,
    iconVariantSelected,
    iconVariantUnselected,
    size,
    isDisabled,
    className,
    onChange,
}: SwitchComponentProps) => {

    const IconGeneric = getIcon(iconVariantGeneric);
    const IconSelected = getIcon(iconVariantSelected);
    const IconUnselected = getIcon(iconVariantUnselected);

    const renderLabel = (flexPosition: string) => {

        return (
            <div className={cn("flex flex-col", flexPosition)}>
                {label}
                {
                    description &&
                        <Description>
                            {description}
                        </Description>
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
            name={name}
            defaultSelected={defaultSelected}
            isSelected={isSelected}
            value={value}
            size={size}
            isDisabled={isDisabled}
            className={className}
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