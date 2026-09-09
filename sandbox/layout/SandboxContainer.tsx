"use client";

import { useState } from "react";
// Components
import { AppUserContextProvider } from "@contexts/AppUserContext";
import { IconVariant } from "@icons/IconVariant";
import { ToggleSwitch } from "@input-fields/ToggleSwitch";
// Hooks
import { useAppUserContext } from "@hooks/useAppUserContext";
// Utils
import { cn } from "@utils/css";

interface SandboxContainerComponentProps {
    children: React.ReactNode;
};

export const SandboxContainer = ({ children }: SandboxContainerComponentProps) => {

    return (
        <div className={cn("w-full h-full overflow-y-auto")}>
            <AppUserContextProvider>
                <SandboxContent>{children}</SandboxContent>
            </AppUserContextProvider>
        </div>
    );
};

interface SandboxContentComponentProps {
    children: React.ReactNode;
};

const SandboxContent = ({ children }: SandboxContentComponentProps) => {

    // Hooks
    const { theme, setTheme } = useAppUserContext();

    // States
    const [toggled, setToggled] = useState<boolean>(false);

    const toggleSwitchHandler = () => {
        
        if (toggled) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }

        setToggled((prevState: boolean) => !prevState);
    };

    return (
        <div
            className={cn(
                "flex flex-col", // Positioning
                "bg-primary w-full h-full", // Box & sizing
                theme === "dark"
                    ? "dark-theme"
                    : "light-theme",
            )}
        >
            <div className={cn("flex justify-end p-5")}>
                <ToggleSwitch
                    id="theme"
                    checked={toggled}
                    iconVariantTrue={IconVariant.Sun}
                    iconVariantFalse={IconVariant.Moon}
                    containerSize={cn("w-20")}
                    onChange={(e) => {}}
                    onValueChange={() => toggleSwitchHandler()}
                />
            </div>
            <div className={cn("flex-1")}>
                {children}
            </div>
        </div>
    );
}