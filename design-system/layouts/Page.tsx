"use client";

import { Surface } from "@heroui/react";
// Components
import { Breadcrumbs } from "./Breadcrumb";
import { Text } from "@components/texts/Texts";
// Utils
import { cn } from "@utils/css";

// #region Page

interface PageComponentProps {
    children: React.ReactNode;
    className?: string;
};

export const Page = ({
    children,
    className,
}: PageComponentProps) => {

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

interface PageHeaderComponentProps {
    title?: string;
    description?: string;
    enableBreadcrumbs?: boolean;
}

export const PageHeader = ({
    title,
    description,
    enableBreadcrumbs,
}: PageHeaderComponentProps) => {

    return (
        <section className={cn("flex flex-col gap-y-2 px-8 py-4")}>
        {
            enableBreadcrumbs &&
                <div className={cn("flex flex-col gap-y-2")}>
                    <Breadcrumbs />
                    <Text type="h2">
                        {title}
                    </Text>
                    <Text
                        type="body-sm"
                        className={cn("text-muted")}
                    >
                        {description}
                    </Text>
                </div>
        }
        </section>
    );
};

// #endregion Page header

// #region Page content

interface PageContentComponentProps {
    children: React.ReactNode;
};

export const PageContent = ({ children }: PageContentComponentProps) => {

    return (
        <div className={cn("h-full overflow-y-auto")}>
            {children}
        </div>
    );
};

// #endregion Page content