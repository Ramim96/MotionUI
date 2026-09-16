// Components
import { SandboxButton } from "@sandbox/SandboxButton";
import { SandboxContainer } from "./SandboxContainer";
// Utils
import { cn } from "@utils/css";
import { SandboxSwitch } from "@sandbox/SandboxSwitch";

export const SandboxRoot = () => {

    return (
        <div
            className={cn(
                "flex flex-col", // Positioning
                "bg-background w-dvw h-dvh overflow-hidden", // Box $ sizing
                "text-foreground", // Font
            )}
        >
            <SandboxContainer>
                <SandboxButton />
                {/* <SandboxSwitch /> */}
            </SandboxContainer>
        </div>
    );
};