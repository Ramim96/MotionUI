import { Tooltip as HeroTooltip } from "@heroui/react";
import { LucideIcon } from "lucide-react";
// Components
import { IconVariant } from "@design-system/icons/icon-variants";
import { IconFactory } from "@design-system/icons/icon-factory";
// Types
import { TooltipPlacementType, TooltipTriggerType } from "../../types/components/input-field";
// Utils
import { cn } from "@lib/utils/css-utils";

// #region Tooltip

interface TooltipComponentProps {
    children: React.ReactNode;
    tooltipContent: React.ReactNode;
    isDisabled?: boolean;
    delay?: number;
    closeDelay?: number;
    trigger?: TooltipTriggerType;
    showArrow?: boolean;
    offset?: number;
    placement?: TooltipPlacementType;
    className?: string;
    triggerClassName?: string;
};

export const Tooltip = ({
    children,
    tooltipContent,
    isDisabled,
    delay = 1,
    closeDelay = 0,
    trigger = "hover",
    showArrow = true,
    offset,
    placement,
    className,
    triggerClassName,
}: TooltipComponentProps) => {

    return (
        <HeroTooltip
            trigger={trigger}
            isDisabled={isDisabled}
            delay={delay}
            closeDelay={closeDelay}
        >
            <HeroTooltip.Trigger
                className={cn(
                    !isDisabled && "cursor-pointer",
                    triggerClassName
                )}
            >
                {children}
            </HeroTooltip.Trigger>
            <HeroTooltip.Content
                showArrow={showArrow}
                offset={offset}
                placement={placement}
                className={cn(className)}
            >
                {tooltipContent}
            </HeroTooltip.Content>
        </HeroTooltip>
    );
};

// #endregion Tooltip

// #region Info

interface InfoComponentProps
    extends Omit<TooltipComponentProps, "children"> {};

const InfoIcon: LucideIcon = IconFactory[IconVariant.Info];

export const Info = ({
    ...props
}: InfoComponentProps) => {
    
    return (
        <Tooltip {...props}>
            <InfoIcon size={18} />
        </Tooltip>
    );
};

// #endregion Info