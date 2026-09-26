import React from "react";
import { Accordion as HeroAccordion, Key } from "@heroui/react";
import { LucideIcon } from "lucide-react";
// Components
import { IconVariant } from "@design-system/icons/icon-variants";
// Utils
import { cn } from "@lib/utils/css-utils";
import { getIcon } from "@lib/utils/icon-utils";

// #region Types

export type AccordionVariantType =
    | "default"
    | "surface";

// #endregion Types

// #region Accordion

interface AccordionComponentProps {
    children: React.ReactNode;
    variant?: AccordionVariantType;
    allowsMultipleExpanded?: boolean;
    expandedKeys?: Iterable<Key>;
    defaultExpandedKeys?: Iterable<Key>;
    hideSeparator?: boolean;
    // State
    isDisabled?: boolean;
    className?: string;
    onExpandedChange?: (keys: Set<Key>) => void;
};

export const Accordion = ({
    children,
    variant,
    allowsMultipleExpanded,
    expandedKeys,
    defaultExpandedKeys,
    hideSeparator, 
    // State
    isDisabled,
    className,
    onExpandedChange,
}: AccordionComponentProps) => {

    return (
        <HeroAccordion
            variant={variant}
            allowsMultipleExpanded={allowsMultipleExpanded}
            expandedKeys={expandedKeys}
            defaultExpandedKeys={defaultExpandedKeys}
            hideSeparator={hideSeparator}
            isDisabled={isDisabled}
            className={className}
            onExpandedChange={onExpandedChange}
        >
            {children}
        </HeroAccordion>
    );
};

// #endregion Accordion

// #region Accordion item

interface AccordionItemComponentProps {
    headerTitle: string;
    children: React.ReactNode;
    id?: string;
    isExpanded?: boolean;
    defaultExpanded?: boolean;
    headerIconVariant?: IconVariant;
    triggerIconVariant?: IconVariant;
    accordionHeaderClassName?: string;
    accordionBodyClassName?: string;
    onExpandedChange?: (isExpanded: boolean) => void;
};

export const AccordionItem = ({
    headerTitle,
    children,
    id,
    isExpanded,
    defaultExpanded,
    headerIconVariant,
    triggerIconVariant,
    accordionHeaderClassName,
    accordionBodyClassName,
    onExpandedChange,
}: AccordionItemComponentProps) => {

    const HeaderAccordionIcon: LucideIcon | undefined = getIcon(triggerIconVariant);
    const AccordionTriggerIcon: LucideIcon | undefined = getIcon(headerIconVariant, IconVariant.ChevronDown);

    return (
        <HeroAccordion.Item
            id={id}
            isExpanded={isExpanded}
            defaultExpanded={defaultExpanded}
            onExpandedChange={onExpandedChange}
        >
            <HeroAccordion.Heading className={cn(accordionHeaderClassName)}>
                <HeroAccordion.Trigger>
                    {
                        HeaderAccordionIcon &&
                            <HeaderAccordionIcon />
                    }
                    {headerTitle}
                    {
                        AccordionTriggerIcon &&
                            <HeroAccordion.Indicator>
                                <AccordionTriggerIcon />
                            </HeroAccordion.Indicator>
                    }
                </HeroAccordion.Trigger>
            </HeroAccordion.Heading>
            <HeroAccordion.Panel className={cn(accordionBodyClassName)}>
                <HeroAccordion.Body>
                    {children}
                </HeroAccordion.Body>
            </HeroAccordion.Panel>
        </HeroAccordion.Item>
    );
};

// #endregion Accordion item