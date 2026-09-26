import {
    FieldError,
    Label,
    Orientation,
    Radio as HeroRadio,
    RadioGroup as HeroRadioGroup
} from "@heroui/react";
// Components
import { Description } from "@design-system/ui/typography";
import { Info } from "./tooltip";
// Interface
import {
    FieldBaseComponentProps,
    FieldBehaviourComponentProps,
    FieldStatusComponentProps,
    FieldStyleComponentProps,
    FieldValidationComponentProps,
    FieldValueComponentProps
} from "../../interfaces/components/input-field";
// Utils
import { cn } from "@lib/utils/css-utils";

// #region Radio group

interface RadioGroupComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "placeholder">,
    FieldValueComponentProps<string | undefined>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    Omit<FieldStyleComponentProps, "fullWidth">,
    FieldBehaviourComponentProps<string | undefined> {
    children: React.ReactNode;
    orientation?: Orientation;
};

export const RadioGroup = ({
    children,
    orientation = "vertical",
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
    ariaLabel,
    description,
    tooltip,
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
    className,
    // FieldBehaviourComponentProps
    onChange,
}: RadioGroupComponentProps) => {

    return (
        <HeroRadioGroup
            id={id}
            name={name}
            variant={variant}
            aria-label={
                !label
                    ? ariaLabel
                    : undefined
            }
            value={value}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            className={cn(className)}
            orientation={orientation}
            onChange={onChange}
        >
            {
                label &&
                    <div className={cn("flex justify-between items-center")}>
                        <Label
                            htmlFor={id}
                            isDisabled={isDisabled}
                            isRequired={isRequired}
                            isInvalid={isInvalid}
                        >
                            {label}
                        </Label>
                        {
                            tooltip &&
                                <Info tooltipContent={tooltip} />
                        }
                    </div>
            }
            {
                description &&
                    <Description>{description}</Description>
            }
            {
                (isInvalid && fieldError) &&
                    <FieldError>{fieldError}</FieldError>
            }
            {children}
        </HeroRadioGroup>
    );
};

// #endregion Radio group

// #region Radio field

interface RadioFieldComponentProps  {
    value: string;
    label?: string;
    ariaLabel?: string;
    description?: string;
    isDisabled?: boolean;
    children?: React.ReactNode;
};

export const RadioField = ({
    value,
    label,
    ariaLabel,
    description,
    isDisabled,
    children,
}: RadioFieldComponentProps ) => {

    return (
        <HeroRadio
            aria-label={
                !label
                    ? ariaLabel
                    : undefined
            }
            value={value}
            isDisabled={isDisabled}
        >
            <HeroRadio.Content>
                <HeroRadio.Control>
                    <HeroRadio.Indicator />
                </HeroRadio.Control>
                {
                    label &&
                        <Label>{label}</Label>
                }
                {children}
            </HeroRadio.Content>
            {
                description &&
                    <Description>{description}</Description>
            }
        </HeroRadio>
    );
};

// #endregion Radio field