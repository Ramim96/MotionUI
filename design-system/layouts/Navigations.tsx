"use client";

import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Key } from "@heroui/react";
// Common
import { NextNavigationRouteGroup, NextNavigationRouteOption } from "@shared/interfaces/next-navigation-route";
// Component
import { Accordion, AccordionItem } from "@design-system/Accordion";
import { SearchField } from "@design-system/input-fields/SearchField";
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
    code: string;
    title: string;
    navigationRouteGroups: NextNavigationRouteGroup[];
};

export const Sidenav = ({
    code,
    title,
    navigationRouteGroups,
}: SidenavComponentProps) => {

    // Hooks
    const pathname = usePathname();

    // States
    const [filteredRouteGroups, setFilteredRouteGroups] = useState<NextNavigationRouteGroup[]>(navigationRouteGroups);
    const [expandedKeys, setExpandedKeys] = useState<Iterable<Key>>([]);
    const [seachFieldValue, setSearchFieldValue] = useState<string>();

    const pathnameSegments = pathname
        .split("/")
        .filter(Boolean) ?? "";

    // URL segments
    const selectedKey: string = `/${pathnameSegments[0]}/${pathnameSegments[1]}`;

    // Use effect
    useLayoutEffect(() => {

        if (typeof window === "undefined") {
            setExpandedKeys([]);

            return;
        }

        const stored: string | null = localStorage.getItem(`${code}`);

        if (stored === null || stored === undefined) {
            setExpandedKeys([]);

            return;
        }

        setExpandedKeys(stored.split(",") as Key[]);
  }, [code]);

    // Funtionalities
    const onSearchInputChangeHandler = (value: string) => {

        const userTypedValue: string = value.trim().toLowerCase();

        if (userTypedValue === "" || userTypedValue.length === 0) {
            setFilteredRouteGroups(navigationRouteGroups);
            setSearchFieldValue(`${title}`);
            return;
        }

        const filteredOptions: NextNavigationRouteGroup[] = navigationRouteGroups
            .map((nextNavigationRouteGroup: NextNavigationRouteGroup) => {

                const resultOptionGroup: NextNavigationRouteGroup = {...nextNavigationRouteGroup};

                resultOptionGroup.routeOptions = nextNavigationRouteGroup.routeOptions
                    .filter((nextRouteOption: NextNavigationRouteOption) => nextRouteOption.routeOptionName.toLowerCase().includes(userTypedValue));
                
                return resultOptionGroup;
            }
        )
        .filter((nextFilteredOption: NextNavigationRouteGroup) => nextFilteredOption.routeOptions.length > 0);

        setSearchFieldValue(userTypedValue);
        setFilteredRouteGroups(filteredOptions);
        return;
    };

    const handleExpandChange = (keys: Set<Key>) => {

        const expandedAccordionItems: Key[] = [...keys];
        localStorage.setItem(`${code}`, expandedAccordionItems.toString());
    };

    return (
        <nav
            className={cn(
                "flex flex-col gap-y-4 mt-1 px-2", // Positioning
                "select-none", // Font
            )}
        >
            {/* App section title */}
            <SearchField
                id="side-nav-search"
                label={title}
                description="Filter the navigation options"
                value={seachFieldValue}
                onChange={(value: string) => onSearchInputChangeHandler(value)}
            />
            <Accordion
                allowsMultipleExpanded
                hideSeparator
                className="w-full"
                expandedKeys={expandedKeys}
                onExpandedChange={handleExpandChange}
            >
            {
                filteredRouteGroups.map((nextFilteredRouteGroup: NextNavigationRouteGroup) =>
                    <AccordionItem
                        key={nextFilteredRouteGroup.groupCode}
                        id={nextFilteredRouteGroup.groupCode}
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