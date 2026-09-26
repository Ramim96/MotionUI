"use client";

import { useState } from "react";
// Components
import { TelField } from "@design-system/ui/tel-field";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxTelField = () => {
    // -------------------------------------------------------------------------
    // Controlled values
    // -------------------------------------------------------------------------

    const [defaultPhone, setDefaultPhone] = useState<string | undefined>(
        "+44 7700 900123",
    );

    const [emptyPhone, setEmptyPhone] = useState<string | undefined>("");

    const [requiredPhone, setRequiredPhone] = useState<string | undefined>("");

    const [invalidPhone, setInvalidPhone] = useState<string | undefined>(
        "123",
    );

    const [tooltipPhone, setTooltipPhone] = useState<string | undefined>("");

    const [variantPhone, setVariantPhone] = useState<string | undefined>("");

    const [fullWidthPhone, setFullWidthPhone] = useState<string | undefined>(
        "",
    );

    const [noLabelPhone, setNoLabelPhone] = useState<string | undefined>("");

    const [customClassPhone, setCustomClassPhone] = useState<
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
                    <p>Tel Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">
                    {/* -----------------------------------------------------------------
                        Basic / default
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-default"
                        name="tel-default"
                        label="Phone number"
                        description="Enter your phone number"
                        placeholder="+44 7700 900123"
                        value={defaultPhone}
                        onChange={setDefaultPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Empty controlled value
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-empty"
                        name="tel-empty"
                        label="Empty phone number"
                        description="No phone number entered"
                        placeholder="+44 7700 900123"
                        value={emptyPhone}
                        onChange={setEmptyPhone}
                    />

                    {/* -----------------------------------------------------------------
                        No value / uncontrolled-style case

                        TelField accepts `string | undefined`, so explicitly
                        passing undefined verifies that case as well.
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-undefined"
                        name="tel-undefined"
                        label="Undefined phone number"
                        description="Phone value is undefined"
                        placeholder="+44 7700 900123"
                        value={undefined}
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Disabled
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-disabled"
                        name="tel-disabled"
                        label="Disabled phone number"
                        description="This phone field is disabled"
                        placeholder="+44 7700 900123"
                        value="+44 7700 900123"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Disabled + required
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-disabled-required"
                        name="tel-disabled-required"
                        label="Disabled required phone number"
                        description="Disabled and required"
                        value="+44 7700 900123"
                        isDisabled
                        isRequired
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Read only
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-readonly"
                        name="tel-readonly"
                        label="Read-only phone number"
                        description="This phone field is read-only"
                        placeholder="+44 7700 900123"
                        value="+44 7700 900123"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Read only + required
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-readonly-required"
                        name="tel-readonly-required"
                        label="Read-only required phone number"
                        description="Read-only and required"
                        value="+44 7700 900123"
                        isReadOnly
                        isRequired
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Required
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-required"
                        name="tel-required"
                        label="Required phone number"
                        description="A phone number is required"
                        placeholder="+44 7700 900123"
                        value={requiredPhone}
                        isRequired
                        onChange={setRequiredPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Required + invalid + error
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-required-invalid"
                        name="tel-required-invalid"
                        label="Required invalid phone number"
                        description="This field is required and currently invalid"
                        placeholder="+44 7700 900123"
                        value={requiredPhone}
                        isRequired
                        isInvalid
                        fieldError="Please enter a valid phone number"
                        onChange={setRequiredPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Invalid without error
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-invalid"
                        name="tel-invalid"
                        label="Invalid phone number"
                        description="Invalid state without an error message"
                        value={invalidPhone}
                        isInvalid
                        onChange={setInvalidPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Invalid with error
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-invalid-error"
                        name="tel-invalid-error"
                        label="Invalid phone number with error"
                        description="This phone number has a validation error"
                        value={invalidPhone}
                        isInvalid
                        fieldError="Please enter a valid phone number"
                        onChange={setInvalidPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Invalid + required + error
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-invalid-required-error"
                        name="tel-invalid-required-error"
                        label="Invalid required phone number"
                        description="Required field with validation error"
                        placeholder="+44 7700 900123"
                        value={invalidPhone}
                        isRequired
                        isInvalid
                        fieldError="Please enter a valid phone number"
                        onChange={setInvalidPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Label only
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-label-only"
                        name="tel-label-only"
                        label="Phone number"
                        placeholder="+44 7700 900123"
                        value={emptyPhone}
                        onChange={setEmptyPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Description only / no label
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-no-label"
                        name="tel-no-label"
                        description="Phone field without a visible label"
                        ariaLabel="Phone number"
                        placeholder="+44 7700 900123"
                        value={noLabelPhone}
                        onChange={setNoLabelPhone}
                    />

                    {/* -----------------------------------------------------------------
                        No label / no description
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-no-label-no-description"
                        name="tel-no-label-no-description"
                        ariaLabel="Phone number"
                        placeholder="+44 7700 900123"
                        value={noLabelPhone}
                        onChange={setNoLabelPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Tooltip
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-tooltip"
                        name="tel-tooltip"
                        label="Phone number"
                        description="This field has additional information"
                        tooltip="Enter a phone number including the country code"
                        placeholder="+44 7700 900123"
                        value={tooltipPhone}
                        onChange={setTooltipPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Tooltip + required
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-tooltip-required"
                        name="tel-tooltip-required"
                        label="Required phone number"
                        description="Required phone number with tooltip"
                        tooltip="Include the country code, for example +44"
                        placeholder="+44 7700 900123"
                        value={requiredPhone}
                        isRequired
                        onChange={setRequiredPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Full width
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-full-width"
                        name="tel-full-width"
                        label="Full width phone number"
                        description="This field uses the full available width"
                        placeholder="+44 7700 900123"
                        value={fullWidthPhone}
                        fullWidth
                        onChange={setFullWidthPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Full width + required
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-full-width-required"
                        name="tel-full-width-required"
                        label="Full width required phone number"
                        description="Required field using the full width"
                        placeholder="+44 7700 900123"
                        value={requiredPhone}
                        fullWidth
                        isRequired
                        onChange={setRequiredPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Full width + invalid + error
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-full-width-invalid"
                        name="tel-full-width-invalid"
                        label="Full width invalid phone number"
                        description="Full width field with validation error"
                        value={invalidPhone}
                        fullWidth
                        isInvalid
                        fieldError="Please enter a valid phone number"
                        onChange={setInvalidPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Variant

                        Change the variant values here to whatever variants are
                        exposed by your HeroUI InputGroup configuration.
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-variant"
                        name="tel-variant"
                        label="Variant phone number"
                        description="Phone field using an explicit variant"
                        placeholder="+44 7700 900123"
                        value={variantPhone}
                        variant="primary"
                        onChange={setVariantPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Custom className
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-custom-class"
                        name="tel-custom-class"
                        label="Custom class phone number"
                        description="Phone field with a custom class"
                        placeholder="+44 7700 900123"
                        value={customClassPhone}
                        className="max-w-sm"
                        onChange={setCustomClassPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Custom className + fullWidth
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-custom-full-width"
                        name="tel-custom-full-width"
                        label="Custom full width phone number"
                        description="Full width field with additional styling"
                        placeholder="+44 7700 900123"
                        value={customClassPhone}
                        fullWidth
                        className="min-h-20"
                        onChange={setCustomClassPhone}
                    />

                    {/* -----------------------------------------------------------------
                        Read-only invalid state

                        Useful for checking how status props interact.
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-readonly-invalid"
                        name="tel-readonly-invalid"
                        label="Read-only invalid phone number"
                        description="Read-only field with an invalid state"
                        value="123"
                        isReadOnly
                        isInvalid
                        fieldError="This phone number is invalid"
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Disabled invalid state

                        Useful for checking status precedence in the underlying
                        HeroUI component.
                    ------------------------------------------------------------------ */}

                    <TelField
                        id="tel-disabled-invalid"
                        name="tel-disabled-invalid"
                        label="Disabled invalid phone number"
                        description="Disabled field with an invalid state"
                        value="123"
                        isDisabled
                        isInvalid
                        fieldError="This phone number is invalid"
                        onChange={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};