"use client";

// Components
import { Header } from "@layout/Header";
import { Footer } from "@layout/Footer";
// Contexts
import { AppUserContextProvider } from "@contexts/AppUserContext";
// Utils
import { cn } from "@utils/css";
import { useAppUserContext } from "@hooks/useAppUserContext";

// #region App root

interface RootComponentProps {
    children: React.ReactNode;
}

export const Root = ({ children }: RootComponentProps) => {

    return (
        <AppUserContextProvider>
            <RootContainer>
                {children}
            </RootContainer>
        </AppUserContextProvider>
    );
};

// #endregion App root

// #region App root container

interface RootContainerComponentProps {
    children: React.ReactNode;
};

const RootContainer = ({ children }: RootContainerComponentProps) => {

    // Hooks
    const { theme } = useAppUserContext();

    return (
        <main
            className={cn(
                "flex flex-col w-dvw h-dvh", // Positioning
                "bg-primary overflow-hidden", // Box & sizing
                theme === "dark"
                    ? "dark-theme"
                    : "light-theme",
            )}
        >
            <Header />
            {children}
            <Footer />
        </main>
    );
};

// #endregion App root container