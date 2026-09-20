"use client";

import { useState } from "react";
import { CalendarDate } from "@internationalized/date";
// Components
import { DateField } from "@design-system/input-fields/DateField";
// Utils
import { cn } from "@utils/css";
import { DateValue } from "@heroui/react";

export const SandboxDateField = () => {

    const [selectedDate, setSelectedDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    const [selectedRequiredDate, setSelectedRequiredDate] = useState<DateValue | null>(null);

    const [selectedInvalidDate, setSelectedInvalidDate] = useState<DateValue | null>(null);

    const [selectedDisabledDate, setSelectedDisabledDate] = useState<DateValue | null>(
        new CalendarDate(2026, 9, 19)
    );

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-x-3 gap-y-8 p-2",
                "w-full",
            )}
        >
            <div className={cn("flex flex-col gap-y-5 w-full")}>
                <div className={cn("flex justify-center items-start")}>
                    <p>Date Field</p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-8">

                    {/* Basic controlled date field */}
                    <DateField
                        id="date-default"
                        name="date-default"
                        label="Date"
                        description="Select a date"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value)}
                    />

                    {/* Empty date field */}
                    <DateField
                        id="date-empty"
                        name="date-empty"
                        label="Empty date"
                        description="No date selected"
                        value={null}
                        onChange={() => {}}
                    />

                    {/* Disabled */}
                    <DateField
                        id="date-disabled"
                        name="date-disabled"
                        label="Disabled date"
                        description="This date field is disabled"
                        value={selectedDisabledDate}
                        isDisabled
                        onChange={(value) => setSelectedDisabledDate(value)}
                    />

                    {/* Read only */}
                    <DateField
                        id="date-readonly"
                        name="date-readonly"
                        label="Read-only date"
                        description="This date field is read-only"
                        value={selectedDate}
                        isReadOnly
                        onChange={(value) => setSelectedDate(value)}
                    />

                    {/* Required */}
                    <DateField
                        id="date-required"
                        name="date-required"
                        label="Required date"
                        description="A date is required"
                        value={selectedRequiredDate}
                        isRequired
                        onChange={(value) => setSelectedRequiredDate(value)}
                    />

                    {/* Invalid */}
                    <DateField
                        id="date-invalid"
                        name="date-invalid"
                        label="Invalid date"
                        value={selectedInvalidDate}
                        isInvalid
                        onChange={(value) => setSelectedInvalidDate(value)}
                    />

                    {/* Invalid with error */}
                    <DateField
                        id="date-invalid-error"
                        name="date-invalid-error"
                        label="Invalid date with error"
                        description="This date has a validation error"
                        value={selectedInvalidDate}
                        isInvalid
                        fieldError="Please select a valid date"
                        onChange={(value) => setSelectedInvalidDate(value)}
                    />

                    {/* No label */}
                    <DateField
                        id="date-no-label"
                        name="date-no-label"
                        description="Date field without a label"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value)}
                    />

                    {/* No label or description */}
                    <DateField
                        id="date-no-label-no-description"
                        name="date-no-label-no-description"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value)}
                    />

                    {/* Full width */}
                    <DateField
                        id="date-full-width"
                        name="date-full-width"
                        label="Full width date"
                        description="This date field uses the full available width"
                        value={selectedDate}
                        fullWidth
                        onChange={(value) => setSelectedDate(value)}
                    />

                    {/* Custom aria-label */}
                    <DateField
                        id="date-aria-label"
                        name="date-aria-label"
                        ariaLabel="Select appointment date"
                        label="Appointment"
                        description="Custom accessible name"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value)}
                    />

                </div>
            </div>
        </div>
    );
};
