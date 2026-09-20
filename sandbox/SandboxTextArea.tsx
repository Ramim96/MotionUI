"use client";

import { useState } from "react";
// Components
import { TextArea } from "@design-system/input-fields/TextArea";
// Utils
import { cn } from "@utils/css";

export const SandboxTextArea = () => {

    const [text, setText] = useState("This is some example text.");
    const [emptyText, setEmptyText] = useState("");
    const [requiredText, setRequiredText] = useState("");
    const [invalidText, setInvalidText] = useState("Invalid text");

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
                    <TextArea
                        id="textarea-default"
                        name="textarea-default"
                        label="Text area"
                        description="Enter some text"
                        placeholder="Enter your message"
                        value={text}
                        onChange={(value) => setText(value)}
                    />

                    {/* Empty */}
                    <TextArea
                        id="textarea-empty"
                        name="textarea-empty"
                        label="Empty text area"
                        description="No text entered"
                        placeholder="Enter your message"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* Disabled */}
                    <TextArea
                        id="textarea-disabled"
                        name="textarea-disabled"
                        label="Disabled text area"
                        description="This text area is disabled"
                        value="This text area is disabled"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <TextArea
                        id="textarea-readonly"
                        name="textarea-readonly"
                        label="Read-only text area"
                        description="This text area is read-only"
                        value="This text area is read-only"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <TextArea
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
                    <TextArea
                        id="textarea-invalid"
                        name="textarea-invalid"
                        label="Invalid text area"
                        value={invalidText}
                        isInvalid
                        onChange={(value) => setInvalidText(value)}
                    />

                    {/* Invalid with error */}
                    <TextArea
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
                    <TextArea
                        id="textarea-no-label"
                        name="textarea-no-label"
                        description="Text area without a label"
                        placeholder="Enter your message"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* No label or description */}
                    <TextArea
                        id="textarea-no-label-no-description"
                        name="textarea-no-label-no-description"
                        placeholder="Enter your message"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* Full width */}
                    <TextArea
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