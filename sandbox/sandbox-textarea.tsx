"use client";

import { useState } from "react";
// Components
import { TextareaField } from "@design-system/ui/textarea-field";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxTextArea = () => {
    // -------------------------------------------------------------------------
    // Controlled values
    // -------------------------------------------------------------------------

    const [text, setText] = useState<string | undefined>(
        "This is some example text.",
    );

    const [emptyText, setEmptyText] = useState<string | undefined>("");

    const [requiredText, setRequiredText] = useState<string | undefined>("");

    const [invalidText, setInvalidText] = useState<string | undefined>(
        "Invalid text",
    );

    const [tooltipText, setTooltipText] = useState<string | undefined>("");

    const [variantText, setVariantText] = useState<string | undefined>("");

    const [fullWidthText, setFullWidthText] = useState<string | undefined>(
        "",
    );

    const [noLabelText, setNoLabelText] = useState<string | undefined>("");

    const [customClassText, setCustomClassText] = useState<
        string | undefined
    >("");

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className="flex flex-col gap-y-8 w-full">
                <div className="flex justify-center items-start">
                    <p>Text Area</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">
                    {/* -----------------------------------------------------------------
                        Basic / default
                    ------------------------------------------------------------------ */}

                    <TextareaField
                        id="textarea-default"
                        name="textarea-default"
                        label="Text area"
                        description="Enter some text"
                        placeholder="Enter your message"
                        value={text}
                        onChange={setText}
                    />

                    {/* -----------------------------------------------------------------
                        Empty controlled value
                    ------------------------------------------------------------------ */}

                    <TextareaField
                        id="textarea-empty"
                        name="textarea-empty"
                        label="Empty text area"
                        description="No text entered"
                        placeholder="Enter your message"
                        value={emptyText}
                        onChange={setEmptyText}
                    />

                    {/* -----------------------------------------------------------------
                        Undefined value
                    ------------------------------------------------------------------ */}

                    <TextareaField
                        id="textarea-undefined"
                        name="textarea-undefined"
                        label="Undefined text area"
                        description="Text area value is undefined"
                        placeholder="Enter your message"
                        value={undefined}
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Disabled
                    ------------------------------------------------------------------ */}

                    <TextareaField
                        id="textarea-disabled"
                        name="textarea-disabled"
                        label="Disabled text area"
                        description="This text area is disabled"
                        placeholder="Enter your message"
                        value="This text area is disabled"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Disabled + required
                    ------------------------------------------------------------------ */}

                    <TextareaField
                        id="textarea-disabled-required"
                        name="textarea-disabled-required"
                        label="Disabled required text area"
                        description="Disabled and required"
                        value="This text area is disabled"
                        isDisabled
                        isRequired
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Read only
                    ------------------------------------------------------------------ */}

                    <TextareaField
                        id="textarea-readonly"
                        name="textarea-readonly"
                        label="Read-only text area"
                        description="This text area is read-only"
                        placeholder="Enter your message"
                        value="This text area is read-only"
                        isReadOnly
                        onChange={() => {}}
                    />

                    <TextareaField
                        id="textarea-readonly-required"
                        name="textarea-readonly-required"
                        label="Read-only required text area"
                        description="Read-only and required"
                        value="This text area is read-only"
                        isReadOnly
                        isRequired
                        onChange={() => {}}
                    />

                    <TextareaField
                        id="textarea-required"
                        name="textarea-required"
                        label="Required text area"
                        description="A text response is required"
                        placeholder="Enter your response"
                        value={requiredText}
                        isRequired
                        onChange={setRequiredText}
                    />

                    <TextareaField
                        id="textarea-required-invalid"
                        name="textarea-required-invalid"
                        label="Required invalid text area"
                        description="This field is required and currently invalid"
                        placeholder="Enter your response"
                        value={requiredText}
                        isRequired
                        isInvalid
                        fieldError="Please enter a valid response"
                        onChange={setRequiredText}
                    />

                    <TextareaField
                        id="textarea-invalid"
                        name="textarea-invalid"
                        label="Invalid text area"
                        description="Invalid state without an error message"
                        value={invalidText}
                        isInvalid
                        onChange={setInvalidText}
                    />

                    <TextareaField
                        id="textarea-invalid-error"
                        name="textarea-invalid-error"
                        label="Invalid text area with error"
                        description="This text area has a validation error"
                        value={invalidText}
                        isInvalid
                        fieldError="Please enter a valid response"
                        onChange={setInvalidText}
                    />

                    <TextareaField
                        id="textarea-invalid-required-error"
                        name="textarea-invalid-required-error"
                        label="Invalid required text area"
                        description="Required field with validation error"
                        placeholder="Enter your response"
                        value={invalidText}
                        isRequired
                        isInvalid
                        fieldError="Please enter a valid response"
                        onChange={setInvalidText}
                    />

                    <TextareaField
                        id="textarea-label-only"
                        name="textarea-label-only"
                        label="Text area"
                        placeholder="Enter your message"
                        value={emptyText}
                        onChange={setEmptyText}
                    />

                    <TextareaField
                        id="textarea-no-label"
                        name="textarea-no-label"
                        description="Text area without a visible label"
                        ariaLabel="Text area"
                        placeholder="Enter your message"
                        value={noLabelText}
                        onChange={setNoLabelText}
                    />

                    <TextareaField
                        id="textarea-no-label-no-description"
                        name="textarea-no-label-no-description"
                        ariaLabel="Text area"
                        placeholder="Enter your message"
                        value={noLabelText}
                        onChange={setNoLabelText}
                    />

                    <TextareaField
                        id="textarea-tooltip"
                        name="textarea-tooltip"
                        label="Text area"
                        description="This field has additional information"
                        tooltip="Enter your response in the text area"
                        placeholder="Enter your message"
                        value={tooltipText}
                        onChange={setTooltipText}
                    />

                    <TextareaField
                        id="textarea-tooltip-required"
                        name="textarea-tooltip-required"
                        label="Required text area"
                        description="Required text area with tooltip"
                        tooltip="This field must contain a response"
                        placeholder="Enter your response"
                        value={requiredText}
                        isRequired
                        onChange={setRequiredText}
                    />

                    <TextareaField
                        id="textarea-full-width"
                        name="textarea-full-width"
                        label="Full width text area"
                        description="This field uses the full available width"
                        placeholder="Enter your message"
                        value={fullWidthText}
                        fullWidth
                        onChange={setFullWidthText}
                    />

                    <TextareaField
                        id="textarea-full-width-required"
                        name="textarea-full-width-required"
                        label="Full width required text area"
                        description="Required field using the full width"
                        placeholder="Enter your response"
                        value={requiredText}
                        fullWidth
                        isRequired
                        onChange={setRequiredText}
                    />

                    <TextareaField
                        id="textarea-full-width-invalid"
                        name="textarea-full-width-invalid"
                        label="Full width invalid text area"
                        description="Full width field with validation error"
                        value={invalidText}
                        fullWidth
                        isInvalid
                        fieldError="Please enter a valid response"
                        onChange={setInvalidText}
                    />

                    <TextareaField
                        id="textarea-variant"
                        name="textarea-variant"
                        label="Variant text area"
                        description="Text area using an explicit variant"
                        placeholder="Enter your message"
                        value={variantText}
                        variant="primary"
                        onChange={setVariantText}
                    />

                    <TextareaField
                        id="textarea-custom-class"
                        name="textarea-custom-class"
                        label="Custom class text area"
                        description="Text area with a custom class"
                        placeholder="Enter your message"
                        value={customClassText}
                        className="max-w-sm"
                        onChange={setCustomClassText}
                    />

                    <TextareaField
                        id="textarea-custom-full-width"
                        name="textarea-custom-full-width"
                        label="Custom full width text area"
                        description="Full width field with additional styling"
                        placeholder="Enter your message"
                        value={customClassText}
                        fullWidth
                        className="min-h-32"
                        onChange={setCustomClassText}
                    />

                    <TextareaField
                        id="textarea-readonly-invalid"
                        name="textarea-readonly-invalid"
                        label="Read-only invalid text area"
                        description="Read-only field with an invalid state"
                        value="Invalid text"
                        isReadOnly
                        isInvalid
                        fieldError="This response is invalid"
                        onChange={() => {}}
                    />

                    <TextareaField
                        id="textarea-disabled-invalid"
                        name="textarea-disabled-invalid"
                        label="Disabled invalid text area"
                        description="Disabled field with an invalid state"
                        value="Invalid text"
                        isDisabled
                        isInvalid
                        fieldError="This response is invalid"
                        onChange={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};