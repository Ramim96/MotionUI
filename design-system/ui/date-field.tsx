import {
    DateField as HeroDateField,
    Calendar as HeroCalendar,
    DatePicker as HeroDatePicker,
    Label,
    DateValue,
    FieldError
} from "@heroui/react";
// Components
import { Description } from "@design-system/ui/typography";
// Interfaces
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps,
    FieldValueComponentProps
} from "../../interfaces/input-field";
// Utils
import { cn } from "@lib/utils/css";

interface DateFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "variant" | "placeholder">,
    FieldValueComponentProps<DateValue | null>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<DateValue | null> {
};

export const DateField = ({
    // FieldBaseComponentProps
    id,
    name,
    label,
    description,
    ariaLabel,
    // FieldValueComponentProps
    value,
    // FieldStatusComponentProps
    isDisabled,
    isReadOnly,
    isRequired,
    // FieldValidationComponentProps
    isInvalid,
    fieldError,
    // FieldStyleComponentProps
    fullWidth,
    className,
    // FieldBehaviourComponentProps
    onChange,
}: DateFieldComponentProps) => {

    return (
        <HeroDatePicker
            id={id}
            name={name}
            value={value}
            aria-label={
                !label
                    ? ariaLabel
                    : undefined
            }
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            className={cn(
                className,
                fullWidth && "w-full"
            )}
            onChange={onChange}
        >
            {
                label &&
                    <Label htmlFor={id}>{label}</Label>
            }
            {/* Input field */}
            <HeroDateField.Group>
                <HeroDateField.Input>
                    {(segment) => <HeroDateField.Segment segment={segment} />}
                </HeroDateField.Input>
                <HeroDateField.Suffix>
                    <HeroDatePicker.Trigger>
                        <HeroDatePicker.TriggerIndicator />
                    </HeroDatePicker.Trigger>
                </HeroDateField.Suffix>
            </HeroDateField.Group>
            {
                description &&
                    <Description>{description}</Description>
            }
            {
                (isInvalid && fieldError) &&
                    <FieldError>{fieldError}</FieldError>
            }
            {/* Calendar */}
            <HeroDatePicker.Popover aria-label={`${ariaLabel}-popover`}>
                <HeroCalendar>
                    <HeroCalendar.Header>
                        <HeroCalendar.YearPickerTrigger>
                            <HeroCalendar.YearPickerTriggerHeading />
                            <HeroCalendar.YearPickerTriggerIndicator />
                        </HeroCalendar.YearPickerTrigger>
                        <HeroCalendar.NavButton slot="previous" />
                        <HeroCalendar.NavButton slot="next" />
                    </HeroCalendar.Header>
                    <HeroCalendar.Grid>
                        <HeroCalendar.GridHeader>
                            {(day) => <HeroCalendar.HeaderCell>{day}</HeroCalendar.HeaderCell>}
                        </HeroCalendar.GridHeader>
                        <HeroCalendar.GridBody>{(date) => <HeroCalendar.Cell date={date} />}</HeroCalendar.GridBody>
                    </HeroCalendar.Grid>
                    <HeroCalendar.YearPickerGrid>
                        <HeroCalendar.YearPickerGridBody>
                            {({year}) => <HeroCalendar.YearPickerCell year={year} />}
                        </HeroCalendar.YearPickerGridBody>
                    </HeroCalendar.YearPickerGrid>
                </HeroCalendar>
            </HeroDatePicker.Popover>
        </HeroDatePicker>
    );
};