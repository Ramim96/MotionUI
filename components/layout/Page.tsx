"use client";

// Components
import { Breadcrumbs } from "@layout/Breadcrumb";
import { Text, Title } from "@text/Texts";
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
        <div
            className={cn(
                className,
                "flex flex-col gap-y-2", // Positioning
                "rounded-md bg-secondary w-full h-full", // Box & sizing
            )}
        >
            {children}
        </div>
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
        <section className={cn("flex flex-col gap-y-2 p-4")}>
        {
            enableBreadcrumbs &&
                <div>
                    <Breadcrumbs />
                    <header className={cn("flex flex-col gap-y-1 mt-2")}>
                        <Title className={cn("text-primary-contrast")}>
                            {title}
                        </Title>
                        <Text className={cn("text-neutral")}>
                            {description}
                        </Text>
                    </header>
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