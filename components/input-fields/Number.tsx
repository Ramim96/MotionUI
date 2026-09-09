// Components
import { PrimitiveButton } from "@buttons/Button";
import { IconVariant } from "@icons/IconVariant";
import { Container, InputContainer } from "@input-fields/InputContainer";
// Utils
import { cn } from "@utils/css";

// #region Number input

export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "min" | "max" | "step" | "onChange"> {
    label?: string;
    helperText?: string;
    tooltip?: string;
    min?: number;
    max?: number;
    step?: number;
    containerSize?: string;
    onValueChange?: (value?: number) => void;
};

export const NumberInput = ({
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
    min,
    max,
    step = 1,
    className,
    containerSize,
    onValueChange,
    ...props
}: NumberInputProps) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        const parsedValue: number = e.currentTarget.valueAsNumber;

        if (Number.isNaN(parsedValue) == true) {
            onValueChange?.(undefined);
        }
        else {
            if ((min !== undefined && parsedValue < min) || (max !== undefined && parsedValue > max)) {
                return;
            }

            // Get only the whole numbers
            onValueChange?.(parsedValue);
        }
    };

const onSpinHandler = (step: number, direction: "increase" | "decrease") => {
    let parsedValue = Number(value);

    if (Number.isNaN(parsedValue)) {
        parsedValue = 0;
    }

    const parsedStep = Math.abs(Number(step));

    // Avoid infinite numbers
    if (Number.isFinite(parsedStep) === false || parsedStep === 0) {
        return;
    }

    parsedValue += direction === "increase" ? parsedStep : -parsedStep;

    if (
        (direction === "increase" && max !== undefined && parsedValue > max) ||
        (direction === "decrease" && min !== undefined && parsedValue < min)
    ) {
        return;
    }

    onValueChange?.(parsedValue);
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
            <InputContainer disabled={disabled || readOnly}>
                <input
                    type="number"
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled || readOnly}
                    placeholder={placeholder}
                    value={value ?? ""}
                    min={min}
                    max={max}
                    step={step}
                    className={cn(
                        className,
                        "appearance-none [&::-webkit-inner-spin-button]:appearance-none", // Browser default reset
                        "pl-2 py-1 pr-1", // Positioning
                        "bg-transparent outline-none w-full", // Box & sizing
                        "text-primary-contrast text-sm", // Font
                        (!disabled && !readOnly) && "cursor-pointer", // Effect
                        (disabled || readOnly) && "cursor-not-allowed", // Disabled or readonly
                    )}
                    onChange={onChangeHandler}
                    {...props}
                />
                <div className={cn("flex flex-col justify-center items-center pl-1 pr-2")}>
                    <PrimitiveButton
                        iconOnly
                        iconVariant={IconVariant.ChevronUp}
                        iconStrokeWidth={3}
                        className={cn(
                            "flex justify-center items-center m-0 p-0", // Positioning
                            "text-neutral", // Font
                            "transition-colors duration-300", // Animation
                            (!disabled && !readOnly) && "hover:text-primary-contrast cursor-pointer", // Effect
                            (disabled || readOnly) && "cursor-not-allowed", // Effect
                        )}
                        onClick={
                            (disabled || readOnly)
                                ? undefined
                                : () => onSpinHandler(step, "increase")
                            }
                    />
                    <PrimitiveButton
                        iconOnly
                        iconVariant={IconVariant.ChevronDown}
                        iconStrokeWidth={3}
                        className={cn(
                            "flex justify-center items-center m-0 p-0", // Positioning
                            "text-neutral", // Font
                            "transition-colors duration-300", // Animation
                            (!disabled && !readOnly) && "hover:text-primary-contrast cursor-pointer", // Effect
                            (disabled || readOnly) && "cursor-not-allowed", // Effect
                        )}
                        onClick={
                            (disabled || readOnly)
                                ? undefined
                                : () => onSpinHandler(step, "decrease")
                        }
                    />
                </div>
            </InputContainer>
        </Container>
    );
};

// #endregion Number input