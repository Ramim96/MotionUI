// Components
import { SandboxCheckbox } from "./SandboxCheckbox";
import { SandboxDateField } from "./SandboxDatePicker";
import { SandboxEmailField } from "./SandboxEmailField";
import { SandboxNumberField } from "./SandboxNumber";
import { SandboxPasswordField } from "./SandboxPassword";
import { SandboxRadioGroup } from "./SandboxRadioField";
import { SandboxTelField } from "./SandboxTel";
import { SandboxTextField } from "./SandboxText";
import { SandboxTextArea } from "./SandboxTextArea";
import { SandboxUrlField } from "./SandboxUrl";
// Utils
import { cn } from "@utils/css";

export const SandboxInput = () => {

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2", // Positioning
                "w-full", // Box & sizing
            )}
        >
            <div className={cn("flex flex-col gap-y-5")}>
                <SandboxCheckbox />
                <SandboxDateField />
                <SandboxEmailField />
                <SandboxNumberField />
                <SandboxPasswordField />
                <SandboxRadioGroup />
                <SandboxTelField />
                <SandboxTextField />
                <SandboxUrlField />
                <SandboxTextArea />
            </div>
        </div>
    );
};