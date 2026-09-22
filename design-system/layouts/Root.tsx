"use client";

// Components
import { Header } from "./header";
import { Footer } from "./footer";
// Contexts
import { AppUserContextProvider } from "@contexts/app-user-context";
// Hooks
import { useAppUserContext } from "@hooks/use-app-user-context";
// Utils
import { cn } from "@lib/utils/css";

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
                "bg-background overflow-hidden", // Box & sizing
                "text-foreground", // Font
                theme,
            )}
        >
            <Header />
            {children}
            <Footer />
        </main>
    );
};

// #endregion App root container