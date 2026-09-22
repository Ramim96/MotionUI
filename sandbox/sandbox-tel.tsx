"use client";

import { useState } from "react";
// Components
import { TelField } from "@design-system/ui/tel-field";
// Utils
import { cn } from "../lib/utils/css";

export const SandboxTelField = () => {

    const [phone, setPhone] = useState<string | undefined>("+44 7700 900123");
    const [emptyPhone, setEmptyPhone] = useState<string | undefined>("");
    const [requiredPhone, setRequiredPhone] = useState<string | undefined>("");
    const [invalidPhone, setInvalidPhone] = useState<string | undefined>("123");

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Tel Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled telephone field */}
                    <TelField
                        id="tel-default"
                        name="tel-default"
                        label="Phone number"
                        description="Enter your phone number"
                        placeholder="+44 7700 900123"
                        value={phone}
                        onChange={(value) => setPhone(value)}
                    />

                    {/* Empty */}
                    <TelField
                        id="tel-empty"
                        name="tel-empty"
                        label="Empty phone number"
                        description="No phone number entered"
                        placeholder="+44 7700 900123"
                        value={emptyPhone}
                        onChange={(value) => setEmptyPhone(value)}
                    />

                    {/* Disabled */}
                    <TelField
                        id="tel-disabled"
                        name="tel-disabled"
                        label="Disabled phone number"
                        description="This phone field is disabled"
                        value="+44 7700 900123"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <TelField
                        id="tel-readonly"
                        name="tel-readonly"
                        label="Read-only phone number"
                        description="This phone field is read-only"
                        value="+44 7700 900123"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <TelField
                        id="tel-required"
                        name="tel-required"
                        label="Required phone number"
                        description="A phone number is required"
                        placeholder="+44 7700 900123"
                        value={requiredPhone}
                        isRequired
                        onChange={(value) => setRequiredPhone(value)}
                    />

                    {/* Invalid */}
                    <TelField
                        id="tel-invalid"
                        name="tel-invalid"
                        label="Invalid phone number"
                        value={invalidPhone}
                        isInvalid
                        onChange={(value) => setInvalidPhone(value)}
                    />

                    {/* Invalid with error */}
                    <TelField
                        id="tel-invalid-error"
                        name="tel-invalid-error"
                        label="Invalid phone number with error"
                        description="This phone number has a validation error"
                        value={invalidPhone}
                        isInvalid
                        fieldError="Please enter a valid phone number"
                        onChange={(value) => setInvalidPhone(value)}
                    />

                    {/* No label */}
                    <TelField
                        id="tel-no-label"
                        name="tel-no-label"
                        description="Phone field without a label"
                        ariaLabel="no-label"
                        placeholder="+44 7700 900123"
                        value={emptyPhone}
                        onChange={(value) => setEmptyPhone(value)}
                    />

                    {/* No label or description */}
                    <TelField
                        id="tel-no-label-no-description"
                        name="tel-no-label-no-description"
                        ariaLabel="no-label-no-description"
                        placeholder="+44 7700 900123"
                        value={emptyPhone}
                        onChange={(value) => setEmptyPhone(value)}
                    />

                    {/* Full width */}
                    <TelField
                        id="tel-full-width"
                        name="tel-full-width"
                        label="Full width phone number"
                        description="This field uses the full available width"
                        placeholder="+44 7700 900123"
                        value={phone}
                        fullWidth
                        onChange={(value) => setPhone(value)}
                    />

                </div>
            </div>
        </div>
    );
};