"use client";

// Components
import { Text, Title } from "@text/Texts";
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
            <Title
                className={cn("text-primary-contrast")}
                size={cn("sm:text-[2.5rem] md:text-[3.5rem]")}
            >
                Global settings
            </Title>
            <Text className={cn("text-neutral")}>
                Access and configure all configuration settings and domain related information shared across all companies/clients
            </Text>
        </div>
    );
};