// Components
import { Container } from "@input-fields/InputContainer";
import { Text } from "@text/Texts";
// Utils
import { cn } from "@utils/css";

// #region Input container

interface InputContainerComponentProps {
    children: React.ReactNode;
};

const InputContainer = ({
    children,
}: InputContainerComponentProps) => {

    return (
        <div className={cn("w-full")}>
            {children}
        </div>
    );
};

// #region Input range

interface RangeInputComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
    label?: string;
    helperText?: string;
    tooltip?: string;
    containerSize?: string;
    onValueChange?: (value: number) => void;
};

export const RangeInput = ({
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
    min = 0,
    max = 100,
    step = 1,
    className,
    containerSize,
    onValueChange,
    ...props
}: RangeInputComponentProps) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        onValueChange?.(Number(e.currentTarget.value));
    };

    return (
        <Container
            id={id}
            label={label}
            required={required}
            helperText={helperText}
            tooltip={tooltip}
            size={containerSize}
        >
            <div className={cn("w-full")}>
                <div className={cn("flex flex-col items-center gap-y-1 w-full")}>
                    {/* Current value */}
                    <Text
                        className={cn(
                            "text-neutral", // Font
                            (disabled || readOnly) && "cursor-not-allowed", // Disabled
                        )}
                        size={cn("text-sm")}
                    >
                        {value}/{max}
                    </Text>
                    {/* Input field */}
                    <input
                        type="range"
                        id={id}
                        name={name}
                        required={required}
                        disabled={disabled || readOnly}
                        value={Number(value) ?? Number(min)} // Derive the value from the max prop value
                        min={min}
                        max={max}
                        step={step}
                        className={cn(
                            className,
                            "accent-primary-contrast w-full", // Box & sizing
                            (!disabled && !readOnly) && "cursor-pointer", // Effect
                            (disabled || readOnly) && "cursor-not-allowed", // Disabled
                        )}
                        onChange={onChangeHandler}
                        {...props}
                    />
                </div>
            </div>
        </Container>
    );
};

// #endregion Input range