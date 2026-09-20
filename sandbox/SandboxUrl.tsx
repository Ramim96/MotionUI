"use client";

import { useState } from "react";
// Components
import { UrlField } from "@design-system/input-fields/UrlField";
// Utils
import { cn } from "@utils/css";

export const SandboxUrlField = () => {

    const [url, setUrl] = useState("example.com");
    const [emptyUrl, setEmptyUrl] = useState("");
    const [requiredUrl, setRequiredUrl] = useState("");
    const [invalidUrl, setInvalidUrl] = useState("invalid-url");

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>URL Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled URL field */}
                    <UrlField
                        id="url-default"
                        name="url-default"
                        label="URL"
                        description="Enter a website URL"
                        placeholder="example.com"
                        value={url}
                        onChange={(value) => setUrl(value)}
                    />

                    {/* Empty */}
                    <UrlField
                        id="url-empty"
                        name="url-empty"
                        label="Empty URL"
                        description="No URL entered"
                        placeholder="example.com"
                        value={emptyUrl}
                        onChange={(value) => setEmptyUrl(value)}
                    />

                    {/* Disabled */}
                    <UrlField
                        id="url-disabled"
                        name="url-disabled"
                        label="Disabled URL"
                        description="This URL field is disabled"
                        value="example.com"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <UrlField
                        id="url-readonly"
                        name="url-readonly"
                        label="Read-only URL"
                        description="This URL field is read-only"
                        value="example.com"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <UrlField
                        id="url-required"
                        name="url-required"
                        label="Required URL"
                        description="A URL is required"
                        placeholder="example.com"
                        value={requiredUrl}
                        isRequired
                        onChange={(value) => setRequiredUrl(value)}
                    />

                    {/* Invalid */}
                    <UrlField
                        id="url-invalid"
                        name="url-invalid"
                        label="Invalid URL"
                        value={invalidUrl}
                        isInvalid
                        onChange={(value) => setInvalidUrl(value)}
                    />

                    {/* Invalid with error */}
                    <UrlField
                        id="url-invalid-error"
                        name="url-invalid-error"
                        label="Invalid URL with error"
                        description="This URL has a validation error"
                        value={invalidUrl}
                        isInvalid
                        fieldError="Please enter a valid URL"
                        onChange={(value) => setInvalidUrl(value)}
                    />

                    {/* No label */}
                    <UrlField
                        id="url-no-label"
                        name="url-no-label"
                        description="URL field without a label"
                        placeholder="example.com"
                        value={emptyUrl}
                        onChange={(value) => setEmptyUrl(value)}
                    />

                    {/* No label or description */}
                    <UrlField
                        id="url-no-label-no-description"
                        name="url-no-label-no-description"
                        placeholder="example.com"
                        value={emptyUrl}
                        onChange={(value) => setEmptyUrl(value)}
                    />

                    {/* Full width */}
                    <UrlField
                        id="url-full-width"
                        name="url-full-width"
                        label="Full width URL"
                        description="This field uses the full available width"
                        placeholder="example.com"
                        value={url}
                        fullWidth
                        onChange={(value) => setUrl(value)}
                    />

                </div>
            </div>
        </div>
    );
};