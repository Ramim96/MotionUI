"use client";

import { useState } from "react";
// Components
import { PasswordField } from "@design-system/ui/password-field";
// Utils
import { cn } from "../lib/utils/css-utils";

export const SandboxPasswordField = () => {

    const [password, setPassword] = useState<string | undefined>("");
    const [emptyPassword, setEmptyPassword] = useState<string | undefined>("");
    const [requiredPassword, setRequiredPassword] = useState<string | undefined>("");
    const [invalidPassword, setInvalidPassword] = useState<string | undefined>("password123");
    const [requiredInvalidPassword, setRequiredInvalidPassword] = useState<string | undefined>("");
    const [customPassword, setCustomPassword] = useState<string | undefined>("password123");

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Password Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled password field */}
                    <PasswordField
                        id="password-default"
                        name="password-default"
                        label="Password"
                        description="Enter your password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    {/* Empty */}
                    <PasswordField
                        id="password-empty"
                        name="password-empty"
                        label="Empty password"
                        description="No password entered"
                        value={emptyPassword}
                        placeholder="Enter password"
                        onChange={(value) => setEmptyPassword(value)}
                    />

                    {/* Disabled */}
                    <PasswordField
                        id="password-disabled"
                        name="password-disabled"
                        label="Disabled password"
                        description="This password field is disabled"
                        value="password123"
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <PasswordField
                        id="password-readonly"
                        name="password-readonly"
                        label="Read-only password"
                        description="This password field is read-only"
                        value="password123"
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <PasswordField
                        id="password-required"
                        name="password-required"
                        label="Required password"
                        description="A password is required"
                        value={requiredPassword}
                        isRequired
                        onChange={(value) => setRequiredPassword(value)}
                    />

                    {/* Invalid */}
                    <PasswordField
                        id="password-invalid"
                        name="password-invalid"
                        label="Invalid password"
                        description="This password is invalid"
                        value={invalidPassword}
                        isInvalid
                        onChange={(value) => setInvalidPassword(value)}
                    />

                    {/* Invalid with error */}
                    <PasswordField
                        id="password-invalid-error"
                        name="password-invalid-error"
                        label="Invalid password with error"
                        description="This password has a validation error"
                        value={invalidPassword}
                        isInvalid
                        fieldError="Please enter a valid password"
                        onChange={(value) => setInvalidPassword(value)}
                    />

                    {/* Required + invalid */}
                    <PasswordField
                        id="password-required-invalid"
                        name="password-required-invalid"
                        label="Required invalid password"
                        description="A valid password is required"
                        value={requiredInvalidPassword}
                        isRequired
                        isInvalid
                        fieldError="Please enter your password"
                        onChange={(value) => setRequiredInvalidPassword(value)}
                    />

                    {/* Disabled + required */}
                    <PasswordField
                        id="password-disabled-required"
                        name="password-disabled-required"
                        label="Disabled required password"
                        description="This required password field is disabled"
                        value="password123"
                        isDisabled
                        isRequired
                        onChange={() => {}}
                    />

                    {/* Read only + required */}
                    <PasswordField
                        id="password-readonly-required"
                        name="password-readonly-required"
                        label="Read-only required password"
                        description="This required password field is read-only"
                        value="password123"
                        isReadOnly
                        isRequired
                        onChange={() => {}}
                    />

                    {/* Disabled + invalid */}
                    <PasswordField
                        id="password-disabled-invalid"
                        name="password-disabled-invalid"
                        label="Disabled invalid password"
                        description="This password is disabled and invalid"
                        value="password123"
                        isDisabled
                        isInvalid
                        fieldError="This password is invalid"
                        onChange={() => {}}
                    />

                    {/* No label */}
                    <PasswordField
                        id="password-no-label"
                        name="password-no-label"
                        description="Password field without a visible label"
                        ariaLabel="Password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    {/* No label or description */}
                    <PasswordField
                        id="password-no-label-no-description"
                        name="password-no-label-no-description"
                        ariaLabel="Password without visible label"
                        placeholder="Enter password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    {/* Full width */}
                    <PasswordField
                        id="password-full-width"
                        name="password-full-width"
                        label="Full width password"
                        description="This field uses the full available width"
                        placeholder="Enter password"
                        value={password}
                        fullWidth
                        onChange={(value) => setPassword(value)}
                    />

                    {/* Custom aria-label */}
                    <PasswordField
                        id="password-aria-label"
                        name="password-aria-label"
                        ariaLabel="Account password"
                        label="Password"
                        description="Custom accessible name"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    {/* Tooltip */}
                    <PasswordField
                        id="password-tooltip"
                        name="password-tooltip"
                        label="Password"
                        description="Choose a secure password"
                        tooltip="Use a combination of letters, numbers, and special characters"
                        placeholder="Enter password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    {/* Secondary variant */}
                    <PasswordField
                        id="password-secondary"
                        name="password-secondary"
                        label="Secondary password"
                        description="Password field using the secondary variant"
                        placeholder="Enter password"
                        value={password}
                        variant="secondary"
                        onChange={(value) => setPassword(value)}
                    />

                    {/* Custom class */}
                    <PasswordField
                        id="password-custom-class"
                        name="password-custom-class"
                        label="Custom styled password"
                        description="This field has a custom className"
                        placeholder="Enter password"
                        value={customPassword}
                        className="max-w-sm"
                        onChange={(value) => setCustomPassword(value)}
                    />

                </div>
            </div>
        </div>
    );
};