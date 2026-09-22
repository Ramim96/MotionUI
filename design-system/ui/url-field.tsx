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
} from "../../interfaces/input-field";
// Utils
import { cn } from "@lib/utils/css";

interface UrlFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldValueComponentProps<string | undefined>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<string | undefined> {};

const GlobeIcon: LucideIcon = IconFactory[IconVariant.Globe];

export const UrlField = ({
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
    ariaLabel,
    description,
    placeholder,
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
}: UrlFieldComponentProps) => {

    return (
        <InputGroup
            type="url"
            id={id}
            name={name}
            variant={variant}
            label={label}
            ariaLabel={ariaLabel}
            description={description}
            placeholder={placeholder}
            value={value}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isInvalid={isInvalid}
            fieldError={fieldError}
            fullWidth={fullWidth}
            className={cn(className)}
            prefix={<>https://</>}
            suffix={<GlobeIcon size={16} />}
            prefixClassName={cn("pr-1")}
            onChange={onChange}
        />
    );
};