import {
    DateField as HeroDateField,
    Calendar as HeroCalendar,
    DatePicker as HeroDatePicker,
    Label,
    DateValue,
    FieldError,
    Description
} from "@heroui/react";
// Interfaces
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps,
    FieldValueComponentProps
} from "../../interfaces/InputField";
// Utils
import { cn } from "@utils/css";

interface DateFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "placeholder">,
    FieldValueComponentProps<DateValue | null>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<DateValue | null> {
    ariaLabel?: string;
};

export const DateField = ({
    ariaLabel,
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
    description,
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
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            aria-label={ariaLabel}
            className={cn(className)}
            onChange={onChange}
        >
            {
                label &&
                    <Label>{label}</Label>
            }
            {/* Input field */}
            <HeroDateField.Group fullWidth={fullWidth}>
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
            <HeroDatePicker.Popover>
                <HeroCalendar aria-label={ariaLabel}>
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