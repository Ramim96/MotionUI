"use client";

import React, { Dispatch, useEffect, useLayoutEffect, useRef, useState } from "react";
// Components
import { PrimitiveButton } from "@buttons/Button";
import { Container, InputContainer } from "@input-fields/InputContainer";
import { Text } from "@text/Texts";
// Icons
import { IconVariant } from "@icons/IconVariant";
// Utils
import { cn } from "@utils/css";
import {
    getDateComponents,
    getMonthStartDateFromDateString,
    getTodayDateString,
    CalendarDay,
    daysOfTheWeek,
    monthsOfTheYear,
    CalendarDisplayDay,
    getCalendarDisplayDay
} from "@utils/date-picker";
import { computePosition } from "@utils/floating-position";

// #region Date picker

interface DatePickerComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    label?: string;
    helperText?: string;
    tooltip?: string;
    containerSize?: string;
    onValueChange?: (value: string) => void;
};

export const DatePicker = ({
    type = "date",
    id,
    name,
    label,
    required,
    disabled,
    readOnly,
    placeholder,
    helperText,
    tooltip,
    value,
    className,
    containerSize,
    onValueChange,
    ...props
}: DatePickerComponentProps) => {
    
    // States
    const [open, setOpen] = useState<boolean>(false);
    const [calendarDisplayDate, setCalendarDisplayDate] = useState<string>("");

    // Refs
    const calendarContainerRef = useRef<HTMLInputElement | null>(null);
    const calendarRef = useRef<HTMLDivElement>(null);

    // Use layout effect
    useLayoutEffect(() => {

        if (!open) {
            return;
        }

        if (!calendarContainerRef.current || !calendarRef.current) {
            return;
        }

        computePosition(calendarContainerRef.current, calendarRef.current);
    }, [open]);

    // Use effects
    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            
            if (calendarRef.current && calendarRef.current.contains(event.target as Node)) {
                return;
            }
            setOpen(false);
            setCalendarDisplayDate("");
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    // Local functions
    const onCalendarOpenHandler = () => {

        if (disabled || readOnly) return;

        if (open) { // From true the open state will turn to false after, so we are checking for the value before-hand
            setCalendarDisplayDate("");
        }
        else {
            if (value && String(value).length > 0) {
                setCalendarDisplayDate(String(value));
            }
            else {
                setCalendarDisplayDate(getTodayDateString());
            }
        }

        setOpen((prevState: boolean) => !prevState);

        return;
    };

    const onDateSelectHandler = (dateValue: string) => {

        onValueChange?.(dateValue);
        setCalendarDisplayDate(dateValue);
    };

    return (
        <Container
            id={id}
            label={label}
            required={required}
            helperText={helperText}
            tooltip={tooltip}
            size={containerSize}
        >
            <InputContainer disabled={disabled || readOnly}>
                {/* Input field */}
                <input
                    ref={calendarContainerRef}
                    type={type}
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled || readOnly}
                    placeholder={placeholder}
                    value={value}
                    className={cn(
                        className,
                        "appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0", // Browser default reset
                        "pl-2 py-1 pr-1", // Positioning
                        "bg-transparent outline-none w-full", // Box & sizing
                        "text-primary-contrast text-sm", // Font
                        "cursor-pointer", // Effect
                        (disabled || readOnly) && "cursor-not-allowed", // Disabled or readonly
                    )}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onDateSelectHandler(e.currentTarget.value)}
                    {...props}
                />
                <div className={cn("flex justify-center items-center pl-1 pr-2")}>
                    {/* Calendar icon button */}
                    <PrimitiveButton
                        iconOnly
                        iconVariant={IconVariant.CalendarDays}
                        iconSize={20}
                        iconStrokeWidth={2}
                        className={cn(
                            "flex justify-center items-center m-0 p-0", // Positioning
                            "text-neutral", // Font
                            (!disabled && !readOnly) && "hover:text-primary-contrast cursor-pointer", // Effect
                            (disabled || readOnly) && "cursor-not-allowed", // Effect
                            "transition-colors duration-300", // Animation
                        )}
                        onClick={
                            (disabled || readOnly)
                                ? undefined
                                : onCalendarOpenHandler
                        }
                    />
                </div>
                {/* Calendar */}
                <CalendarContainer
                    ref={calendarRef}
                    open={open}
                >
                    {/* Calendar header */}
                    <CalendarHeader
                        calendarDisplayDate={calendarDisplayDate}
                        setCalendarDisplayDate={setCalendarDisplayDate}
                    />
                    {/* Calendar body */}
                    <Calendar
                        displayedMonthDate={calendarDisplayDate}
                        selectedDate={
                            (value && String(value).length > 0)
                                ? String(value)
                                : undefined
                        }
                        onDateSelectHandler={onDateSelectHandler}
                    />
                </CalendarContainer>
            </InputContainer>
        </Container>
    );
};

// #endregion Date picker

// #region Calendar container

interface CalendarContainerComponentProps {
    open: boolean;
    ref: React.RefObject<HTMLDivElement | null>;
    children: React.ReactNode;
};

const CalendarContainer = ({
    open,
    ref,
    children
}: CalendarContainerComponentProps) => {

    return (
        <div
            ref={ref}
            className={cn(
                "absolute p-4", // Positioning
                "border border-neutral rounded-md bg-secondary w-max", // Box & sizing
                !open && "hidden"
            )}
        >
            {children}
        </div>
    );
};

// #endregion Calendar container

// #region Calendar header

interface CalendarHeaderComponentProps {
    calendarDisplayDate?: string;
    setCalendarDisplayDate: Dispatch<React.SetStateAction<string>>;
};

const CalendarHeader = ({
    calendarDisplayDate,
    setCalendarDisplayDate,
}: CalendarHeaderComponentProps) => {

    const calendarDays: CalendarDay = getDateComponents(calendarDisplayDate);

    const stepIntoMonth = (step: number) => {

        const updatedDate: Date = new Date(Number(calendarDays.year), Number(calendarDays.month) + step, 1);
        const updatedMonth = getMonthStartDateFromDateString(updatedDate);

        setCalendarDisplayDate(updatedMonth);
    };

    return (
        <div className={cn("flex flex-col gap-y-2")}>
            {/* Month switcher */}
            <div
                className={cn(
                    "flex justify-between items-center pb-2", // Positioning
                    "border-b border-b-neutral", // Box & sizing
                )}
            >
                {/* Mont and year display */}
                <Text
                    className={cn(
                        "px-3 py-1", // Positioning
                        "rounded-xl bg-teal-300", // Box & sizing
                        "text-white-50 font-semibold", // Font
                    )}
                >
                    {monthsOfTheYear[Number(calendarDays.month)]} {calendarDays.year}
                </Text>
                {/* Navigation buttons */}
                <div className={cn("flex justify-between gap-x-3 items-center")}>
                    <PrimitiveButton
                        iconVariant={IconVariant.ChevronLeft}
                        iconOnly
                        iconSize={20}
                        iconStrokeWidth={3}
                        className={cn(
                            "text-neutral", // Font
                            "hover:text-primary-contrast", // Effect
                            "transition-colors duration-300", // Animation
                        )}
                        onClick={() => stepIntoMonth(-1)}
                    />
                    <PrimitiveButton
                        iconVariant={IconVariant.ChevronRight}
                        iconOnly
                        iconSize={20}
                        iconStrokeWidth={3}
                        className={cn(
                            "text-neutral", // Font
                            "hover:text-primary-contrast", // Effect
                            "transition-colors duration-300", // Animation
                        )}
                        onClick={() => stepIntoMonth(+1)}
                    />
                </div>
            </div>
            {/* Days of the week */}
            <div className={cn("grid grid-cols-7 gap-x-2")}>
            {
                daysOfTheWeek.map((nextDayOfTheWeek: string) =>
                    <Text
                        key={`day-${nextDayOfTheWeek}`}
                        className={cn("text-center text-neutral")}
                    >
                        {nextDayOfTheWeek}
                    </Text>
                )
            }
            </div>
        </div>
    );
};

// #endregion Calendar header

// #region Calendar

interface CalendarComponentProps {
    displayedMonthDate: string;
    selectedDate?: string;
    calendarDisplayValue?: string;
    onDateSelectHandler: (dateValue: string) => void;
};

const Calendar = ({
    displayedMonthDate,
    selectedDate,
    onDateSelectHandler,
}: CalendarComponentProps) => {

    const calendarDays: CalendarDay = getDateComponents(displayedMonthDate);
    const calendarDisplayDays: CalendarDisplayDay[] = getCalendarDisplayDay(Number(calendarDays.month), Number(calendarDays.year));

    return (
        <div className={cn("grid grid-cols-7 py-1")}>
        {
            calendarDisplayDays.map((nextCalendarDisplayDays: CalendarDisplayDay) => {

                const displayDateValue: string = `${nextCalendarDisplayDays.calendarDay.year}-${nextCalendarDisplayDays.calendarDay.month}-${nextCalendarDisplayDays.calendarDay.day}`;

                return (
                    <PrimitiveButton
                        key={displayDateValue}
                        className={cn(
                            "p-1",
                            "hover:bg-teal-300 hover:text-white-50",
                            "transition-colors duration-300",
                            nextCalendarDisplayDays.currentMonth && "text-primary-contrast",
                            !nextCalendarDisplayDays.currentMonth && "text-neutral",
                            selectedDate === displayDateValue && "bg-teal-300 text-white-50",
                        )}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onDateSelectHandler(displayDateValue)}
                    >
                        {nextCalendarDisplayDays.calendarDay.day}
                    </PrimitiveButton>
                );
            })
        }
        </div>
    );
};

// #endregion Calendar