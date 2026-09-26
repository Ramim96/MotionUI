import { LucideIcon } from "lucide-react";
// Components
import { IconFactory } from "@design-system/icons/icon-factory";
import { IconVariant } from "@design-system/icons/icon-variants";
import { InputGroup } from "./input-group";
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

interface EmailFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldValueComponentProps<string | undefined>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<string | undefined> {};

const EmailIcon: LucideIcon = IconFactory[IconVariant.Mail];

export const EmailField = ({
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
    ariaLabel,
    description,
    placeholder,
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
}: EmailFieldComponentProps) => {

    return (
        <InputGroup
            type="email"
            id={id}
            name={name}
            variant={variant}
            label={label}
            ariaLabel={ariaLabel}
            description={description}
            placeholder={placeholder}
            tooltip={tooltip}
            value={value}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            fieldError={fieldError}
            fullWidth={fullWidth}
            className={cn(className)}
            prefix={<EmailIcon size={16} />}
            prefixClassName={cn("pl-2")}
            onChange={onChange}
        />
    );
};