// Components
import { Title, Text } from "@text/Texts";
// Utils
import { cn } from "@utils/css";

export const TextSandboxClient = () => {

    return (
        <div
            className={cn(
                "flex flex-col gap-x-2", // Positioning
                "w-full h-full", // Box & sizing
            )}
        >
            {/* Dark */}
            <div
                className={cn("flex flex-col gap-y-5 p-5")}
            >
                <Title className={cn("text-primary-contrast")}>Title</Title>
                <Text className={cn("text-neutral font-semibold")}>Text</Text>
                <div
                    className={cn(
                        "flex flex-col gap-y-5 p-2", // Positioning
                        "rounded-md bg-secondary", // Box & sizing
                    )}
                >
                    
                    <Text className={cn("text-neutral font-semibold")}>Text</Text>
                    <Text className={cn("text-primary-contrast")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
                </div>
            </div>
        </div>
    );
};