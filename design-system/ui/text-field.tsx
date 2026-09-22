// Components
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

interface TextFieldComponentProps extends
    Omit<FieldBaseComponentProps, "type">,
    FieldValueComponentProps<string | undefined>,
    FieldStatusComponentProps,
    FieldValidationComponentProps,
    FieldStyleComponentProps,
    FieldBehaviourComponentProps<string | undefined> {};

export const TextField = ({
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
}: TextFieldComponentProps) => {

    return (    
        <InputGroup
            type="text"
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
            onChange={onChange}
        />
    );
};