import {
    Description,
    FieldError,
    Label,
    Orientation,
    Radio as HeroRadio,
    RadioGroup as HeroRadioGroup
} from "@heroui/react";
// Interface
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

// #region Radio group

interface RadioGroupComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "placeholder">,
    FieldValueComponentProps<string>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<string> {
    children: React.ReactNode;
    orientation?: Orientation;
};

export const RadioGroup = ({
    children,
    orientation,
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
}: RadioGroupComponentProps) => {

    return (
        <HeroRadioGroup
            id={id}
            name={name}
            variant={variant}
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
                    <Label>{label}</Label>
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
    label: string;
    description?: string;
    isDisabled?: boolean;
    children?: React.ReactNode;
};

export const RadioField = ({
    value,
    label,
    description,
    isDisabled,
    children,
}: RadioFieldComponentProps ) => {

    return (
        <HeroRadio
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