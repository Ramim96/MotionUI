import { LucideIcon } from "lucide-react";
// Components
import { IconFactory } from "@design-system/icons/IconFactory";
import { IconVariant } from "@design-system/icons/IconVariant";
import { InputGroup } from "./InputGroup";
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

interface UrlFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldValueComponentProps<string>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<string> {};

const GlobeIcon: LucideIcon = IconFactory[IconVariant.Globe];

export const UrlField = ({
    // FieldBaseComponentProps
    id,
    name,
    variant = "primary",
    label,
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