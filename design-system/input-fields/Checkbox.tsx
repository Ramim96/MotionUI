import {
    Description,
    FieldError,
    Checkbox as HeroCheckbox,
    CheckboxGroup as HeroCheckboxGroup,
    Label
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

type CheckboxSizeType = 4 | 5 | 6;

// #region Checkbox

interface CheckboxComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "placeholder">,
    FieldValueComponentProps<string>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    Omit<FieldStyleComponentProps, "fullWidth">,
    FieldBehaviourComponentProps<boolean> {
    isSelected: boolean;
    size?: CheckboxSizeType;
};

const checkboxSizeMap: Record<CheckboxSizeType, string> = {
    4: "size-4",
    5: "size-5",
    6: "size-6",
};

export const Checkbox = ({
    isSelected,
    size = 6,
    // FieldBaseComponentProps
    id,
    name,
    variant="primary",
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
    className,
    // FieldBehaviourComponentProps
    onChange,
}: CheckboxComponentProps) => {

    return (
        <HeroCheckbox
            id={id}
            name={name}
            variant={variant}
            value={value}
            isSelected={isSelected}
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
                        <Label>{label}</Label>
                }
            </HeroCheckbox.Content>
            {
                description &&
                    <Description className={cn("ml-2")}>{description}</Description>
            }
            {
                (isInvalid && fieldError) &&
                    <FieldError>{fieldError}</FieldError>
            }
        </HeroCheckbox>
    );
};

// #endregion Checkbox

// #region Checkbox group

interface CheckboxGroupComponentProps extends
    Omit<FieldBaseComponentProps, "type" | "id" | "variant" | "placeholder">,
    Omit<FieldValueComponentProps<string[]>, "defaultValue">,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    Omit<FieldStyleComponentProps, "fullWidth">,
    FieldBehaviourComponentProps<string[]> {
    children: React.ReactNode;
};

export const CheckboxGroup = ({
    children,
    value,
    // FieldBaseComponentProps
    name,
    label,
    description,
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
}: CheckboxGroupComponentProps) => {

    return (
        <HeroCheckboxGroup
            name={name}
            value={value}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            className={cn(className)}
            onChange={onChange}
        >
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
                    <FieldError>{fieldError}</FieldError>
            }
            {children}
        </HeroCheckboxGroup>
    );
};

// #endregion Checkbox group