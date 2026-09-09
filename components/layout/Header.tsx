"use client";

import { useState } from "react";
// Components
import { ToggleSwitch } from "@input-fields/ToggleSwitch";
import { MotionLogo } from "@layout/MotionLogo";
import { Navbar } from "@layout/Navigation";
// Hooks
import { useAppUserContext } from "@hooks/useAppUserContext";
// Utils
import { cn } from "@utils/css";
import { IconVariant } from "@icons/IconVariant";

export const Header = () => {

    // Hooks
    const { setTheme } = useAppUserContext();

    // States
    const [toggled, setToggled] = useState<boolean>(false);

    const toggleSwitchHandler = () => {

        if (toggled) { // If true, then the value will be toggled to false, so get dark theme
            setTheme("dark");
        }
        else { // If false, then the value will be toggled to true, so get dark light
            setTheme("light");
        }

        setToggled((prevState: boolean) => !prevState);
    };

    return (
        <header
            className={cn(
                "flex justify-between items-center px-5", // Positioning
                "border-b border-b-black-200 bg-black-950 h-18", // Box & sizing
            )}
        >
            <div className={cn("flex justify-start items-center")}>
                {/* Logo */}
                <MotionLogo
                    className={cn(
                        "ml-2 my-2", // Positioning
                        "select-none", // Font
                    )}
                />
                {/* Global navbar */}
                <Navbar />
            </div>
            <div className={cn("flex justify-start items-center")}>
                {/* Dark theme toggle switch */}
                <ToggleSwitch
                    checked={toggled}
                    iconVariantTrue={IconVariant.Sun}
                    iconVariantFalse={IconVariant.Moon}
                    onChange={(e) => {}}
                    onValueChange={() => toggleSwitchHandler()}
                />
            </div>
        </header>
    );
};