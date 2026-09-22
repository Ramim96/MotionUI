"use client";

import { createContext, useState } from "react";

export type AppThemeType = "dark" | "light";

export interface AppUserContextProps {
    theme: AppThemeType;
    setTheme: (value: AppThemeType) => void;
};

interface AppUserContextProviderProps {
    children: React.ReactNode;
};

// #region Context

export const AppUserContext = createContext<any | undefined>(undefined);

// #endregion Context

// #region Context provider

export const AppUserContextProvider = ({ children }: AppUserContextProviderProps) => {

    const [theme, setTheme] = useState<AppThemeType>("dark");

    const contextValue = {
        theme,
        setTheme,
    };

    return (
        <AppUserContext.Provider value={contextValue}>
            {children}
        </AppUserContext.Provider>
    );
};

// #endregion Context provider