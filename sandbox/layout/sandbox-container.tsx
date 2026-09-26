"use client";

// Components
import { ThemeSwitch } from "@design-system/ui/theme-switch";
// Contexts
import { AppUserContextProvider } from "@contexts/app-user-context";
// Hooks
import { useAppUserContext } from "@hooks/use-app-user-context";
// Utils
import { cn } from "../../lib/utils/css-utils";

interface SandboxContainerComponentProps {
    children: React.ReactNode;
};

// #region Sandbox container

export const SandboxContainer = ({ children }: SandboxContainerComponentProps) => {

    return (
        <div className={cn("w-full h-full overflow-y-auto")}>
            <AppUserContextProvider>
                <SandboxContent>{children}</SandboxContent>
            </AppUserContextProvider>
        </div>
    );
};

// #endregion Sandbox container

// #region Sandbox content

interface SandboxContentComponentProps {
    children: React.ReactNode;
};

const SandboxContent = ({ children }: SandboxContentComponentProps) => {

    // Hooks
    const { theme } = useAppUserContext();

    return (
        <div
            className={cn(
                "flex flex-col", // Positioning
                "bg-primary w-full h-full", // Box & sizing
                theme,
            )}
        >
            <div
                className={cn(
                    "flex justify-end p-5", // Positioning
                    "border-b border-b-neutral-800 bg-neutral-950"
                )}
            >
                <ThemeSwitch />
            </div>
            <div
                className={cn(
                    "flex-1", // Positioning
                    "bg-background", // Box & sizing
                    "text-foreground", // Font
                )}
            >
                {children}
            </div>
        </div>
    );
};

// #endregion Sandbox content