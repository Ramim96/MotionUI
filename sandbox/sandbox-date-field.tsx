"use client";

import { useState } from "react";
import { CalendarDate } from "@internationalized/date";
// Components
import { DateField } from "@design-system/ui/date-field";
// Utils
import { cn } from "../lib/utils/css-utils";
import { DateValue } from "@heroui/react";

export const SandboxDateField = () => {

    // #region Basic / individual states

    const [defaultDate, setDefaultDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    const [emptyDate, setEmptyDate] = useState<DateValue | null>(null);

    const [disabledDate, setDisabledDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    const [readOnlyDate, setReadOnlyDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    const [requiredDate, setRequiredDate] = useState<DateValue | null>(null);

    // #endregion


    // #region Validation states

    const [invalidDate, setInvalidDate] = useState<DateValue | null>(null);

    const [invalidErrorDate, setInvalidErrorDate] =
        useState<DateValue | null>(null);

    const [invalidRequiredDate, setInvalidRequiredDate] =
        useState<DateValue | null>(null);

    // #endregion


    // #region Accessibility / styling states

    const [noLabelDate, setNoLabelDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    const [noLabelNoDescriptionDate, setNoLabelNoDescriptionDate] =
        useState<DateValue | null>(
            new CalendarDate(2026, 9, 19)
        );

    const [fullWidthDate, setFullWidthDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    const [ariaLabelDate, setAriaLabelDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    const [tooltipDate, setTooltipDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    const [customClassDate, setCustomClassDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    // #endregion


    // #region Combined states

    const [disabledRequiredDate, setDisabledRequiredDate] =
        useState<DateValue | null>(
            new CalendarDate(2026, 9, 19)
        );

    const [readOnlyRequiredDate, setReadOnlyRequiredDate] =
        useState<DateValue | null>(
            new CalendarDate(2026, 9, 19)
        );

    const [disabledInvalidDate, setDisabledInvalidDate] =
        useState<DateValue | null>(
            new CalendarDate(2026, 9, 19)
        );

    const [requiredInvalidErrorDate, setRequiredInvalidErrorDate] =
        useState<DateValue | null>(null);

    // #endregion


    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center",
                "gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>

                <div className={cn("flex justify-center items-start")}>
                    <p>Date Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* ========================================================
                        Basic
                    ======================================================== */}

                    {/* Basic controlled date field */}
                    <DateField
                        id="date-default"
                        name="date-default"
                        label="Date"
                        description="Select a date"
                        value={defaultDate}
                        onChange={setDefaultDate}
                    />

                    {/* Empty date field */}
                    <DateField
                        id="date-empty"
                        name="date-empty"
                        label="Empty date"
                        description="No date selected"
                        value={emptyDate}
                        onChange={setEmptyDate}
                    />


                    {/* ========================================================
                        Status
                    ======================================================== */}

                    {/* Disabled */}
                    <DateField
                        id="date-disabled"
                        name="date-disabled"
                        label="Disabled date"
                        description="This date field is disabled"
                        value={disabledDate}
                        isDisabled
                        onChange={setDisabledDate}
                    />

                    {/* Read only */}
                    <DateField
                        id="date-readonly"
                        name="date-readonly"
                        label="Read-only date"
                        description="This date field is read-only"
                        value={readOnlyDate}
                        isReadOnly
                        onChange={setReadOnlyDate}
                    />

                    {/* Required */}
                    <DateField
                        id="date-required"
                        name="date-required"
                        label="Required date"
                        description="A date is required"
                        value={requiredDate}
                        isRequired
                        onChange={setRequiredDate}
                    />


                    {/* ========================================================
                        Validation
                    ======================================================== */}

                    {/* Invalid */}
                    <DateField
                        id="date-invalid"
                        name="date-invalid"
                        label="Invalid date"
                        description="This date field is invalid"
                        value={invalidDate}
                        isInvalid
                        onChange={setInvalidDate}
                    />

                    {/* Invalid with error */}
                    <DateField
                        id="date-invalid-error"
                        name="date-invalid-error"
                        label="Invalid date with error"
                        description="This date has a validation error"
                        value={invalidErrorDate}
                        isInvalid
                        fieldError="Please select a valid date"
                        onChange={setInvalidErrorDate}
                    />

                    {/* Invalid + required */}
                    <DateField
                        id="date-invalid-required"
                        name="date-invalid-required"
                        label="Invalid required date"
                        description="This date is required and currently invalid"
                        value={invalidRequiredDate}
                        isRequired
                        isInvalid
                        fieldError="Please select a valid date"
                        onChange={setInvalidRequiredDate}
                    />


                    {/* ========================================================
                        Accessibility
                    ======================================================== */}

                    {/* No label */}
                    <DateField
                        id="date-no-label"
                        name="date-no-label"
                        description="Date field without a visible label"
                        value={noLabelDate}
                        ariaLabel="Select date"
                        onChange={setNoLabelDate}
                    />

                    {/* No label or description */}
                    <DateField
                        id="date-no-label-no-description"
                        name="date-no-label-no-description"
                        value={noLabelNoDescriptionDate}
                        ariaLabel="Select date without description"
                        onChange={setNoLabelNoDescriptionDate}
                    />

                    {/* Custom aria-label with visible label */}
                    <DateField
                        id="date-aria-label"
                        name="date-aria-label"
                        label="Appointment"
                        description="Custom accessible name"
                        ariaLabel="Select appointment date"
                        value={ariaLabelDate}
                        onChange={setAriaLabelDate}
                    />


                    {/* ========================================================
                        Styling
                    ======================================================== */}

                    {/* Full width */}
                    <DateField
                        id="date-full-width"
                        name="date-full-width"
                        label="Full width date"
                        description="This date field uses the full available width"
                        value={fullWidthDate}
                        fullWidth
                        onChange={setFullWidthDate}
                    />

                    {/* Custom className */}
                    <DateField
                        id="date-custom-class"
                        name="date-custom-class"
                        label="Custom class date"
                        description="Exercises the className prop"
                        value={customClassDate}
                        className="data-testid-custom-date-field"
                        onChange={setCustomClassDate}
                    />


                    {/* ========================================================
                        Tooltip
                    ======================================================== */}

                    <DateField
                        id="date-tooltip"
                        name="date-tooltip"
                        label="Date with tooltip"
                        description="Date field with additional information"
                        tooltip="Select the date associated with your appointment"
                        value={tooltipDate}
                        onChange={setTooltipDate}
                    />


                    {/* ========================================================
                        Combined states
                    ======================================================== */}

                    {/* Disabled + required */}
                    <DateField
                        id="date-disabled-required"
                        name="date-disabled-required"
                        label="Disabled required date"
                        description="This field is both disabled and required"
                        value={disabledRequiredDate}
                        isDisabled
                        isRequired
                        onChange={setDisabledRequiredDate}
                    />

                    {/* Read-only + required */}
                    <DateField
                        id="date-readonly-required"
                        name="date-readonly-required"
                        label="Read-only required date"
                        description="This field is read-only and required"
                        value={readOnlyRequiredDate}
                        isReadOnly
                        isRequired
                        onChange={setReadOnlyRequiredDate}
                    />

                    {/* Disabled + invalid */}
                    <DateField
                        id="date-disabled-invalid"
                        name="date-disabled-invalid"
                        label="Disabled invalid date"
                        description="This field is disabled and invalid"
                        value={disabledInvalidDate}
                        isDisabled
                        isInvalid
                        fieldError="This date is unavailable"
                        onChange={setDisabledInvalidDate}
                    />

                    {/* Required + invalid + error */}
                    <DateField
                        id="date-required-invalid-error"
                        name="date-required-invalid-error"
                        label="Required invalid date"
                        description="Required field with a validation error"
                        value={requiredInvalidErrorDate}
                        isRequired
                        isInvalid
                        fieldError="Please select a valid date"
                        onChange={setRequiredInvalidErrorDate}
                    />

                </div>
            </div>
        </div>
    );
};