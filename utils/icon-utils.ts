import { LucideIcon } from "lucide-react";
// Components
import { IconVariant } from "@components/icons/IconVariant";
import { IconFactory } from "@components/icons/IconFactory";

export const getIcon = (
    iconVariant?: IconVariant,
    defaultIconVariant?: IconVariant
): LucideIcon | undefined => {

    if (!iconVariant) {
        if (!defaultIconVariant) {
            return undefined;
        }

        return IconFactory[defaultIconVariant];
    }

    return IconFactory[iconVariant];
};