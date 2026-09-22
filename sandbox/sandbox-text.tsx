"use client";

import { useState } from "react";
// Components
import { TextField } from "@design-system/ui/text-field";
// Utils
import { cn } from "../lib/utils/css";

export const SandboxTextField = () => {

    const [text, setText] = useState<string | undefined>("John Doe");
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
                    <p>Text Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled text field */}
                    <TextField
                        id="text-default"
                        name="text-default"
                        label="Text"
                        description="Enter some text"
                        placeholder="John Doe"
                        value={text}
                        onChange={(value) => setText(value)}
                    />

                    {/* Empty */}
                    <TextField
                        id="text-empty"
                        name="text-empty"
                        label="Empty text"
                        description="No text entered"
                        placeholder="John Doe"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* Disabled */}
                    <TextField
                        id="text-disabled"
                        name="text-disabled"
                        label="Disabled text"
                        description="This text field is disabled"
                        value="John Doe"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <TextField
                        id="text-readonly"
                        name="text-readonly"
                        label="Read-only text"
                        description="This text field is read-only"
                        value="John Doe"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <TextField
                        id="text-required"
                        name="text-required"
                        label="Required text"
                        description="Text is required"
                        placeholder="John Doe"
                        value={requiredText}
                        isRequired
                        onChange={(value) => setRequiredText(value)}
                    />

                    {/* Invalid */}
                    <TextField
                        id="text-invalid"
                        name="text-invalid"
                        label="Invalid text"
                        value={invalidText}
                        isInvalid
                        onChange={(value) => setInvalidText(value)}
                    />

                    {/* Invalid with error */}
                    <TextField
                        id="text-invalid-error"
                        name="text-invalid-error"
                        label="Invalid text with error"
                        description="This text field has a validation error"
                        value={invalidText}
                        isInvalid
                        fieldError="Please enter valid text"
                        onChange={(value) => setInvalidText(value)}
                    />

                    {/* No label */}
                    <TextField
                        id="text-no-label"
                        name="text-no-label"
                        description="Text field without a label"
                        ariaLabel="no-label"
                        placeholder="John Doe"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* No label or description */}
                    <TextField
                        id="text-no-label-no-description"
                        name="text-no-label-no-description"
                        ariaLabel="no-label-no-description"
                        placeholder="John Doe"
                        value={emptyText}
                        onChange={(value) => setEmptyText(value)}
                    />

                    {/* Full width */}
                    <TextField
                        id="text-full-width"
                        name="text-full-width"
                        label="Full width text"
                        description="This field uses the full available width"
                        placeholder="John Doe"
                        value={text}
                        fullWidth
                        onChange={(value) => setText(value)}
                    />

                </div>
            </div>
        </div>
    );
};