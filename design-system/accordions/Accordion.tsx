import React, { Key } from "react";
import { Accordion as HeroAccordion } from "@heroui/react";
import { LucideIcon } from "lucide-react";
// Components
import { IconVariant } from "@components/icons/IconVariant";
// Types
import { AccordionVariantType } from "./Types";
// Utils
import { cn } from "@utils/css";
import { getIcon } from "@utils/icon-utils";

// #region Accordion

interface AccordionComponentProps {
    children: React.ReactNode;
    variant?: AccordionVariantType;
    hideSeparator?: boolean;
    allowsMultipleExpanded?: boolean;
    isDisabled?: boolean;
    className?: string;
};

export const Accordion = ({
    children,
    variant,
    hideSeparator,
    allowsMultipleExpanded,
    isDisabled,
    className,
}: AccordionComponentProps) => {

    return (
        <HeroAccordion
            variant={variant}
            hideSeparator={hideSeparator}
            allowsMultipleExpanded={allowsMultipleExpanded}
            isDisabled={isDisabled}
            className={className}
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
    headerIconVariant?: IconVariant;
    triggerIconVariant?: IconVariant;
    accordionHeaderClassName?: string;
    accordionBodyClassName?: string;
};

export const AccordionItem = ({
    headerTitle,
    children,
    headerIconVariant,
    triggerIconVariant,
    accordionHeaderClassName,
    accordionBodyClassName,
}: AccordionItemComponentProps) => {

    const HeaderAccordionIcon: LucideIcon | undefined = getIcon(triggerIconVariant);
    const AccordionTriggerIcon: LucideIcon | undefined = getIcon(headerIconVariant, IconVariant.ChevronDown);

    return (
        <HeroAccordion.Item>
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