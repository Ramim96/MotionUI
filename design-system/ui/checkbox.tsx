import {
    FieldError,
    Checkbox as HeroCheckbox,
    Label
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

export type CheckboxSizeType = 4 | 5 | 6;

// #region Checkbox

interface CheckboxComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "placeholder">,
    FieldValueComponentProps<boolean>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    Omit<FieldStyleComponentProps, "fullWidth">,
    FieldBehaviourComponentProps<boolean> {
    size?: CheckboxSizeType;
};

const checkboxSizeMap: Record<CheckboxSizeType, string> = {
    4: "size-4",
    5: "size-5",
    6: "size-6",
};

export const Checkbox = ({
    size = 5,
    // FieldBaseComponentProps
    id,
    name,
    variant="primary",
    label,
    ariaLabel,
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
    className,
    // FieldBehaviourComponentProps
    onChange,
}: CheckboxComponentProps) => {

    return (
        <HeroCheckbox
            id={id}
            name={name}
            variant={variant}
            aria-label={
                !label
                    ? ariaLabel
                    : undefined
            }
            isSelected={value}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            className={cn(className)}
            onChange={onChange}
        >
            <HeroCheckbox.Content>
                <HeroCheckbox.Control className={cn(checkboxSizeMap[size])}>
                    <HeroCheckbox.Indicator />
                </HeroCheckbox.Control>
                {
                    label &&
                        <Label htmlFor={id}>{label}</Label>
                }
            </HeroCheckbox.Content>
            {
                description &&
                    <Description className={cn("ml-1")}>{description}</Description>
            }
            {
                (isInvalid && fieldError) &&
                    <FieldError className={cn("ml-1 text-danger")}>{fieldError}</FieldError>
            }
        </HeroCheckbox>
    );
};

// #endregion Checkbox

// #region Checkbox group

interface CheckboxGroupComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "id" | "name" | "variant" | "placeholder">,
    Omit<FieldStatusComponentProps, "isReadOnly">,
    FieldValidationComponentProps {
    children: React.ReactNode;
    orientation?: "vertical" | "horizontal";
};

export const CheckboxGroup = ({
    children,
    orientation,
    // FieldBaseComponentProps
    label,
    description,
    // FieldStatusComponentProps
    isDisabled,
    isRequired,
    // FieldValidationComponentProps
    isInvalid,
    fieldError,
}: CheckboxGroupComponentProps) => {

    const orientationStyle: string =
        orientation
            ? orientation === "horizontal"
                ? "flex-row gap-x-2"
                : "flex-col gap-y-2"
            : "flex-col gap-y-2";

    return (
        <div className={cn("flex", orientationStyle)}>
            <div className={cn("flex flex-col")}>
                <div className="flex flex-col">
                {
                    label &&
                        <Label
                            isDisabled={isDisabled}
                            isRequired={isRequired}
                            isInvalid={isInvalid}
                        >
                            {label}
                        </Label>
                }
                {
                    description &&
                        <Description>{description}</Description>
                }
                {
                    (isInvalid && fieldError) &&
                        <FieldError className={cn("ml-2 text-danger")}>{fieldError}</FieldError>
                }
                </div>
            </div>
            {children}
        </div>
    );
};

// #endregion Checkbox group