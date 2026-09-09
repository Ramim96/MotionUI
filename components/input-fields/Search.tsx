import { LucideIcon } from "lucide-react";
// Components
import { PrimitiveButton } from "@buttons/Button";
import { Container, InputContainer } from "@input-fields/InputContainer";
import { IconFactory } from "@icons/IconFactory";
import { IconVariant } from "@icons/IconVariant";
// Utils
import { cn } from "@utils/css";

// #region Input search

interface SearchInputComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    helperText?: string;
    tooltip?: string;
    containerSize?: string;
    onClear?: () => void;
};

export const SearchInput = ({
    id,
    name,
    label,
    required,
    disabled,
    readOnly,
    placeholder = "Search...",
    helperText,
    tooltip,
    containerSize,
    value,
    className,
    onChange,
    onClear,
    ...props
}: SearchInputComponentProps) => {

    // Components
    const SearchIcon: LucideIcon = IconFactory[IconVariant.Search];

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
                {/* Icon */}
                <div className={cn("flex justify-center items-center pl-2 pr-1")}>
                    <SearchIcon
                        size={20}
                        strokeWidth={1.5}
                        className={cn(
                            "flex justify-center items-center m-0 p-0", // Positioning
                            "text-neutral", // Font
                        )}
                    />
                </div>
                {/* Input field */}
                <input
                    type="search"
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled || readOnly}
                    placeholder={placeholder}
                    value={value}
                    className={cn(
                        className,
                        "appearance-none [&::-webkit-search-cancel-button]:appearance-none", // Browser default reset
                        "pl-2 py-1 pr-1", // Positioning
                        "bg-transparent outline-none w-full", // Box & sizing
                        "text-primary-contrast text-sm", // Font
                        (!disabled && !readOnly) && "cursor-pointer", // Effect
                        (disabled || readOnly) && "cursor-not-allowed", // Disabled or readonly
                    )}
                    onChange={onChange}
                    {...props}
                />
                {/* Clear icon button */}
                <div className={cn("flex justify-center items-center pl-1 pr-2")}>
                {
                    (!disabled && !readOnly && value && String(value).length > 0) &&
                        <PrimitiveButton
                            iconOnly
                            iconVariant={IconVariant.X}
                            iconSize={20}
                            iconStrokeWidth={2.5}
                            className={cn(
                                "flex justify-center items-center m-0 p-0", // Positioning
                                "text-neutral", // Font
                                "hover:text-primary-contrast cursor-pointer", // Effect
                                "transition-colors duration-300", // Animation
                            )}
                            onClick={onClear}
                        />
                }
                </div>
            </InputContainer>
        </Container>
    );
};

// #endregion Input search