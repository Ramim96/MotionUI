"use client";

import { useState } from "react";
// Components
import { TextField } from "@design-system/ui/text-field";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxTextField = () => {
    // -------------------------------------------------------------------------
    // Controlled values
    // -------------------------------------------------------------------------

    const [text, setText] = useState<string | undefined>("John Doe");

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
                    <p>Text Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">
                    <TextField
                        id="text-default"
                        name="text-default"
                        label="Text"
                        description="Enter some text"
                        placeholder="John Doe"
                        value={text}
                        onChange={setText}
                    />

                    <TextField
                        id="text-empty"
                        name="text-empty"
                        label="Empty text"
                        description="No text entered"
                        placeholder="John Doe"
                        value={emptyText}
                        onChange={setEmptyText}
                    />

                    <TextField
                        id="text-undefined"
                        name="text-undefined"
                        label="Undefined text"
                        description="Text value is undefined"
                        placeholder="John Doe"
                        value={undefined}
                        onChange={() => {}}
                    />

                    <TextField
                        id="text-disabled"
                        name="text-disabled"
                        label="Disabled text"
                        description="This text field is disabled"
                        placeholder="John Doe"
                        value="John Doe"
                        isDisabled
                        onChange={() => {}}
                    />

                    <TextField
                        id="text-disabled-required"
                        name="text-disabled-required"
                        label="Disabled required text"
                        description="Disabled and required"
                        value="John Doe"
                        isDisabled
                        isRequired
                        onChange={() => {}}
                    />

                    <TextField
                        id="text-readonly"
                        name="text-readonly"
                        label="Read-only text"
                        description="This text field is read-only"
                        placeholder="John Doe"
                        value="John Doe"
                        isReadOnly
                        onChange={() => {}}
                    />

                    <TextField
                        id="text-readonly-required"
                        name="text-readonly-required"
                        label="Read-only required text"
                        description="Read-only and required"
                        value="John Doe"
                        isReadOnly
                        isRequired
                        onChange={() => {}}
                    />

                    <TextField
                        id="text-required"
                        name="text-required"
                        label="Required text"
                        description="Text is required"
                        placeholder="John Doe"
                        value={requiredText}
                        isRequired
                        onChange={setRequiredText}
                    />

                    <TextField
                        id="text-required-invalid"
                        name="text-required-invalid"
                        label="Required invalid text"
                        description="This field is required and currently invalid"
                        placeholder="John Doe"
                        value={requiredText}
                        isRequired
                        isInvalid
                        fieldError="Please enter valid text"
                        onChange={setRequiredText}
                    />

                    <TextField
                        id="text-invalid"
                        name="text-invalid"
                        label="Invalid text"
                        description="Invalid state without an error message"
                        value={invalidText}
                        isInvalid
                        onChange={setInvalidText}
                    />

                    <TextField
                        id="text-invalid-error"
                        name="text-invalid-error"
                        label="Invalid text with error"
                        description="This text field has a validation error"
                        value={invalidText}
                        isInvalid
                        fieldError="Please enter valid text"
                        onChange={setInvalidText}
                    />

                    <TextField
                        id="text-invalid-required-error"
                        name="text-invalid-required-error"
                        label="Invalid required text"
                        description="Required field with validation error"
                        placeholder="John Doe"
                        value={invalidText}
                        isRequired
                        isInvalid
                        fieldError="Please enter valid text"
                        onChange={setInvalidText}
                    />

                    <TextField
                        id="text-label-only"
                        name="text-label-only"
                        label="Text"
                        placeholder="John Doe"
                        value={emptyText}
                        onChange={setEmptyText}
                    />

                    <TextField
                        id="text-no-label"
                        name="text-no-label"
                        description="Text field without a visible label"
                        ariaLabel="Text"
                        placeholder="John Doe"
                        value={noLabelText}
                        onChange={setNoLabelText}
                    />

                    <TextField
                        id="text-no-label-no-description"
                        name="text-no-label-no-description"
                        ariaLabel="Text"
                        placeholder="John Doe"
                        value={noLabelText}
                        onChange={setNoLabelText}
                    />

                    <TextField
                        id="text-tooltip"
                        name="text-tooltip"
                        label="Text"
                        description="This field has additional information"
                        tooltip="Enter the text associated with this field"
                        placeholder="John Doe"
                        value={tooltipText}
                        onChange={setTooltipText}
                    />

                    <TextField
                        id="text-tooltip-required"
                        name="text-tooltip-required"
                        label="Required text"
                        description="Required text field with tooltip"
                        tooltip="This field must contain a value"
                        placeholder="John Doe"
                        value={requiredText}
                        isRequired
                        onChange={setRequiredText}
                    />

                    <TextField
                        id="text-full-width"
                        name="text-full-width"
                        label="Full width text"
                        description="This field uses the full available width"
                        placeholder="John Doe"
                        value={fullWidthText}
                        fullWidth
                        onChange={setFullWidthText}
                    />

                    <TextField
                        id="text-full-width-required"
                        name="text-full-width-required"
                        label="Full width required text"
                        description="Required field using the full width"
                        placeholder="John Doe"
                        value={requiredText}
                        fullWidth
                        isRequired
                        onChange={setRequiredText}
                    />

                    <TextField
                        id="text-full-width-invalid"
                        name="text-full-width-invalid"
                        label="Full width invalid text"
                        description="Full width field with validation error"
                        value={invalidText}
                        fullWidth
                        isInvalid
                        fieldError="Please enter valid text"
                        onChange={setInvalidText}
                    />

                    <TextField
                        id="text-variant"
                        name="text-variant"
                        label="Variant text"
                        description="Text field using an explicit variant"
                        placeholder="John Doe"
                        value={variantText}
                        variant="primary"
                        onChange={setVariantText}
                    />

                    <TextField
                        id="text-custom-class"
                        name="text-custom-class"
                        label="Custom class text"
                        description="Text field with a custom class"
                        placeholder="John Doe"
                        value={customClassText}
                        className="max-w-sm"
                        onChange={setCustomClassText}
                    />

                    <TextField
                        id="text-custom-full-width"
                        name="text-custom-full-width"
                        label="Custom full width text"
                        description="Full width field with additional styling"
                        placeholder="John Doe"
                        value={customClassText}
                        fullWidth
                        className="min-h-20"
                        onChange={setCustomClassText}
                    />

                    <TextField
                        id="text-readonly-invalid"
                        name="text-readonly-invalid"
                        label="Read-only invalid text"
                        description="Read-only field with an invalid state"
                        value="Invalid text"
                        isReadOnly
                        isInvalid
                        fieldError="This text is invalid"
                        onChange={() => {}}
                    />

                    <TextField
                        id="text-disabled-invalid"
                        name="text-disabled-invalid"
                        label="Disabled invalid text"
                        description="Disabled field with an invalid state"
                        value="Invalid text"
                        isDisabled
                        isInvalid
                        fieldError="This text is invalid"
                        onChange={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};