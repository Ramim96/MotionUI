"use client";

import { useState } from "react";
// Components
import { PasswordField } from "@design-system/ui/password-field";
// Utils
import { cn } from "../lib/utils/css";

export const SandboxPasswordField = () => {

    const [password, setPassword] = useState<string | undefined>("");
    const [emptyPassword, setEmptyPassword] = useState<string | undefined>("");
    const [requiredPassword, setRequiredPassword] = useState<string | undefined>("");
    const [invalidPassword, setInvalidPassword] = useState<string | undefined>("password123");

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

                    {/* No label */}
                    <PasswordField
                        id="password-no-label"
                        name="password-no-label"
                        description="Password field without a label"
                        ariaLabel="no-label"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    {/* No label or description */}
                    <PasswordField
                        id="password-no-label-no-description"
                        name="password-no-label-no-description"
                        ariaLabel="no-label-no-description"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    {/* Full width */}
                    <PasswordField
                        id="password-full-width"
                        name="password-full-width"
                        label="Full width password"
                        description="This field uses the full available width"
                        value={password}
                        fullWidth
                        onChange={(value) => setPassword(value)}
                    />

                </div>
            </div>
        </div>
    );
};
