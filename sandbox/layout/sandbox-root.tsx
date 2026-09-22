// Components
import { SandboxButton } from "@sandbox/sandbox-button";
import { SandboxContainer } from "./sandbox-container";
import { SandboxSwitch } from "@sandbox/sandbox-switch";
import { SandboxInput } from "@sandbox/sandbox-input";
import { SandboxForm } from "@sandbox/sandbox-form";
// Utils
import { cn } from "../../lib/utils/css";

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
                <SandboxForm />
                {/* <SandboxInput /> */}
                {/* <SandboxButton /> */}
                {/* <SandboxSwitch /> */}
            </SandboxContainer>
        </div>
    );
};