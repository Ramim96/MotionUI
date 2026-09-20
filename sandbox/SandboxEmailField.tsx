"use client";

import { useState } from "react";
// Components
import { EmailField } from "@design-system/input-fields/EmailField";
// Utils
import { cn } from "@utils/css";

export const SandboxEmailField = () => {

    const [email, setEmail] = useState("john@example.com");
    const [emptyEmail, setEmptyEmail] = useState("");
    const [requiredEmail, setRequiredEmail] = useState("");
    const [invalidEmail, setInvalidEmail] = useState("invalid-email");

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Email Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled email field */}
                    <EmailField
                        id="email-default"
                        name="email-default"
                        label="Email"
                        description="Enter your email address"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(value) => setEmail(value)}
                    />

                    {/* Empty */}
                    <EmailField
                        id="email-empty"
                        name="email-empty"
                        label="Empty email"
                        description="No email entered"
                        placeholder="john@example.com"
                        value={emptyEmail}
                        onChange={(value) => setEmptyEmail(value)}
                    />

                    {/* Disabled */}
                    <EmailField
                        id="email-disabled"
                        name="email-disabled"
                        label="Disabled email"
                        description="This email field is disabled"
                        value="john@example.com"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <EmailField
                        id="email-readonly"
                        name="email-readonly"
                        label="Read-only email"
                        description="This email field is read-only"
                        value="john@example.com"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <EmailField
                        id="email-required"
                        name="email-required"
                        label="Required email"
                        description="An email address is required"
                        placeholder="john@example.com"
                        value={requiredEmail}
                        isRequired
                        onChange={(value) => setRequiredEmail(value)}
                    />

                    {/* Invalid */}
                    <EmailField
                        id="email-invalid"
                        name="email-invalid"
                        label="Invalid email"
                        value={invalidEmail}
                        isInvalid
                        onChange={(value) => setInvalidEmail(value)}
                    />

                    {/* Invalid with error */}
                    <EmailField
                        id="email-invalid-error"
                        name="email-invalid-error"
                        label="Invalid email with error"
                        description="This email has a validation error"
                        value={invalidEmail}
                        isInvalid
                        fieldError="Please enter a valid email address"
                        onChange={(value) => setInvalidEmail(value)}
                    />

                    {/* No label */}
                    <EmailField
                        id="email-no-label"
                        name="email-no-label"
                        description="Email field without a label"
                        placeholder="john@example.com"
                        value={emptyEmail}
                        onChange={(value) => setEmptyEmail(value)}
                    />

                    {/* No label or description */}
                    <EmailField
                        id="email-no-label-no-description"
                        name="email-no-label-no-description"
                        placeholder="john@example.com"
                        value={emptyEmail}
                        onChange={(value) => setEmptyEmail(value)}
                    />

                    {/* Full width */}
                    <EmailField
                        id="email-full-width"
                        name="email-full-width"
                        label="Full width email"
                        description="This field uses the full available width"
                        placeholder="john@example.com"
                        value={email}
                        fullWidth
                        onChange={(value) => setEmail(value)}
                    />

                </div>
            </div>
        </div>
    );
};
