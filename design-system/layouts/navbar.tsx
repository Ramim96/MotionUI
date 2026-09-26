"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
// Common
import { NextNavigationRouteOption } from "../../interfaces/components/next-navigation-route";
// Routes
import { GlobalNavigationRouteOptions } from "@routes/global-navigation-route-options";
// Utils
import { cn } from "@lib/utils/css-utils";

// #region Navbar

export const Navbar = () => {

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

// #endregion Navbar