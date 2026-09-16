// Components
import { AppThemeSwitch } from "./AppThemeSwitch";
import { MotionLogo } from "./MotionLogo";
import { GlobalNavigation } from "./Navigations";
// Utils
import { cn } from "@utils/css";

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
                <MotionLogo className={cn("ml-2 my-2 select-none")} />
                {/* Global navbar */}
                <GlobalNavigation />
            </div>
            {/* Application utilities */}
            <div className={cn("flex justify-start items-center")}>
                {/* App theme toggle switch */}
                <AppThemeSwitch />
            </div>
        </header>
    );
};