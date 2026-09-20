"use client";

// Components
import { Text } from "@design-system/Texts";
// Utils
import { cn } from "@utils/css";

interface GlobalSettingsClientComponentProps {};

export const GlobalSettingsClient = ({ }: GlobalSettingsClientComponentProps) => {
    
    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-y-2 p-1", // Positioning
                "w-full h-full", // Box & sizing
            )}
        >
            <Text type="h1">
                Global settings
            </Text>
            <Text
                type="body"
                className={cn("text-muted")}
            >
                Access and configure all configuration settings and domain related information shared across all companies/clients
            </Text>
        </div>
    );
};