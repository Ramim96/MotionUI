"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
// Components
import { Breadcrumbs as HeroBreadcrumbs } from "@heroui/react";
// Utils
import { cn } from "@utils/css";
import { Text } from "@components/texts/Texts";

export const Breadcrumbs = () => {

    // Hooks
    const pathname: string = usePathname();

    // States
    const [breadcrumbs,] = useState<string[]>(
        pathname.length > 0
            ? pathname.split("/").slice(1, pathname.length)
            : []
    );

    // Consts
    let hrefPath: string = "";

    return (
        <HeroBreadcrumbs>
        {
            breadcrumbs.map((nextBreadcrumb: string, index: number) => {

                if (index !== breadcrumbs.length - 1) { // Last element should not be a clickable link
                    hrefPath += `/${nextBreadcrumb}`;
                }

                if (index !== breadcrumbs.length - 1) {  // Last element should not be a clickable link
                    return (
                        <HeroBreadcrumbs.Item
                            key={`breadcrumb-path-${nextBreadcrumb}`}
                            href={hrefPath}
                        >
                            <Text className={cn("text-muted")}>
                                {nextBreadcrumb}
                            </Text>
                        </HeroBreadcrumbs.Item>
                    );
                }
                else {
                    return (
                        <HeroBreadcrumbs.Item
                            key={`breadcrumb-path-${nextBreadcrumb}`}
                            className={cn("sm:text-lg")}
                        >
                            <Text>
                                {nextBreadcrumb}
                            </Text>
                        </HeroBreadcrumbs.Item>
                    );
                }
            })
        }
        </HeroBreadcrumbs>
    );
};