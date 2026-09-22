"use client";

import { useContext } from "react";
// Contexts
import { FormContext, FormContextProps } from "@contexts/form-context";

export const useFormContext = (): FormContextProps => {

    const context = useContext(FormContext);

    if (!context) {
        throw new Error("useFormContext must be used inside ContextProvider");
    }

    return {
        ...context,
    };
};