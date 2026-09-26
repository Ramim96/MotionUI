"use client";

import { useState } from "react";
// Components
import { EmailField } from "@design-system/ui/email-field";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxEmailField = () => {

    const [email, setEmail] = useState<string | undefined>("john@example.com");
    const [emptyEmail, setEmptyEmail] = useState<string | undefined>("");
    const [requiredEmail, setRequiredEmail] = useState<string | undefined>("");
    const [invalidEmail, setInvalidEmail] = useState<string | undefined>("invalid-email");
    const [invalidRequiredEmail, setInvalidRequiredEmail] = useState<string | undefined>("");
    const [disabledRequiredEmail, setDisabledRequiredEmail] = useState<string | undefined>("john@example.com");
    const [readOnlyRequiredEmail, setReadOnlyRequiredEmail] = useState<string | undefined>("john@example.com");
    const [disabledInvalidEmail, setDisabledInvalidEmail] = useState<string | undefined>("invalid-email");
    const [requiredInvalidEmail, setRequiredInvalidEmail] = useState<string | undefined>("");
    const [noLabelEmail, setNoLabelEmail] = useState<string | undefined>("");
    const [noLabelNoDescriptionEmail, setNoLabelNoDescriptionEmail] = useState<string | undefined>("");
    const [fullWidthEmail, setFullWidthEmail] = useState<string | undefined>("john@example.com");
    const [ariaLabelEmail, setAriaLabelEmail] = useState<string | undefined>("");
    const [tooltipEmail, setTooltipEmail] = useState<string | undefined>("john@example.com");
    const [customClassEmail, setCustomClassEmail] = useState<string | undefined>("john@example.com");

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
                        placeholder="john@example.com"
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
                        placeholder="john@example.com"
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
                        description="This email is invalid"
                        placeholder="john@example.com"
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
                        placeholder="john@example.com"
                        value={invalidEmail}
                        isInvalid
                        fieldError="Please enter a valid email address"
                        onChange={(value) => setInvalidEmail(value)}
                    />

                    {/* Required + invalid */}
                    <EmailField
                        id="email-required-invalid"
                        name="email-required-invalid"
                        label="Required invalid email"
                        description="A valid email address is required"
                        placeholder="john@example.com"
                        value={requiredInvalidEmail}
                        isRequired
                        isInvalid
                        fieldError="Please enter your email address"
                        onChange={(value) => setRequiredInvalidEmail(value)}
                    />

                    {/* Required + invalid without error */}
                    <EmailField
                        id="email-invalid-required"
                        name="email-invalid-required"
                        label="Invalid required email"
                        description="This required field is invalid"
                        placeholder="john@example.com"
                        value={invalidRequiredEmail}
                        isRequired
                        isInvalid
                        onChange={(value) => setInvalidRequiredEmail(value)}
                    />

                    {/* Disabled + required */}
                    <EmailField
                        id="email-disabled-required"
                        name="email-disabled-required"
                        label="Disabled required email"
                        description="This required field is disabled"
                        placeholder="john@example.com"
                        value={disabledRequiredEmail}
                        isDisabled
                        isRequired
                        onChange={(value) => setDisabledRequiredEmail(value)}
                    />

                    {/* Read only + required */}
                    <EmailField
                        id="email-readonly-required"
                        name="email-readonly-required"
                        label="Read-only required email"
                        description="This required field is read-only"
                        placeholder="john@example.com"
                        value={readOnlyRequiredEmail}
                        isReadOnly
                        isRequired
                        onChange={(value) => setReadOnlyRequiredEmail(value)}
                    />

                    {/* Disabled + invalid */}
                    <EmailField
                        id="email-disabled-invalid"
                        name="email-disabled-invalid"
                        label="Disabled invalid email"
                        description="This email is disabled and invalid"
                        placeholder="john@example.com"
                        value={disabledInvalidEmail}
                        isDisabled
                        isInvalid
                        fieldError="This email is invalid"
                        onChange={(value) => setDisabledInvalidEmail(value)}
                    />

                    {/* No label */}
                    <EmailField
                        id="email-no-label"
                        name="email-no-label"
                        ariaLabel="Email address"
                        description="Email field without a visible label"
                        placeholder="john@example.com"
                        value={noLabelEmail}
                        onChange={(value) => setNoLabelEmail(value)}
                    />

                    {/* No label or description */}
                    <EmailField
                        id="email-no-label-no-description"
                        name="email-no-label-no-description"
                        ariaLabel="Email address without label"
                        placeholder="john@example.com"
                        value={noLabelNoDescriptionEmail}
                        onChange={(value) => setNoLabelNoDescriptionEmail(value)}
                    />

                    {/* Full width */}
                    <EmailField
                        id="email-full-width"
                        name="email-full-width"
                        label="Full width email"
                        description="This field uses the full available width"
                        placeholder="john@example.com"
                        value={fullWidthEmail}
                        fullWidth
                        onChange={(value) => setFullWidthEmail(value)}
                    />

                    {/* Custom aria-label with visible label */}
                    <EmailField
                        id="email-aria-label"
                        name="email-aria-label"
                        label="Contact email"
                        ariaLabel="Select contact email address"
                        description="Uses a custom accessible name"
                        placeholder="john@example.com"
                        value={ariaLabelEmail}
                        onChange={(value) => setAriaLabelEmail(value)}
                    />

                    {/* Tooltip */}
                    <EmailField
                        id="email-tooltip"
                        name="email-tooltip"
                        label="Email address"
                        description="We'll use this address for account communication"
                        tooltip="Enter an email address that you check regularly"
                        placeholder="john@example.com"
                        value={tooltipEmail}
                        onChange={(value) => setTooltipEmail(value)}
                    />

                    {/* Secondary variant */}
                    <EmailField
                        id="email-secondary"
                        name="email-secondary"
                        label="Secondary email"
                        description="Email field using the secondary variant"
                        placeholder="john@example.com"
                        value={email}
                        variant="secondary"
                        onChange={(value) => setEmail(value)}
                    />

                    {/* Custom class */}
                    <EmailField
                        id="email-custom-class"
                        name="email-custom-class"
                        label="Custom styled email"
                        description="This field has a custom className"
                        placeholder="john@example.com"
                        value={customClassEmail}
                        className="max-w-sm"
                        onChange={(value) => setCustomClassEmail(value)}
                    />

                </div>
            </div>
        </div>
    );
};