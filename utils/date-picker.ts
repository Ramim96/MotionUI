import { padStart } from "@utils/data-utils";

// #region Date picker

export interface CalendarDay {
    day: string;
    month: string;
    year: string;
}; // [day, month, year]

export const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export const monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
] as const;

// #region Calendar days

export interface CalendarDisplayDay {
    calendarDay: CalendarDay;
    currentMonth: boolean;
}

export const getCalendarDisplayDay = (month: number, year: number): CalendarDisplayDay[] => {

    const calendarDisplayDay: CalendarDisplayDay[] = [];

    // #region Previous month calendar days

    const currentMonthFirstDay: number = new Date(year, month, 1).getDay();
    // Don't do +/-1 on the month since it is index based and it will pick the previous month automatically thanks to day being 0
    const previousMonthLastDay: number = new Date(year, month, 0).getDate();
    const iterationStart: number = previousMonthLastDay + (1- currentMonthFirstDay);

    for (let day: number = iterationStart; day <= previousMonthLastDay; day++) {

        const derivedDate: Date = new Date(year, month - 1, day); // Find previous month days, so -1

        calendarDisplayDay.push({
            calendarDay: {
                day: padStart(2, "0", day),
                month: padStart(2, "0", derivedDate.getMonth() + 1),
                year: String(derivedDate.getFullYear()),
            },
            currentMonth: false                
        });
    }

    // #endregion Previous month calendar days

    // #region Current month calendar days

    // Do +/-1 on the month since it is index based
    const currentMonthLastDay: number = new Date(year, month + 1, 0).getDate();

    for (let day: number = 1; day <= currentMonthLastDay; day++) {

        const derivedDate: Date = new Date(year, month, day); // Find previous month days, so -1

        calendarDisplayDay.push({
            calendarDay: {
                day: padStart(2, "0", day),
                month: padStart(2, "0", derivedDate.getMonth() + 1),
                year: String(derivedDate.getFullYear()),
            },
            currentMonth: true                
        });
    }

    // #endregion Current month calendar days

    // #region Next month calendar days

    const iterationEnd: number = daysOfTheWeek.length - currentMonthLastDay; // Ignore 0 based index, so +1

    for (let day: number = 1; day <= iterationEnd; day++) {

        const derivedDate: Date = new Date(year, month + 1, day); // Find next month days, so +1

        calendarDisplayDay.push({
            calendarDay: {
                day: padStart(2, "0", day),
                month: padStart(2, "0", derivedDate.getMonth() + 1),
                year: String(derivedDate.getFullYear()),
            },
            currentMonth: false                
        });
    }

    // #endregion Next month calendar days

    return calendarDisplayDay;
};

// #endregion Calendar days

// #region Date components

export const getDateComponents = (value?: string): CalendarDay => {

    const date: Date = value
        ? new Date(value)
        : new Date();

    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();

    return {
        day: padStart(2, "0", day),
        month: padStart(2, "0", month),
        year: String(year),
    };
};

// #endregion Date components

// #region Date string value

export const getMonthStartDateFromDateString = (value: Date): string => {
    
    const year: string = String(value.getFullYear());
    const month: string = padStart(2, "0", value.getMonth() + 1);

    return `${year}-${month}-01`;
};

// #endregion Date string value

// #region Today date string value

export const getTodayDateString = (): string => {

    const todayDate: Date = new Date();
    const year: string = String(todayDate.getFullYear());
    const month: string = padStart(2, "0", todayDate.getMonth() + 1);
    const day: string = padStart(2, "0", todayDate.getDate());

    return `${year}-${month}-${day}`;
};

// #endregion Today date string value