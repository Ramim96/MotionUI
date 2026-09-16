import React from "react";
// Components
import { Typography } from "@heroui/react";
// Types
import { TextAlignment, TextType, TextWeight } from "./Types";
// Utils
import { cn } from "@utils/css";

interface TextComponentProps {
    children: React.ReactNode;
    type?: TextType;
    align?: TextAlignment;
    weight?: TextWeight;
    truncate?: boolean;
    className?: string;
};

export const Text = ({
    children,
    type="body-sm",
    align="start",
    weight="normal",
    truncate=false,
    className,
}: TextComponentProps) => {

    return (
        <Typography
            type={type}
            align={align}
            weight={weight}
            truncate={truncate}
            className={cn(
                className,
                "tracking-wider"
            )}
        >
            {children}
        </Typography>
    );
};