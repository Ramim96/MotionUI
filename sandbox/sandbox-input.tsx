// Components
import { SandboxCheckbox } from "./sandbox-checkbox";
import { SandboxDateField } from "./sandbox-date-field";
import { SandboxEmailField } from "./sandobox-email-field";
import { SandboxNumberField } from "./sandbox-number";
import { SandboxPasswordField } from "./sandbox-password";
import { SandboxRadioGroup } from "./sandbox-radio-field";
import { SandboxTelField } from "./sandbox-tel";
import { SandboxTextField } from "./sandbox-text";
import { SandboxTextArea } from "./sandbox-textarea";
import { SandboxUrlField } from "./sandbox-url";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxInput = () => {

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2", // Positioning
                "w-full", // Box & sizing
            )}
        >
            <div className={cn("flex flex-col gap-y-5")}>
                {/* <SandboxCheckbox /> */}
                {/* <SandboxDateField /> */}
                {/* <SandboxEmailField /> */}
                {/* <SandboxNumberField /> */}
                {/* <SandboxPasswordField /> */}
                {/* <SandboxRadioGroup /> */}
                {/* <SandboxTelField /> */}
                {/* <SandboxTextField /> */}
                {/* <SandboxUrlField /> */}
                <SandboxTextArea />
            </div>
        </div>
    );
};