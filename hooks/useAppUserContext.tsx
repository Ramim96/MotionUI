"use client";

import { useContext } from "react";
// Contexts
import { AppUserContext } from "@contexts/AppUserContext";

export const useAppUserContext = () => {

    const context = useContext(AppUserContext);

    if (!context) {
        throw new Error("useAppUserContext must be used inside AppUserContext");
    }

    return {
        ...context,
    };
};