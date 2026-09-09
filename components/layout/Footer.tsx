// Components
import { Text } from "@text/Texts";
// Utils
import { cn } from "@utils/css";

export const Footer =() => {

    return (
        <footer
            className={cn(
                "px-5 py-1", // Positioning
                "border-t border-t-black-200 bg-black-950", // Box & sizing
            )}
        >
            <Text
                className={cn("text-neutral")}
                size={cn("sm:text-[0.8rem]")}
            >
                &copy; 2026 Motion Inc.
            </Text>
        </footer>
    );
};