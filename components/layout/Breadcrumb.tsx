"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
// Components
import { LinkButton } from "@buttons/Button";
import { IconVariant } from "@icons/IconVariant";
import { Text } from "@text/Texts";
// Utils
import { cn } from "@utils/css";

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
        <div
            className={cn(
                "flex", // Positioning
                "select-none", // Font
            )}
        >
        {
            breadcrumbs.length === 0
            ?   (<></>)
            :   (
                    breadcrumbs.map((nextBreadcrumb: string, index: number) => {
                        
                        if (index !== breadcrumbs.length - 1) { // Last element should not be a clickable link
                            hrefPath += `/${nextBreadcrumb}`;
                        }

                        if (index === breadcrumbs.length - 1) { // Last element should not be a clickable link
                            return (
                                <Text
                                    key={`breadcrumb-path-${nextBreadcrumb}`}
                                    className={cn(
                                        "flex justify-start items-center gap-x-1 mr-1", // Positioning
                                        "text-neutral", // Font
                                    )}
                                    size={cn("sm:text-[0.8rem] md:text-[0.9rem]")}
                                >
                                    {nextBreadcrumb}
                                </Text>
                            );
                        }
                        else {
                            return (
                                <LinkButton
                                    key={`breadcrumb-path-${nextBreadcrumb}`}
                                    href={hrefPath}
                                    className={cn(
                                        "flex justify-start items-center gap-x-1 mr-1", // Positioning
                                        "text-neutral", // Font
                                        "hover:underline hover:underline-offset-8", // Effect
                                    )}
                                    size={cn("sm:text-[0.8rem] md:text-[0.9rem]")}
                                    iconVariant={IconVariant.ChevronRight}
                                    iconPosition="right"
                                >
                                    {nextBreadcrumb}
                                </LinkButton>
                            );
                        }
                    }
                )
        )}
        </div>
    );
};