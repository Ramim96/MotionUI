import { ChangeEvent } from "react";
import {
    FieldError,
    SearchField as HeroSearchField,
    Label
} from "@heroui/react";
// Components
import { Description } from "@design-system/ui/typography";
import { Info } from "./tooltip";
// Interfaces
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

interface SearchFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldValueComponentProps<string | undefined>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<string | undefined> {};

export const SearchField = ({
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
    ariaLabel,
    description,
    placeholder = "Search...",
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
    fullWidth,
    className,
    // FieldBehaviourComponentProps
    onChange,
}: SearchFieldComponentProps) => {

    return (
        <HeroSearchField
            variant={variant}
            aria-label={
                label
                    ? undefined
                    : ariaLabel
            }
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            fullWidth={fullWidth}
            className={cn(className)}
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
            <HeroSearchField.Group>
                <HeroSearchField.SearchIcon />
                <HeroSearchField.Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
                />
                <HeroSearchField.ClearButton onClick={() => onChange(undefined)} />
            </HeroSearchField.Group>
            {
                description &&
                    <Description>{description}</Description>
            }
            {
                (isInvalid && fieldError) &&
                    <FieldError>{fieldError}</FieldError>
            }
        </HeroSearchField>
    );
};