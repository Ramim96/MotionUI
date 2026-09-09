"use client";

import { useLayoutEffect, useRef, useState } from "react";
// Components
import { Text } from "@text/Texts";
// Utils
import { cn } from "@utils/css";
import { computePosition } from "@utils/floating-position";

interface TooltipComponentProps {
    children: React.ReactNode;
    tooltipContent: React.ReactNode;
    className?: string;
};

export const Tooltip = ({
    children,
    tooltipContent,
    className,
}: TooltipComponentProps) => {
    
    // States
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    // Refs
    const tooltipTriggerSectionRef = useRef<HTMLDivElement>(null);
    const tooltipSectionRef = useRef<HTMLDivElement>(null);
    const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Use layout effect
    useLayoutEffect(() => {

        if (!showTooltip) {
            return;
        }

        if (!tooltipTriggerSectionRef.current || !tooltipSectionRef.current) {
            return;
        }

        computePosition(tooltipTriggerSectionRef.current, tooltipSectionRef.current);
    }, [showTooltip]);

    useLayoutEffect(() => {

        return () => {
            if (tooltipTimeoutRef.current) {
                clearTimeout(tooltipTimeoutRef.current);
            }
        };
    }, []);

    // Local functions
    const handleOnMouseEnter = () => {

        tooltipTimeoutRef.current = setTimeout(() => {
            setShowTooltip(true);
        }, 500);
    };

    const handleOnMouseLeave = () => {

        if (tooltipTimeoutRef.current) {
            clearTimeout(tooltipTimeoutRef.current);
            tooltipTimeoutRef.current = null;
        }

        setShowTooltip(false);
    };
    
    return (
        <div className={cn("relative")}>
            <section
                aria-describedby="tooltip"
                ref={tooltipTriggerSectionRef}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                className={cn(
                    "wrap-break-word",
                    "cursor-pointer", // Effect
                )}
            >
                {children}
            </section>
            <section
                ref={tooltipSectionRef}
                id="tooltip"
                role="tooltip"
                className={cn(
                    className,
                    showTooltip
                        ? "block"
                        : "hidden pointer-events-none",
                    "absolute mt-2 px-2 py-1", // Positioning
                    "border rounded-md bg-secondary w-max max-w-125", // Box & sizing
                    "sm:text-sm text-primary-contrast", // Font
                )}
            >
                <Text size={cn("sm:size-sm")}>
                    {tooltipContent}
                </Text>
            </section>
        </div>
    );
};