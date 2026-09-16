"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
// Common
import { NextNavigationRouteGroup, NextNavigationRouteOption } from "@shared/interfaces/next-navigation-route";
// Component
import { Accordion, AccordionItem } from "@components/accordions/Accordion";
import { IconFactory } from "@components/icons/IconFactory";
import { IconVariant } from "@components/icons/IconVariant";
// Routes
import { GlobalNavigationRouteOptions } from "@routes/global-navigation-route-options";
// Utils
import { cn } from "@utils/css";

// #region Global navigation

export const GlobalNavigation = () => {

    // Hooks
    const pathname = usePathname();

    const selectedKey = pathname
        .split("/")
        .filter(Boolean)[0] ?? "";

    return (
        <nav className={cn("flex gap-x-1")}>
        {
            GlobalNavigationRouteOptions.map((nextGlobalNavigationRouteOption: NextNavigationRouteOption) => {

                const isSelected = selectedKey === nextGlobalNavigationRouteOption.routeOptionCode;
                
                return (
                    <Link
                        key={nextGlobalNavigationRouteOption.routeOptionCode}
                        href={nextGlobalNavigationRouteOption.routeOptionPath}
                        className={cn(
                            isSelected && "border-b-2 border-b-accent text-muted",
                            isSelected
                                ? "text-muted"
                                : "text-neutral-0", // Font
                            "px-2 py-1", // Positioning
                            "w-max", // Box & sizing
                            "tracking-wider", // Font
                            "hover:text-muted", // Effect
                            "transition-colors duration-300", // Animation
                            "sm:text-sm", // Responsive
                        )}
                    >
                        {nextGlobalNavigationRouteOption.routeOptionName}
                    </Link>
                );
            })
        }
        </nav>
    );
};

// #endregion Global navigation

// #region Side navigation

interface SidenavComponentProps {
    title: string;
    navigationRouteGroups: NextNavigationRouteGroup[];
};

export const Sidenav = ({
    title,
    navigationRouteGroups,
}: SidenavComponentProps) => {

    // Hooks
    const pathname = usePathname();

    const pathnameSegments = pathname
        .split("/")
        .filter(Boolean) ?? "";

    const selectedKey: string = `/${pathnameSegments[0]}/${pathnameSegments[1]}`;

    // States
    const [filteredRouteGroups, setFilteredRouteGroups] = useState<NextNavigationRouteGroup[]>(navigationRouteGroups);

    const AccordionTriggerIcon: LucideIcon = IconFactory[IconVariant.ChevronDown];

    // const onSearchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    //     const userTypedValue: string = e.target.value.trim().toLowerCase();

    //     if (userTypedValue === "" || userTypedValue.length === 0) {
    //         setFilteredRouteGroups(navigationRouteGroups);
    //         setSearchString("");
    //         return;
    //     }

    //     const filteredOptions: NextNavigationRouteGroup[] = navigationRouteGroups
    //         .map((nextNavigationRouteGroup: NextNavigationRouteGroup) => {

    //             const resultOptionGroup: NextNavigationRouteGroup = {...nextNavigationRouteGroup};

    //             resultOptionGroup.routeOptions = nextNavigationRouteGroup.routeOptions
    //                 .filter((nextRouteOption: NextNavigationRouteOption) => nextRouteOption.routeOptionName.toLowerCase().includes(userTypedValue));
                
    //             return resultOptionGroup;
    //         }
    //     )
    //     .filter((nextFilteredOption: NextNavigationRouteGroup) => nextFilteredOption.routeOptions.length > 0);

    //     setSearchString(userTypedValue);
    //     setFilteredRouteGroups(filteredOptions);
    //     return;
    // };

    return (
        <nav
            className={cn(
                "flex flex-col gap-y-4 mt-1 px-2", // Positioning
                "select-none", // Font
            )}
        >
            {/* App section title */}
            <div className={cn("flex flex-col gap-y-2")}>
                <p className={cn("text-muted")}>{title}</p>
            </div>
            <Accordion
                allowsMultipleExpanded
                className="w-full"
            >
            {
                filteredRouteGroups.map((nextFilteredRouteGroup: NextNavigationRouteGroup) =>
                    <AccordionItem
                        key={`side-nav-${nextFilteredRouteGroup.groupCode}`}
                        headerTitle={nextFilteredRouteGroup.groupName}
                    >
                        <div className={cn("flex flex-col")}>
                        {
                            nextFilteredRouteGroup.routeOptions.map((routeOption: NextNavigationRouteOption) => {

                                const href: string = `${nextFilteredRouteGroup.path}${routeOption.routeOptionPath}`;
                                const isSelected = selectedKey === href;

                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={cn(
                                            isSelected
                                                ? "border-l-2 border-l-foreground text-foreground"
                                                : "border-l text-muted",
                                            "px-4 py-2", // Positioning
                                            "w-full", // Box & sizing
                                            "tracking-wider", // Font
                                            "hover:text-foreground", // Effect
                                            "transition-colors duration-300", // Animation
                                            "sm:text-sm", // Responsive
                                        )}
                                    >
                                        {routeOption.routeOptionName}
                                    </Link>
                                );
                            })
                        }
                        </div>
                    </AccordionItem>
                )
            }
            </Accordion>
        </nav>
    );
};

// #endregion Sidenav