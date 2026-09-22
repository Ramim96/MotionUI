"use client";

import { useState } from "react";
// Components
import { TextareaField } from "@design-system/ui/textarea-field";
// Utils
import { cn } from "../lib/utils/css";

export const SandboxTextArea = () => {

    const [text, setText] = useState<string | undefined>("This is some example text.");
    const [emptyText, setEmptyText] = useState<string | undefined>("");
    const [requiredText, setRequiredText] = useState<string | undefined>("");
    const [invalidText, setInvalidText] = useState<string | undefined>("Invalid text");

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Text Area</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled text area */}
                    <TextareaField
                        id="textarea-default"
                        name="textarea-default"
                        label="Text area"
                        description="Enter some text"
                        placeholder="Enter your message"
                        value={text}
                        onChange={(value) => setText(value)}
                    />

                    {/* Empty */}
                    <TextareaField
                        id="textarea-empty"
                        name="textarea-empty"
                        label="Empty text area"
                        description="No text entered"
                        placeholder="Enter your message"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* Disabled */}
                    <TextareaField
                        id="textarea-disabled"
                        name="textarea-disabled"
                        label="Disabled text area"
                        description="This text area is disabled"
                        value="This text area is disabled"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <TextareaField
                        id="textarea-readonly"
                        name="textarea-readonly"
                        label="Read-only text area"
                        description="This text area is read-only"
                        value="This text area is read-only"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <TextareaField
                        id="textarea-required"
                        name="textarea-required"
                        label="Required text area"
                        description="A text response is required"
                        placeholder="Enter your response"
                        value={requiredText}
                        isRequired
                        onChange={(value) => setRequiredText(value)}
                    />

                    {/* Invalid */}
                    <TextareaField
                        id="textarea-invalid"
                        name="textarea-invalid"
                        label="Invalid text area"
                        value={invalidText}
                        isInvalid
                        onChange={(value) => setInvalidText(value)}
                    />

                    {/* Invalid with error */}
                    <TextareaField
                        id="textarea-invalid-error"
                        name="textarea-invalid-error"
                        label="Invalid text area with error"
                        description="This text area has a validation error"
                        value={invalidText}
                        isInvalid
                        fieldError="Please enter a valid response"
                        onChange={(value) => setInvalidText(value)}
                    />

                    {/* No label */}
                    <TextareaField
                        id="textarea-no-label"
                        name="textarea-no-label"
                        description="Text area without a label"
                        ariaLabel="no-label"
                        placeholder="Enter your message"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* No label or description */}
                    <TextareaField
                        id="textarea-no-label-no-description"
                        name="textarea-no-label-no-description"
                        ariaLabel="no-label-no-description"
                        placeholder="Enter your message"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* Full width */}
                    <TextareaField
                        id="textarea-full-width"
                        name="textarea-full-width"
                        label="Full width text area"
                        description="This field uses the full available width"
                        placeholder="Enter your message"
                        value={text}
                        fullWidth
                        onChange={(value) => setText(value)}
                    />

                </div>
            </div>
        </div>
    );
};