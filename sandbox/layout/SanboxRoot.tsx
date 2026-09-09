import { FormSandboxClient } from "../FormSandboxClient";
import { SandboxContainer } from "./SandboxContainer";
import { ButtonSandboxClient } from "../ButtonSandboxClient";
import { TextSandboxClient } from "../TextSandboxClient";
import { InputSandboxClient } from "@sandbox/InputSandboxClient";

export const SandboxRoot = () => {

    return (
        <div className="flex flex-col w-dvw h-dvh overflow-hidden">
            <SandboxContainer>
                {/* <TextSandboxClient /> */}
                {/* <ButtonSandboxClient /> */}
                {/* <InputSandboxClient /> */}
                <FormSandboxClient />
            </SandboxContainer>
        </div>
    );
};