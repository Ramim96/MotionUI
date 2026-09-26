"use client";

import { useState } from "react";
// Components
import { UrlField } from "@design-system/ui/url-field";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxUrlField = () => {
    // -------------------------------------------------------------------------
    // Controlled values
    // -------------------------------------------------------------------------

    const [url, setUrl] = useState<string | undefined>(
        "https://example.com",
    );

    const [emptyUrl, setEmptyUrl] = useState<string | undefined>("");

    const [requiredUrl, setRequiredUrl] = useState<string | undefined>("");

    const [invalidUrl, setInvalidUrl] = useState<string | undefined>(
        "invalid-url",
    );

    const [tooltipUrl, setTooltipUrl] = useState<string | undefined>("");

    const [variantUrl, setVariantUrl] = useState<string | undefined>("");

    const [fullWidthUrl, setFullWidthUrl] = useState<string | undefined>("");

    const [noLabelUrl, setNoLabelUrl] = useState<string | undefined>("");

    const [customClassUrl, setCustomClassUrl] = useState<
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
                    <p>URL Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">
                    {/* -----------------------------------------------------------------
                        Basic / default
                    ------------------------------------------------------------------ */}

                    <UrlField
                        id="url-default"
                        name="url-default"
                        label="URL"
                        description="Enter a website URL"
                        placeholder="https://example.com"
                        value={url}
                        onChange={setUrl}
                    />

                    {/* -----------------------------------------------------------------
                        Empty controlled value
                    ------------------------------------------------------------------ */}

                    <UrlField
                        id="url-empty"
                        name="url-empty"
                        label="Empty URL"
                        description="No URL entered"
                        placeholder="https://example.com"
                        value={emptyUrl}
                        onChange={setEmptyUrl}
                    />

                    {/* -----------------------------------------------------------------
                        Undefined value
                    ------------------------------------------------------------------ */}

                    <UrlField
                        id="url-undefined"
                        name="url-undefined"
                        label="Undefined URL"
                        description="URL value is undefined"
                        placeholder="https://example.com"
                        value={undefined}
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Disabled
                    ------------------------------------------------------------------ */}

                    <UrlField
                        id="url-disabled"
                        name="url-disabled"
                        label="Disabled URL"
                        description="This URL field is disabled"
                        placeholder="https://example.com"
                        value="https://example.com"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Disabled + required
                    ------------------------------------------------------------------ */}

                    <UrlField
                        id="url-disabled-required"
                        name="url-disabled-required"
                        label="Disabled required URL"
                        description="Disabled and required"
                        value="https://example.com"
                        isDisabled
                        isRequired
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Read only
                    ------------------------------------------------------------------ */}

                    <UrlField
                        id="url-readonly"
                        name="url-readonly"
                        label="Read-only URL"
                        description="This URL field is read-only"
                        placeholder="https://example.com"
                        value="https://example.com"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* -----------------------------------------------------------------
                        Read only + required
                    ------------------------------------------------------------------ */}

                    <UrlField
                        id="url-readonly-required"
                        name="url-readonly-required"
                        label="Read-only required URL"
                        description="Read-only and required"
                        value="https://example.com"
                        isReadOnly
                        isRequired
                        onChange={() => {}}
                    />

                    <UrlField
                        id="url-required"
                        name="url-required"
                        label="Required URL"
                        description="A URL is required"
                        placeholder="https://example.com"
                        value={requiredUrl}
                        isRequired
                        onChange={setRequiredUrl}
                    />

                    <UrlField
                        id="url-required-invalid"
                        name="url-required-invalid"
                        label="Required invalid URL"
                        description="This field is required and currently invalid"
                        placeholder="https://example.com"
                        value={requiredUrl}
                        isRequired
                        isInvalid
                        fieldError="Please enter a valid URL"
                        onChange={setRequiredUrl}
                    />

                    <UrlField
                        id="url-invalid"
                        name="url-invalid"
                        label="Invalid URL"
                        description="Invalid state without an error message"
                        value={invalidUrl}
                        isInvalid
                        onChange={setInvalidUrl}
                    />

                    <UrlField
                        id="url-invalid-error"
                        name="url-invalid-error"
                        label="Invalid URL with error"
                        description="This URL has a validation error"
                        value={invalidUrl}
                        isInvalid
                        fieldError="Please enter a valid URL"
                        onChange={setInvalidUrl}
                    />

                    <UrlField
                        id="url-invalid-required-error"
                        name="url-invalid-required-error"
                        label="Invalid required URL"
                        description="Required field with validation error"
                        placeholder="https://example.com"
                        value={invalidUrl}
                        isRequired
                        isInvalid
                        fieldError="Please enter a valid URL"
                        onChange={setInvalidUrl}
                    />

                    <UrlField
                        id="url-label-only"
                        name="url-label-only"
                        label="URL"
                        placeholder="https://example.com"
                        value={emptyUrl}
                        onChange={setEmptyUrl}
                    />

                    <UrlField
                        id="url-no-label"
                        name="url-no-label"
                        description="URL field without a visible label"
                        ariaLabel="URL"
                        placeholder="https://example.com"
                        value={noLabelUrl}
                        onChange={setNoLabelUrl}
                    />

                    <UrlField
                        id="url-no-label-no-description"
                        name="url-no-label-no-description"
                        ariaLabel="URL"
                        placeholder="https://example.com"
                        value={noLabelUrl}
                        onChange={setNoLabelUrl}
                    />

                    <UrlField
                        id="url-tooltip"
                        name="url-tooltip"
                        label="URL"
                        description="This field has additional information"
                        tooltip="Enter the complete website URL, including https://"
                        placeholder="https://example.com"
                        value={tooltipUrl}
                        onChange={setTooltipUrl}
                    />

                    <UrlField
                        id="url-tooltip-required"
                        name="url-tooltip-required"
                        label="Required URL"
                        description="Required URL field with tooltip"
                        tooltip="Enter the complete website URL"
                        placeholder="https://example.com"
                        value={requiredUrl}
                        isRequired
                        onChange={setRequiredUrl}
                    />

                    <UrlField
                        id="url-full-width"
                        name="url-full-width"
                        label="Full width URL"
                        description="This field uses the full available width"
                        placeholder="https://example.com"
                        value={fullWidthUrl}
                        fullWidth
                        onChange={setFullWidthUrl}
                    />

                    <UrlField
                        id="url-full-width-required"
                        name="url-full-width-required"
                        label="Full width required URL"
                        description="Required field using the full width"
                        placeholder="https://example.com"
                        value={requiredUrl}
                        fullWidth
                        isRequired
                        onChange={setRequiredUrl}
                    />

                    <UrlField
                        id="url-full-width-invalid"
                        name="url-full-width-invalid"
                        label="Full width invalid URL"
                        description="Full width field with validation error"
                        value={invalidUrl}
                        fullWidth
                        isInvalid
                        fieldError="Please enter a valid URL"
                        onChange={setInvalidUrl}
                    />

                    <UrlField
                        id="url-variant"
                        name="url-variant"
                        label="Variant URL"
                        description="URL field using an explicit variant"
                        placeholder="https://example.com"
                        value={variantUrl}
                        variant="primary"
                        onChange={setVariantUrl}
                    />

                    <UrlField
                        id="url-custom-class"
                        name="url-custom-class"
                        label="Custom class URL"
                        description="URL field with a custom class"
                        placeholder="https://example.com"
                        value={customClassUrl}
                        className="max-w-sm"
                        onChange={setCustomClassUrl}
                    />

                    <UrlField
                        id="url-custom-full-width"
                        name="url-custom-full-width"
                        label="Custom full width URL"
                        description="Full width field with additional styling"
                        placeholder="https://example.com"
                        value={customClassUrl}
                        fullWidth
                        className="min-h-20"
                        onChange={setCustomClassUrl}
                    />

                    <UrlField
                        id="url-readonly-invalid"
                        name="url-readonly-invalid"
                        label="Read-only invalid URL"
                        description="Read-only field with an invalid state"
                        value="invalid-url"
                        isReadOnly
                        isInvalid
                        fieldError="This URL is invalid"
                        onChange={() => {}}
                    />

                    <UrlField
                        id="url-disabled-invalid"
                        name="url-disabled-invalid"
                        label="Disabled invalid URL"
                        description="Disabled field with an invalid state"
                        value="invalid-url"
                        isDisabled
                        isInvalid
                        fieldError="This URL is invalid"
                        onChange={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};