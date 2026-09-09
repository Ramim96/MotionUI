// Components
import { Container, LabelPosition } from "@input-fields/InputContainer";
// Utils
import { cn } from "@utils/css";

// #region Checkbox input

interface CheckboxInputComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    helperText?: string;
    tooltip?: string;
    containerSize?: string;
    labelPosition?: LabelPosition;
};

export const CheckboxInput = ({
    id,
    name,
    label,
    required,
    disabled,
    readOnly,
    placeholder,
    helperText,
    tooltip,
    checked,
    className,
    containerSize,
    labelPosition,
    onChange,
    ...props
}: CheckboxInputComponentProps) => {

    return (
        <Container
            id={id}
            label={label}
            required={required}
            helperText={helperText}
            tooltip={tooltip}
            size={containerSize}
            labelPosition={labelPosition}
        >
            <div className={cn("flex justify-start")}>
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled || readOnly}
                    checked={checked}
                    className={cn(
                        className,
                        "accent-primary-contrast sm:w-[1.3rem] sm:h-[1.3rem]", // Box & sizing
                        (!disabled && !readOnly) && "cursor-pointer", // Effect
                        (disabled || readOnly) && "cursor-not-allowed", // Disabled
                    )}
                    onChange={onChange}
                    {...props}
                />
            </div>
        </Container>
    );
};

// #endregion Checkbox input