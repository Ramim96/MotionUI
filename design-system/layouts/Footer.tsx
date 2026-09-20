// Components
import { Text } from "@design-system/Texts";
// Utils
import { cn } from "@utils/css";

export const Footer =() => {

    return (
        <footer
            className={cn(
                "px-5 py-1", // Positioning
                "border-t border-t-neutral-800 bg-neutral-950", // Box & sizing
            )}
        >
            <Text className={cn("text-muted")}>
                &copy; 2026 Motion Inc. / v.0.1.0
            </Text>
        </footer>
    );
};