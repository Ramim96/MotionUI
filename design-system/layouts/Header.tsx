// Components
import { ThemeSwitch } from "@design-system/common/theme-switch";
import { Logo } from "@design-system/common/logo";
import { Navbar } from "./navbar";
// Utils
import { cn } from "@lib/utils/css";

export const Header = () => {
    
    return (
        <header
            className={cn(
                "flex justify-between items-center px-5", // Positioning
                "border-b border-b-neutral-800 bg-neutral-950 h-16", // Box & sizing
            )}
        >
            {/* Application navigation */}
            <div className={cn("flex justify-start items-center gap-x-8")}>
                {/* Logo */}
                <Logo className={cn("ml-2 my-2 select-none")} />
                {/* Navbar */}
                <Navbar />
            </div>
            {/* Application utilities */}
            <div className={cn("flex justify-start items-center")}>
                {/* App theme toggle switch */}
                <ThemeSwitch />
            </div>
        </header>
    );
};