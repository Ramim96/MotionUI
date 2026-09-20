"use client";

import { useState } from "react";
// Components
import { NumberField } from "@design-system/input-fields/NumberField";
// Utils
import { cn } from "@utils/css";

export const SandboxNumberField = () => {

    const [number, setNumber] = useState<number | undefined>(10);
    const [emptyNumber, setEmptyNumber] = useState<number | undefined>(undefined);
    const [requiredNumber, setRequiredNumber] = useState<number | undefined>(0);
    const [invalidNumber, setInvalidNumber] = useState<number | undefined>(-5);
    const [rangeNumber, setRangeNumber] = useState<number | undefined>(50);
    const [stepNumber, setStepNumber] = useState<number | undefined>(10);
    const [currencyNumber, setCurrencyNumber] = useState<number | undefined>(1250);

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Number Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled number field */}
                    <NumberField
                        id="number-default"
                        name="number-default"
                        label="Number"
                        description="Enter a number"
                        value={number}
                        onChange={(value) => setNumber(value)}
                    />

                    {/* Empty */}
                    <NumberField
                        id="number-empty"
                        name="number-empty"
                        label="Empty number"
                        description="No number selected"
                        value={emptyNumber}
                        onChange={(value) => setEmptyNumber(value)}
                    />

                    {/* Disabled */}
                    <NumberField
                        id="number-disabled"
                        name="number-disabled"
                        label="Disabled number"
                        description="This number field is disabled"
                        value={10}
                        isDisabled
                        onChange={() => {}}
                    />

                    {/* Read only */}
                    <NumberField
                        id="number-readonly"
                        name="number-readonly"
                        label="Read-only number"
                        description="This number field is read-only"
                        value={10}
                        isReadOnly
                        onChange={() => {}}
                    />

                    {/* Required */}
                    <NumberField
                        id="number-required"
                        name="number-required"
                        label="Required number"
                        description="A number is required"
                        value={requiredNumber}
                        isRequired
                        onChange={(value) => setRequiredNumber(value)}
                    />

                    {/* Invalid */}
                    <NumberField
                        id="number-invalid"
                        name="number-invalid"
                        label="Invalid number"
                        value={invalidNumber}
                        isInvalid
                        onChange={(value) => setInvalidNumber(value)}
                    />

                    {/* Invalid with error */}
                    <NumberField
                        id="number-invalid-error"
                        name="number-invalid-error"
                        label="Invalid number with error"
                        description="This number has a validation error"
                        value={invalidNumber}
                        isInvalid
                        fieldError="Please enter a valid number"
                        onChange={(value) => setInvalidNumber(value)}
                    />

                    {/* Min / max */}
                    <NumberField
                        id="number-range"
                        name="number-range"
                        label="Number range"
                        description="Allowed range: 0–100"
                        value={rangeNumber}
                        minValue={0}
                        maxValue={100}
                        onChange={(value) => setRangeNumber(value)}
                    />

                    {/* Step */}
                    <NumberField
                        id="number-step"
                        name="number-step"
                        label="Number with step"
                        description="Increments by 10"
                        value={stepNumber}
                        step={10}
                        onChange={(value) => setStepNumber(value)}
                    />

                    {/* Format options */}
                    <NumberField
                        id="number-currency"
                        name="number-currency"
                        label="Formatted number"
                        description="Currency formatting"
                        value={currencyNumber}
                        formatOptions={{
                            style: "currency",
                            currency: "USD",
                        }}
                        onChange={(value) => setCurrencyNumber(value)}
                    />

                    {/* No label */}
                    <NumberField
                        id="number-no-label"
                        name="number-no-label"
                        description="Number field without a label"
                        value={number}
                        onChange={(value) => setNumber(value)}
                    />

                    {/* No label or description */}
                    <NumberField
                        id="number-no-label-no-description"
                        name="number-no-label-no-description"
                        value={number}
                        onChange={(value) => setNumber(value)}
                    />

                    {/* Full width */}
                    <NumberField
                        id="number-full-width"
                        name="number-full-width"
                        label="Full width number"
                        description="This field uses the full available width"
                        value={number}
                        fullWidth
                        onChange={(value) => setNumber(value)}
                    />

                    {/* Custom aria-label */}
                    <NumberField
                        id="number-aria-label"
                        name="number-aria-label"
                        ariaLabel="Quantity"
                        label="Quantity"
                        description="Custom accessible name"
                        value={number}
                        onChange={(value) => setNumber(value)}
                    />

                </div>
            </div>
        </div>
    );
};