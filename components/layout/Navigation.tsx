"use client";

import { useLayoutEffect, useRef, useState } from "react";
// Common
import { NextNavigationRouteGroup, NextNavigationRouteOption } from "../../shared/interfaces/next-navigation-route";
// Components
import { LinkButton, PrimitiveButton } from "@buttons/Button";
import { IconVariant } from "@icons/IconVariant";
import { SearchInput } from "@input-fields/Search";
import { Text } from "@text/Texts";
// Contexts
import { AppThemeType } from "@contexts/AppUserContext";
// Hooks
import { useAppUserContext } from "@hooks/useAppUserContext";
// Routes
import { GlobalNavigationRouteOptions } from "@routes/global-navigation-route-options";
// Utils
import { cn } from "@utils/css";

// #region Navbar

export const Navbar = () => {

    return (
        <nav className={cn("flex justify-start gap-x-3 ml-5")}>
        {
            GlobalNavigationRouteOptions.map((nextGlobalNavigationRouteOption: NextNavigationRouteOption, index: number) =>
                <LinkButton
                    key={`global-navigation-route-${nextGlobalNavigationRouteOption.routeOptionCode}-option-${index}`}
                    href={nextGlobalNavigationRouteOption.routeOptionPath}
                    className={cn("flex justify-center items-center gap-x-2 p-1")}
                >
                    <Text
                        className={cn(
                            "text-white-50", // Font
                            "hover:underline hover:underline-offset-8", // Effect
                        )}
                    >
                        {nextGlobalNavigationRouteOption.routeOptionName}
                    </Text>
                </LinkButton>
            )
        }
        </nav>
    );
};

// #endregion Navbar

// #region Sidebar

interface SidebarComponentProps {
    title: string;
    navigationRouteGroups: NextNavigationRouteGroup[];
};

export const Sidebar = ({
    title,
    navigationRouteGroups,
}: SidebarComponentProps) => {

    // Hooks
    const { theme } = useAppUserContext();

    // States
    const [filteredRouteGroups, setFilteredRouteGroups] = useState<NextNavigationRouteGroup[]>(navigationRouteGroups);
    const [searchString, setSearchString] = useState<string>("");

    const onSearchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        const userTypedValue: string = e.target.value.trim().toLowerCase();

        if (userTypedValue === "" || userTypedValue.length === 0) {
            setFilteredRouteGroups(navigationRouteGroups);
            setSearchString("");
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

        setSearchString(userTypedValue);
        setFilteredRouteGroups(filteredOptions);
        return;
    };

    const onSearchInputClearHandler = () => {

        setSearchString("");
        setFilteredRouteGroups(navigationRouteGroups);
        return;
    };

    return (
        <nav
            className={cn(
                "flex flex-col gap-y-4 mt-1 px-2", // Positioning
                "select-none", // Font
            )}
        >
            <section className={cn("flex flex-col gap-y-2")}>
                {/* App section title */}
                <Text className={cn("text-neutral")}>
                    {title}
                </Text>
                {/* Search field */}
                <SearchInput
                    value={searchString}
                    onChange={onSearchInputChangeHandler}
                    onClear={onSearchInputClearHandler}
                />
            </section>
            {/* Sidebar group */}
            <section>
            {
                filteredRouteGroups.map((nextFilteredRouteGroup: NextNavigationRouteGroup, index: number) =>
                    <SidebarGroup
                        key={`sidebar-group-${nextFilteredRouteGroup.groupCode}-${index}`}
                        groupName={nextFilteredRouteGroup.groupName}
                        theme={theme}
                    >
                    {
                        nextFilteredRouteGroup.routeOptions.map((routeOption: NextNavigationRouteOption, index: number) =>
                            <SidebarItem
                                key={`sidebar-item-${routeOption.routeOptionCode}-${index}-of-group-sidebar-group-${nextFilteredRouteGroup.groupCode}-${index}`}
                                name={routeOption.routeOptionName}
                                path={`${nextFilteredRouteGroup.path}${routeOption.routeOptionPath}`}
                                theme={theme}
                            />
                        )
                    }
                    </SidebarGroup>
                )
            }
            </section>
        </nav>
    );
};

// #endregion Sidebar

// #region Sidebar group

interface SidebarGroupComponentProps {
    groupName: string;
    theme: AppThemeType;
    children: React.ReactNode;
};

const SidebarGroup = ({
    groupName,
    theme,
    children,
}: SidebarGroupComponentProps) => {

    // States
    const [routeOptionsVisible, setRouteOptionsVisible] = useState<boolean>(false);
    const [routeOptionsContainerHeight, setRouteOptionsContainerHeight] = useState<number>(0);

    // Refs
    const routeOptionsContainerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {

        if (!routeOptionsContainerRef || !routeOptionsContainerRef.current?.scrollHeight) return;

        const containerClientHeight: number = routeOptionsContainerRef.current?.scrollHeight;
        
        if (routeOptionsVisible) {
            setRouteOptionsContainerHeight(containerClientHeight);
        }
        else {
            setRouteOptionsContainerHeight(0);
        }
    }, [routeOptionsVisible]);

    return (
        <div
            className={cn(
                "flex flex-col", // Positioning
                "w-full", // Box & sizing
            )}
        >
            <div>
                {/* Sidebar group button */}
                <PrimitiveButton
                    className={cn(
                        "flex justify-between items-center gap-x-2 px-1 py-2", // Positioning
                        "w-full", // Box & sizing
                        "text-primary-contrast", // Font
                    )}
                    iconVariant={IconVariant.ChevronLeft}
                    iconSize={20}
                    iconStrokeWidth={2}
                    iconPosition="right"
                    iconClassName={cn(
                        "ease-out duration-300", // Animation
                        routeOptionsVisible
                            ? "-rotate-90"
                            : "rotate-0"
                    )}
                    onClick={() => setRouteOptionsVisible((prevState: boolean) => !prevState)}
                >
                    {groupName}
                </PrimitiveButton>
            </div>
            {/* Sidebar group items container */}
            <div
                ref={routeOptionsContainerRef}
                className={cn(
                    "flex flex-col gap-y-1 px-1", // Positioning
                    "overflow-hidden", // Box & sizing
                    "transition-[height] ease-in duration-200", // Animation
                    routeOptionsContainerHeight,
                )}
                style={{ height: `${routeOptionsContainerHeight}px` }}
            >
                {children}
            </div>
        </div>
    );
};

// #endregion Sidebar group

// #region Sidebar item

interface SidebarItemComponentProps {
    name: string;
    path: string;
    theme: AppThemeType;
};

const SidebarItem = ({
    name,
    path,
    theme,
}: SidebarItemComponentProps) => {
    
    return (
        <LinkButton
            href={path}
            className={cn(
                "flex justify-start", // Positioning
                "btn-sidenav", // Box & sizing
            )}
        >
            {name}
        </LinkButton>
    );
};

// #endregion Sidebar item