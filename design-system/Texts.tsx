import React from "react";
// Components
import { Description as HeroDescription, Typography } from "@heroui/react";
// Utils
import { cn } from "@utils/css";

// #region Types

export type TextType = 
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body-xs"
    | "body"
    | "body-sm"

export type TextAlignment =
    | "start"
    | "center"
    | "end"
    | "justify";

export type TextWeight =
    | "normal"
    | "medium"
    | "semibold"
    | "bold";

// #endregion Types

// #region Text

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
    type = "body-sm",
    align = "start",
    weight = "normal",
    truncate = false,
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

// #endregion Text