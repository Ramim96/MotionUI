"use client";

import { Surface } from "@heroui/react";
// Components
import { Breadcrumbs } from "@design-system/ui/breadcrumb";
import { Description, Text } from "@design-system/ui/typography";
// Utils
import { cn } from "@lib/utils/css-utils";

// #region Page

interface PageContainerComponentProps {
    children: React.ReactNode;
    className?: string;
};

export const PageContainer = ({
    children,
    className,
}: PageContainerComponentProps) => {

    return (
        <Surface
            variant="default"
            className={cn(
                className,
                "flex flex-col gap-y-2", // Positioning
                "rounded-2xl w-full h-full", // Box & sizing
            )}
        >
            {children}
        </Surface>
    );
};

// #endregion Page

// #region Page header

interface PageContainerHeaderComponentProps {
    title?: string;
    description?: string;
    enableBreadcrumbs?: boolean;
}

export const PageContainerHeader = ({
    title,
    description,
    enableBreadcrumbs,
}: PageContainerHeaderComponentProps) => {

    return (
        <section className={cn("flex flex-col gap-y-2 px-8 py-4")}>
        {
            enableBreadcrumbs &&
                <div className={cn("flex flex-col gap-y-2")}>
                    <Breadcrumbs />
                    <Text type="h2">
                        {title}
                    </Text>
                    <Description className={cn("text-muted")}>
                        {description}
                    </Description>
                </div>
        }
        </section>
    );
};

// #endregion Page header

// #region Page content

interface PageContainerContentComponentProps {
    children: React.ReactNode;
};

export const PageContainerContent = ({ children }: PageContainerContentComponentProps) => {

    return (
        <div className={cn("h-full overflow-y-auto")}>
            {children}
        </div>
    );
};

// #endregion Page content