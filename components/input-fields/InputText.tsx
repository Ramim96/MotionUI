// Components
import { Container, InputContainer } from "@input-fields/InputContainer";
// Utils
import { cn } from "@utils/css";

// Input container

// Input field for the following variants: Text, Email, Tel, Url

// #region Text input

interface TextInputComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    type: "text" | "email" | "tel" | "url";
    label?: string;
    helperText?: string;
    tooltip?: string;
    containerSize?: string;
};

export const TextInput = ({
    type,
    id,
    name,
    label,
    required,
    disabled,
    readOnly,
    placeholder,
    helperText,
    tooltip,
    value,
    className,
    containerSize,
    onChange,
    ...props
}: TextInputComponentProps) => {

    return (
        <Container
            id={id}
            label={label}
            required={required}
            helperText={helperText}
            tooltip={tooltip}
            size={containerSize}
        >
            <InputContainer disabled={disabled || readOnly}>
            {/* Input field */}
                <input
                    type={type}
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled || readOnly}
                    placeholder={placeholder}
                    value={value}
                    className={cn(
                        className,
                        "px-2 py-1", // Positioning
                        "bg-transparent outline-none w-full", // Box & sizing
                        "text-primary-contrast text-sm", // Font
                        (!disabled && !readOnly) && "cursor-pointer", // Effect
                        (disabled || readOnly) && "cursor-not-allowed", // Disabled or readonly
                    )}
                    onChange={onChange}
                    {...props}
                />
            </InputContainer>
        </Container>
    );
};

// #endregion Text input